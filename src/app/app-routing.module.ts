import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/component/login.component';
import { DefaultComponent } from './core/default/default.component';
import { DashboardComponent } from './view/dashboard/component/dashboard.component';
import { ProfileComponent } from './view/profile/component/profilecomponent';
import { SettingComponent } from './view/setting/component/setting.component';
import { HelpComponent } from './view/help/component/help.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard Page'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile Page'
        }
      },
      {
        path: 'setting',
        component: SettingComponent,
        data: {
          title: 'Setting Page'
        }
      },
      {
        path: 'help',
        component: HelpComponent,
        data: {
          title: 'Help Page'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
