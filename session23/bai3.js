//Viết chương trình nhập vào n là số phần tử của mảng, thực hiện nhập các phần tử vào mảng và đếm số nguyên âm trong một mảng và in kết quả ra màn hình
let arr = [];
let count = 0;
let loop = +prompt("Mời bạn nhập số phần tử của mảng");
for(let i = 0;i<loop;i++){
    let number = +prompt("Mời bạn nhập vào giá trị");
    arr.push(number);
    if(number<0){
        count++;
    }
}
if(count>0){
    console.log(number);
}
if(count==0){
    console.log("Không có phần tử nào trong mảng");
}