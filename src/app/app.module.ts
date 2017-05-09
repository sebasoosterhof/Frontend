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
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';
import { EditCandidateDialogComponent } from './dialog/edit-candidate-dialog/edit-candidate-dialog.component';
import { RemarksDialogComponent } from './dialog/remarks-dialog/remarks-dialog.component';

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
    ConfirmationDialogComponent,
    EditCandidateDialogComponent,
    RemarksDialogComponent
  ],
  entryComponents: [AddCandidateDialogComponent,
    AddRemarksDialogComponent,
    ConfirmationDialogComponent,
    EditCandidateDialogComponent,
    RemarksDialogComponent],
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
