import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgSearchFilterModule } from 'ng-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogService } from './services/blog.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AutenticationService } from './services/autentication.service';
import { AuthorizationService } from './services/authorization.service';
import { ProfileGuard } from './guards/profile.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FaqComponent,
    AboutComponent,
    PagenotfoundComponent,
    BlogDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSearchFilterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BlogService,
    AutenticationService,
    AuthorizationService,
    ProfileGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }

}
