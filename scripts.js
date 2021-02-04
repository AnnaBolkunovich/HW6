//Task 1
console.log('Task 1');
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));
//Task 2
console.log('Task 2');
let str2 = '2025-12-31';
let arr2 = str2.split('-');
let newStr = arr2[2] + '/' + arr2[1] + '/' + arr2[0];
console.log(newStr);
//Task 3
console.log('Task 3');
let str3 = 'Я учу javascript!';
console.log(str3.substring(2, 6));
console.log(str3.substr(6, 10));
console.log(str3.slice(2, 6));
//Task 4
console.log('Task 4');
let arr = [4, 2, 5, 19, 13, 0, 10];
let res = 0;
for (let i = 0;i<arr.length;i++) {
    res += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(res));
//Task 5
console.log('Task 5');
let a = 3, b = 5, c = 0;
c = a-b;
console.log(Math.abs(c));
a = 6;
b = 1;
c = a-b;
console.log(Math.abs(c));
//Task 6
console.log('Task 6');
let date = new Date();
console.log(date.toLocaleString('ru'));
function getNull (num) {
    if (num>0 && num<10) {
        return '0' + num;
    } else {
        return num;
    }
}
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + 
getNull(date.getDate()) + '.' + getNull(date.getMonth() + 1) + '.' + date.getFullYear());
//Task 7
console.log('Task 7');
let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab+a/gi));
//Task 8
console.log('Task 8');
let number = '375-29-123-45-67';
let regexp = /[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/gi;
console.log(regexp.test(number));
//Task 9
console.log('Task 9');
let email = prompt('Введите email');
let exp = /[0-9a-zA-Z]{2, 50}@[a-zA-Z]{2, 30}.[a-z]{2, 11}/gi;
console.log(exp.test(email));