import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  vh = document.documentElement.clientHeight;

  vMax = Math.max(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
}
