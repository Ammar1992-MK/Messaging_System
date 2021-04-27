## Run Guide
To run the application you need to do the following

 * Run "npm install" in your commandline at the project
 * After the installation you can run "npm start" in the commandline and the server will start on port 3000.

#### Admin User username and password : sensur - kristiania2021 

when you load the page you will get to options, you can either log an as an admin.Or you can as well log in with google using your Google account.

## The Application

the application i build is a messaging system at the exam text says. The exam has been challenging but interesting.

the project was build using the following :

* React for the frontend
* Node.JS , Express and Websocket for the backend
* I used passport for Authentication.
* Parcel was used for translating between jsx/js and bundling the frontend
* For testing i used Jest and Babel

Not all code in this repository is written by me. Chat and ChatView code was taken from course-lectures and exercises.

The code which i wrote my self also look similar to the code from the class, it is just that i used to write in similar way.

## Structure

I believe every requirement except the message notification have been met, as well as the >70% test coverage.

I believe the message notification could have been done using the websocket, but the lack of time was the reason i didn't implement this feature.

The program is structured and created in a sensible way. The frontend is structured into meaningful components. The backend is also structured in a way that is easy to understand.

I have done my best in order to follow a good programming practice and naming conventions in the code.

## Functionality

* The first page is a login page where the user can log in using Google account or log in as Admin for Admin users. 
  The first requirement in the exam text says that a logged-in user to register more users in the system. 
  Therefore i assume that there should be an admin user that have the right to add new users.
When logging in as Admin the user can submit a form with the new user information to the server using API ("api/createUsers"). the server will then save this information 
in a variable. When clicking on the -list users- link in the header, an API call will be executed ("/api/user"), and the server will retrieve the users information and send that to the client.
users have name and email as per the requirements.
  
* Google Authentication is used with passport on the backend for the normal users' login with google accounts. This functionality will, after the user has logged in, create a profile page (link in the header) with profile picture, name and email information.
an extra functionality was implemented here which is the user can log out. If the user clicks on logout in the profile page the website will navigate back to the login page and ask user to log in when going back to the profile page.
  
* When the user or the Admin log in to the application, a message component will appear. This message component is inspired by the inbox is canvas.
the users can crate messages that are sent to all users. The message component can send and receive messages via server (/api/sendMessage && /api/retrieveMessage). I wanted with this to simulate sending message as an email to all users.
NOTE : when sending or receiving a message in the message component the user will need to refresh the page in order for the message to appear in the log.
  
* The user is able to see the messages whether they are the sender or the recipient. as well as responding to a message.

* WebSocket was used on the backend in order to develop a real-time chat component that can send messages to all clients.
After logging in as user or Admin a Go To Live Chat link will appear. When the user clicks the link the website will navigate to the Chat component and send/receive messages from all other logged-in users.
  
## Improvments i would have done if i had time

* Adding username to the chatLog so that users can see who sent a message.
* Using websocket to show how many users are online.
  
* I would have used session and cookies in order to allow two log-in sessions with google on the server on the same browser.
* Security issues may appear in the application, but time was a constraint, and we didn't learn much about security in this course.