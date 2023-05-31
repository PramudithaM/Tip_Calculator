function result(price,service,pepols){
    var price = parseFloat(document.getElementById('bill_amount').value);
    console.log("PRICE : " + price  );
    var service = parseFloat(document.getElementById('service').value);
    console.log("SERVICE : " + service  );
    var pepols = parseFloat(document.getElementById('tip_amount').value);
    console.log("PEOPLS :" + pepols  );

    //percentage of serice
    var percentage_of_service = service /100
    console.log("percentage_of_service :"+ percentage_of_service);

    // Calculate tip and total amount
    var tip_amount = price * percentage_of_service;
    console.log("Tip Amount :" + tip_amount);

    var total_amount = price + tip_amount;
    console.log("Total Amount :" + total_amount);


    // Calculate amount per person
    var cal  = total_amount / pepols
    console.log("Calculation :" + cal);
    return cal;
}

function calculate(){
    console.log("calculate method"+result());
    var top_message = "TOTAL AMOUNT" ;
    var amount =  result() ;
    var  thnks = "THANK YOU...!";

    var top_massage_Element = document.getElementById("total");
    top_massage_Element.innerHTML = top_message;
    var amount_Element = document.getElementById("amount");
    amount_Element.innerHTML = amount;
    var thnks_Element = document.getElementById("thank");
    thnks_Element.innerHTML = thnks;
}