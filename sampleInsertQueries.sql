
--Sample Insert Queries for Project Tables
------------------------------------------------------------------------------------------------------------------------------
--users
--1
insert into users(username,	password, email, isApproved, isAdmin, dateApproved)VALUES('Diego','Sevilla','diegosevilla@gmail.com',false,false,now());
--2
insert into users(username,	password, email, isApproved, isAdmin, dateApproved)VALUES('homer','malijan','homermalijan@gmail.com',false,false,now());
--3
insert into users(username,	password, email, isApproved, isAdmin, dateApproved)VALUES('Pauline','Payawal','paulinepayawal@gmail.com',false,false,now());
--4
insert into users(username,	password, email, isApproved, isAdmin, dateApproved)VALUES('Carol','Adajar','caroladajar@gmail.com',false,false,now());
--5
insert into users(username,	password, email, isApproved, isAdmin, dateApproved)VALUES('MJ','Constantino','mjconstantino@gmail.com',false,false,now());
------------------------------------------------------------------------------------------------------------------------------
--users_name
--1
insert into users_name(users_id,fname,lname)VALUES(1,'Diego','Sevilla');
--2
insert into users_name(users_id,fname,lname)VALUES(2,'Homer','Malijan');
--3
insert into users_name(users_id,fname,lname)VALUES(3,'Pauline','Payawal');
--4
insert into users_name(users_id,fname,lname)VALUES(4,'Carol','Adajar');
--5
insert into users_name(users_id,fname,lname)VALUES(5,'MJ','Constantino');
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
insert into music(file_id, music_length, times_played, views)VALUES('/../music/shakeItOff.mp3',360,42,51);
--2
insert into music(file_id, music_length, times_played, views)VALUES('/../music/latch.mp3',407,39,72);
--3
insert into music(file_id, music_length, times_played, views)VALUES('/../music/MarvinGaye.mp3',3230,32,69);
--4
insert into music(file_id, music_length, times_played, views)VALUES('/../music/SmokeAndMirrors.mp3',390,89,96);
--5
insert into music(file_id, music_length, times_played, views)VALUES('/../music/Sorry.mp3',362,92,109);
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
insert into album(artist_id,year,album_name,subscriber)VALUES(1,2015,'The 1989',34242);
--2
insert into album(artist_id,year,album_name,subscriber)VALUES(2,2015,'In The Lonely Hour',23241);
--3
insert into album(artist_id,year,album_name,subscriber)VALUES(3,2015,'huehue',1231431);
--4
insert into album(artist_id,year,album_name,subscriber)VALUES(4,2015,'Smoke And Mirrors',34242);
--5
insert into album(artist_id,year,album_name,subscriber)VALUES(5,2015,'Purpose',923481);
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



