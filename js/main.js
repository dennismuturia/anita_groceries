
$(document).ready(function(){
  $("form#groceries").submit(function(event){
      var gross = ['veg1','veg2','veg3','veg4'];

      gross.forEach(function(gros){
        var customer = $('input#'+ gros).val()
        $('.'+gros).text(customer);
      })
      event.preventDefault();
  })
})
