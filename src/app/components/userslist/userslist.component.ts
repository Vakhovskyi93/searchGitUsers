import { Component, OnInit, Input } from '@angular/core'; 
import { User } from '../../models/User';
import {DatanavigationService} from '../../service/datanavigation.service'
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  @Input() user: User;
  
  constructor(
    public navigation: DatanavigationService
  ) { }
   
  ngOnInit(): void {
     
    
    
    
  } 
  sendDataToUserItem(item){
     
     this.navigation.getDataUser(item)
    
    
  }

}
