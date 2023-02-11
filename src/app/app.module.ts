import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePipe } from './i18n/translate.pipe';
import { TranslateService } from './i18n/translate.service';
import { TestComponent } from './test/test.component';

export function setupTranslateServiceFactory(service: TranslateService): Function {
  return () => service.use('i18n-en.json');
}
@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // needed for using http client
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
