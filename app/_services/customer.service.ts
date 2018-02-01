import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Customer} from '../_models/index';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) {
    }

    getAll() {
       //  return this.http.get<Customer[]>('/api/customers');
        return  [  'Finn the human',
            'Jake the dog',
            'Princess bubblegum',
            'Lumpy Space Princess',
            'Beemo1',
            'Beemo2'];
    }

    getById(id: number) {
        return this.http.get('/api/customers/' + id);
    }

    create(customer: Customer) {
        return this.http.post('/api/customers', customer);
    }

    update(customer: Customer) {
        return this.http.put('/api/customers/' + customer.id, customer);
    }

    delete(id: number) {
        return this.http.delete('/api/customers/' + id);
    }
}
