import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // テスト用に true/false を切り替えてガードの動作を確認できます
  private userSubject = new BehaviorSubject<boolean>(true); //false
  user$ = this.userSubject.asObservable();

  login() {
    this.userSubject.next(true); // ログイン状態にする
  }

  logout() {
    this.userSubject.next(false); // ログアウト状態にする
  }
}

