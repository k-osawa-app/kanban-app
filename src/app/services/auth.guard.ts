import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './authservice'; // Step 1で作成したパスに合わせてください
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  // 1. 必要な依存関係を注入する
  const authService = inject(AuthService);
  const router = inject(Router);

  // 2. ユーザーのログイン状態を監視する
  // ※ 現時点ではFirebase未実装のため、authService.user$ があると仮定します。
  // Step 3で本格実装しますが、今はロジックの流れを理解します。
  
  return authService.user$.pipe(
    take(1), // 最初の値だけ取って完了させる
    map(user => {
      // ユーザーが存在すれば通行許可 (true)
      if (user) {
        return true;
      }
      
      // ユーザーがいなければログイン画面へ強制送還し、通行禁止 (false)
      console.warn('アクセス拒否: ログインが必要です');
      router.navigate(['/login']);
      return false;
    })
  );
};
