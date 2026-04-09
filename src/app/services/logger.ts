import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  log(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[KanBanSync ${timestamp}]: ${message}`);
  }
}
