// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 
// phần tử khác nhau. Chương trình hiển thị ra được phần tử có 
// giá trị lớn nhất trong mảng và vị trí của phần tử đó
let arr = [];

for (i = 0; i < 10; i++) {
    let in_put = Number(prompt(" moi ban nhap cac so vao mang thuoc vi tri  " + (i + 1)));
    arr.push(in_put);
}
let max = arr[0];
for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
        max = arr[j];
    }
}
console.log(max);