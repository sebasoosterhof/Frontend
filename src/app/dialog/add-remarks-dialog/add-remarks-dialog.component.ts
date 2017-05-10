import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'add-remarks-dialog',
  templateUrl: './add-remarks-dialog.component.html',
  styleUrls: ['./add-remarks-dialog.component.scss']
})
export class AddRemarksDialogComponent {

    examComponents = [
        { value: '0', viewValue: 'Kies...' },
        { value: '1', viewValue: 'WPT/HBE' },
        { value: '2', viewValue: 'PVB' },
        { value: '3', viewValue: 'Ontwikkelgesprek' },
        { value: '4', viewValue: 'Overig' }
    ];

  constructor(public dialogRef: MdDialogRef<AddRemarksDialogComponent>) { }

}
