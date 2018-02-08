import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Category} from "../_models/category";

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Category[]>('http://localhost:8080/category/');
    }

    getById(id: number) {
        return this.http.get('http://localhost:8080/category/' + id);
    }

    create(category: Category) {
        return this.http.post('http://localhost:8080/category/', category);
    }

    update(category: Category) {
        return this.http.put('http://localhost:8080/category/', category);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:8080/category/' + id);
    }
}
