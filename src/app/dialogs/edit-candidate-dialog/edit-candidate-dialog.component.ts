import { Component } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'edit-candidate-dialog',
  templateUrl: './edit-candidate-dialog.component.html',
  styleUrls: ['./edit-candidate-dialog.component.scss']
})
export class EditCandidateDialogComponent {
  selectedOption: string;

  protected confirmationDialogComponent = ConfirmationDialogComponent;


  constructor(public dialogRef: MdDialogRef<EditCandidateDialogComponent>, public dialog: MdDialog, ) { }


  protected openConfirmationDialog() {
    const dialogRef = this.dialog.open(this.confirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}
