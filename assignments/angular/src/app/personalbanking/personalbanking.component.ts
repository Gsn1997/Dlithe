import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BankingdetailsService } from '../bankingdetails.service';
@Component({
  selector: 'app-personalbanking',
  templateUrl: './personalbanking.component.html',
  styleUrls: ['./personalbanking.component.css']
})
export class PersonalbankingComponent implements OnInit {
  details=[] as any;
  @Input() parentData:any;
  @Output() childEvent=new EventEmitter<any>();
  constructor(private service:BankingdetailsService) { }

  ngOnInit(): void {

    this.details=this.service.getInfo();
  }
onLogin()
{
  this.childEvent.emit('Logged In');
  console.log('success')
}


}
