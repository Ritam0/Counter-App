// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
      displayValue.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
});
incrementBtn.addEventListener("click", () => {
    const value =Number(displayValue.innerText);
    if(value<100){
        displayValue.innerText=value+1;
    }else{
        alert("greater than 100 value is not allowed")
    }
});
resetBtn.addEventListener("click",()=>{
    displayValue.innerText=0;
});