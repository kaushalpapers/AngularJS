import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface PubSub {
    type: string;
    payload: any;
}

type PubSubCallback = (payload: any) => void;

@Injectable()
export class PubSubService {
    private handler = new Subject<PubSub>();

    publish(type: string, payload: any) {
        this.handler.next({ type, payload });
    }

    subscribe(type: string, callback: PubSubCallback): Subscription {
        return this.handler
            .filter(PubSub => PubSub.type === type)
            .map(PubSub => PubSub.payload)
            .subscribe(callback);
    }
}
