import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    constructor() { }

    public log(msg) {
        console.log(msg);

    }
}
