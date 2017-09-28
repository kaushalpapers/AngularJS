import { PubSubService } from './shared/pubsub.service';
import { TabOrderDirective } from './directives/tabOrder.directive';
import { TabOrderItemDirective } from './directives/tabOrderItem.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyCurrencyPipe } from './pipes/currency.pipe';
import { NumberFormatDirective } from './directives/numberFormat.directive';
import { LogService } from './services/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { ManualChangeDetectionComponent } from './manual-change-detection/manual-change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicListComponent,
    NumberFormatDirective,
    MyCurrencyPipe,
    TabOrderDirective,
    TabOrderItemDirective,
    ManualChangeDetectionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [LogService, MyCurrencyPipe, HttpClientModule, HttpClient, PubSubService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
