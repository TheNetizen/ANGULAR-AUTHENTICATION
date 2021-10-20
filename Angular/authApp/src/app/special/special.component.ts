import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  specials=[]
  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.service.special().subscribe(
      data=>this.specials=data,
      error=>{
        if(error instanceof HttpErrorResponse){
if(error.status===401){
  this.route.navigate(['/login'])
}
        }
      }
    )
  }


}
