import { Injectable } from '@angular/core';
import { History } from './entity';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: History[] = [];

  constructor() { }

  addHistory(dateTime: string, method: string, url: string): void {
    this.history.push(new History(dateTime,method,url))
  }
}
