import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService, UserService} from '../_services/index';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models";

@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    model: any = {};
    loading = false;
    searchList: any = [];
    email: string;
    birth: Date;
    firstName: string;
    lastName: string;
    orders: any = [];
    points: number;
    phoneNumber: any = {};
    id: any = {};

    transfer(user: User): void {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.points = user.points;
        this.phoneNumber = user.phoneNumber;
        this.birth = user.birth;
        this.email = user.email;
        this.id = user.id;
    }

    save(): void {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.id);
        console.log(this.points);
    }

    constructor(private router: Router,
                private userService: UserService,
                private alertService: AlertService,
                private http: HttpClient) {
    }

    ngOnInit(): any {

    }

    goHome() {
        this.router.navigate(['']);
    }

    user() {
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
        return this.http.get('http://localhost:8080/user/search?searchText=' + searchValue).subscribe(
            result => this.searchList = result)
        ;
    }

    saveEditable(value: any) {
        this.userService.update(value)
            .subscribe(
                data => {
                    this.alertService.success('user update successful', true);
                },
                error => {
                    this.alertService.error(error);
                    return false;
                });
    }

}
