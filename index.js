
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

// claudet edn 


// this is fun 
function play() {
  var audio = new Audio('voice/habiba (1).mp4');
  audio.play();
}

function sharif() {
  var audio = new Audio('voice/shariful.m4a');
  audio.play();
}


function habiba() {
  var audio = new Audio('voice/habiba (2).mp4');
  audio.play();
}



