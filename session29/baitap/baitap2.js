/* 
id: duy nhất không được trùng.
tạo id không trùng nhau
1. sinh 1 số ngẫu nhiên Math.random()
2. dùng thư viện hàm có sẵn trên mạng
3. cho người dùng nhập , sau khi người dùng nhập thì kiểm tra xem id có bị trùng
hay không
4. lấy id của phần tử cuối cùng trong mảng tăng lên 1, trường hợp mảng ban đầu
rỗng thì sẽ gán cho nó =1

*/
let product = [{ id: 1, name: "mì tôm" }, { id: 2, name: "bánh mì" },{id:3,name:"bánh bao"}];
if (product.length == 0) {
    product[0].id = 1;
} else {
    let newProduct = {
        id: product[product.length - 1].id + 1,
        name: "xúc xích"
    }
    product.push(newProduct);
}
console.log(111, product);
