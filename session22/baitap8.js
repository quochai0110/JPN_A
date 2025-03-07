/* 
    YÊU CẦU IN RA PHẦN TỬ CÓ SỐ LẦN XUẤT HIỆN NHIỀU NHẤT
    NẾU CÓ CÙNG SỐ LẦN NHIỀU NHẤT TRẢ VỀ PHẦN TỬ NHỎ NHẤT
    let arr=[4,2,5,7,4,1,8,6,2,5,7];

    B1: thầy dùng for lồng duyệt qua các phần trong mảng
    B2: đếm số lượng xuất hiện của từng phần tử
    B3: tạo biến maxCout lưu giá trị lớn nhất
    B4: tạo biến lưu giá trị nhỏ nhất
*/
let arr=[9,4,2,4,5,7,4,1,8,6,2,5,7];
let maxCount=0;
let minElement;
for (let i = 0; i < 12; i++) {
    let count=0;
    for (let j = 0; j < 12; j++) {
       if(arr[i]==arr[j]){
        count++;
       }
    }
    if(count>maxCount){
        maxCount=count;
        minElement=arr[i];//4
    }else if(count==maxCount &&minElement>arr[i]){
        minElement=arr[i];
    }
    // sau khi 9 count=1
    // sau khi 4 count=2
}
console.log(minElement);
