$(document).ready(function(){
    $('#tipAmount').click(function() {
        let selValue = $('input[name=tipPercent]:checked').val(); 
        let total = $("#amountofbill").val() * selValue / $("#totalpplsplitting").val();
       total = Math.round(total*100)/100;
       total=total.toFixed(2);
        alert ('Tip Your Waiter :' + "" + "$" + total);
    })
    
})
function Reset(){
    document.getElementById("amountofbill").value = "";
    document.getElementById("totalpplsplitting").value = "";
    document.getElementById("tip").value = "";
    let ele = document.getElementsByName("tipPercent");
   for(var i=0;i<ele.length;i++)
      ele[i].checked = false;

}
