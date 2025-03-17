const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const python = document.getElementById("python");
const java = document.getElementById("java");
const javascript = document.getElementById("javascript");

btn1.addEventListener("click",()=>{
btn1.classList.add("active");
btn2.classList.remove("active");
btn3.classList.remove("active");
python.style.display = "block";
java.style.display = "none";
javascript.style.display = "none";
});

btn2.addEventListener("click",()=>{
btn1.classList.remove("active");
btn2.classList.add("active");
btn3.classList.remove("active");
python.style.display = "none";
java.style.display = "block";
javascript.style.display = "none";
});

btn3.addEventListener("click",()=>{
btn1.classList.remove("active");
btn2.classList.remove("active");
btn3.classList.add("active");
python.style.display = "none";
java.style.display = "none";
javascript.style.display = "block";
});