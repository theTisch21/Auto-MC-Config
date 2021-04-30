# Auto-MC-Config

## ~~WARNING~~ FIXED!

It was fixed, merged, and now in the latest release! It should now work normally.

## What does this do?
This is a script written in Node.js to automatically disable auto-jump among other things in minecraft

## How do I set this up?
This script is designed for MultiMC

Prerequisites: 
MultiMC: [MultiMC/MultiMC5](https://github.com/MultiMC/MultiMC5)  
Windows (I haven't tested this on any other os)  
Node.JS  
Familiarity with command prompt or powershell  

Step 1: Download code

Step 2: Paste the Auto-MC-Config folder into your multimc root directory (The full path should look something like C:\Users\username\MultiMC\Auto-MC-Config)

Step 3: Open a terminal, navigate to the Auto-MC-Config folder, and run `npm i` to install the dependencies

Step 4: Open global settings in MultiMC (Not instance settings)

Step 5: Go to "Custom Commands"

Step 6: Put this in "startup script":
`node "../../../Auto-MC-Config/config.js"`
![image](https://user-images.githubusercontent.com/20461232/107690088-8213e680-6c5e-11eb-9be6-476ea3c9e331.png)

Step 4: The script will now disable/enable specific settings each time you launch an instance. To cusomize those settings, use config.yaml in the Auto-MC-Config folder

## FAQ
- Why did you write this in Node?  
Because I like node

- Can you make this work for the official launcher?  
Maybe. If you find a way to make the default launcher run a script on startup of any installation, I can help you make the script work for it. However, my script depends on environment variables passed by MultiMC.
