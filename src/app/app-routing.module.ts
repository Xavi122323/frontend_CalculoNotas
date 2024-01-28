import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoNotaComponent } from './nota/calculo-nota/calculo-nota.component';

const routes: Routes = [
  {path:'', component:CalculoNotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
