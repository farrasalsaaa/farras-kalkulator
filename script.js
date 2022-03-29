function insert(num){
    document.form.hasil.value = document.form.hasil.value+num;
}

var equal = () => {const exp = document.form.hasil.value;
    if(exp){
        document.form.hasil.value = eval(exp);}
}
var clean = () => {document.form.hasil.value = "";}

var back = () => {const exp = document.form.hasil.value;
    document.form.hasil.value = exp.substring(0, exp, length-1);
}