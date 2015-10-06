/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var apiHelper = require('../services/ApiHelper');

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

            if(user === undefined) return res.notFound();

            if (err) return next(err);

            res.json(apiHelper.respondObjectData(200, "Get user success.", user));

        });

    } else {

        var where = req.param('where');

        if (_.isString(where)) {
                where = JSON.parse(where);
        }

        var options = {
                    limit: req.param('limit') || undefined,
                    skip: req.param('skip')  || undefined,
                    sort: req.param('sort') || undefined,
                    where: where || undefined
            };

            console.log("This is the options", options);

        User.find(options, function(err, user) {

            if(user === undefined) return res.notFound();

            if (err) return next(err);

            res.json(apiHelper.respondObjectData(200, "Get user success.", user));

        });

    }

    function isShortcut(id) {
        if (id === 'find'   ||  id === 'update' ||  id === 'create' ||  id === 'destroy') {
        return true;
        }
    }

  },

};

