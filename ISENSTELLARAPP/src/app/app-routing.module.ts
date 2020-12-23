import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PodComponent } from './pod/pod.component';
import { NeoComponent } from './neo/neo.component';

const routes: Routes = [
  {path: 'pod', component: PodComponent},
  {path: 'neo', component: NeoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PodComponent, NeoComponent]
