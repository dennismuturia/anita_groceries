$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    var gross = ['veg1', 'veg2', 'veg3', 'veg4'];
    var array_items = []

    gross.forEach(function(gros) {
      var customer = $('input#' + gros).val().toUpperCase()
      $(array_items.push(gros))
      alert(array_items)
    //  $('.' + gros).text(customer);
    })
    event.preventDefault();
  })
})
