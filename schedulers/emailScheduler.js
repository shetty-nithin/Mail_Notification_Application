const cron = require("node-cron"); 
const Notification = require("../models/notification.model");
const emailTransporter = require("../notifiers/emailService");

cron.schedule("*/10 * * * * *", async () => {
    
    const notifications = await Notification.find({status : "UN_SENT"})
    
    if(notifications){
        console.log("number of unsent mails are ", notifications.length)
        
        notifications.forEach( mail => {
            const mailObj = {
                to : mail.recepientEmails,
                subject : mail.subject,
                text : mail.content
            }
            
            console.log("sending mail : ", mailObj);
            emailTransporter.sendMail(mailObj, async (err, info) => {
                if(err){
                    console.log("error found : ", err.message);
                }else{
                    console.log("successfully sent : ", info);                
                    mail.status = "SENT";
                    await mail.save();
                }
            });
        })
    }
}) 