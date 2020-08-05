function delivery(){
    document.getElementById('deliveryinfo').style.display = 'block';
}

function online(){
    document.getElementById('payment').style.display = "block";
}

function pickup(){
    document.getElementById('deliveryinfo').style.display = "table-column";
}

function ondelivery(){
    document.getElementById('payment').style.display = "none";
}

function getInfo(){
    var address = document.getElementById('deliveryaddress').value;
    var suburb = document.getElementById('deliverysuburb').value;
    var postal = document.getElementById('deliverycode').value;

    document.getElementById('billaddress').value = address;
    document.getElementById('billsuburb').value = suburb;
    document.getElementById('billcode').value = postal;
}

function blankInfo(){
	document.getElementById('billaddress').value = "";
    document.getElementById('billsuburb').value = "";
    document.getElementById('billcode').value = "";
}
function verify(){
    var postal = document.getElementById('deliverycode').value;
    var billpostal = document.getElementById('billcode').value;
    var pizzaorder = document.getElementById('order').value;
    var cuname = document.getElementById('cuname').value;
    var cuemail = document.getElementById('cuemail').value;
    var cunumber = document.getElementById('cunumber').value;
    var cardname = document.getElementById('cardname').value;
    var cardnumber = document.getElementById('cardnumber').value;
    var ccv = document.getElementById('ccv').value;
    var deliveryactive = document.getElementById('delivery');
    var cardactive = document.getElementById('payonline');

    var error = new Array();

    if(deliveryactive.checked && postal.length != 4){
        error.push("Error: Delivery Postal Code is wrong!!!");
    }

    if(cardactive.checked){
        if(cardname == "")
            error.push("Error: Card name must not be empty!!!");
        if(cardnumber == "")
            error.push("Error: Card Number must not be empty!!!");
        if(ccv == "")
            error.push("Error: CCV must not be empty!!!");
    }
    
    if(deliveryactive.checked == false && cardactive.checked == false){
        error.push("Error: Payment method is not selected!!!");
    }
    
    if(billpostal.length != 4){
        error.push("Error: Billing Postal Code is wrong!!!");
    }

    if(pizzaorder == ""){
        error.push("Error: Pizza Order is empty!!!");
    }

    if(cuname == ""){
        error.push("Error: Customer Name is empty!!!");
    }

    if(cuemail == ""){
        error.push("Error: Customer Email is empty!!!!");
    }

    if(cunumber == ""){
        error.push("Error: Customer Contact Number is empty!!!");
    }

    if(error.length > 0){
        alert(error.join("\n"));
    }
    else{
        alert("Your Order Has been Placed");
        window.location.href = "index.html"
    }

}