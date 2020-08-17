import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient  } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable} from "rxjs";
import { Router} from '@angular/router'
 
@Injectable({
  providedIn: 'root'
})
export class GitService {
 
  configUrl = 'https://api.github.com/';
  users: Observable<User[]>;
   
  constructor(
    public http: HttpClient,
    public rout: Router
  ) { }


  getUsers() {
    return   this.http.get(`${this.configUrl}users`).pipe(map( item => {
          return item
    }))
  }
  searchUser( serchingText ) { 
     return this.http.get(`${this.configUrl}search/users?q=${serchingText}`).pipe(map( item => {
          return item['items']
      }))
  }
  getRepos( login ){
    return this.http.get(`${this.configUrl}users/${login}/repos`).pipe(map (item => {
            return item
    }) , catchError( err => {
      this.rout.navigate([''])
      return err  
      
    })
    )}
}
