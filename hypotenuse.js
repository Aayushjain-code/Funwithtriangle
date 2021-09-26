const sideInput  = document.querySelector('.side-input')
const hypotenuseBtn  = document.getElementById('#result_section')
const outputDiv  = document.getElementById('#submit_button')




ffunction calculateHypotenuse(){
    var a = Number(sideInput[0].value);
    var b = Number(sideInput[1].value);
    if(a == 0 || b == 0){
        outputDiv.innerText = "Please Enter all required fields 🧐";
    }
    else if(a < 0 || b < 0){
        outputDiv.innerText = "Please Enter positive values only 😐";
    }
    else{
    var sumOfSquares = a**2 +b**2;
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputDiv.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
    }
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);
