/* 
    NHẬP N IN RA N SỐ NGUYÊN TỐ

*/
let number= +prompt("mời nhập số lượng số nguyên tố cần in ra");
let count=0; // đếm số lượng số nguyên tố
let num=1;
while (count<number) {
    let countPrime=0;
    for (let i = 1; i <=num; i++) {
        if(num%i==0){
            countPrime++;
        }
    }
    if(countPrime==2){
        console.log(`${num} là số nguyên tố`);
        count++;
    }
    num++;

    // kiểm tra là số nguyên tố thì count++
}