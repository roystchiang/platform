'use strict';

module.exports = function(app) {
	// User Routes
	var users = require('../../app/controllers/users.server.controller');
  var admin = require('../../app/controllers/admin.server.controller');

	app.route('/admin/usercontrol')
		.get(users.requiresLogin, admin.list);

};