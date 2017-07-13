"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var pizza_detail_component_1 = require("./pizza-detail.component");
var pizzas_component_1 = require("./pizzas.component");
var pizza_service_1 = require("./pizza.service");
var app_routing_module_1 = require("./app-routing.module");
var ingredient_service_1 = require("./ingredient/ingredient.service");
var contact_module_1 = require("./contact/contact.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            contact_module_1.ContactModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            pizza_detail_component_1.PizzaDetailComponent,
            pizzas_component_1.PizzasComponent
        ],
        providers: [pizza_service_1.PizzaService, ingredient_service_1.IngredientService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map