$(document).ready(function() {
  $('form#order-pizza').submit(function(e) {
    e.preventDefault();
    let sizeInput = $('input[name=size]:checked').val();
    let crustInput = $('input[name=crust]:checked').val();
    let sauceInput = $('input[name=sauce]:checked').val();
    let toppingsInput = $('input[name=toppings]:checked').each(function() {
      toppings.push($(this).val());
    });
    console.log(sizeInput, crustInput, sauceInput, toppings)
  });
});
