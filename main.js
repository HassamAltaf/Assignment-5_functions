function logFruit_Vegetable_Name(fruitName, vegetableName) {
    console.log(fruitName, vegetableName);
}
logFruit_Vegetable_Name("Mango", "Potato");
var carName = "BMW";
function logCarName() {
    console.log(carName);
}
logCarName();
function logitems(MobileBrand, BikeBrand, LaptopBrand, Bookname, Calculator) {
    console.log(MobileBrand, BikeBrand, LaptopBrand, Bookname, Calculator);
}
logitems("Honor 90_", "Crown_", "Lenovo_", "Essential TpyeScript 5_", "Scientific Calculator");
//Class Task
function omelette(salt, butter) {
    if (salt === void 0) { salt = 1; }
    if (butter === void 0) { butter = 3; }
    var cooked = salt + butter + 1;
    return cooked;
}
var order = omelette(undefined, 4);
console.log(order);
