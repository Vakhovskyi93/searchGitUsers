import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DatanavigationService } from '../../service/datanavigation.service';
import { User } from '../../models/User'; 
import { GitService } from '../../service/git.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User[]
  id:string;
  login:string;
  repos;
  local;
  error:any

  constructor(
    public navigation: DatanavigationService,
    public http: GitService,
   
  ) { }
   

  ngOnInit(): void {
    this.local = this.navigation.getLocalStorage()
     //geting data from userlist
    this.navigation.newTask.subscribe(( item:User ) => {
      this.id = item['id']
      this.login = item['login']
    })
    // geting repos
    console.log('jj');
    
    this.http.getRepos( this.login ).pipe().subscribe( ( item ) => {
      this.repos = item
      this.check( this.repos )
      }) 
  } 

  toFavorite( item ){ 
   if ( item.isFavor == true ) {
    this.navigation.deletefavoriteItem( item.id )
   } 
   if(item.isFavor !== true ) {
    this.navigation.setLocalStorage( item )
   }
   this.ngOnInit()
  }
  check( repos ){
    let a = this.local
    let result = repos.filter(function(v) {
      return a.some( function(v2) {
        if (v.id == v2.id){
          v.isFavor = true 
        }
       })
        
  });
   
}

}
