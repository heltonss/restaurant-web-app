import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {

  notifier = new EventEmitter<string>()

  constructor() { }

  notify(message) {
    this.notifier.emit(message);
  }

}
