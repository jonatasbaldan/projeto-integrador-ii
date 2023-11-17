import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MakeScheduleComponent } from './components/pages/make-schedule/make-schedule.component';
import { SchedulesComponent } from './components/pages/schedules/schedules.component';
import { VaccinesComponent } from './components/pages/vaccines/vaccines.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './services/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'agendar',
    component: MakeScheduleComponent,
    pathMatch: 'prefix',
    canActivate: [AuthGuard],
  },
  {
    path: 'agendamentos',
    component: SchedulesComponent,
    pathMatch: 'prefix',
    canActivate: [AuthGuard],
  },
  {
    path: 'vacinas',
    component: VaccinesComponent,
    pathMatch: 'prefix',
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'prefix' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
