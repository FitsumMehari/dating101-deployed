import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgSearchFilterModule } from 'ng-search-filter';

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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FaqComponent,
    AboutComponent,
    PagenotfoundComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSearchFilterModule,
    FormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }

}
