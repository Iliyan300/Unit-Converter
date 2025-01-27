
const meter = 3.281; // feet
const foot = 0.3048; // meter
const liter = 0.264; // gallon
const gallon = 3.785; // liters
const kilogram = 2.204; // pound
const pound = 0.453; // kilogram

const length_P = document.querySelector(".length-section p");
const volume_P = document.querySelector(".volume-section p");
const mass_P = document.querySelector(".mass-section p");
const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("value-box");

convertBtn.addEventListener("click", function() {
    
    let inputValue = Number(input.value);
    
    
    length_P.innerHTML = `${inputValue}</strong> meters = ${(inputValue * meter).toFixed(3)} feet | ${inputValue} feet = ${(foot * inputValue).toFixed(3)} meters`
   
    volume_P.innerHTML = `${inputValue} liters = ${(inputValue * liter).toFixed(3)} gallons | ${inputValue} feet = ${(gallon * inputValue).toFixed(3)} liters`
    
    mass_P.innerHTML = `${inputValue} kilograms = ${(inputValue * kilogram).toFixed(3)} pounds | ${inputValue} pounds = ${(pound * inputValue).toFixed(3)} kilograms`
    
    length_P.classList.add("animate");
   
});