/*
  UserAuth
  - Responsibl database for users
*/

exports.isNotLoggedIn = function(req, res, next){
  if(!req.session.user) next();
  else res.render('homepage');
};

exports.isLoggedInPage = function(req, res, next){
  if(req.session.user) next();
  else res.redirect('/');
};

exports.isLoggedIn = function(req, res, next){
  if(req.session.user) next();
  else res.sendStatus(403);
};
