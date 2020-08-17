import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatanavigationService {
  user:User[]

  private userItem = new BehaviorSubject<User>({login:'', id:'',avatar_url: "",description:'', html_url:'', repos_url:''});
    newTask = this.userItem.asObservable()
  constructor() { }
   
   
  getDataUser( item:User ){
    this.userItem.next(item)
    }
  
  getItem( ){
    return this.user.push()
  }
  setLocalStorage( item ){
    item.owner.localid = item.id
    item.owner.isFavor = true;
    let jsonItem = JSON.stringify( item );
    localStorage.setItem( item.id, jsonItem );
    
  }
  getLocalStorage(){
    let res=[]
    for( let i=0; i < localStorage.length; i++){
      let key = localStorage.key(i)
      res.push(JSON.parse( localStorage.getItem( key )))
    }
    return res
    
  }
  deletefavoriteItem( id ){
    localStorage.removeItem( id )
}
}
