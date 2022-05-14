import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Karnataka Bank';//string interpolation

  email="ktk@gamail.com";//attribute binding

  stylebind="blue";//style binding

  onSubClick()//event binding
  {
    console.log('Subscribed successfully');
  }

  unsubscribe="";
  onUnSubClick(event:any)//event binding
  {
    console.log(event);
    console.log('unsubsribed successfully');
    this.unsubscribe='unsubscribed';
  }

  fullname="Goutham S Naik";//two way binding
  
  public getnotification=true;//ngif

 color="red";//ngswitch

 addpayee=["Vikas","Nikeet","Priya","Sanjay","Jagdish"];//ngfor

 amount=["500","700","1000","7000"];

customername="Goutham";

message="Hello Goutham";

}
