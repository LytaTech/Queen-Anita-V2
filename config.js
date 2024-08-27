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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1sSmQxQ2tlTTZrTlVvSFo2NENJYmZCajBWVHFsS2VXcURwb2UzMGUzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFlaRForMENwYWFTVVZDMzk4cjRJZlVXZlF0T3VvU1Q5Ylp5S1h3bnBnUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQjN1TjM0OU9rd0tiVHA5ZnM0MTdkdnplM2lmbUtCcDgxajAzMkhOVWw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtY1ZacWt0dTViMG4yQ2hUbTJkSFczcDB5REpJbVJQT21CblFUYlhad0RzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNR21MMDZaNFhmendBRlhTY0EydjRBbTFGaGNjTFZlTFRuYTFyUzFNVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE5ZG90RTFqcVhkWG4yeXlYR2x3bFN4UHUvK244RFA5NjhLckZGUjl0U1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RnTXdRVEVLUkQrS3owbmxCa2pkYjVYYlIrRytRWWlDNVpTV2NXaHduYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFZ5L0ppbDFGZmZScGkzSVhHcmlZSjRqRlRjZ2xXd0NTblhTQmJUNTdWYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRpcTFJUzVjeDBNQXV6eFYyc2NRZmY4OVNXQ2RCSFFZNkNtVFlEVy9vd1FlVVJob1U0RExtVGVRclk3aVJqR0MxckFtS2tqdjcwRUpLcXF3NUpERGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJlMWU1aE9BWHZqVm5WblY5emRCSUZhNENYZHFJNGlmOG5UODYyZXIrL3VvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1SmRibjBCSFRCZTd0Zk5GcXo5Uzh3IiwicGhvbmVJZCI6IjY3MmUwNTFiLTVhMmYtNDM1ZC04NmRhLTg0NmYxZTY3YTNiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmVWFaUGhFZFI4V1l5cG1UZnlsR0dPeEUwZjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGhMRTRCL0pxTlFWMTJLdWxGTTNCVngxZWFnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZMN0FIOEg5IiwibWUiOnsiaWQiOiIyMzQ5MDY1OTkzOTA2OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkxZVEEgTUFOSFdBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOMzFoL01DRUtYeHQ3WUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNUnp2cUFVM1huUTNzZHZ3dWwxaWloL3lsbTRoeS9LMEI5TkduYVNHSEUwPSIsImFjY291bnRTaWduYXR1cmUiOiJNVEVkQlN1a25QczBPNUN2VjBjLzlMSkpXTWIxb0dEMG5YMkFMamp5cGt1QW15T2hEMnl5M1hGak1NNVZwZWczb2ZDZEcyVGR5dklnNXpJaWx2aG1Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoialFFRHloZGxPbEh3TG5qdFFDcm1kd2dyVVFLUmI1eGF4SHBxN2p1b0NhWXJ4VElRWk5nWVlsNy83R2ZLVTJ3YTVPN3lkOWFPZS9ibFFtTWk1YjRXaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY1OTkzOTA2OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRFYzc2Z0ZOMTUwTjdIYjhMcGRZb29mOHBadUljdnl0QWZUUnAya2hoeE4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQ3NzQ1NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHFNIn0="
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
