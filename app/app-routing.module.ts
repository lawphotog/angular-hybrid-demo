import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPageComponent } from './newpage.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'ng2/newpage', component: NewPageComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
        { 
            useHash: true, 
            initialNavigation: false,
            enableTracing: true // <-- debugging purposes only
        }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }