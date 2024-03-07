import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/client/home/home.component";
import { IndexComponent } from "./components/client/index/index.component";
import { CartComponent } from "./components/client/cart/cart.component";
import { LoginPageComponent } from "./components/client/login-page/login-page.component";
import { ShopComponent } from "./components/client/shop/shop.component";
import { UserDetailComponent } from "./components/client/user-detail/user-detail.component";
import { AuthGuardService } from "./_service/auth-guard.service";
import { SearchComponent } from "./components/client/search/search.component";
import { ProductDetailComponent } from "./components/client/product-detail/product-detail.component";
import { CheckoutComponent } from "./components/client/checkout/checkout.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { RoleGuardService } from "./_service/role-guard.service";
import { CategoryComponent } from "./components/admin/category/category.component";
import { ProductComponent } from "./components/admin/product/product.component";
import { OrderComponent } from "./components/admin/order/order.component";
import { TagComponent } from "./components/admin/tag/tag.component";
import { BlogComponent } from "./components/admin/blog/blog.component";

const routes: Routes = [
    {
        path: 'admin', component:DashboardComponent, canActivate: [RoleGuardService], data: {expectedRole: "ROLE_ADMIN"},
        children:[
          {path:'category', component: CategoryComponent},
          {path:'product', component: ProductComponent},
          {path:'order', component: OrderComponent},
          {path:'blog', component: BlogComponent},
          {path:'tag', component: TagComponent},

        ]
    },
    {
        path: '', component: IndexComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'cart', component: CartComponent},
            {path: 'category/:id', component: ShopComponent},
            {path: 'user',component: UserDetailComponent, canActivate: [AuthGuardService]},
            {path: 'search/:keyword', component: SearchComponent},
            {path: 'product/:id', component: ProductDetailComponent},
            {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
            
        ]
    },
    {path: 'login', component: LoginPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }