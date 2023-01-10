import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';

import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { DescriptionsComponent } from './points-chauds/descriptions/descriptions.component';
import { TraitementsComponent } from './points-chauds/traitements/traitements.component';
import { ValidationsComponent } from './points-chauds/validations/validations.component';
import { HistoriquesComponent } from './points-chauds/historiques/historiques.component';
import { VuePersonnelComponent } from './components/vue-personnel/vue-personnel.component';
import { VueGroupeComponent } from './components/vue-groupe/vue-groupe.component';
import { VueGlobalComponent } from './components/vue-global/vue-global.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    
    
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    DescriptionsComponent,
    TraitementsComponent,
    ValidationsComponent,
    HistoriquesComponent,
    VuePersonnelComponent,
    VueGroupeComponent,
    VueGlobalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
