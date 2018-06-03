import { Component,ViewChild,AfterViewInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DonaComponent} from '../dona/dona.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  @ViewChild(DonaComponent) dona: DonaComponent;

  Fecha="";Hora=""; FechaF="";HoraF="";post:any;


  insert(){
    console.log(this.Fecha);
    console.log(this.Hora);
    console.log(this.FechaF);
    console.log(this.HoraF);
    this.dona.insert_fecha(this.Fecha,this.FechaF,this.Hora,this.HoraF);
  }
  

}
