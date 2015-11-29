/*
	queries.js
	Contains the query strings to be run on server startup. 
	This includes the admin seed if it does not exist as well.
*/

var bcrypt = require('bcrypt-nodejs');
var adminPassword = bcrypt.hashSync('admin');
exports.adminPassword = adminPassword;

exports.users = "CREATE TABLE IF NOT EXISTS users( users_id serial PRIMARY KEY, fname varchar(25), lname varchar(25), username varchar(25) UNIQUE, password varchar(125), picture varchar(225), email varchar(225) UNIQUE, isApproved boolean DEFAULT false, isAdmin boolean DEFAULT false, dateApproved date DEFAULT null)";
exports.playlist = "CREATE TABLE IF NOT EXISTS playlist(playlist_id serial PRIMARY KEY, users_id integer REFERENCES users(users_id), playlist_pic varchar(225) UNIQUE default NULL, playlistname varchar(25) NOT NULL,date_created date NOT NULL default now())";
exports.playlist_tags = "CREATE TABLE IF NOT EXISTS playlist_tag(playlist_id int REFERENCES playlist(playlist_id), tags varchar(25))";
exports.music = "CREATE TABLE IF NOT EXISTS music(music_id serial PRIMARY KEY, file_path varchar(225), music_title varchar(225), music_length integer NOT NULL, times_played integer DEFAULT 0, views integer DEFAULT 0, users_id integer REFERENCES users(users_id))";
exports.artist = "CREATE TABLE IF NOT EXISTS artist(artist_id serial PRIMARY KEY,	artist_Name varchar(40) NOT NULL, artist_Photo varchar(225))";
exports.album = "CREATE TABLE IF NOT EXISTS album(album_id serial PRIMARY KEY, artist_id integer REFERENCES artist(artist_id),year integer, album_name varchar(40))";
exports.artist_create_music = "CREATE TABLE IF NOT EXISTS artist_create_music(artist_id integer REFERENCES artist(artist_id), music_id int REFERENCES music(music_id))";
exports.playlist_has_music = "CREATE TABLE IF NOT EXISTS playlist_has_music(playlist_id integer REFERENCES playlist(playlist_id),music_id int REFERENCES music(music_id))";
exports.artist_create_album = "CREATE TABLE IF NOT EXISTS artist_create_album(artist_id integer REFERENCES artist(artist_id), album_id integer REFERENCES album(album_id))";
exports.album_contains_music = "CREATE TABLE IF NOT EXISTS album_contains_music(album_id integer REFERENCES album(album_id), music_id int REFERENCES music(music_id))";
exports.users_subscribes_playlist = "CREATE TABLE IF NOT EXISTS users_subscribes_playlist(users_id integer REFERENCES users(users_id), playlist_id integer REFERENCES playlist(playlist_id))";
exports.users_recommends_music = "CREATE TABLE IF NOT EXISTS users_recommends_music (users_id integer REFERENCES users(users_id), music_id integer REFERENCES music(music_id))";

exports.insert_admin = "insert into users(fname, lname, username,password, picture, email,isApproved,isAdmin,dateApproved)VALUES('admin', 'admin', 'admin', '" + adminPassword + "', 'empty', 'matthewmarcos94@gmail.com',true,true,now())";
// exports.insert_admin_name = "INSERT INTO users_name( User_id, fname, lname) VALUES (1, 'admin', 'admin')";
exports.get_admin_count = "SELECT COUNT(*) FROM users where username = 'admin'";
