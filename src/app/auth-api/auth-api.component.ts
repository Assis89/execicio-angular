import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <--- IMPORTANTE
import { AuthApiService, Post } from '../services/auth.api.service';


@Component({
  selector: 'app-auth-api',
  standalone: true,
  imports: [CommonModule, RouterModule], // <--- Aqui
  templateUrl: './auth-api.component.html',
  styleUrls: ['./auth-api.component.css']
})
export class AuthApiComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: AuthApiService) {}

  ngOnInit(): void {
    this.apiService.listarPosts().subscribe({
      next: (res) => (this.posts = res),
      error: (err) => console.error(err)
    });
  }
}
