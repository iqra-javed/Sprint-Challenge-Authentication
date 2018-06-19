<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    * Middleware: function that we can run in order to extend the functionality of express. Helmet is a third party middleware that we can use to add security. express.json is a built-in middleware that allows us to parse json objects. Other than that we can also create custom middleware that will allow us to affect our data, or even catch errors. Route handler functions are also a type of middleware. 

    Sessions: are a way to authenticate users after they have already logged in. If and when the user makes a request to the server, we check to see if the session info on the cookie matches and if so then we allow access. 

    bcrypt: hashing algorithm that adds 'cost' to the potentiality of hackers gaining access to secure information. 

    JWT: Json Web Tokens are also a way to encrypt and authenticate. 


2.  What does bcrypt do in order to prevent attacks?
    * it performs consecutive hashes depending on the cost argument.

3.  What are the three parts of the JSON Web Token?
    * header, signature, payload
