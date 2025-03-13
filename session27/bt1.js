/* 
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.
*/
let choice;
do {
    choice=+prompt(`
        1.Cộng hai số.
        2.Trừ hai số.
        3.Nhân hai số.
        4.Chia hai số.
        5.Thoát.
        `)
        
    switch (choice) {
        case 1:
console.log(tong(input()));
            break;
        case 2:
            console.log(hieu(input()));
            break;
        case 3:
            console.log(nhan(input()));
            break;
        case 4:
            console.log(chia(input()));
            break;
    
        default:
            console.log(`thoat`);
            
            break;
    }
} while (choice != 5);

function tong(arr){
    return arr[0]+arr[1]
}
function hieu(arr){
    return arr[0]-arr[1]
}
function nhan(arr){
    return arr[0]*arr[1]
}
function chia(arr){
    if (arr[1]==0) {
        console.log(`phep chia cho 0 khong hop le`);
        return;
    }
    return arr[0]/arr[1]
}
function input(){
    a=+prompt(`mời bạn nhập số a`);
    b=+prompt(`moi ban nhap so b`);
    return [a,b];
}

