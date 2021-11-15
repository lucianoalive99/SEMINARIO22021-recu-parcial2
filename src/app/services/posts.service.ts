import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Iposts } from '../interfaces/iposts';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  urlpath: string = 'https://jsonplaceholder.typicode.com/posts';
  posts: Iposts[] = [{userId:0,id:	0,title:'', body:''}];
  post: Iposts = {userId:0,id:0	,title:'', body:''};
  constructor(private httpclient: HttpClient) { }

  getPosts(): Observable<Iposts[]> {
    return this.httpclient.get<Iposts[]>(this.urlpath)
      .pipe(
        tap(iposts => console.log('Recibido OK!'))
      );
  }

  getPostId(id: number): Observable<Iposts>{
    return this.httpclient.get<Iposts>(this.urlpath+'/'+id).pipe(
        tap(iposts => console.log('Recibido ok'))
      );
  }

}
