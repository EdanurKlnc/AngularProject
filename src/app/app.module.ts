import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path: 'product', component: ProductComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'productdetail/:id', component: ProductDetailComponent}, //" : " ile değişken bir ifade olduğunu belirtiyoruz 
  {path: 'cart/:id' , component: CartComponent},
  {path: 'cart', component:CartComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    NavComponent,
    FilterComponent,
    SearchComponent,
    ProductDetailComponent,
    SignUpComponent,
    CartComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
