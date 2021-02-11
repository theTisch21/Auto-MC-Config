# Auto-MC-Config

## WARNING
I am aware that it only works for 1.15+. If you want to use it on a lower version, you first have to open the instance, then click the "open .minecraft folder" button to generate a .minecraft folder for the script to work with. 
I have posted an issue on the multimc github: [MultiMC/MultiMC5#3602](https://github.com/MultiMC/MultiMC5/issues/3602)

## What does this do?
This is a script written in Node.js to automatically disable auto-jump among other things in minecraft

## How do I set this up?
This script is designed for MultiMC

Prerequisites: 
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
<!--Screenshot here--> 

Step 4: The script will now disable/enable specific settings each time you launch an instance. To cusomize those settings, use config.yaml in the Auto-MC-Config folder

## FAQ
- Why did I write this in Node?
Because I like node

- Can you make this work for the official launcher?
Maybe. If you find a way to make the default launcher run a script on startup of any installation, I can help you make the script work for it. However, my script depends on environment variables passed by MultiMC.