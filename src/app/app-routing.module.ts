import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 
import { ErrorComponent } from './components/error/error.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { MainComponent } from './components/main/main.component'
const routs: Routes = [
   
  {path: '', component: MainComponent},
  {path: 'repos/:login', component: UserItemComponent},

   
  {path: '**', component: ErrorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
