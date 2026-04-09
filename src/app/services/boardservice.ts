import { Injectable } from '@angular/core';
import { Task, Board } from '../models/kanban.model';
import { Logger } from './logger'; // 先ほどのロガーを使う

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  // モックデータ：本来はデータベースから取得するもの
  private mockBoard: Board = {
    id: 'b1',
    title: 'アプリ開発プロジェクト',
    ownerId: 'u1',
    created: new Date(),
    tasks: [
      { id: 't1', title: '要件定義', description: 'クライアントへのヒアリング', status: 'done', color: 'green' },
      { id: 't2', title: '設計', description: 'コンポーネント設計図を作る', status: 'doing', color: 'blue' },
      { id: 't3', title: '実装', description: 'Angularでコーディング', status: 'todo', color: 'red' },
    ]
  };

  // Serviceの中で別のServiceを使うことも可能（DIの連鎖）
  constructor(private logger: Logger) {}

  /**
   * ボードデータを取得するメソッド
   * コンポーネントはこのメソッドを呼び出すだけでデータが手に入る
   */
  getBoard(): Board {
    this.logger.log('ボードデータを取得しました');
    return this.mockBoard;
  }
  
  /**
   * タスクを追加するメソッド
   * ロジック（ID生成など）はここに集約する
   */
  addTask(title: string): void {
    const newTask: Task = {
        id: Math.random().toString(36).substring(7), // 簡易的なID生成
        title: title,
        description: 'テスト',
        status: 'done'
    };
    this.mockBoard.tasks.push(newTask);
    this.logger.log(`タスク追加: ${title}`);
  }
}

