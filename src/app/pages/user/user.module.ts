import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from "ng-recaptcha";
import {environment} from "../../../environments/environment";
import {UserForgotPasswordComponent} from './user-forgot-password/user-forgot-password.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatSelectCountryModule} from "@angular-material-extensions/select-country";
import {InputEmailComponent} from "../../components/inputs/input-email/input-email.component";
import {SendButtonComponent} from "../../components/buttons/send-button/send-button.component";
import {InputTextComponent} from "../../components/inputs/input-text/input-text.component";
import {InputSecretComponent} from "../../components/inputs/input-secret/input-secret.component";
import {InputCheckboxComponent} from "../../components/inputs/input-checkbox/input-checkbox.component";
import {UserForgotPasswordChangeComponent} from "./user-forgot-password-change/user-forgot-password-change.component";

@NgModule({
    declarations: [
        UserComponent,
        UserRegisterComponent,
        UserPageComponent,
        UserLoginComponent,
        UserForgotPasswordComponent,
        UserForgotPasswordChangeComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatSelectCountryModule.forRoot('fr'),
        HttpClientModule,
        FormsModule,
        RecaptchaV3Module,
        FontAwesomeModule,
        InputEmailComponent,
        SendButtonComponent,
        InputTextComponent,
        InputSecretComponent,
        InputCheckboxComponent
    ],
    providers: [
        {
            provide: RECAPTCHA_V3_SITE_KEY,
            useValue: environment.reCaptchaSiteKey,
        },
    ],
})
export class UserModule { }
