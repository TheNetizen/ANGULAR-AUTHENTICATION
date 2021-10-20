import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlRegister="http://localhost:4000/register"
  private urlLogin="http://localhost:4000/login"
  private urlEvent="http://localhost:4000/events"
  private urlSpecial="http://localhost:4000/special"

  constructor(private http:HttpClient,private route:Router) {  }

  register(data:object){
         return this.http.post<any>(this.urlRegister,data)
  }
  login(data:object){
    return this.http.post<any>(this.urlLogin,data)
}
  events(){
    return this.http.get<any>(this.urlEvent)
  }
  special(){
    return this.http.get<any>(this.urlSpecial)
  }
  loggedIn(){
    // !! always returns boolean value 
    console.log("1")
    return !!localStorage.getItem('token')
  }
  loggedout(){
    
    localStorage.removeItem('token')
    this.route.navigate(['/events'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
