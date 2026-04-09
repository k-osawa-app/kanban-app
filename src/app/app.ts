import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // RouterLinkも追加

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: `./app.html`,
  styleUrl: './app.scss'
})
export class App {}




// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { BoardService } from './services/boardservice';
// import { Board } from './models/kanban.model';

// @Component({
//   selector: 'app-root',
//   imports: [CommonModule],
//   templateUrl: './app.html',
//   styleUrls: ['./app.scss']
// })
// export class App implements OnInit { 
//   board?: Board;

//   constructor(private boardService: BoardService) {}

//   ngOnInit(): void {
//        this.loadData();
//   }

//   loadData(): void {
//       this.board = this.boardService.getBoard();
//   }
  
//   onAddTask() {
//       this.boardService.addTask('Doneの新しい追加タスク');
//       this.loadData();
//   }
// }
