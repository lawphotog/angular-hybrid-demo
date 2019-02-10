import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPageComponent } from './newpage.component';

const routes: Routes = [
  { path: 'ng2/newpage', component: NewPageComponent, pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
        { 
            useHash: true, 
            initialNavigation: false 
        }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }