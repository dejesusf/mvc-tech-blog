# MVC Tech Blog

## Description
Using a lot of dependencies, we were given the task to create a blog that users can post about whatever they wanted. The HTML of this website was written with handlebars. A new tech that we had learned about the utilizes partials to create a functioning website. All data is saved into a database and stored.

This application is currently incomplete. I didn't have a chance to include a delete and edit button. There are files for comments, but that button and pathway has not yet been completed. The login page is buggy and gives an alert that something is wrong, but then clicking on the profile page shows the user is logged in.

Please visit my deployed webiste via [Heroku](https://mvc-tech-blogger.herokuapp.com/).

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## License
![License Badge](https://img.shields.io/static/v1?label=license&message=None&color=blue)

## Installation
If you'd like to use this upon copying this repo, please install the following dependencies:
- bcrypt
- connect-session-sequelize
- dontenv
- express
- express-handlebars
- express-session
- handlebars
- mysql2
- sequelize

1. After installing the above dependencies, please update the '.env.EXAMPLE' file with your MySQL password.
2. Run 'mysql -uroot -p' and enter in your password for MySQL.
3. Run 'source db/schema.sql' to create the new database.
4. Run 'node server.js' and this will be available locally.
    
## Usage
Here is a screenshot of the multiple navigation screens on my webiste:
![signup screen](./assets/signup%20screen.png)
![homepage](./assets/home%20screen.png)
![demo profile](./assets/demo%20profile.png)
![demo profile](./assets/demo%20profile%202.png)


## Questions
If there any questions, feel free to [email me](mailto:dejesusf@uw.edu). Don't be shy and visit my [GitHub Profile](https://github.com/dejesusf) to see other projects I'm working on.