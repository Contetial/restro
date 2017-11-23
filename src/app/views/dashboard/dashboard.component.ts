import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

bookTable(md: string, mppl: number)
{
    alert("Booking confirmed for Date: " + md + ", Number: " + mppl);
}
  ngOnInit() {
  }

}
