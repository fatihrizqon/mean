import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class AdminIndexComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  )
  {
    let user = localStorage.getItem('user');
    let token = localStorage.getItem('id_token');
    let level = Number(localStorage.getItem('level'));
    if(this.authService.loggedIn(user, token, level)){
      if(level != 2){
        this.router.navigate(['/dashboard']);
        console.log('Unauthorized.');
      }else{
        console.log('Admin Mode.');
      }
    }else{
        this.router.navigate(['/dashboard']);
        console.log('Unauthorized.');
    }
  }
  ngOnInit(){
  }

  logoutUser(){
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
