import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AttendComponent } from './attend/attend.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    RouterModule.forRoot([

{
          path:'attendance',
          component:AttendComponent

}

])

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
