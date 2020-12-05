import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InputPageComponent} from './pages/input-page/input-page/input-page.component';
import {PagesModule} from './pages/pages.module';
import {LayoutComponent} from './layouts/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
