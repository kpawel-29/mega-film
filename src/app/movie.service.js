"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_pizzas_1 = require("./mock-pizzas");
var core_1 = require("@angular/core");
var PizzaService = (function () {
    function PizzaService() {
    }
    PizzaService.prototype.getPizzas = function () {
        return Promise.resolve(mock_pizzas_1.PIZZAS);
    };
    PizzaService.prototype.getPizza = function (id) {
        return this.getPizzas()
            .then(function (pizzas) { return pizzas.find(function (pizza) { return pizza.id === id; }); });
    };
    PizzaService.prototype.changeFav = function (id) {
        this.getPizza(id)
            .then(function (pizza) {
            pizza.fav = !pizza.fav;
        });
    };
    PizzaService.prototype.setRating = function (rating, id) {
        return this.getPizza(id).then(function (pizza) {
            pizza.rating = rating;
        });
    };
    return PizzaService;
}());
PizzaService = __decorate([
    core_1.Injectable()
], PizzaService);
exports.PizzaService = PizzaService;
//# sourceMappingURL=pizza.service.js.map