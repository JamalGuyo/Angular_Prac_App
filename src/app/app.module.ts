//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormComponent } from './form/form.component';
//directives
import { MagentablackDirective } from './directive/magentablack.directive';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BindingComponent,
    DirectiveComponent,
    PageNotFoundComponentComponent,
    FormComponent,
    MagentablackDirective,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
