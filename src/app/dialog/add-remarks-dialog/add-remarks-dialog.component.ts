import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'add-remarks-dialog',
  templateUrl: './add-remarks-dialog.component.html',
  styleUrls: ['./add-remarks-dialog.component.scss']
})
export class AddCandidateDialogComponent {
  constructor(public dialogRef: MdDialogRef<AddCandidateDialogComponent>) {}
}
