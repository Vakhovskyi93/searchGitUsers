import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesService} from "angular2-flash-messages";
import { FlashMessagesModule} from "angular2-flash-messages";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ErrorComponent } from './components/error/error.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { MainComponent } from './components/main/main.component';
import { GitService }from './service/git.service';
import { UserslistComponent } from './components/userslist/userslist.component'
import { HttpClientModule } from '@angular/common/http';
import { DatanavigationService} from '../app/service/datanavigation.service';
import { FavoriteComponent } from './components/favorite/favorite.component'

@NgModule({
  declarations: [
    AppComponent, 
    ErrorComponent,
    UserItemComponent,
    MainComponent,
    UserslistComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    GitService,
    DatanavigationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
