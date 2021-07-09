import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddLandComponent } from './add-land/add-land.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ListOfLandsComponent } from './list-of-lands/list-of-lands.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaintainProductsComponent } from './maintain-products/maintain-products.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegistrationComponent } from './registration/registration.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ThanksMessageComponent } from './thanks-message/thanks-message.component';
import { UpdateLandComponent } from './update-land/update-land.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [


  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent},
  { path: 'customer-info', component: CustomerInfoComponent},
  { path: 'thanks-message', component: ThanksMessageComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'maintain-products', component: MaintainProductsComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'scheduler', component: SchedulerComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},
  {path: 'list-of-lands',component:ListOfLandsComponent},
  {path:'add-land',component:AddLandComponent},
  {path: 'update-land/:surveyNumber',component:UpdateLandComponent},
  { path: 'customer-list', component: CustomerListComponent},
  { path: 'customer-details/:id', component: ViewCustomerComponent },
  { path: 'add-customer', component:AddCustomerComponent},
  { path: 'register-customer',component: RegisterCustomerComponent},
  { path: 'orders', component: OrderComponent},
  { path:'',component: LoginComponent},
  { path: 'products/:emailId',component:ProductsComponent},
  { path: 'registration',component:RegistrationComponent},
  { path: 'logoutcomponent',component:LogoutComponent},
  {path: 'register-admin',component:AdminRegistrationComponent},
  {path: 'admin-login',component:AdminLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
