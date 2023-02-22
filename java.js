

let num = +prompt("son kiriting")
num = num % 2 == 0 ? num + 1 : num
let total = ''

for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
       let over = num - 1
       if(j == 0 || i == 0 || j == over || i == over || j == i || j == over - i){
        total += '⚪'
       }else {
        total += '⚫'
       }
        
    }
    console.log(total);
    total = ''
    
    
}
alert('console ga kiring')