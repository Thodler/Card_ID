import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn-refresh',
  templateUrl: './btn-refresh.component.html',
  styleUrls: ['./btn-refresh.component.scss']
})
export class BtnRefreshComponent implements OnInit {

  @Output() refreshUserRandom$ = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRefresh() {
    this.refreshUserRandom$.emit();
  }
}
