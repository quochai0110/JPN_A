/* 
Viết chương trình JavaScript hiển thị một menu để thực hiện các thao tác trên mảng số nguyên. 
Chương trình cho phép người dùng nhập một mảng số nguyên, sau đó thực hiện các chức năng sau:

1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
Chương trình chạy liên tục cho đến khi người dùng chọn thoát.
 */
let arr = [];
let choice = 0;
do{
    choice = parseInt(prompt("Nhập lựa chọn của bạn"));
    switch (choice) {
        case 1:
            let input = +prompt("nhập số lượng phần tử")
            if(Number.isInteger(input) && input > 0){
                for(let i =0; i < input ; i++){
                    let numb = +prompt(`nhập phần tử thứ ${i +1}`)
                    arr.push(numb);
                }
            }
            break;
        case 2:
            console.log(`array = ${arr}`);
            break;
        case 3:
            let min = arr[0];
            let max = 0;
            for(let i = 0; i < arr.length; i++){
                if(arr[i]> max){
                    max = arr[i];
                }
            }
            console.log(`so lon nhat trong mang la ${max}`);
            for(let i = 1; i < arr.length; i++){
                if(arr[i]<min){
                    min = arr[i];
                }
            }
            console.log(`so nho nhat trong mang la ${min}`);
            break;
        case 4:
            let sum = 0;
            for(let i = 0; i <arr.length; i++){
                sum += arr[i];
            }
            console.log(`tong cac phan tu la: ${sum}`);
            break;
        case 5:
            let num = +prompt("nhap phan tu muon tim: ");
            let flag = 0;
            for(let i =0; i < arr.length;i++){
                if(arr[i] == num){
                    flag++;
                }
            }
            if(flag){
                console.log(`phan tu ${num} xuat hien ${flag} lan`);
            }else{
                console.log(`phan tu ${num} khong ton tai trong mang`);
            }
            break;
        case 6:
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr.length-1-i ; j++){
                    if(arr[j + 1]< arr[j]){
                        let temp = arr[j +1];
                        arr[j + 1] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log(`mang sau khi da sap xep: array = ${arr}`);
            break;
        default:
            break;
    }
}while(choice !== 7);