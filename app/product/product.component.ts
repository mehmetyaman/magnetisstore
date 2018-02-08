import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService, UserService, ProductService} from '../_services/index';
import {HttpClient} from "@angular/common/http";
import {Product} from "../_models/product";

@Component({
    moduleId: module.id,
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

    model: any = {};
    loading = false;

    searchList: any = [];
    id: any = {};

    transfer(product: Product): void {
        this.id = product.id;
    }

    save(): void {
        console.log(this.id);
    }

    constructor(private router: Router,
                private userService: UserService,
                private productService: ProductService,
                private alertService: AlertService,
                private http: HttpClient) {
    }

    ngOnInit(): any {

    }

    goHome() {
        this.router.navigate(['']);
    }

    product() {
        this.loading = true;

        this.productService.create(this.model)
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
        return this.http.get('http://localhost:8080/product/search?searchText=' + searchValue).subscribe(
            result => this.searchList = result
        );
    }

    saveEditable(value: any) {
        this.productService.update(value)
            .subscribe(
                data => {
                    this.alertService.success('product update successful', true);
                },
                error => {
                    this.alertService.error(error);
                    return false;
                });
    }

}
