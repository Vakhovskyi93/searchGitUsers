import { Component, OnInit,Input } from '@angular/core';
import { User } from '../../models/User';

import {DatanavigationService} from '../../service/datanavigation.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
    user;
  constructor(
    public navigation: DatanavigationService
  ) { }

  ngOnInit(): void { 
    this.user = this.navigation.getLocalStorage()
     console.log(this.user);
     
  }
  toRemoveFromFavor( item ){
    this.navigation.deletefavoriteItem( item.id )
    this.ngOnInit ()
         
  }

}
