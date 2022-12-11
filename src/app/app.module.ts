import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
} from 'cic-package-test';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
