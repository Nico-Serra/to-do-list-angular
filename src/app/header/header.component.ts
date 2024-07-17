import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu = ['home', 'about', 'contacts'];
  socials = [`linkedin`, 'github', 'youtube']
}
