/* Viết chương trình JavaScript thực hiện các thao tác trên mảng số nguyên. Chương trình sẽ cung cấp một menu với các chức năng:

1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
Chương trình sẽ tiếp tục chạy cho đến khi người dùng chọn thoát. */

let arr=[];
let choose=0;
do{
  choose=+prompt("MENU \n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát chương trình\n\n Lựa chọn của bạn:");
   switch(choose){
     case 1:
        let length=+prompt("Mời bạn nhập độ dài mảng");
        arr=[];
        for (let i = 0; i < length; i++) {
            arr[i]=+prompt("Mời bạn nhập phần tử thứ "+(i+1));   
        }
      break;
     case 2:
        alert(arr);
      break;
     case 3:
        let even=[];
        let odd=[];
        let indexEven=-1;
        let indexOdd=-1;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]%2==0){
               even[indexEven++]=arr[i];
            }else{
                even[indexOdd++]=arr[i];
            }
        }
        alert("Các phần tử chẵn là:"+even+" Các phần tử lẻ là: "+odd)
      break;
     case 4:
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
           sum=sum+arr[i];
        }
        alert("Tổng các phần tử trong mảng là: "+sum);
      break;
     case 5:
        let index=+prompt("Mời bạn chọn vị trí muốn xóa");
        if(index>=0&&index<arr.length){
           arr.splice(index,1);
           alert("Đã xóa thành công");
        }else{
            alert("Vị trí không tồn tại trong mảng");
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
        alert("Phần tử lớn thứ 2 trong mảng là: "+arr[arr.length-2]);
      break;
     case 7:
        alert("Chương trình kết thúc");
      break;
     default:
        alert("Lựa chọn không hợp lệ");
 }
}while(choose !==7);