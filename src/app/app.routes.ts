import { Routes } from '@angular/router';
import { BlankComponent } from './shared/theme/blank/blank.component';
import { AdminComponent } from './shared/theme/admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: '/admin/dashboard',
                pathMatch: 'full',
              },
              {
                path: 'admin',
                loadChildren: () =>
                  import('./pages/admin/admin.routes').then((m) => m.adminRoutes),
              },
        ],
    },
    {
        path: '',
        component: BlankComponent,
        children: [
          {
            path: 'auth',
            loadChildren: () =>
                import('./pages/auth/auth.routes').then(
                  (m) => m.authRoutes
                ),
          },
        ],
      },
    //   {
    //     path: '**',
    //     redirectTo: 'authentication/error',
    //   },
];
