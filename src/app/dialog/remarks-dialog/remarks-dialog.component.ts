import { Component } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'remarks-dialog',
  templateUrl: './remarks-dialog.component.html',
  styleUrls: ['./remarks-dialog.component.scss']
})
export class RemarksDialogComponent {
  selectedOption: string;

  protected confirmationDialogComponent = ConfirmationDialogComponent;


  constructor(public dialogRef: MdDialogRef<RemarksDialogComponent>, public dialog: MdDialog, ) { }


  protected openConfirmationDialog() {
    const dialogRef = this.dialog.open(this.confirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
