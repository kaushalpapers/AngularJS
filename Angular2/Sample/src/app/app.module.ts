import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyCurrencyPipe } from './pipes/currency.pipe';
import { NumberFormatDirective } from './directives/numberFormat.directive';
import { LogService } from './services/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicListComponent } from './basic-list/basic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicListComponent,
    NumberFormatDirective,
    MyCurrencyPipe
],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [LogService, MyCurrencyPipe, HttpClientModule, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
