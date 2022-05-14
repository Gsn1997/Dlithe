import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilebankingComponent } from './mobilebanking/mobilebanking.component';
import { PersonalbankingComponent } from './personalbanking/personalbanking.component';

const routes: Routes = [
  {path:'personalbank',component:PersonalbankingComponent},
  {path:'mobilebank',component:MobilebankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
