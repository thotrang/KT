export class Product{
    private _id:number=0;
    private _name:string;
    private _type:string;
    private _price:number;
    private _amount:number;
    private _date:string;

    constructor(name: string, type: string, price: number, amount: number, date: string) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._date = date;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }
    toString(){
        console.log(` Mã hàng ${this.id}, Tên hàng ${this.name}, Loại hàng ${this.type}, Giá ${this.price}, Số lượng ${this.amount}, Ngày tạo ${this.date} `)
    }
}