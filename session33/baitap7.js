const products = [
    { id: 1, name: 'Điện thoại Samsung Galaxy A54', price: 7490000, image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg' },
    { id: 2, name: 'Laptop Dell Inspiron 15', price: 15990000, image: 'https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053' },
    { id: 3, name: 'Tai nghe AirPods Pro', price: 4990000, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836' },
    { id: 4, name: 'Đồng hồ thông minh Apple Watch', price: 8990000, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA' },
    { id: 5, name: 'Máy ảnh Canon EOS M50', price: 12490000, image: 'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg' },
    { id: 6, name: 'Loa Bluetooth JBL Flip 5', price: 2190000, image: 'https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910' },
    { id: 7, name: 'Bàn phím cơ Logitech G Pro', price: 2490000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s' },
    { id: 8, name: 'Chuột không dây Logitech MX Master', price: 1890000, image: 'https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png' }
];
// dùng js để render dữ liệu
function renderProducts() {
    let str="";
    for (let i = 0; i < products.length; i++) {
        str+=
        `
             <div class="product-card">
                    <img src=${products[i].image}
                        alt="Điện thoại Samsung Galaxy A54" class="product-image">
                    <div class="product-title">${products[i].name}</div>
                    <div class="product-price">${products[i].price}</div>
                    <button onclick= addToCart(${products[i].id}) class="add-to-cart-btn" data-id="1">Thêm vào giỏ hàng</button>
            </div>
        `
    }
    document.getElementById("product-grid").innerHTML=str;
}
renderProducts();
// khai báo hàm đi mua sản phâm
let cart=[];// danh sách sản phẩm trong giỏ hàng
function addToCart(id) {
    console.log("id",id);
    // lấy thông tin của từng sản phẩm
    /* 
        kiểm tra sản phẩm có trong giỏ hàng chưa
         + nếu có tăng số lượng
         + chưa có thì push vào 
    */
    let index= cart.findIndex(item=>item.id== id);
    if(index!=-1){
        // sản phẩm đã có trong giỏ hàng
        // tăng số lượng
        cart[index].quantity=cart[index].quantity+1;
        renderCart();
    }else{
        // sản phẩm chưa có trong giỏ hàng
        let product= products.find(item=>item.id==id);
        let newProduct= {...product,quantity:1};
        cart.push(newProduct);
        renderCart();
    }
}
// tạo hàm render sản phẩm trong giỏ hàng
function renderCart() {
    let str="";
    for (let i = 0; i < cart.length; i++) {
        str+=
        `       <tr>
                    <td>1</td>
                    <td>iphone</td>
                    <td><img src=${cart[i].image} alt=""></td>
                    <td>${cart[i].name}</td>
                    <td><button>-</button>${cart[i].quantity} <button>+</button></td>
                    <td>${cart[i].price}</td>
                </tr>
        `
    }
    document.getElementById("tbody").innerHTML=str;
}
renderCart();