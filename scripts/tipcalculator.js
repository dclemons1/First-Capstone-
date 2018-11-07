$(document).ready(function(){
    $('#tipAmount').click(function() {
        let selValue = $('input[name=tipPercent]:checked').val(); 
        let total = $("#amountofbill").val() * selValue / $("#totalpplsplitting").val();
       total = Math.round(total*100)/100;
       total=total.toFixed(2);
        alert ('Tip Your Waiter :' + "" + "$" + total);
    });
});

    

