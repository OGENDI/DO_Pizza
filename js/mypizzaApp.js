$(document).ready(function () {
    $('#FORM').submit(function (e) { 
        e.preventDefault();
        // alert("working");
        
        
        var  pizzaCost = $('#Size').val();
        var pizzaCrustingCost= $("#PizzaCrust").val();
        var pepperon =$('#pep').val();
        var onion =$('#onion').val();
        var xCheese =$('#cheese').val();
        var bOlives =$('#olives').val();
        var sausage =$('#Sausage').val();

        let totalCost = parseInt(pizzaCost)+  parseInt(pizzaCrustingCost);
        
        // if ('input#pep:checked' == true){
        //     totalCost + parseInt(pepperon);
        //     alert(pepperon);
        // }
        alert( `Thank you for ordering from Us.Your total costs is Ksh ${ totalCost} for Pizaa and Crusting`);
        $('input:checkbox').change(function ()
            {
                var total = 0;
                $('input:checkbox:checked').each(function(){ 
                    total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
                });     
                $("#total").val(total);
            });
            alert(total);
        // alert(totalCost);
        



        
        



        // alert(pizzaCost);
        // alert(pizzaCrustingCost)
    });

});