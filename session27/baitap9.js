/* 
Viết một function nhận vào tham số là một mảng gồm 
các phần tử cho trước, 
hàm sẽ sắp xếp các số chẵn tăng dần và giữ nguyên vị trí số lẻ.
input: [4,6,5,8,1,2]
output: [2,4,5,6,1,8];

B1: tạo 1 mảng chứa các phần tử chẵn evenArr=[ 4, 6, 8, 2]
B2: sắp xếp mảng các số chẵn  [2,4,6,8]
B3: let count=0;
*/
let test_case1=[4,6,22,5,8,1,2]; // [2,4,6,8,22] // [2,4,6,5,8,1,22]
let test_case2=[3,4,5,18,11,2]; //[ 3,2,5,4,11,18]
let test_case3="abc";

 function updatePosition(arr){
     if(Array.isArray(arr)){
        let evenArr=  arr.filter(item=>item%2==0);
        console.log("mảng các số chẵn",evenArr);
        // tiến hành sắp xếp mảng số chẵn
        for (let i = 0; i < evenArr.length-1; i++) {
            for (let j = 0; j < evenArr.length-i-1; j++) {
                if(evenArr[j]>evenArr[j+1]){
                    let temp= evenArr[j];
                    evenArr[j]=evenArr[j+1];
                    evenArr[j+1]=temp;
                }
            }
        }
        console.log("mảng đã được sắp xếp",evenArr);
        let count=0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]%2==0){
                arr[i]=evenArr[count];
                count++;
            }
            
        }
        console.log("mảng sau khi đã sắp xếp các phần tử chẵn tăng dần",arr);
        
        
        
     }else{
        console.log("Dữ liệu không hợp lệ");
        
     }
 }
//  updatePosition(test_case1);
//  updatePosition(test_case2);
 updatePosition(test_case3);

