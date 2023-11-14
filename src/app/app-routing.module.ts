import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MakeScheduleComponent } from './components/pages/make-schedule/make-schedule.component';
import { SchedulesComponent } from './components/pages/schedules/schedules.component';
import { VaccinesComponent } from './components/pages/vaccines/vaccines.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'agendar', component: MakeScheduleComponent, pathMatch: 'prefix' },
  { path: 'agendamentos', component: SchedulesComponent, pathMatch: 'prefix' },
  { path: 'vacinas', component: VaccinesComponent, pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
