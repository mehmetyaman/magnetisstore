import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// used to create fake backend
import {fakeBackendProvider, JwtInterceptor} from './_helpers/index';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AuthGuard} from './_guards/index';

import {AlertComponent} from './_directives/index';
import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {UserComponent} from "./user/index";
import {ProductComponent} from "./product/index";
import {CategoryComponent} from "./category/index";

import {ContentComponent} from "./content/index";

import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import {AlertService, AuthenticationService, UserService, ProductService, CategoryService, ContentService} from './_services/index';
import {FilterPipe} from "./_helpers/filter.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        routing,
        InlineEditorModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        UserComponent,
        ProductComponent,
        CategoryComponent,
        RegisterComponent,
        ContentComponent,
        FilterPipe
    ],
    exports: [FilterPipe],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ProductService,
        CategoryService,
        ContentService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
