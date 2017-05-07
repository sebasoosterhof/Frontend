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
import { OverviewComponent } from './overview/overview.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { AddCandidateDialogComponent } from './dialog/add-candidate-dialog/add-candidate-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CandidatesComponent,
    GraduatesComponent,
    AddCandidateDialogComponent
  ],
  entryComponents: [AddCandidateDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    routes,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
