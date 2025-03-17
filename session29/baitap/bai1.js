let contactList = [];
let select = 0;

do {
    select = +prompt(`
    1. Thêm đối tượng Contact vào danh sách liên hệ.
    2. Hiển thị danh sách danh bạ.
    3. Tìm kiếm thông tin Contact theo số điện thoại.
    4. Cập nhật thông tin Contact(name, email, phone) theo id.
    5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
    6. Thoát.
    `)
    switch (select) {
        case 1:
            addContact();
            break;
        case 2:
            showContactList();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            
    }
} while (select != 6);

function addContact() {
    let check = 0;
    let id = 0;
    do {
        if (check) {
            id = +prompt("id đã tồn tại mời nhâp id mới");
            check = 0;
        } else {
            id = +prompt("Mời bạn nhập id");
        }

        for (let i = 0; i < contactList.length; i++) {
            if (id == contactList[i].id) {
                check++;

                break;
            }
        }

    } while (check != 0);
    let name = prompt("Mời bạn nhập tên ");
    let email = prompt("Mời bạn nhập email");
    let phone = prompt("Mời bạn nhập số điện thoại");
    let contact = {
        id: id,
        name: name,
        email: email,
        phone: phone
    }
    contactList.push(contact);
    console.log("thêm đối tượng thành công");

}
function showContactList() {
    console.log(contactList);
}
function searchPhone() {
    let searchPhone = 0;
    let check = 0;
    searchPhone=prompt("Mời bạn nhập số điện thoại muốn tìm kiếm");
    for (let i = 0; i < contactList.length; i++) {
        if (searchPhone === contactList[i].phone) {
            console.log(contactList[i]);
            check++;
        }
    }
    if (check == 0) {
        console.log(" không tìm số điện thoại");
    }
}
