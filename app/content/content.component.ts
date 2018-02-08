import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService, UserService, ContentService} from '../_services/index';
import {HttpClient} from "@angular/common/http";
import {Content} from "../_models/content";
import {ContentType} from "../_models";

@Component({
    moduleId: module.id,
    templateUrl: 'content.component.html'
})

export class ContentComponent implements OnInit {

    model: any = {};
    loading = false;

    resultList: any = [];
    id: any = {};
    name: string;

    editableText = 'myText';

    contenttypeoptions = [
        {value: 'VIDEO', text: 'Video'},
        {value: 'IMAGE', text: 'Image'},
        {value: 'TEXT', text: 'Text'}
    ];

    transfer(content: Content): void {
        this.id = content.id;
        this.name = content.name;
    }

    saveEditable(value: any) {
        this.contentService.update(value)
            .subscribe(
                data => {
                    this.alertService.success('content update successful', true);
                },
                error => {
                    this.alertService.error(error);
                    return false;
                });
    }

    save(content: Content): void {
        this.contentService.update(content);
    }

    constructor(private router: Router,
                private userService: UserService,
                private contentService: ContentService,
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

    content() {
        this.loading = true;

        this.contentService.create(this.model)
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
        return this.http.get('http://localhost:8080/content/search?searchText=' + searchValue).subscribe(
            result => this.resultList = result
        );
    }


}
