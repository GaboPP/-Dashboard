import { Component} from '@angular/core';

@Component({
  selector: 'app-lineal',
  templateUrl: './lineal.component.html',
  styleUrls: ['./lineal.component.css']
})
export class LinealComponent {
  
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }
}
