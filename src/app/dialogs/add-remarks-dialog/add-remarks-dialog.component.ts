import { Component, Inject, Optional } from '@angular/core';
import { MdDialogRef, MdDialog, MD_DIALOG_DATA } from '@angular/material';

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

  constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<AddRemarksDialogComponent>,
    public dialog: MdDialog) { }

}
