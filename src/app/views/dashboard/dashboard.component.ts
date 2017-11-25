import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tables: Observable<any[]>;
    myarr: any[];
  constructor(private af1: AngularFireDatabase) {
  // get the table data here
  
  console.log("I am here");
  
  this.getTables().subscribe(t=>{
  console.log(t);
  this.myarr=t;
  });
  //console.log(this.tables);
  };


getTables()
{
    return this.af1.list('hotel/tables').valueChanges();
}


bookTable(md: string, mppl: number)
{
    //alert("Booking confirmed for Date: " + md + ", Number: " + mppl);
    
    for(var i= 0; i < this.myarr.length; i++)
    {
        if(mppl < this.myarr[i].capacity)
        {
            alert("Table booked");
            this.af1.list('hotel/tables').push({
     "minCapacity":4,
     "capacity" : 8,
     "booked" : "true"
   });
            break;
        }
    }
    if(i == this.myarr.length )
    {
        alert("Table not booked");
    }
    
    
}
  ngOnInit() {
  }

}
