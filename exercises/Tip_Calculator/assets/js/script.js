$("#tip-amount").val('0.00'); 
$("#total").val('0.00');
$("#tip-per-person").val('0.00');
$("#total-per-person").val('0.00');

$("input").on("change paste keyup", () => {
    const bill = parseFloat($("#bill").val());
    const tip = parseFloat($("#tip").val());
    const numPeople = parseInt($("#num-people").val());

    function tipAmount(bill, tip){
        let tipAmount = bill * tip/100;

        if(isNaN(bill) || isNaN(tip)){
            return tipAmount = 0;
        }else{
            return tipAmount;
        }
    }
    function total(bill, tipAmount){
        let total = bill + tipAmount;

        if(isNaN(bill)){
            return total = 0;
        }else{
            return total;
        }
    }
    function tipAmountPerPerson(tipAmount, numPeople){
        let tipAmountPerPerson = tipAmount / numPeople;
        
        if(isNaN(numPeople) || numPeople === 0){
            return tipAmountPerPerson = 0;
        }else{
            return tipAmountPerPerson;
        }
    }
    function totalPerPerson(total, numPeople){
        let totalPerPerson = total / numPeople;

        if(isNaN(numPeople) || numPeople === 0){
            return totalPerPerson = 0;
        }else{
            return totalPerPerson;
        }
    }

    var tipAmount = tipAmount(bill, tip);
    var total = total(bill, tipAmount);
    var tipAmountPerPerson = tipAmountPerPerson(tipAmount, numPeople);
    var totalPerPerson = totalPerPerson(total, numPeople);

    $("#tip-amount").val(tipAmount.toFixed(2)); 
    $("#total").val(total.toFixed(2));
    $("#tip-per-person").val(tipAmountPerPerson.toFixed(2));
    $("#total-per-person").val(totalPerPerson.toFixed(2));
});