import { Component } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'add-candidate-dialog',
  templateUrl: './add-candidate-dialog.component.html',
  styleUrls: ['./add-candidate-dialog.component.scss']
})
export class AddCandidateDialogComponent {
  selectedCohort: string;

  cohorts = [
    { value: '0', viewValue: 'Kies...' },
    { value: '1', viewValue: '2012-2013' },
    { value: '2', viewValue: '2013-2014' },
    { value: '3', viewValue: '2014-2015' },
    { value: '4', viewValue: '2015-2016' },
    { value: '5', viewValue: '2016-2017' },
  ];

  constructor(public dialogRef: MdDialogRef<AddCandidateDialogComponent>, public dialog: MdDialog) { }

  protected closeDialog() {
    this.dialog.closeAll();
  }
}
