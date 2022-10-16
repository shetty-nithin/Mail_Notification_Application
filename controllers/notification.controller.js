const Notification = require("../models/notification.model")
 
 
exports.acceptNotificationRequest = async (req, res) => {
    try {
        const notificationObj = {
            subject : req.body.subject,
            recepientEmails : req.body.recepientEmails,
            content : req.body.content,
            requester : req.body.requester,
            status : req.body.status
        }
        
        const notification = await Notification.create(notificationObj);
         
        return res.status(201).send({
            message : "Request accepted",
            trackingId : notification._id
        })
    }
    catch(err){
        return res.status(500).send({
            message : "NotificationController - Internal server error"
        })
    }
}


exports.getNotificationDetails = async (req, res) => {
    try{
        const trackingId = req.params.id;
    
        const notification = await Notification.findOne({_id : trackingId});
        return res.status(200).send(notification);
    }
    catch(err){
        return res.status(500).send({
            message : "Internal server error"
        })
    }
}
 
 
 