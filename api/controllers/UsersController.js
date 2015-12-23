/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//var apiHelper = require(__dirname + '/../services/ApiHelper');
module.exports = {
	// a CREATE action
  create: function(req, res, next) {

      var params = req.params.all();

      User.create(params, function(err, user) {

          if (err) return next(err);

          res.status(200);

          res.json(user);

      });
  },

  // a FIND action
  find: function (req, res, next) {

    var id = req.param('id');

    var idShortCut = isShortcut(id);

    if (idShortCut === true) {
        return next();
    }

    if (id) {
        User.findOne(id, function(err, user) {
            if(user === undefined) {
                return res.json(ApiHelper.respondObjectData(404, "User not found.", null));
            }
            if (err) return next(err);
            res.json(ApiHelper.respondObjectData(200, "Get user success.", user)); //
        });

    } else {
      return res.json(ApiHelper.respondObjectData(404, "Missing parameter \'id\'", null));
    }

    function isShortcut(id) {
        if (id === 'find'   ||  id === 'update' ||  id === 'create' ||  id === 'destroy') {
        return true;
        }
    }

  },

};

