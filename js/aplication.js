const num1= document.getElementById('num1');
const num2= document.getElementById('num2');
const soma= document.getElementById('soma');
const sub= document.getElementById('sub');
const mult= document.getElementById('mult');
const div= document.getElementById('div');
const result = document.querySelector('#box-res');
const ti = document.querySelector('h1');



soma.addEventListener('click', function(){
ti.innerHTML = "entrou na função de somar";
let n1 = parseInt (num1.value);
let n2 = parseInt (num2.value);
let res = n1 + n2;
result.innerHTML = "<p>"+res+"</p>";
console.log(res);

});
sub.addEventListener('click', function(){ 
ti.innerHTML = "entrou na função subtrair";
let n1 = num1.value
let n2 = num2.value
let res = n1-n2;
result.innerHTML = "<p>"+res+"</p>";
console.log(res);

});
mult.addEventListener('click', function(){
ti.innerHTML = "entrou na função de Multiplicar";
let n1 = num1.value
let n2 = num2.value
let res = n1*n2;
result.innerHTML = "<p>"+res+"</p>";
console.log(res);

});

div.addEventListener('click', function(){
ti.innerHTML = "entrou na função de dividir";
let n1 = num1.value
let n2 = num2.value
let res = n1/n2;
result.innerHTML = "<p>"+res+"</p>";
console.log(res);

});