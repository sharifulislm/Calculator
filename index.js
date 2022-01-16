
var resultfield = $("#result");

function innerNumber(number){
    var existingNumbers =  resultfield.val();
 
    resultfield.val(existingNumbers + number)
}
function clearresult(){
    resultfield.val('')
}
function calculate(){
  var result = eval(resultfield.val())
  resultfield.val(result)
}
function deletenumber(){
var lastvalue = resultfield.val();
if (lastvalue!='')
resultfield.val(lastvalue.slice(0,-1));
}


