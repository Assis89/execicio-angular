import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  listarPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL).pipe(map((res) => res.slice(0, 20)));
  }
}
