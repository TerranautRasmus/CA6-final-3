var myApp = angular.module('DemoApp', ['ngRoute']);

// Route provider start
myApp.config(function ($routeProvider) {
    $routeProvider
            .when("/AllCars", {
                templateUrl: "views/allCars.html",
                controller: "CarController"
            })
            .when("/AddCar", {
                templateUrl: "views/addCar.html",
                controller: "CarController"
            })
            .when("/AddCar:id", {
                templateUrl: "views/addCar.html",
                controller: "CarController"
              })
            .otherwise({
                redirectTo: '/AllCars'
            });
});
// Route provider end

myApp.factory('CarFactory', function () {
    var cars = [
        { id: 1, year: 1997,registered: new Date(1999,3,15), make: 'Ford',model: 'E350', description: 'ac, abs, moon', price: 3000 },
        { id: 2, year: 1999,registered: new Date(1996,3,12), make: 'Chevy', model: 'Venture', description: 'None', price: 4900 },
        { id: 3, year: 2000,registered: new Date(1997,12,22), make: 'Chevy', model: 'Venture', description: '', price: 5000 },
        { id: 4, year: 1996,registered: new Date(2002,3,15), make: 'Jeep', model: 'Grand Cherokee',description: 'Moon roof',price: 4799 }
    ];
    
    var nextId = 5;
    
    // Get Cars
    var getCars = function () {return cars;};
    
    // Delete Car - splice
    var deleteCar = function (id) {
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                cars.splice(i, 1);
                return;
            }
        }
    };
     
    // Add/Edit Car - push
    var addEditCar = function(newcar){
        if (newcar.id == null) {
            newcar.id = nextId++;
            cars.push(newcar);
        } else {
            for (var i = 0; i < cars.length; i++) {
                if (cars[i].id === newcar.id) {
                    cars[i] = newcar;
                    break;
                }
            }
        }
    };
    
    return {
        getCars: getCars,
        deleteCar: deleteCar,
        addEditCar: addEditCar
    };
});

// Controllers bliver defineret

myApp.controller('MainController', [function () {
    var mainSelf = this;
    mainSelf.title = ""; // Title: Cars Demo App
}]);

myApp.controller('CarViewController', ["CarFactory", function (CarFactory) {
    var self = this;    
    self.title = "Cars Demo App";
    self.cars = CarFactory.getCars();
    self.predicate = "year";
    self.reverse = false;
    
    // Delete car
    self.delete = function(id) {
        CarFactory.deleteCar(id);
    };
}]);

myApp.controller('CarController', ["CarFactory", "$routeParams", function (CarFactory, $routeParams, $location) {
    var self = this;

    // Add car
    self.add = function () {
        CarFactory.addEditCar(self.newCar);
        self.newCar = {};
    };
    
    // Edit car
    // anuglar.copy - kopierer object så man ikke retter i det bindende objekt (dvs. alle de steder hvor objektet bliver vist).
    if(angular.isDefined($routeParams.id)) {
        var cars = CarFactory.getCars();
        for(var i in cars) {
            if(cars[i].id == $routeParams.id) {
                self.newCar = angular.copy(cars[i]);
            }
        }
    }
}]);

