import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankingdetailsService {

  constructor() { }
   getInfo()
  {
    
  return [
    {"accountnumber":123,"accountinterestrate":8.4,"accounttype":"FD"},
    {"accountnumber":456,"accountinterestrate":7.8,"accounttype":"RD"},
   

  ]
  }
}
