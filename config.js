//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348141861542";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5HRUJZRjQydU0rWmpnQnhHeXQ1UDcyN1BnVTJGeTU0NmREQW5GYk1rWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmlmK3BQZ0ZlZ3UyaVowaGFmRmRsSEFPZXdYY3g0a0xtOTlRRVhPaVBqND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRGI3OFZNYXdZUHhPWDNxQUFZODkya3BleWFkM28yYmpXT2F1TmY2NjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIOVJMOG13alBKS3lyWHJzWDhaYXJ6T2U1ZHlvRlB4YW9DMXAzVWNtMFJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJUk9hNksvWEpyYXduZVYvM2o3K1oxcWlKOXdPTlhqOWtBS2ZpR1FoMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlYY0JraTFXaTdSWXRxcDNkYTVOVUFVSzJzWkNvMnREd2gvTnJmY3J4U0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhzSWN3NmRHajZmelI4MkcrN0pldEJYV1pBTWpWVTRnU0N4UXJsNXVraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidi9DZWxWNXVBUHBJZ3h6K2R5QmlGRmQ3T3k1QkUzLzZLZ1JSYVY1bENHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhBR3pmamZERkFIRFk2YTdqeWJ2SkdGcGpBNDBBdzlhUW84QWNJbUxmNUVpdXU0QnNGeXFBRytsZUVqOW5hQmpWZDJuY0lUOFQyOCt6SFBZQkNXYmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6IlAzQUNMWngzbFR6V0ZDQk1WQnhXbkE1NFZyVHVUL0ZCMnp4aDNXN3FzdFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0MTg2MTU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NDFDRUI0QzE5NEZERUNGOTFBRTFEQUJFNkRDMzFCMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NzkzMzU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTQxODYxNTQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdBNTc1QUQxQkFFRDFCRUQ5NjgzOTlGMTAzREYzQ0QxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU3OTMzNTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5YM3Y3elQzVHFtejhmVkRsUW92ZFEiLCJwaG9uZUlkIjoiZWFjODJmMTctMWEyZi00MTg3LWEyNTktZWRjZWEyM2Q1N2RiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNYZnp2SmhseTR5ckowaVp0bDdWV0hmM1lsVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYODdTcjBucng3NnRDSkpIZjFPWUJBZzByTms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUlhWUE5LOUUiLCJtZSI6eyJpZCI6IjIzNDgxNDE4NjE1NDI6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGUgU3RhciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDNyMjVVQkVMMkk5cllHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHY1ZmIzNWNTWWVXc0ljZ1lCNkpPU2FZbHVRS21UWmF5bXdYVXUyZFhVaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidGJ1TkhjQWcxT3FSSktEWlE4OERMTVE1NjR2bnozYzVMVC90REZFMkxsQUN0TWtaMVppK0xVMklDTVpid1I5eVluWmE1N3hiSmkrUDFxS09UWWI1Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjM3RnMrTjJYMEROSTN2TUJiRFVQQVhXelM2bXNzdkY1QW9IazRDUWdQd2NnQ0p4dkVIU2YvbVBRTmxhOFBYeTcvemMweTV3Nmd3V2N1b2JwcklaeGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE0MTg2MTU0MjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY3K1gyOStYRW1IbHJDSElHQWVpVGttbUpia0NwazJXc3BzRjFMdG5WMUoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU3OTMzNTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXI2In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
