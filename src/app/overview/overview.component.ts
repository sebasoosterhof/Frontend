// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

// Tabs
import { CandidatesComponent } from '../candidates/candidates.component';
import { GraduatesComponent } from '../graduates/graduates.component';

// Dialogs
import { AddCandidateDialogComponent } from '../dialog/add-candidate-dialog/add-candidate-dialog.component';



@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

    public selectedOption: string;

    protected addCandidateDialogComponent = AddCandidateDialogComponent;


    constructor(public dialog: MdDialog) { }


    protected openAddCandidateDialog() {
        const dialogRef = this.dialog.open(this.addCandidateDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}
