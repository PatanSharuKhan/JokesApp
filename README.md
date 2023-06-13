# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Login Route

`username:` jokes\
`password:` jokes2023

`When login user, open login page:`\
Will be redirected to Home page.

`When new user, open login page:`\
A form with usename and password fields, and Login button should be displayed.\
When fields are empty and clicked on Login, error message will be displayed.

`When fields are filled and clicked on login:`\
If the details are correct, then,\
The details will be stored in local storage, with the key "userDetails".\
Then user will be redirected to the Home page.

If the details are wrong, then,\
A error message will be displayed in the form.\
On update data, the error message will be disappear.

# Home Route

`When new user, open Home page:`\
Will be redirected to the login page.

`When login user, open Home page:`\
A Navbar with title and Logout button will be displayed.
A refresh button, to dynamically change the fresh content.
Table containing the joke category and joke.

`When user clicks on Logout Button:`\
The userDetails key from localstorage will be removed and,\
redirected to the Login page.


# Not Found Route

When the path is wrong, then a image with Not Found will be displayed.\
A Home button for Navigation.

# Technologies Used

`HTML` , `CSS`, `Javascript`, `ReactJS`, `Bootstrap`, `ReactHooks`

# Images Used

The images are taken from the internet.\
They are not for commertial use, only for educational practise purpose, I have used.
 


