if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

module.exports = {
    PORT : process.env.PORT,
    SMTP_CODE : process.env.SMTP_CODE,
    MAIL_ID : process.env.MAIL_ID
}