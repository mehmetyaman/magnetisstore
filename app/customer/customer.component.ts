import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService, CustomerService, UserService} from '../_services/index';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../_models";

@Component({
    moduleId: module.id,
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit {

    model: any = {};
    loading = false;
    searchList: any = [];
    email: string;
    birthDate: Date;
    firstName: string;
    lastName: string;
    orders: any = [];
    points: number;
    phoneNumber: any = {};
    id: any = {};

    transfer(customer: Customer): void {
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.points = customer.points;
        this.phoneNumber = customer.phoneNumber;
        this.birthDate = customer.birthDate;
        this.email = customer.email;
        this.id = customer.id;
    }

    save(): void {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.id);
        console.log(this.points);
    }

    constructor(private router: Router,
                private userService: UserService,
                private customerService: CustomerService,
                private alertService: AlertService,
                private http: HttpClient) {
    }

    ngOnInit(): any {

    }

    goHome() {
        this.router.navigate(['']);
    }

    customer() {
        this.loading = true;

        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    onSearchChange(searchValue: string) {
        return this.http.get('http://localhost:8080/customer/search?searchText=' + searchValue).subscribe(
            result => this.searchList = result
        );
    }


}
