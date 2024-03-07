import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/client/home/home.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CarouselModule } from 'primeng/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from "./components/client/index/index.component";
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview'
import { FormsModule } from "@angular/forms";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DividerModule } from 'primeng/divider';
import { LoginPageComponent } from "./components/client/login-page/login-page.component";
import { CartComponent } from "./components/client/cart/cart.component";
import { ShopComponent } from "./components/client/shop/shop.component";
import { SliderModule } from 'primeng/slider';
import { ToolbarModule } from 'primeng/toolbar';
import { DataViewModule } from 'primeng/dataview';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { UserDetailComponent } from "./components/client/user-detail/user-detail.component";
import { SearchComponent } from "./components/client/search/search.component";
import { ProductDetailComponent } from "./components/client/product-detail/product-detail.component";
import { CheckoutComponent } from "./components/client/checkout/checkout.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { CategoryComponent } from "./components/admin/category/category.component";
import { ProductComponent } from "./components/admin/product/product.component";
import { InputNumberModule } from "primeng/inputnumber";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { OrderComponent } from "./components/admin/order/order.component";
import { TagComponent } from "./components/admin/tag/tag.component";
import { BlogComponent } from "./components/admin/blog/blog.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        IndexComponent,
        HomeComponent,
        CartComponent,
        ShopComponent,
        UserDetailComponent,
        SearchComponent,
        ProductDetailComponent,
        CheckoutComponent,
        LoginPageComponent,
        CategoryComponent,
        ProductComponent,
        OrderComponent,
        TagComponent,
        BlogComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        CarouselModule,
        BrowserAnimationsModule,
        ToastModule,
        TabViewModule,
        FormsModule,
        OverlayPanelModule,
        DividerModule,
        SliderModule,
        DataViewModule,
        HttpClientModule,
        CardModule,
        FileUploadModule,
        PasswordModule,
        ToolbarModule,
        TableModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        FileUploadModule,
        ConfirmDialogModule,
        MultiSelectModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
