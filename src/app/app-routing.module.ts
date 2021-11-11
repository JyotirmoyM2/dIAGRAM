import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddCaptureComponent } from './add-capture/add-capture.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'AddCapture', component: AddCaptureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
