import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {ProfessionalDetailComponent} from "./entities/professional/professional-detail/professional-detail.component";

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
   path: 'profesionaldetail',
   component: ProfessionalDetailComponent,
   pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
