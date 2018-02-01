import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// used to create fake backend
import {fakeBackendProvider, JwtInterceptor} from './_helpers/index';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives/index';
import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, CustomerService, UserService} from './_services/index';
import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {FilterPipe} from "./_helpers/filter.pipe";
import {CustomerComponent} from "./customer/customer.component";
import {InlineEditorModule} from '@qontu/ngx-inline-editor';

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
        CustomerComponent,
        RegisterComponent,
        FilterPipe
    ],
    exports: [FilterPipe],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CustomerService,
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
