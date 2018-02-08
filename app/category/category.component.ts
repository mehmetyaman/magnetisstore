import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService, UserService, CategoryService} from '../_services/index';
import {HttpClient} from "@angular/common/http";
import {Category} from "../_models/category";

@Component({
    moduleId: module.id,
    templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {

    model: any = {};
    loading = false;

    resultList: any = [];
    id: any = {};
    name: string;

    editableText = 'myText';

    transfer(category: Category): void {
        this.id = category.id;
        this.name = category.name;
    }

    saveEditable(value: any) {
        this.categoryService.update(value)
            .subscribe(
                data => {
                    this.alertService.success('category update successful', true);
                },
                error => {
                    this.alertService.error(error);
                    return false;
                });
    }

    save(category: Category): void {
        this.categoryService.update(category);
    }

    constructor(private router: Router,
                private userService: UserService,
                private categoryService: CategoryService,
                private alertService: AlertService,
                private http: HttpClient) {
    }

    ngOnInit(): any {

    }

    goHome() {
        this.router.navigate(['']);
    }

    empty() {
        this.id = {};
        this.name = null;
    }

    category() {
        this.loading = true;

        this.categoryService.create(this.model)
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
        return this.http.get('http://localhost:8080/category/search?searchText=' + searchValue).subscribe(
            result => this.resultList = result
        );
    }


}
