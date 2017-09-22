import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    constructor(private http: HttpClient) { }

    public log(msg) {
        console.log(msg);

        // this.http.post('http://localhost:3000/log', { 'Msg': msg }).subscribe(data => { });
    }
}
