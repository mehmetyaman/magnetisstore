import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Content} from "../_models/content";

@Injectable()
export class ContentService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Content[]>('http://localhost:8080/content/');
    }

    getById(id: number) {
        return this.http.get('http://localhost:8080/content/' + id);
    }

    create(content: Content) {
        return this.http.post('http://localhost:8080/content/', content);
    }

    update(content: Content) {
        return this.http.put('http://localhost:8080/content/', content);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:8080/content/' + id);
    }
}
