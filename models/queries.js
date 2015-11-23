/*
	queries.js
	Contains the query strings to be run on server startup. 
	This includes the admin seed if it does not exist as well.
*/

var bcrypt = require('bcrypt-nodejs');
var adminPassword = bcrypt.hashSync('admin');
exports.adminPassword = adminPassword;

exports.users = "CREATE TABLE IF NOT EXISTS users( users_id serial PRIMARY KEY, username varchar(25) UNIQUE, password varchar(125), picture varchar(225) UNIQUE, email varchar(225) UNIQUE, isApproved boolean DEFAULT false, isAdmin boolean DEFAULT false, dateApproved date)";
exports.users_name = "CREATE TABLE IF NOT EXISTS users_name (Users_id integer REFERENCES users(users_id), fname varchar(25) NOT NULL, lname varchar(25) NOT NULL)";
exports.playlist = "CREATE TABLE IF NOT EXISTS playlist(playlist_id serial PRIMARY KEY, users_id integer REFERENCES users(users_id), playlist_pic varchar(225) UNIQUE, playlistname varchar(25) NOT NULL,date_created date NOT NULL default now())";
exports.playlist_tags = "CREATE TABLE IF NOT EXISTS playlist_tag(playlist_id int REFERENCES playlist(playlist_id), tags varchar(25))";
exports.music = "CREATE TABLE IF NOT EXISTS music(file_id varchar(225) PRIMARY KEY, music_title varchar(225), music_length interval NOT NULL, times_played integer DEFAULT 0, views integer DEFAULT 0)";
exports.artist = "CREATE TABLE IF NOT EXISTS artist(artist_id serial PRIMARY KEY,	artist_Name varchar(40) NOT NULL, artist_Photo varchar(225))";
exports.album = "CREATE TABLE IF NOT EXISTS album(album_id serial PRIMARY KEY, artist_id integer REFERENCES artist(artist_id),year integer, album_name varchar(40))";
exports.artist_create_music = "CREATE TABLE IF NOT EXISTS artist_create_music(artist_id integer REFERENCES artist(artist_id), file_id varchar(225) REFERENCES music(file_id))";
exports.playlist_has_music = "CREATE TABLE IF NOT EXISTS playlist_has_music(playlist_id integer REFERENCES playlist(playlist_id),file_id varchar(225) REFERENCES music(file_id))";
exports.artist_create_album = "CREATE TABLE IF NOT EXISTS artist_create_album(artist_id integer REFERENCES artist(artist_id), album_id integer REFERENCES album(album_id))";
exports.album_contains_music = "CREATE TABLE IF NOT EXISTS album_contains_music(album_id integer REFERENCES album(album_id), file_id varchar(225) REFERENCES music(file_id))";
exports.users_subscribes_playlist = "CREATE TABLE IF NOT EXISTS users_subscribes_playlist(users_id integer REFERENCES users(users_id), playlist_id integer REFERENCES playlist(playlist_id))";

exports.insert_admin = "insert into users(username,password, picture, email,isApproved,isAdmin,dateApproved)VALUES('admin', '" + adminPassword + "', 'empty', 'matthewmarcos94@gmail.com',true,true,now())";
exports.insert_admin_name = "INSERT INTO users_name( User_id, fname, lname) VALUES (1, 'admin', 'admin')";
exports.get_admin_count = "SELECT COUNT(*) FROM users where username = 'admin'";