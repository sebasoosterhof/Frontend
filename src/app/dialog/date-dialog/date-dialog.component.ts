import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'date-dialog',
  templateUrl: './date-dialog.component.html'
})
export class DateDialogComponent {


  constructor(public dialogRef: MdDialogRef<DateDialogComponent>) { }

}
