const notificationController = require("../controllers/notification.controller");

module.exports = (app) => {
    app.post("/notiserve/api/v1/notifications", notificationController.acceptNotificationRequest);
    app.get("/notiserve/api/v1/notifications/:id", notificationController.getNotificationDetails);
}