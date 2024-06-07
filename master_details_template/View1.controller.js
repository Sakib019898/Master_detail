sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
],
function (Controller,Filter, FilterOperator, FilterType) {
    "use strict";

    return Controller.extend("masterdetail.masterdetail.controller.View1", {
        onInit: function () {

        },
        onListPress: function (oEvent) {
          var orderID =  oEvent.getParameter("listItem").getBindingContext().getProperty("OrderID");
          var oFilter = new Filter("OrderID", FilterOperator.EQ, orderID);

          this.getView().byId("orderTable").getBinding("items").filter(oFilter, FilterType.Application);
        }
    });
});
