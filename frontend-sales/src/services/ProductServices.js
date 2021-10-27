import axios from "axios";

export class ProductService {

    // baseUrl = "http://localhost:8080/api/products/";
    baseUrl = "https://localhost:4000/api/products";

    async create(product){
        const res = await axios.post(this.baseUrl + "/", product);
        return res.data;
    }

    async readAll(){
        const res = await axios.get(this.baseUrl);
        return res.data;
    }

    async update(product){
        const res = await axios.put(this.baseUrl + "product/" + product._id, product);
        return res.data;
    }

    async delete(id){
        const res = await axios.delete(this.baseUrl + "product/" + id);
        return res.data;
    }
}