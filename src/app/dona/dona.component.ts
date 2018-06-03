import { Component} from '@angular/core';
import { EntradasService } from '../services/entradas.service';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent{
  constructor(private entradasService: EntradasService) { }

//////variables donghnutchart
post:any;post2:any;
  FuelPTO:any;FuelIdle:any;TotalFuel:any;
/////
  

///// Doughnut
  public doughnutChartLabels:string[] = ['Fuel used during PTO', 'Fuel used during idle', 'Total Fuel used'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors:Array<any> = [{ 
    backgroundColor: ['rgba(85, 239, 196,1.0)','rgba(0, 184, 148,1.0)','rgba(0, 206, 201,1.0)']
  }];
///// pie
  public pieChartLabels:string[] = ['Duration cruise active', 'Duration driving'];
  public pieChartData:number[] = [350, 450];
  public pieChartType:string = 'pie';
  public pieChartColors:Array<any> = [{ 
    backgroundColor: ['rgba(85, 239, 196,1.0)','rgba(0, 184, 148,1.0)']
}];


///// events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
  public insert_fecha(Fecha,FechaF,Hora,HoraF){
    this.entradasService.getreportes_fsm4({"Fecha": Fecha+ " " + Hora,"FechaF": FechaF+ " " + HoraF}).subscribe(rows =>{
      this.post = rows[0];
      //console.log(this.post);
      //console.log(this.post["Fuel_used_during_PTO"]);
      //console.log(rows);
      // se considera que el pto es demasiado grande por lo q se divide en 1000 
      this.FuelPTO=this.post["Fuel_used_during_PTO"]/1000;
      this.FuelIdle=this.post["Fuel_used_during_idle"]/100;

      this.pieChartData =  [this.post['Duration_cruise_active'],this.post['Duration_driving']];



      
      
    this.entradasService.getreportes_fsm1({"Fecha": Fecha+ " " + Hora,"FechaF": FechaF+ " " + HoraF}).subscribe(rows =>{
      this.post2 = rows[0];
      console.log(this.post2);
      console.log("total fuel:");
      console.log(this.post2["Total_fuel"]);
      
      // se considera que el pto es demasiado grande por lo q se divide en 1000 
      this.TotalFuel=this.post2["Total_fuel"]/1000;
      
      //console.log(this.FuelPTO);
      //console.log(this.FuelIdle);
      //console.log(this.TotalFuel);
      this.doughnutChartData = [this.FuelPTO,this.FuelIdle,this.TotalFuel];});
    });
  }
}

