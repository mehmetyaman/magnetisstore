import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Product} from "../_models/product";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Product[]>('http://localhost:8080/product/');
    }

    getById(id: number) {
        return this.http.get('http://localhost:8080/product/' + id);
    }

    create(product: Product) {
        return this.http.post('http://localhost:8080/product/', product);
    }

    update(product: Product) {
        return this.http.put('http://localhost:8080/product/', product);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:8080/product/' + id);
    }
}
