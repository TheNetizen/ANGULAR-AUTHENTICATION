import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={
    email:'',
    password:''
  }
  constructor(private service:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.service.login(this.loginUserData).subscribe(
      data=>{
        console.log(data)
      localStorage.setItem('token',data.token)
      this.route.navigate(['/special'])
      },
      error=>console.log(error.message)
    )
  }
}
