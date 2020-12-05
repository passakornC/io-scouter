import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {EventEmitter} from 'events';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output()
  eventEmitter = new EventEmitter<Observable<any>>();

  constructor(private fb: FormBuilder,
              private httpService: HttpService) { }

  form = this.fb.group({
    textInput: ['']
  });

  ngOnInit(): void {
  }

  check(): void {
    const textInput = this.form.controls.textInput.value;
    this.eventEmitter.emit(this.httpService.getIoProb(textInput));
  }
}
