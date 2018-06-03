import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
//import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';
//import { VerEntradaComponent } from './ver-entrada/ver-entrada.component';

const routes: Routes = [
    { path: '', component: FormComponent },
    //{ path: ':page', component: VerEntradaComponent },
    //{ path: 'entradas/new', component: IngresarEntradasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
