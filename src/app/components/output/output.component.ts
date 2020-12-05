import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnChanges {

  data: any;
  options: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change');
  }

  constructor(private messageService: MessageService) {
    // initial chart
    this.data = {
      datasets: [
        {
          label: 'Percent of IO Probability Score',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          barPercentage: 0.3,
          data: [50]
        }
      ]
    };

    this.options = {
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit(): void {
    // update value
    this.messageService.messageAnnounced$.subscribe(message => {
      this.data = {
        datasets: [
          {
            label: 'Percent of IO Probability Score',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            barPercentage: 0.3,
            data: [message.io_prob * 100]
          }
        ]
      };
    });
  }
}
