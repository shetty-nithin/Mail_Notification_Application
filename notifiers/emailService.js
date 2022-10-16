/**
 * Requirement :
 *    1. Nodemailer Library
 *    2. SMTP server (using it from google - gmail.com) 
 *       aaaa bbbb cccc dddd
 */   

const nodemailer = require('nodemailer'); 
const serverConfig = require("../configs/server.config");

module.exports = nodemailer.createTransport({
    port : 465,
    // host : "smtp.gmail.com",
    service : "gmail",
    auth : {
        user : serverConfig.MAIL_ID,
        pass : serverConfig.SMTP_CODE
    },
    secure : true,
});