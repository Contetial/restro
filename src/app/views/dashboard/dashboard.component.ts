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
    test: any ;
  constructor(private af1: AngularFireDatabase) {
  // get the table data here
  
  console.log("I am here");
  
  this.getTables().subscribe(t=>{
  console.log(t);
  //this.myarr=t[0].bookinginfo.d1;
  //console.log(this.myarr);
  console.log(t[1]);
  this.test = t[1];
  
  
  });
  //console.log(this.tables[0]/bookingInfo/d1);
  };


getTables()
{
    return this.af1.list('hotel').valueChanges();
}


bookTable(md: string, mppl: number)
{
    //alert("Booking confirmed for Date: " + md + ", Number: " + mppl);
    
    for(var i= 0; i < this.myarr.length; i++)
    {
        if(mppl < this.myarr[i].capacity)
        {
            alert("Table booked");
            this.af1.list('hotel/tables/1/bookinginfo').push({
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
