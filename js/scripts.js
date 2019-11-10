function Pizza(sizeInput, crustInput, sauceInput, toppings, price) {
  this.sizeInput = sizeInput;
  this.crustInput = crustInput;
  this.sauceInput= sauceInput;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  for (var i = 0; i < this.toppings.length; i++) {
    this.price += 1;
  } if (this.sizeInput === 'small') {
    this.price += 8;
  } else if (this.sizeInput === 'medium') {
    this.price += 10;
  } else if (this.sizeInput === 'large') {
    this.price += 12;
  } else {
    return this.price
  }
  console.log(this.price)
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

    $('#order-size').html(userPizza.sizeInput);
    $('#order-crust').html(userPizza.crustInput);
    $('#order-sauce').html(userPizza.sauceInput);
    $('#order-toppings').html(userPizza.toppings.toString());
    $('#order-price').html(userPizza.price);

    $("#second-order").slideToggle();
    $('#order-summary').slideToggle();

    console.log(userPizza);
  });
  $(function() {
  $("#nextButton").click(function() {
    $("#first-order").slideToggle();
    $("#second-order").slideToggle();
  });
  $(function() {
  $("#backButton").click(function() {
    $("#second-order").slideToggle();
    $("#first-order").slideToggle();
  });
  });
  });
});
