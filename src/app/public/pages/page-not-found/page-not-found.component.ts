import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [CommonModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  currentPath: string = '';

  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }
}
