# restub-api
This is Restful api uses mongoDB as its Database and NodeJS & express to handle requests.

This api handle GET, POST, PATCH, PUT and DELETE requests.

This api works on URL https://0.0.0.0:3000/api.

To get all users use the URL https://0.0.0.0:3000/api/contacts with GET method.

To get one user use the URL https://0.0.0.0:3000/api/contacts/Contact_ID with GET method.

To create new user use the URL https://0.0.0.0:3000/api/contacts with POST method and body containing name,gender,email,phone parameters.

To update the user use the URL https://0.0.0.0:3000/api/contacts/Contact_ID with PUT or PATCH method containing one of the following (name,gender,email,phone) in body parameters.

To delete the user use the URL https://0.0.0.0:3000/api/contacts/Contact_ID with DELETE method.

## How to setup
####First you need to install mongoDB from there official site https://www.mongodb.com/

OR using chocolatey:

```bash
choco upgrade chocolatey
choco install mongodb
```

OR using Homebrew:

```bash
brew update
brew install mongodb
```
####After installing mongoDB you have to install all dependencies needed by NodeJS using following command:
```bash
npm install
```
## How to run the api

To run the api you have to run this command:

```bash
npm start
```