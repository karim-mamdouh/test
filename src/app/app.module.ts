import { NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
  CICCheckboxModule,
  CICDividerModule,
  CICDropdownModule,
  CICFieldSetModule,
  CICImageModule,
  CICKnobModule,
  CICRadioButtonModule,
  CICRatingModule,
  CICSliderModule,
  CICCalendarModule,
} from 'cic-package-test';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { TablesComponent } from './components/tables/tables.component';
import { FormComponent } from './components/form/form.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent, TablesComponent, FormComponent],
  imports: [
    CICCalendarModule,
    BrowserModule,
    AppRoutingModule,
    CICButtonModule,
    CICInputModule,
    CICDataTableModule,
    CICCheckboxModule,
    CICDividerModule,
    CICDropdownModule,
    CICFieldSetModule,
    CICImageModule,
    CICKnobModule,
    CICRadioButtonModule,
    CICRatingModule,
    CICSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabViewModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
