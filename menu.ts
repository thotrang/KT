import * as rl from 'readline-sync';
import { ProductManagement } from "./ProductManagement";
import { Product } from "./Product";
export class Menu {
    private products = new ProductManagement();

    menu() {
        console.log('---NHẬP LỰA CHỌN CỦA BẠN---');
        console.log('1. Hiển thị tất cả hàng hóa ');
        console.log('2. Tìm kiếm hàng hoá');
        console.log('3. Thêm 1 mặt hàng mới');
        console.log('4. Chỉnh sửa thông tin của mặt hàng');
        console.log('5. Xoá một mặt hàng khỏi ứng dụng');
        console.log('0. Thoát !!');
    }

    showAllProduct(): void {
        let listProduct = this.products.getAll();
        if(listProduct.length==0){
            console.log('không có sản phẩm ');
            
        }else{
            console.log(listProduct);
        }
    }

    findProduct(): void {
        let name = rl.question('Nhập sản phẩm bạn cần tìm ');
        let index = this.products.findByName(name);
        if (index == -1) {
            console.log('Sản phẩm cần tìm không tồn tại ');
        } else {
            console.log(this.products.getAll()[index]);
        }
    }

    addName(){
        let name = '';
        let isValidName=true;

        do{
            name = rl.question('Nhập tên sản phẩm mới ');
            let current=this.products.findByName(name);
            if(current!=-1){
                isValidName=false;
                console.log('Sản phẩm đã tồn tại');
            }else{
                isValidName=true;
            }
        
        }while(!isValidName);
        return name;
    }


    addProduct(): Product {
        let name =this.addName();
        let type = rl.question('Nhập loại hàng ');
        let price = +rl.question('Nhâp giá sản phẩm mới');
        let amount = +rl.question('Nhập số lượng hàng nhập kho ');
        let date = new Date();

        return new Product(name, type, price, amount, date);
    }

    run() {
        let choice = '-1';
        do {
            this.menu();
            choice = rl.question(' Nhâp lựa chọn của bạn ');
            switch (choice) {
                case '1':
                    this.showAllProduct();
                    break;

                case '2':
                    this.findProduct();
                    break;

                case '3': {
                    let product = this.addProduct();
                    this.products.addNewProduct(product);
                    console.log('Thêm sản phẩm thành công');
                    
                }
                    break;

                case '4': {
                    let name = rl.question('Nhập tên sản phẩm bạn muốn chỉnh sửa ');
                    let product = this.addProduct();
                    this.products.updateProduct(name, product)
                }
                    break;

                case '5': {
                    let name = rl.question('Nhập tên sản phẩm bạn muốn xóa ');
                    this.products.delProduct(name);
                }
                    break;

            }

        }
        while (choice != '0');
    }

}


