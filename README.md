# Fun 'Fact'ory 
(☞ﾟヮﾟ)☞ Aha, get it? Get it? ☜(ﾟヮﾟ☜)  

A simple study of Server to Server communication.

## Module 12: Lab 2 | Server to Server Communication

## Overview
The purpose of this lab is to:

- Create an Express server that communicates with an external API.
- Use axios to perform a GET request to a public API.
- Handle the response from an external API and serve the relevant data to a client.
- Implement basic error handling for API requests.

### GitHub Link
https://github.com/ANIO-Official/fun-factory 

## How to Use
1.  Clone the repository or Download the ZIP file and extract the files.
2.  Open the file in Visual Studio Code.
3.  Open the Terminal using Ctrl + ~
4.  `cd` into the directory 'fun-factory' in the terminal. Like so: 
    `cd fun-factory`

    **Ensure NPM is is installed for the project to run:** 

      inside the terminal window run `npm i` to install npm

5.  (Once NPM is indeed installed in the project file directory, you'll see a node modules folder) Run the project using "node server.js" in the terminal. (You may also use npm run dev if you like. Nodemon is installed.)
6.  You should see a message appear. Follow the link: "http://localhost:3000/"

## My process

 1. Initialized repo and npm. Installed all necessary & personally preferenced dev packages.
 2. Set up a basic express server & tested using `node server`
 3. Added GET route for the API with an async function.
 4. Fetched from the Useless Facts API using axios and ensuring the use of `try...catch` block for error handling. Tested the GET request in Thunder Client
 5. Transformed the data by accessing the text value of the data in the response then assigning that data to a property in a newly created `transformedFact` object.
 7. Tested again in Thunder Client. Adjusted the root route's res.send text and tested again ensuring it appears to the users.

### Built with

- Node.js
- Express
- Axios
- Nodemon
- Javascript

## Reflection

After completing this activity, consider the following:

**Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?**

It is important to re-format data from the Useless Facts API to ensure that a client *only* recieves the necessary information. Transforming the data to a clean minimal response reduces the payload size, can remove sensitive data clients shouldn't see, and will make the response easier for the client to understand.

---

**In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?**

It is better to send a generic error message to the client instead of an actual error object from axios for better clarity. If you were to keep the error object, there is a high chance the client won't understand what is happening. Our jobs as developers is to not only be able to understand the error that returns but to also relay this information in simpler or layman's terms for better understanding.  

---

**How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?**

To retrieve facts of different languages, I would ensure that language is first an available option in the API. Then I would modify the axios request to specifically fetch random facts in the language requested by the client. How I would request this information depends on how the API's documentation describes how to access this information such as:
```JS
  const response = await apiClient.get('facts/random?l=de')
```

### Useful resources

**PerScholas** | Node and Express | Lessons 1-6

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)