import { BROWSER_NOOP_ANIMATIONS_PROVIDERS } from '@angular/platform-browser/animations/src/providers';
import { HttpClient } from '@angular/common/http';
import { print } from 'util';
import { LogService } from '../services/log.service';
import { Hero } from '../model/hero';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

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

    const subsc = this.http.post<Hero[]>('http://localhost:3000/data', '');
    subsc.subscribe(data => {
      this.heros = data;
    });

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
