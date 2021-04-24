import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject();
  constructor() {}

  on(eventName: 'searchBtnClicked', action: ()=>any): Subscription {
    return this.subject$
      .pipe(
        // @ts-ignore
        filter((e: EmitEvent) => e.name === eventName),
        map((e: EmitEvent) => e.value)
      )
      .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }
}
