import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export enum Events {
  CustomerSelected,
}
export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  constructor() {}

  private subject$ = new Subject();

  on(event: Events, action: any): Subscription {
    return this.subject$
      .pipe(
        // @ts-ignore
        filter((e: EmitEvent) => e.name === event),
        map((e: EmitEvent) => e.value)
      )
      .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }
}
