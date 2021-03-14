const fs = require('fs')
var path = require('path')
const yaml = require('js-yaml')

console.log("Beginning script");
var instdir = process.env.INST_DIR
console.log(instdir);
console.log(process.env.INST_DIR);
instdir = instdir.replace("\"", '')
instdir = instdir.replace("\"", '')
instdir = instdir + '/.minecraft'

async function config() {
    const config = yaml.load(fs.readFileSync('./../../../Auto-MC-Config/config.yaml', 'utf8'))
    /*try {
        fs.mkdirSync(instdir)
    } catch (error) {
        console.log("Minecraft dir exists");
    }*/
    

    console.log("Instance folder: "+instdir);

    console.log("Working directory:"+__dirname);
    console.log("Minecraft directory contents:" + fs.readdirSync(instdir));
    console.log(fs.existsSync(instdir + '/options.txt'));
    if(!fs.existsSync(instdir + '/options.txt')) {
        //I learned that minecraft will simply skip over bad options, so I made a options.txt file with the options that may need to be configured.
        console.log("No options exist. Copying a default options");
        fs.copyFileSync(path.join(__dirname, './options.txt'), path.join(instdir, './options.txt'))
        console.log("Default copied. Now writing")
    } 
    console.log("Options exist. Reading file")
    var file = fs.readFileSync(path.join(instdir, 'options.txt'))
    var string = file.toString()

    console.log("Changing settings");
    //Auto jump
    if(string.indexOf('autoJump') > -1 && config.autoJump) {
        string = string.replace("autoJump:true", 'autoJump:false')
    }
    //brightness
    if(string.indexOf('gamma') > -1 && config.gamma) {
        string = string.replace(/gamma:.*/, "gamma:1.0")
    }
    //music
    if(string.indexOf('soundCategory_music') > -1 && config.music) {
        string = string.replace(/soundCategory_music:.*\..*/, "soundCategory_music:0.0")
    } else if (string.indexOf('music') > -1 && config.music) {
        //Some older versions have this string instead of the new one
        string = string.replace(/music:.*\..*/, "music:0.0")
    }
    //Multiplayer warning
    if(string.indexOf('skipMultiplayerWarning') > -1 && config.multiplayer) {
        string = string.replace("skipMultiplayerWarning:false", 'skipMultiplayerWarning:true')
    }
    //Tutorial
    if(string.indexOf('tutorialStep') > -1 && config.tutorial) {
        string = string.replace(/tutorialStep.*/, 'tutorialStep:none')
    }
    


    console.log("Writing file")
    fs.writeFileSync(path.join(instdir, 'options.txt'), Buffer.from(string, 'utf8'))

    
}
config().then(() => {
    console.log("Configuration complete. Starting instance")
})