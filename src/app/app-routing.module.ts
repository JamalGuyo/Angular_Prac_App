import { FormComponent } from './form/form.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { DirectiveComponent } from './directive/directive.component';
import { BindingComponent } from './binding/binding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/binding',
    pathMatch: 'full'
  },
  {
    path: 'binding',
    component: BindingComponent,
    data: { title: 'Binding' }
  },
  {
    path: 'directive',
    component: DirectiveComponent,
    data: { title: 'Directives' }
  },
  {
    path: 'form',
    component: FormComponent,
    data: { title: 'Form' }
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent,
    data: { title: '404' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
