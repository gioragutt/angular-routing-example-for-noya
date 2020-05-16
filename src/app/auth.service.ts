import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  loginGood() {
    localStorage.setItem('token', `${Date.now()}`);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const timestamp = Number(localStorage.getItem('token')) || 0;
    return Date.now() - timestamp < 15_000;
  }
}
