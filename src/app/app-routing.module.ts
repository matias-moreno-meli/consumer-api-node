import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SitesComponent} from './components/sites/sites.component';
import {AgenciesComponent} from './components/agencies/agencies.component';

const routes: Routes = [
  {path: 'sites', component: SitesComponent},
  {path: 'agencies', component: AgenciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

