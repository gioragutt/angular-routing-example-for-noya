import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.loginGood();
    this.router.navigateByUrl('/admin');
  }
}
