/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nav_02/m09-01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
