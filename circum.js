

function circumCalc(cirucm, degrees){
    return (cirucm)*(degrees/360);
}
function displayBinary() {

    let circumfrance  = document.getElementById('circumfrance').value;
    let degrees  = document.getElementById('degrees').value;

    let userOutput = document.getElementById('binaryText');
    userOutput.innerHTML =circumCalc(circumfrance, degrees)+ " millimeters";
}