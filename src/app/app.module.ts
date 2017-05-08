// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MaterialModule } from '@angular/material';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

// Pages
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { GraduatesComponent } from './graduates/graduates.component';

// Dialogs
import { AddCandidateDialogComponent } from './dialog/add-candidate-dialog/add-candidate-dialog.component';
import { AddRemarksDialogComponent } from './dialog/add-remarks-dialog/add-remarks-dialog.component';
import { RemarksDialogComponent } from './dialog/remarks-dialog/remarks-dialog.component';
import { DateDialogComponent } from './dialog/date-dialog/date-dialog.component';

// Datepicker
import { DatepickerModule } from 'angular2-material-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    CandidatesComponent,
    GraduatesComponent,
    AddCandidateDialogComponent,
    AddRemarksDialogComponent,
    RemarksDialogComponent,
    DateDialogComponent
  ],
  entryComponents: [AddCandidateDialogComponent, AddRemarksDialogComponent, RemarksDialogComponent, DateDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    routes,
    MaterialModule.forRoot(),
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
