import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';//HTTP Service provider
import { ProductDetailComponent } from './products/product-detail.component'; 
import { WelcomeComponent } from './home/welcome.component';

// importing ROuter module
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe, // importing the pipe
    StarComponent, 
    ProductDetailComponent, 
    WelcomeComponent 
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([  // registers the Router Service Provider, declares the router directive and exposes the configured routes
      { path: 'products', component: ProductListComponent}, // specifies the path and a reference to the component
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, //default routes that directs to our welcome component
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //wildcard path in case the URL doesnt match any path defined in the configuration
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
