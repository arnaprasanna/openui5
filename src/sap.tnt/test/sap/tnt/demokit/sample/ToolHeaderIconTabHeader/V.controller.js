sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller'
], function(jQuery, Controller) {
	"use strict";

	return Controller.extend("sap.tnt.sample.ToolHeaderIconTabHeader.V", {

		onInit: function () {

		},

		onHomePress: function () {
			var iconTabHeader = this.getView().byId('iconTabHeader');
			iconTabHeader.setSelectedKey('invalidKey');

			var label = this.getView().byId('labelId');
			label.setText('Home Screen');
		},

		onSelectTab: function (event) {
			var label = this.getView().byId('labelId');
			var tab = event.getParameter('item');

			label.setText(tab.getText());
		}
	});

});
