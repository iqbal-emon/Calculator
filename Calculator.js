var input = document.getElementById("iptBox");
// console.log(input.value)
var btn = document.querySelectorAll("button");
btn.forEach(function (button) {
    button.addEventListener("click", showResult);
    
});

var equal = document.getElementById("equal");
equal.addEventListener("click", result);

function result() {
    try {
        iptBox.value = Calculate(iptBox.value);
        // console.log(iptBox.value);
    } catch (error) {
        iptBox.value = "error";
        console.error(error);
    }
}

function Calculate(e) {
    var array = [];
    var count=0
    for (var i = 0; i < e.length; i++) {
        if (e[i] == "+" || e[i] == "-" || e[i] == "*"||e[i]=="/") {
            
            array.push(e[i]);
            count++;
        }
       
    }

   


    console.log("count"+count);
    
    const operators = e.split(/[+\-\/\*]/);
    console.log(operators);
    var j = 0;
    var result = parseFloat(operators[j]);
    // console.log("what");
    for (var i = 0; i <=count; i++){
       
        if (array[i]==='+') {
            // console.log("hello")
            result = result + parseFloat(operators[j +1]);
          console.log("result" + result);
            j++;
        }
        //0+1 
    else if (array[i] ==="-") {
            result = result - parseFloat(operators[j + 1]);
            console.log("result" + result);
            j++;
        }
       if (array[i] ==="*") {
            result = result * parseFloat(operators[j + 1]);
           j++;
            console.log("result" + result);
        }
     if (array[i] === "/") {
            result = result / parseFloat(operators[j + 1]);
         console.log("result" + result);
        }
        




    }
    return result;
    
   

}








function showResult(e) {
    iptBox.value += e.target.value;
    
}

//  if ((button.value = "=")) {
//    console.log("button");
//  }