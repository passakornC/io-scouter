import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {EventEmitter} from 'events';
import {Observable} from 'rxjs';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private messageService: MessageService) {
  }

  form = this.fb.group({
    textInput: ['']
  });

  ngOnInit(): void {
  }

  check(): void {
    const textInput = this.form.controls.textInput.value;
    this.httpService.getIoProb(textInput).subscribe(response => {
      this.messageService.announceMessage(response);
    });
  }
}
