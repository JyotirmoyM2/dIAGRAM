import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NiceSelectModule } from "ng-nice-select";
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddCaptureComponent } from './add-capture/add-capture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCaptureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NiceSelectModule,
    MalihuScrollbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
