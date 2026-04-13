import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // RouterLinkも追加
import { Header } from "./header/header"; 

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: `./app.html`,
  styleUrl: './app.scss'
})
export class App {}
