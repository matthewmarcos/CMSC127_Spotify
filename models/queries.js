var bcrypt = require('bcrypt-nodejs');
var adminPassword = bcrypt.hashSync('admin');

exports.user_string = "CREATE TABLE IF NOT EXISTS users( User_id serial PRIMARY KEY, username varchar(25), password varchar(125), email varchar(225) UNIQUE, isApproved boolean DEFAULT false, isAdmin boolean DEFAULT false, dateApproved date)";
exports.users_name = "CREATE TABLE IF NOT EXISTS users_name (User_id integer REFERENCES users(User_id), fname varchar(25) NOT NULL, lname varchar(25) NOT NULL)";
exports.insert_admin = "insert into users(username,password,email,isApproved,isAdmin,dateApproved)VALUES('admin', '" + adminPassword + "', 'matthewmarcos94@gmail.com',true,true,now())";
exports.insert_admin_name = "INSERT INTO users_name( User_id, fname, lname) VALUES (1, 'admin', 'admin')";