
var text = "Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль."

function getVowels(text){
    const glasn = ['а','у','о','и','э','ы'];    
    let res='';
    for(let a=0; a<text.length; a++){
        for(let b=0;b<glasn.length;b++){
            if (text[a]==glasn[b]) res=res+text[a];
        }        
    }
    return res;
}

console.log(text); 
console.log("Результат:"); 
console.log(getVowels(text)); 


text = "Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000."

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

function getWorthyWorkers(arr, min_salary){
    let res=[];
   for(let i=0; i<arr.length;i++) {
    if(arr[i].salary>min_salary){
        res[res.length]=arr[i].name;
    }
   }
   return res;
}

console.log(text); 
console.log("Результат:"); 
console.log(getWorthyWorkers(workers,1000))

text="Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.";

const path1 = "/users/download/index.html"
const path2 = "/users/download/index.htm"


function isHtml(path){
    const ext = '.html';
    let res='';
    for(let i=0; i<path.length;i++) {
        for(let x=0; x<ext.length;x++) { 
           if  (path[i+x]!=ext[x]) break;
             else res=res+ext[x];
        }
    }
    // return res;
    if (res===ext) return true; else return false;
}

console.log(text); 
console.log("Результат для "+path1+" :"); 
console.log(isHtml(path1));
console.log("Результат для "+path2+" :"); 
console.log(isHtml(path2));


text='Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.';

const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => { if (num%2>0) return false; else return true };

function filterArray(arr, func_even){
     let res = [];
    for(let i=0; i<arr.length;i++) {
        if(func_even(arr[i]))
             res[res.length]=arr[i];
            //  console.log(res);
    }
    return res;
}

console.log("Результат:"); 
// console.log(isEven(74)); 
console.log(filterArray(mixedArray, isEven));

