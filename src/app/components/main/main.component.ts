import { Component, OnInit,  ViewChild } from '@angular/core';
import { GitService } from '../../service/git.service';
import { User } from '../../models/User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DatanavigationService } from '../../service/datanavigation.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[];
  
  searchingResult: User[];
  searchText: string ;
  changeClass: boolean = false;
  local;
  constructor(
    public server : GitService,
    public navigation: DatanavigationService,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.server.getUsers().subscribe( (data:User[] ) => {
       
       
       this.users = data 
    })
    
  }
  searchUser() { 
    
    this.server.searchUser( this.searchText ).pipe().subscribe( ( data:User[] ) => {
       
       
      if( data.length >=1 ) {
        this.changeClass = true ? false :false
        this.searchingResult = data
      } else {
        this.changeClass = true
        this.flashMessage.show('Not Found...', {
          cssClass:'alert-danger',
          showCloseBtn: true,
          closeOnClick: true,
          timeOut: 100
        })
 
    }
    })

}
getFavoriteRepos(){
    let mid = this.navigation.getLocalStorage().map(item => {
      return item.owner
    })
  this.local = mid;
  console.log( this.local);
  }
}
