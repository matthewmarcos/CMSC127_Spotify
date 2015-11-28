
--Sample Insert Queries for Project Tables
------------------------------------------------------------------------------------------------------------------------------
--users
--1
insert into users(username, fname, lname,password, email, isApproved, isAdmin, dateApproved)VALUES('Diego','Diego','Sevilla','Sevilla','diegosevilla@gmail.com',false,false,now());
--2
insert into users(username, fname, lname, password, email, isApproved, isAdmin, dateApproved)VALUES('homer','homer','malijan','malijan','homermalijan@gmail.com',false,false,now());
--3
insert into users(username, fname, lname, password, email, isApproved, isAdmin, dateApproved)VALUES('Pauline','Pauline','Payawal','Payawal','paulinepayawal@gmail.com',false,false,now());
--4
insert into users(username, fname, lname, password, email, isApproved, isAdmin, dateApproved)VALUES('Carol','Carol','Adajar','Adajar','caroladajar@gmail.com',false,false,now());
--5
insert into users(username, fname, lname, password, email, isApproved, isAdmin, dateApproved)VALUES('MJ','MJ','Constantino','Constantino','mjconstantino@gmail.com',false,false,now());
	------------------------------------------------------------------------------------------------------------------------------
--playlist
--1
insert into playlist(users_id,playlistname,date_created)VALUES(1,'Diego Playlist',now());
--2
insert into playlist(users_id,playlistname,date_created)VALUES(2,'Homer Playlist',now());
--3
insert into playlist(users_id,playlistname,date_created)VALUES(3,'Pauline Playlist',now());
--4
insert into playlist(users_id,playlistname,date_created)VALUES(4,'Carol Playlist',now());
--5
insert into playlist(users_id,playlistname,date_created)VALUES(5,'MJ Playlist',now());
------------------------------------------------------------------------------------------------------------------------------
--music
--1
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/shakeItOff.mp3','Shake It Off',360,42,51);
--2
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/latch.mp3','Latch',407,39,72);
--3
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/MarvinGaye.mp3','Marvin Gaye',3230,32,69);
--4
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/SmokeAndMirrors.mp3','Smoke and Mirrors',390,89,96);
--5
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/Decode','Decode',390,89,96);
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/Chinito','Chinito',390,89,96);
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/Alright','Alright',390,89,96);
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/BrickByBoringBrick','Brick By Boring Brick',390,89,96);
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/','',390,89,96);
insert into music(file_path,music_title, music_length, times_played, views)VALUES('/../music/','',390,89,96);

------------------------------------------------------------------------------------------------------------------------------
--artist
--1
insert into artist(artist_name,artist_photo)VALUES('Taylor Swift','/../Artist_Photos/TaylorSwift.jpg');
--2
insert into artist(artist_name,artist_photo)VALUES('Sam Smith','/../Artist_Photos/SamSmith.jpg');
--3
insert into artist(artist_name,artist_photo)VALUES('Charlie Puth','/../Artist_Photos/CharliePuth.jpg');
--4
insert into artist(artist_name,artist_photo)VALUES('Imagine Dragons','/../Artist_Photos/ImagineDragons.jpg');
--5
insert into artist(artist_name,artist_photo)VALUES('Justin BAEber','/../Artist_Photos/JustinBAEber.jpg');
------------------------------------------------------------------------------------------------------------------------------
--album
--1
insert into album(artist_id,year,album_name)VALUES(1,2015,'The 1989');
--2
insert into album(artist_id,year,album_name)VALUES(2,2015,'In The Lonely Hour');
--3
insert into album(artist_id,year,album_name)VALUES(3,2015,'huehue');
--4
insert into album(artist_id,year,album_name)VALUES(4,2015,'Smoke And Mirrors');
--5
insert into album(artist_id,year,album_name)VALUES(5,2015,'Purpose');
------------------------------------------------------------------------------------------------------------------------------
--artist-music relation
--1
insert into artist_create_music(artist_id,file_id)VALUES(1,'/../music/shakeItOff.mp3');
--2
insert into artist_create_music(artist_id,file_id)VALUES(2,'/../music/latch.mp3');
--3
insert into artist_create_music(artist_id,file_id)VALUES(3,'/../music/MarvinGaye.mp3');
--4
insert into artist_create_music(artist_id,file_id)VALUES(4,'/../music/SmokeAndMirrors.mp3');
--5
insert into artist_create_music(artist_id,file_id)VALUES(5,'/../music/Sorry.mp3');
------------------------------------------------------------------------------------------------------------------------------
--playlist-music relation
--1
insert into playlist_has_music(playlist_id,file_id)VALUES(1,'/../music/shakeItOff.mp3');
--2
insert into playlist_has_music(playlist_id,file_id)VALUES(2,'/../music/latch.mp3');
--3
insert into playlist_has_music(playlist_id,file_id)VALUES(3,'/../music/MarvinGaye.mp3');
--4
insert into playlist_has_music(playlist_id,file_id)VALUES(4,'/../music/SmokeAndMirrors.mp3');
--5
insert into playlist_has_music(playlist_id,file_id)VALUES(5,'/../music/Sorry.mp3');
------------------------------------------------------------------------------------------------------------------------------
--artist album relation
--1
insert into artist_create_album(artist_id,album_id)VALUES(1,1);
--2
insert into artist_create_album(artist_id,album_id)VALUES(2,2);
--3
insert into artist_create_album(artist_id,album_id)VALUES(3,3);
--4
insert into artist_create_album(artist_id,album_id)VALUES(4,4);
--5
insert into artist_create_album(artist_id,album_id)VALUES(5,5);
------------------------------------------------------------------------------------------------------------------------------
--album-music relation
--1
insert into album_contains_music(album_id,file_id)VALUES(1,'/../music/shakeItOff.mp3');
--2
insert into album_contains_music(album_id,file_id)VALUES(2,'/../music/latch.mp3');
--3
insert into album_contains_music(album_id,file_id)VALUES(3,'/../music/MarvinGaye.mp3');
--4
insert into album_contains_music(album_id,file_id)VALUES(4,'/../music/SmokeAndMirrors.mp3');
--5
insert into album_contains_music(album_id,file_id)VALUES(5,'/../music/Sorry.mp3');
------------------------------------------------------------------------------------------------------------------------------
--end



