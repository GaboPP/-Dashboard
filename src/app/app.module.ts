import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EntradasService } from './services/entradas.service';
import { NavbarComponent } from './navbar/navbar.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';
import { VerEntradaComponent } from './ver-entrada/ver-entrada.component';
import { DonaComponent } from './dona/dona.component';
//Gráficos
import { ChartsModule } from 'ng2-charts';
import { BarraComponent } from './barra/barra.component';
import { FormComponent } from './form/form.component';
//material
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LinealComponent } from './lineal/lineal.component';
import { DirectionBarComponent } from './direction-bar/direction-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngresarEntradasComponent,
    VerEntradaComponent,
    DonaComponent,
    BarraComponent,
    FormComponent,
    LinealComponent,
    DirectionBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [EntradasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
