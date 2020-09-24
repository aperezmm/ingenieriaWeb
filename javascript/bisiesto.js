function leapYear(){

    let year = document.getElementById("year").value

    if(year > 0){
        if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
            result = "El año ingresado es bisiesto"
        }else{
            result = "El año ingresado no es bisiesto"
        }
    }else{
        result = "El año ingresado no es valido";
    }
   
    console.log(result);
    document.getElementById('displayYear').innerHTML = result;
    
}

