import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PageComponent } from './pages/page/page.component';
import { PogramsComponent } from './pages/pograms/pograms.component';
import { TeachersComponent } from './pages/teachers/teachers.component';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: DashboardComponent,
	data: {
		alias: 'Дашбоард'
	},
  children: [{
    path: 'teachers',
    component: TeachersComponent,
		data: {
			alias: 'Преподаватели'
		},
  }, {
    path:'programs',
    component: PogramsComponent,
		data: {
			alias: 'Программы'
		},
  },{
		path: 'pages',
		component: PageComponent,
		data: {
			alias: 'Страницы'
		},
	}]
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
