/* 
Tạo ứng dụng đi mua hàng
1. Hiển thị các sản phẩm theo danh mục
2. Nhập id sản phẩm để đi mua hàng
    + sản phẩm không có trong cửa hàng
    + Trong trường hợp có sản phẩm
        + Cho người dùng nhập số lượng sản phẩm cần mua
            + Kiểm tra xem có đủ hàng để bán hay không?
                 + Nếu không đủ hiển thị
                 + Nếu đủ thì số lượng sản phẩm trong cửa hàng sẽ bị trừ đi
                 + Thêm sản phẩm vào giỏ hàng
3. Sắp xếp theo giá
    + Tăng dần
    + giảm dần
4. Thanh toán tiền trong giỏ hàng
5. Thoát
*/
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh"
    }
];
let cart = [];// giỏ hàng để đi mua hàng
// tạo menu
while (1) {
    let choice = +prompt(
        `
            1. Hiển thị sản phẩm theo danh mục
            2. Đi mua hàng
            3. Sắp xếp sản phẩm theo giá
            4. Tính hóa đơn
            5. Thoát
        `)

    if (choice == 5) {
        break;
    }
    switch (choice) {
        case 1:
            // tạo hàm lọc những sản phẩm theo danh mục
            showProductByCategory();
            break;
        case 2:
            // Tạo hàm đi mua hàng
            addToCart();
            console.log("products",products);
            
            break;
        case 3:

            break;
        case 4:

            break;

        default:
            break;
    }
}
// Tạo hàm lọc sản phẩm theo danh mục
function showProductByCategory() {
    let choice= +prompt(`
        1. Món ăn dân tộc Kinh.
        2. Món ăn dân tộc Mông
        `
    )
    if(choice==1){
        // lọc sản phẩm theo category== Món ăn dân tộc Kinh
        // let result= products.filter((item)=>{
        //     return item.category=="món ăn dân tộc Kinh"
        // })
        let resutl= products.filter(item=>item.category=="món ăn dân tộc Kinh");
        console.log(resutl); 
    }else if(choice==2){
        let resutl= products.filter(item=>item.category=="món ăn dân tộc Mông");
        console.log(resutl); 
    }else{
        console.log("lựa chọn không hợp lệ!");
    }
}
// function đi mua hàng
function addToCart() {
    let productId= +prompt("nhập id sản phẩm cần mua");
    // kiểm tra xem sản phẩm có trong cửa hàng hay không?
    let productIndex= products.findIndex(item=>item.id==productId);
    if(productIndex!=-1){
        // có sản phẩm
        // cho người dùng nhập số lượng sản phẩm cần mua
        let quantity= +prompt("nhập số lượng");
        if(quantity>products[productIndex].quantity){
            console.log(`sản phẩm không đủ, còn lại ${products[productIndex].quantity} sản phẩm`);
        }else{
            // trong trường hợp người dùng nhập số lượng cần mua thỏa mãn
            // giảm số lượng trong cửa hàng
            products[productIndex].quantity-=quantity;
            // tiến hành thêm vào giỏ hàng
            // kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
            // Nếu có tăng số lượng, nếu chưa có thì push vào giỏ hàng
            let index= cart.findIndex(item=>item.id==productId);
            if(index==-1){
                // sản phẩm chưa có trong giỏ hàng
                // cart.push({
                //     id:productId,
                //     name: products[productIndex].name,
                //     quantity:quantity,
                //     category: products[productIndex].category
                // })
                cart.push({...products[productIndex],quantity:quantity});
                console.log("thêm sản phẩm thành công",cart); 
            }else{
                // sản phẩm đã có trong giỏ hàng
                // cập nhật số lượng
                cart[index].quantity+=quantity;
                console.log("thêm sản phẩm thành công",cart);
            }
        }
    }else{
        console.log("sản phẩm không có trong cửa hàng!");  
    }
}
let student={
    id:1,
    name:"minh thu",
    age:25,
}
let a= {...student,age:26};// spread
// a.age=26;
// console.log(a);



