import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
      // Pages accessibles uniquement si NON connecté
  {
    path: 'index',
    component: IndexComponent,
  },

    { path: '**', redirectTo: 'index' }

];
