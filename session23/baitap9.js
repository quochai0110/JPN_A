/* 
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần từ vào vị trí chỉ định
8. Thoát

*/
let choise; // khởi tạo biến lưu trữ giá trị người dùng nhập lựa chọn
let numbers=[]; // khởi tạo mảng
do {
    choise= +prompt("mời bạn nhập lựa chọn");

    switch (choise) {
        case 1:
            // nhập số lượng phần tử và giá trị để thêm vào mảng.
            let n= +prompt("mời nhập số lượng phần tử");
            for (let i = 0; i < n; i++) {
                numbers[i]= +prompt(`mời nhập phần tử thứ ${i+1}`);
            }
            break;
        case 2:
            // in ra các phần tử của mảng
            // alert(443434344);
            for (let i = 0; i < numbers.length; i++) {
                console.log(`phần tử numbers[${i}]= ${numbers[i]}`);
                
            }
            break;
        case 3:

            // in ra phần tử chẵn và tính tổng các phần tử chẵn
            for (let i = 0; i < numbers.length; i++) {
                if(numbers[i]%2==0){
                console.log(`phần tử ${numbers[i]} là số chẵn`);
                }
            }
            break;
        default:
            break;
    }

} while (choise!=8);

