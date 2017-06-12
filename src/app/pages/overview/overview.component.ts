// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

// Tabs
import { CandidatesComponent } from '../candidates/candidates.component';
import { GraduatesComponent } from '../graduates/graduates.component';

// Services
import { ExamApplicationService } from '../../services/exam-application.service';

// Dialogs
import { AddCandidateDialogComponent } from '../../dialogs/add-candidate-dialog/add-candidate-dialog.component';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  currentUser: string;
  selectedOption: string;

  protected addCandidateDialogComponent = AddCandidateDialogComponent;


  constructor(private examApplicationService: ExamApplicationService,
    private dialog: MdDialog) { }


  public ngOnInit() {
    this.examApplicationService.checkLoginCredentials();
    this.getAuthenticatedUser();
  }

  public logout() {
    this.examApplicationService.logout();
  }

  protected openAddCandidateDialog() {
    const dialogRef = this.dialog.open(this.addCandidateDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  protected getAuthenticatedUser() {
    let authenticatedUser = localStorage.getItem('user');
    authenticatedUser = JSON.parse(authenticatedUser);
    this.currentUser = authenticatedUser['firstname'] + ' ' + authenticatedUser['lastname'];
  }
}
