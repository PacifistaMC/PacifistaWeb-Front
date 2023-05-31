import { Component } from '@angular/core';
import {Router} from "@angular/router";
import UserService from "../../../services/funixproductions-api/users/services/UserService";
import {ReCaptchaV3Service} from "ng-recaptcha";
import UserCreationDTO from "../../../services/funixproductions-api/users/dtos/UserCreationDTO";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  acceptCgu: boolean = false;
  acceptCgv: boolean = false;

  constructor(private userAuthService: UserService,
              private reCaptchaService: ReCaptchaV3Service,
              private router: Router) {
  }

  register(): void {
    const userCreationRequest: UserCreationDTO = new UserCreationDTO();
    userCreationRequest.email = this.email;
    userCreationRequest.username = this.username;
    userCreationRequest.password = this.password;
    userCreationRequest.passwordConfirmation = this.passwordConfirmation;
    userCreationRequest.acceptCGU = this.acceptCgu;
    userCreationRequest.acceptCGV = this.acceptCgv;

    this.reCaptchaService.execute('register').subscribe((token: string) => {
      this.userAuthService.register(userCreationRequest, token).subscribe({
          next: () => {
            this.router.navigate(['user', 'login']);
          },
          error: err => {
            //todo popup error
          }
        }
      )
    });
  }

}
