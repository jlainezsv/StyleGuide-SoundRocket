// increase/decrese input

function less(inputId) {
    var qty = document.getElementById(inputId);
    var currentVal = parseInt(qty.value);
    if(currentVal <= 0){

    }else{
        document.getElementById(inputId).value = currentVal - 1;
    }
}

function add(inputId) {
    var qty = document.getElementById(inputId);
    var currentVal = parseInt(qty.value);
    if (!isNaN(currentVal)) {
        document.getElementById(inputId).value = currentVal + 1;
    }
}
