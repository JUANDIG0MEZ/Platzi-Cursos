const {faker} = require('@faker-js/faker');

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();

    }

    async generate() {
        const limit = 100;
        for (let i=0; i<limit; i++){
            this.products.push({
                id: i,
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.url()
            })
        }
    }

    async create(body) {
        const newProduct = {
            id: this.products.length + 1,
            ...body
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find(){
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve(this.products);
            }, 5000)
        })
    }

    async findOne(id){
        return this.products.find(item => item.id == id);
    }

    async update(changes, id){
        const index = this.products.findIndex(item => item.id == id);
        if (index === -1){
            throw new Error("Product not found");
        }
        this.products[index] = {
            ...this.products[index],
            ...changes
        }
        return this.products[index];
    }

    async delete(id){
        const index = this.products.findIndex(item => item.id == id);
        if (index === -1){
            throw new Error("Product not found");
        }
        this.products.splice(index, 1);
    }
}

module.exports = ProductsService;