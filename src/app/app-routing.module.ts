import { TableContentComponent } from './table-content/table-content.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewComponent } from './actions/view/view.component';
import { UpdateComponent } from './actions/update/update.component';
import { DeleteComponent } from './actions/delete/delete.component';
import { AddComponent } from './actions/add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:TableContentComponent},
  { path: '', redirectTo: 'http://localhost:4200/', pathMatch: 'full' },
  {path:'employee', component:AddComponent},
  {path:'deleteEmployee/:id', component:DeleteComponent},
  {path:'updateEmployee/:id', component:UpdateComponent},
  {path:'employees/:id', component:ViewComponent},
  {path:'**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
