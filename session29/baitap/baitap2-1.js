
// tạo mảng để chứa danh sách sản phẩm
let products=[];
while (true) {
    let choice= +prompt("mời nhập lựa chọn các case:");
    switch (choice) {
        case 1:
            // thêm sản phẩm vào danh sách sản phẩm
            // tạo hàm để thêm
            addProduct();
            break;
        default:
            break;
    }
}
// tạo hàm đi thêm sản phẩm vào trong danh sách sản phẩm
function addProduct() {
    let id;
    // đi xử lý
    // let id= Math.floor(Math.random()*445454545 + new Date().getMilliseconds());
    if(products.length==0){
        // nếu mảng ban đầu chưa có phần tử thì gán id =1
        id= 1;
    }else{
        id= products[products.length-1].id+1;
    }
    let name= prompt("mời nhập tến sản phẩm");
    let price=+prompt("nhập giá");
    let category= prompt("nhập danh mục");
    let quantity= +prompt("nhập số lượng");
    // tạo đối tượng
    let product={
        id:id,
        name:name,
        price:price,
        category:category,
        quantity:quantity,
    }
    // thêm đối tượng vào mảng 
    products.push(product);
    console.log("thêm sản phẩm thành công");
}
