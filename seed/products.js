var models = require('../models');
var Products = models.Products;
var Inventory = models.Inventory;

models.sequelize
.sync({ force: true})
.then(function(){
  Products.bulkCreate([
    {
      name: "Fritos",
      description: "The popularity of FRITOS® corn chips puts this iconic snack in a class of its own.",
      price: 0.99
    },
    {
      name: "Powerball",
      description: "Powerball® is a combined large jackpot game and a cash game.",
      price: 2.00
    },
    {
      name: "Slim Jims",
      description: "Slim Jim's meat sticks and beef jerky snacks are bold, spicy and made out of the stuff men need.",
      price: 0.99
    },
    {
      name: "Snickers",
      description: "Snickers is a brand name chocolate bar made by Mars, Incorporated. Consisting of nougat topped with caramel and peanuts, enrobed in milk chocolate.",
      price: 0.75
    }
  ])
})
.then(function(){
  Inventory.bulkCreate([
    {
      quantity: 75,
      product_id: 1
    },
    {
      quantity: 999999,
      product_id: 2
    },
    {
      quantity: 1875,
      product_id: 3
    },
    {
      quantity: 48,
      product_id: 4
    }
  ])
});