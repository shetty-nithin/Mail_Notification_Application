# Mail Notification Application

[![LinkedIn][linkedin-shield]][linkedin-url]

<br/>

## About The Project

This is the simple application to send/receive the the notification to/from the specified users on occurence of certain task.

We can use this api in any application to notify users or admin on occurence of specified task.
<br/>

### Features : 
* Sending and Receiving of a notification
<br/>

### Built with : 

* [![MongoDB][MongoDB]][MongoDB-url]

* [![Express.js][Express.js]][Express-url]

* [![Node.js][Node.js]][Node-url]
<br/>
<br/>

## Installation
<br/>

__Installation__
<br/>
1. Run the following command in the terminal to clone the repository
   ```sh
   git clone https://github.com/shetty-nithin/CRM_Customer_Relationship_Management
   ```

2. Go inside the root folder

3. Install NPM packages
   ```
   npm install
   ```

4. Inside the root folder create one more file with name ".env" and mention the port as below. (change mail_id and smtp_code)
   ```javascript
   PORT = 7777
   MONGO_DB_URL = mongodb://localhost/notification_db
   MAIL_ID = <yourmailid@gmail.com>
   SMTP_CODE = <smtp_code>
   ```

5. Run the server
   ```javascript
   node server.js
   ```
<br/>

__Implementation in other parent application__
<br/>

1. Go inside the Parent Application

2. Install "node-rest-client"

3. Create a file name called "notificationClient.js" (this is user_defined name). And paste the below code in the file.
   ```javascript
      const Client = require("node-rest-client").Client;
      const client = new Client();

      module.exports = (subject, content, recepients, requester) => {

         const reqBody = {
            subject : subject,
            content : content,
            recepientEmails : recepients,
            requester : requester
         }
         const reqHeader = {
            "Content-Type" : "application/json",
         }
         const args = {
            data : reqBody,
            headers : reqHeader
         }

         try {
            client.post("http://localhost:7777/notiserve/api/v1/notifications", args, (data, res) => {
                  console.log("request sent");
                  console.log(data); 
            })
         }catch(err){
            return res.status(500).send({
                  message : "Internal server error."
            })
         }
      }
   ```
   
4. Use the following lines of code to send the notification wherever required in the parent application.
   ```javascript
   const sendNotificationReq = require("./notificationClient");

   sendNotificationReq("<subject>", "<content>", "<recepientEmails>", "<requester>");
   ```


<!-- MARKDOWN LINKS -->
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members

[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0072b1
[linkedin-url]: https://www.linkedin.com/in/shetty-nithin/

[MongoDB]: https://img.shields.io/badge/MongoDB-589636?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/

[Node.js]: https://img.shields.io/badge/Node.js-215732?style=for-the-badge&logo=nodedotjs&logoColor=61DAFB
[Node-url]: https://nodejs.org/en/

[Express.js]: https://img.shields.io/badge/Express.js-D1D3D4?style=for-the-badge&logo=express&logoColor=4FC08D
[Express-url]: https://expressjs.com/