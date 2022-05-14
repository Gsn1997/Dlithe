import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
cities=['Dharwad','Hubli','Gadag','Mandya'];

registrationModel={
  name:'GOUTHAM',
  phno:'9945238644',
  email:'gouthamsn123@gmail.com',
  dob:'1999-08-01',
  address:'GADAG',
  city:'GADAG',
  pincode:582101
}
  constructor() { }

  ngOnInit(): void {
  }

}
