import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events=[]
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.events().subscribe(
      data=>{this.events=data
      console.log(this.events)},
      error=>console.log(error.message)
    )
  }

}
