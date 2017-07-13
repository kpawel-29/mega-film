"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var pizza_service_1 = require("./pizza.service");
var ingredient_service_1 = require("./ingredient/ingredient.service");
var PizzaDetailComponent = (function () {
    function PizzaDetailComponent(pizzaService, ingredientService, route, location) {
        this.pizzaService = pizzaService;
        this.ingredientService = ingredientService;
        this.route = route;
        this.location = location;
    }
    PizzaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.pizzaService.getPizza(+params['id']); })
            .subscribe(function (pizza) {
            _this.pizza = pizza;
            _this.ingredientService.getIngredients()
                .then(function (ingredients) {
                _this.ingredients = ingredients;
                for (var i = 0; i < ingredients.length; i++) {
                    if (_this.pizza.ingredients.indexOf(ingredients[i].name) != -1) {
                        _this.ingredients[i].active = true;
                    }
                }
            });
        });
    };
    PizzaDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PizzaDetailComponent.prototype.edit = function () {
        var ingredients = this.ingredients;
        for (var i = 0; i < ingredients.length; i++) {
            if (this.pizza.ingredients.indexOf(ingredients[i].name) != -1) {
                this.ingredients[i].active = true;
            }
        }
    };
    PizzaDetailComponent.prototype.setFav = function (pizza) {
        this.pizzaService.changeFav(pizza.id);
    };
    PizzaDetailComponent.prototype.getColor = function (pizza) {
        return (pizza.fav) ? 'red-text' : 'gray-text';
    };
    // getChecked(ing: Ingredient): string {
    //   return (this.pizza.ingredients.indexOf(ing.name) != -1) ? 'checked' : '';
    // }
    //
    // isActive(ing: Ingredient): string {
    //   return (this.pizza.ingredients.indexOf(ing.name)) != -1 ? 'active' : '';
    // }
    PizzaDetailComponent.prototype.saveIngredient = function (ingredient) {
        if (this.pizza.ingredients.indexOf(ingredient.name) == -1) {
            this.pizza.ingredients.push(ingredient.name);
        }
        else {
            var index = this.pizza.ingredients.indexOf(ingredient.name);
            this.pizza.ingredients.splice(index, 1);
        }
    };
    return PizzaDetailComponent;
}());
PizzaDetailComponent = __decorate([
    core_1.Component({
        selector: 'pizza-detail',
        templateUrl: './pizza-detail.component.html',
        styleUrls: ['./pizza-detail.component.css']
    }),
    __metadata("design:paramtypes", [pizza_service_1.PizzaService,
        ingredient_service_1.IngredientService,
        router_1.ActivatedRoute,
        common_1.Location])
], PizzaDetailComponent);
exports.PizzaDetailComponent = PizzaDetailComponent;
//# sourceMappingURL=pizza-detail.component.js.map