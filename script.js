

function myFunction(){
    let name1=document.getElementById("name").value;
    let number=document.getElementById("marks").value;
    if(number>100){
        alert("Dear " +name1+ "!" + " Please put value which is less than 100");
        document.write("Dear " +name1+ "!" + " Please put value which is less than 100");
    }
    else if(number<0){
        alert("Dear " +name1+ "!" + " Please put value which is greater than 0");
        document.write("Dear " +name1+ "!" + " Please put value which is greater than 0");
    }
    else if(number<33){
        alert("Dear " +name1+ "!" + " Sorry You are Fail");
        document.write("Dear " +name1+ "!" + " Sorry You are Fail");
    }
    else if(number>34 && number<77){
        alert("Dear " +name1+ "!" + " Good Result");
        document.write("Dear " +name1+ "!" + " Good Result");
    }
    else if(number>77 && number<100){
        alert("Dear " +name1+ "!" + " Excellent Result");
        document.write("Dear " +name1+ "!" + " Excellent Result");
    }
}
