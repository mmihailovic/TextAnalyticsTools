import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { History } from '../entity';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  history: History[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.history = this.historyService.history;
  }

}
