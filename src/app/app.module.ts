import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindingComponent } from './binding/binding.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectiveComponent } from './directive/directive.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormComponent } from './form/form.component';
import { MagentablackDirective } from './directive/magentablack.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BindingComponent,
    DirectiveComponent,
    PageNotFoundComponentComponent,
    FormComponent,
    MagentablackDirective
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
