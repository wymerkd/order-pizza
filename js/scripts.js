function Pizza(sizeInput, crustInput, sauceInput, toppings, price) {
  this.sizeInput = sizeInput;
  this.crustInput = crustInput;
  this.sauceInput= sauceInput;
  this.toppings = toppings;
  this.price;
}

Pizza.prototype.calculatePrice = function() {
  this.toppings.forEach(function(topping) {
    this.price = this.price += 1;
  })
  return this.price
  console.log(this.price);
}



$(document).ready(function() {
  $('form#order-pizza').submit(function(e) {
    e.preventDefault();
    let sizeInput = $('input[name=size]:checked').val();
    let crustInput = $('input[name=crust]:checked').val();
    let sauceInput = $('input[name=sauce]:checked').val();
    let toppings = [];
    let toppingsInput = $('input[name=toppings]:checked').each(function() {
      toppings.push($(this).val());
    });
    let userPizza = new Pizza (sizeInput, crustInput, sauceInput, toppings)
    let price = userPizza.calculatePrice();

    console.log(userPizza);
  });
});
