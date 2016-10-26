namespace GeneralStoreApp {

    interface IProduct {
        name: string;
        price: number;
        isInStock: boolean;
    }

    abstract class Product implements IProduct {
        constructor(public name: string, public price: number, public isInStock: boolean) { }
    }

    class Food extends Product {
        constructor(name: string, price: number, isInStock: boolean) {
            super(name, price, isInStock);
        }
    }
    class Clothes extends Product {
        constructor(name: string, price: number, isInStock: boolean) {
            super(name, price, isInStock);
        }
    }
    class Toy extends Product {
        constructor(name: string, price: number, isInStock: boolean) {
            super(name, price, isInStock);
        }
    }

    class StoreController {
        public foodC;
        public clothesC;
        public toysC;

        constructor() {
            this.foodC = [
                new Food(`Kale`, 1.75, true),
                new Food(`Spinach`, 2.00, true),
                new Food(`Lettuce`, .50, false)
            ];
            this.clothesC = [
                new Clothes(`Itsy Bitsy Teeny Weeny Yellow Polka Dot Bikini`, 65.39, false),
                new Clothes(`A Pair of Socks`, 2.63, true),
                new Clothes(`Prom Dress`, 125.36, true)
            ];
            this.toysC = [
                new Toy(`Unicycle`, 22.36, true),
                new Toy(`Tricycle`, 15.23, true),
                new Toy(`Harley Davidson`, 6849.26, true)
            ];
        }
    }

    angular.module(`GeneralStoreApp`).controller(`StoreController`, StoreController);
}