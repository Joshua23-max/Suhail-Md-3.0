const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_19_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1NkRIYXArSXJCeUMvbWVrY3M4MzJ2OUdPMCtDOER1eTVnUk1lcDRFS1pzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5d0R5cTlpUVRKZUhGNzV3MkV0MDhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyOTJiMjZmLTBlYWYtNDU0Yi04ZThmLWU5ZTI4YTVlM2FiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICA0MSxcbiAgICAgIDE5MixcbiAgICAgIDIyOCxcbiAgICAgIDgwLFxuICAgICAgMTM3LFxuICAgICAgMTc3LFxuICAgICAgMTMyLFxuICAgICAgMjA5LFxuICAgICAgMTg4LFxuICAgICAgMTY2LFxuICAgICAgMTE3LFxuICAgICAgNjYsXG4gICAgICAxMDcsXG4gICAgICAxNjAsXG4gICAgICAxNzUsXG4gICAgICAxODcsXG4gICAgICA3OCxcbiAgICAgIDk4LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyMzQsXG4gICAgICAyNTMsXG4gICAgICAyLFxuICAgICAgMjIxLFxuICAgICAgNjAsXG4gICAgICAxNDIsXG4gICAgICAyMTcsXG4gICAgICAyMjIsXG4gICAgICAxMyxcbiAgICAgIDQ5LFxuICAgICAgMTA3LFxuICAgICAgMTc1LFxuICAgICAgNCxcbiAgICAgIDkwLFxuICAgICAgMTQxLFxuICAgICAgMjQ3LFxuICAgICAgMTQwLFxuICAgICAgMTI3LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg5MzcyN1FKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzg0NTQzMjQxMTo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyNjc4OTcwMzg0NTk4OjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ083KzF0RUVFUEsyK3NBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieW5GT0VPbjBFWkQ2Qmt4U3BuMlI1UzZLaWowa3VmMXRkQ0c1cjFsYWRDMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYcHpXSm9nWVhmYkwrR1k2dEEwaHljZnBZR3Z6MFEvdDBJSmxhUGREbE02U0t6RGlFQzB3Q1pmSlhPRERpOHpOdmFxMHRzL3BEZVIxOWEvTGtnNEZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjcDgwYjRydzN4aDNydnZFdy9GOERVOHQ3bFFmQk5GMk5DNnBYL2cyU05tSWFoWTh0MEZ3K0dzdzVkcmhKakZNcDQ3WjZVNlJkSjFCL0d1Tks1ZVZEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzg0NTQzMjQxMTo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY4MzYzNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCZStcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJlKy5qc29uIjogIntcImtleURhdGFcIjpcImg0U2NIL3l6aEZGRDlHbU8xV3g3QjhzMlUrTlZnV0M0aHRzU1lLQVdHeGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0NTAzNjM5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2ODM2MzUwMzgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
