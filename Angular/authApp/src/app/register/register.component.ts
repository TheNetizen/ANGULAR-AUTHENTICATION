import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={
    email:'',
    password:''
  }
  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
register(){
  this.service.register(this.registerUserData).subscribe(
    data=>{
      console.log(data)
      localStorage.setItem('token',data.token)
      this.route.navigate(['/special'])
    },
    error=>console.log(error.message)
  )
}
}
