// Angular
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr  } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MaterialModule } from '@angular/material';

import { routes } from './app.routes';
import { AppComponent } from './app.component';


// Controllers
import { ExamApplicationController } from './controllers/exam-application.controller';

// Services
import { ExamApplicationService } from './services/exam-application.service';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { GraduatesComponent } from './pages/graduates/graduates.component';

// Dialogs
import { AddCandidateDialogComponent } from './dialogs/add-candidate-dialog/add-candidate-dialog.component';
import { AddRemarksDialogComponent } from './dialogs/add-remarks-dialog/add-remarks-dialog.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { EditCandidateDialogComponent } from './dialogs/edit-candidate-dialog/edit-candidate-dialog.component';
import { RemarksDialogComponent } from './dialogs/remarks-dialog/remarks-dialog.component';

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
  providers: [
    ExamApplicationService,
    ExamApplicationController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
