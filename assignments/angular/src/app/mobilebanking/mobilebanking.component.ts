import { Component, OnInit } from '@angular/core';
import { MOBILES } from 'src/mock-mobile';

@Component({
  selector: 'app-mobilebanking',
  templateUrl: './mobilebanking.component.html',
  styleUrls: ['./mobilebanking.component.css']
})
export class MobilebankingComponent implements OnInit {

  mobiles=MOBILES;
  constructor() { }

  ngOnInit(): void {
  }

}
