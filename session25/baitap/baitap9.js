/*
Khai báo mảng chứa tất cả tài khoản người dùng, let users= [];

Viết chương trình cho người dùng nhập vào tài khoản email muốn đăng ký,
chương trình sẽ tiến hành thêm tài khoản email  hợp lệ vào trong mảng users:

email hợp lệ phải chứa ký tự @ và kết thúc phải là .com hoặc .vn
Nếu tài khoản chưa tồn tại thêm tài khoản vào trong mảng và hiển thị đăng ký thành công!
Nếu tồn tại rồi hiển thị thông báo tài khoản đã tồn tại!
*/
let users=[];
let flag=true;
let string=prompt("Mời bạn nhập email đăng kí:");
if(checkEmail(string)){
    for(let i=0;i<users.length;i++){
        if(string==users[i]){
           flag=false;
           break;
        }
    }
    if(flag){
        console.log("tài khoản chưa tồn tại");
        users.push(string);
    }else{
        console.log("tài khoản đã tồn tại");
    }
}
function checkEmail(email) {
    if(email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))){
        console.log("Email hợp lệ");
        return true;
    }
    return false;
}
