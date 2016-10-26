var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GeneralStoreApp;
(function (GeneralStoreApp) {
    var Product = (function () {
        function Product(name, price, isInStock) {
            this.name = name;
            this.price = price;
            this.isInStock = isInStock;
        }
        return Product;
    }());
    var Food = (function (_super) {
        __extends(Food, _super);
        function Food(name, price, isInStock) {
            _super.call(this, name, price, isInStock);
        }
        return Food;
    }(Product));
    var Clothes = (function (_super) {
        __extends(Clothes, _super);
        function Clothes(name, price, isInStock) {
            _super.call(this, name, price, isInStock);
        }
        return Clothes;
    }(Product));
    var Toy = (function (_super) {
        __extends(Toy, _super);
        function Toy(name, price, isInStock) {
            _super.call(this, name, price, isInStock);
        }
        return Toy;
    }(Product));
    var StoreController = (function () {
        function StoreController() {
            this.foodC = [
                new Food("Kale", 1.75, true),
                new Food("Spinach", 2.00, true),
                new Food("Lettuce", .50, false)
            ];
            this.clothesC = [
                new Clothes("Itsy Bitsy Teeny Weeny Yellow Polka Dot Bikini", 65.39, false),
                new Clothes("A Pair of Socks", 2.63, true),
                new Clothes("Prom Dress", 125.36, true)
            ];
            this.toysC = [
                new Toy("Unicycle", 22.36, true),
                new Toy("Tricycle", 15.23, true),
                new Toy("Harley Davidson", 6849.26, true)
            ];
        }
        return StoreController;
    }());
    angular.module("GeneralStoreApp").controller("StoreController", StoreController);
})(GeneralStoreApp || (GeneralStoreApp = {}));
