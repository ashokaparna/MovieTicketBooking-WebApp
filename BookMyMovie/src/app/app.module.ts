import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselDivComponent } from './carousel-div/carousel-div.component';
import { MiddleDivComponent } from './middle-div/middle-div.component';
import { Order_Service } from './Services/order.service';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    CarouselDivComponent,
    MiddleDivComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    //AppRoutingModule
  ],
  providers: [Order_Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
