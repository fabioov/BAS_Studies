/*global QUnit*/

sap.ui.define([
	"nav_02/m09-01/controller/m09-01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("m09-01 Controller");

	QUnit.test("I should test the m09-01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
