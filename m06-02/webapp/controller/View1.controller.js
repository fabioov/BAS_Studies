sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("Fabio.m0602.controller.View1", {
            onInit: function () {

                let oCompanyInput2 = this.byId("companyInput2");

                oCompanyInput2.bindProperty("value", "companyModel>/ScarrSet/Carrname");

            }
        });
    });
