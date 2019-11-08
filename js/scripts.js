function Pizza(size, crust, sauce, toppings) {
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
  this.toppings = toppings,
  this.price = 0
}



$(document).ready(function() {
  $('form#order-pizza').submit(function(e) {
    e.preventDefault();
    let sizeInput = $('input[name=size]:checked').val();
    let crustInput = $('input[name=crust]:checked').val();
    let sauceInput = $('input[name=sauce]:checked').val();
    let toppingsInput = $('input[name=toppings]:checked').each(function() {
      toppings.push($(this).val());
    });
    let userPizza = new Pizza (sizeInput, crustInput, sauceInput, toppings)
    let price = userPizza.calculatePrice();
    console.log(sizeInput, crustInput, sauceInput, toppings)
  });
});
