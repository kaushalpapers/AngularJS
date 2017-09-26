import { HttpClient } from '@angular/common/http';
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
  heros: Hero[];

  customVal: string;
  constructor(private logSvc: LogService, private http: HttpClient) { }

  ngOnInit() {
    this.logSvc.log('basiclist loaded..');
    this.bindData();
    this.customVal = '1234568';
    // const subsc = this.http.post<Hero[]>('http://localhost:3000/data', '');
    // subsc.subscribe(data => {
    //   this.heros = data;
    // });
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
