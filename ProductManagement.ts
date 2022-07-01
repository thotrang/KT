import { Product } from "./Product";

export class ProductManagement{
    private static listProduct:Product[]=[];
    private static id=0;

    findByName(name:string):number{
        let arrProduct=ProductManagement.listProduct;
        let index=-1;
        for(let i=0;i<arrProduct.length;i++){
            if(name==arrProduct[i].name){
                return i;
            }
        }
        return index;
    }
    getAll(){
        return ProductManagement.listProduct;
    }
    addNewProduct(t:Product){
        ProductManagement.id++;
        t.id=ProductManagement.id;
        let arrProduct=ProductManagement.listProduct;

        arrProduct.push(t);
    }
    updateProduct(name:string,product:Product){
        let arrProduct=ProductManagement.listProduct;
        let index=this.findByName(name);
        if(index!=-1){
            arrProduct[index]=product;
        }else{
            console.log('Sản phẩm không tồn tại')
        }
    }delProduct(name:string){
        let arrProduct=ProductManagement.listProduct;
        let index=this.findByName(name);
        if(index!=-1){
            arrProduct.splice(index,1);
        }
    }

}