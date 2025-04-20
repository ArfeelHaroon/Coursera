// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark"
// company.ceo.favColor = "Blue"

// console.log(company);
// console.log(company["ceo"]);

// // company.stock = 110;
// // console.log("stock price is: " + company.stock);
// company["stock of the company"] = 110;
// var StockPropName = "stock price is:"
// console.log(StockPropName + company["stock of the company"]);

// Better way object literal
var facebook = {
    name: "Facebook",
    ceo: {
        firstname: "Mark",
        favColor:  "Blue"
    },
    "stock price is: ": 110
};

console.log(facebook)