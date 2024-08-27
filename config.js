//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "https://youtube.com/@lytamanhwa?si=7qv4eB_ZhqBk1avz";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://youtube.com/@lytamanhwa?si=7qv4eB_ZhqBk1avz";
global.gurl = process.env.GURL || "https://youtube.com/@lytamanhwa?si=7qv4eB_ZhqBk1avz";
global.website = process.env.GURL || "https://youtube.com/@lytamanhwa?si=7qv4eB_ZhqBk1avz";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://youtube.com/@lytamanhwa?si=7qv4eB_ZhqBk1avz";
global.sudo = process.env.SUDO || "LYTA MANHWA";
global.owner = process.env.OWNER_NUMBER || "2347084528285";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU11ZSt1RkVnVDl3bmdNSGl5UXNsUGNuVHBDcGMrbGhDOEpEMEFQWXcybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmgrWlVVaENlRFMwQ0VVOWFzQm9GNnlNTnoxTmlRcGJESWpEY3plZHMxVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUFlYdk1HUUxvdXFFQnpGMDMrMmNBUWg2V2dQVUtBY1hjWjZqZE1hOVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QW1vUTU3SzFUZ1FPWlI4L0J6blpkcXhnMG5HZUZpbnFHdUNFUmxxV0hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIb2Q4c2FtU1FYaER0OGxuYU5GekN6SVk0WEFITFErTU9INmFGT0t4RTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFQW0vZGxMVGJySWhvZ3NNNy9rMmhPbTNGbkNlT1IwbnlNU0VhSHdGaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1iUk0yaGRqV3FKQXFqcWNyVjR6ZWpPTzVxUlc5STN0S205TnM4c1oxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTMyTUZhd1oweWxubzVpQnlqQnovYTFRaDJ4SEFPaDB2NDBmck1TU2FWRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxlN1o2OWlHUExoN2JHc2dmZjBURTRlMnh0UHloV1FlcVloaFdxaE8wbDFHU2lITGdiR0JkZjd0c21RUGhXWGs4dG5zVXFqZlN5L2xmMklPRTdKQkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IlcyNmxIalE2R2ZwNUFjM2VmU2dJaFdsT29sZEw4dWsxSEZGa2FNa1NSKzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjF5VlZDOTA3UVBtaFplMUhKQ2RiOGciLCJwaG9uZUlkIjoiYTY0N2IyYzItMDU4OS00YjU2LTk5YmEtYjkzYjRlYjNlOTM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNuejZOZ0daTW5BZFpHc2RLdFVDajg3b2NYYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZnZHQVJiQXI4Q1IrSWFuaStUYUlQYWlDQW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjFDV1pZTDMiLCJtZSI6eyJpZCI6IjIzNDkwNjU5OTM5MDY6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTFlUQSBNQU5IV0EifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04zMWgvTUNFS1hKdUxZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1SenZxQVUzWG5RM3Nkdnd1bDFpaWgveWxtNGh5L0swQjlOR25hU0dIRTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5FdHp3MmZHUEQ0bU9vcHNTaGM0c0RPcDJVR2VpWkNjV1pqK1ZoRjd3T3RhUXJGWE93NVo2SHdnZnF0RWxrMEpuM09nZmN1cXN1YWpVTWlOVzgvckRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6SHo1bjVxdFY5UllyRGcvUS93U2UrWHJPK1FiaitPODdKUDB5eGhDcGV6bUl1ZmpLbGJybCt3YWlwaElrakNNM2thbERlYm0wQzI5NmdUcExULytEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNjU5OTM5MDY6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEVjNzZnRk4xNTBON0hiOExwZFlvb2Y4cFp1SWN2eXRBZlRScDJraGh4TiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDc4NTg0M30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "LYTA MANHWA",
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
