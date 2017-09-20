import { LogService } from '../services/log.service';
import { Hero } from '../model/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {
  singleHero: Hero;
  customVal: string;
  constructor(private logSvc: LogService) { }

  ngOnInit() {
    this.logSvc.log('basiclist loaded..');
    this.bindData();
    this.customVal = '1234568';
  }

  bindData() {
    this.singleHero = {
      id: 1234561.23456,
      name: 'd'
    };
  }

  logValue() {
    this.logSvc.log(this.customVal);
  }
}
