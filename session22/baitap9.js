// Viết chương trình khai báo mảng số nguyên gồm 10 phần tử cho 
// sẵn. Tiến hành loại bỏ những phần tử trùng nhau trong mảng, 
// hiển thị kết quả mảng sau khi đã loại bỏ phần tử trùng nhau 
// theo thứ tự tăng dần.
let arr = [11,22,1,7,1,1,8,6,2,2,7];
for (let i =0;i<arr.length;i++){
    for(let j =i+1; j < arr.length; j++){
        if(arr[j]==arr[i]){
            arr.splice(j,1);
            j--;
        }

    }
}
for(let i =0 ;i <arr.length;i++){
    for(let j=0;j<arr.length -1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);