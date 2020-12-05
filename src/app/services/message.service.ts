import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSource = new BehaviorSubject<any>([]);
  public messageAnnounced$ = this.messageSource.asObservable();

  constructor() { }

  public announceMessage(value: any): void {
    this.messageSource.next(value);
  }
}
