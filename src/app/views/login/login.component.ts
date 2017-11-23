import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router) { }
  
  login(myemail: string, mypass: string){
  if(myemail == "test" && mypass=="test")
  {
    this.router.navigate(['/dashboard']);
  }
  else
  {
    alert("Invalid email / pwd");
  }
  }

  ngOnInit() {
  }

}
