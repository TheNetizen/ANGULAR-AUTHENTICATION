import { Injectable } from '@angular/core';
//to send token from browser to server we use http interceptor, intercepts outgoing request, transforms them and send it to the server.
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  tokenStored=this.service.getToken()
  constructor(private service:AuthService) { }
  intercept(req:any,next:any): any{ 
    let tokenizedReq=req.clone({
      setHeaders:{
        
        Authorization:`Bearer ${this.tokenStored}`
      }
    })
    return <any>next.handle(tokenizedReq)
  }
}
