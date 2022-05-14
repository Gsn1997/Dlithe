import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilebankingComponent } from './mobilebanking/mobilebanking.component';
import { PersonalbankingComponent } from './personalbanking/personalbanking.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilebankingComponent,
    PersonalbankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
