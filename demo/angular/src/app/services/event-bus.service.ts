import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject();

  on(eventName: 'searchBtnClicked', action: () => any): Subscription {
    return this.subject$
      .pipe(
        // @ts-ignore
        filter((e: EmitEvent) => e.name === eventName),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        map((e: EmitEvent) => e.value)
      )
      .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }
}
