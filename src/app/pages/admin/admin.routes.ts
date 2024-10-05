import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunnersComponent } from './runners/runners.component';

export const adminRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent,
        },
        {
          path: 'runners',
          component: RunnersComponent,
        },
      ],
    },
  ];