import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-graduates',
    templateUrl: './graduates.component.html',
    styleUrls: ['./graduates.component.scss']
})
export class GraduatesComponent {

    selectedOption: string;

    constructor(public dialog: MdDialog) { }


    // protected openDialog() {
    //     const dialogRef = this.dialog.open(this.dialogComponent);
    //     dialogRef.afterClosed().subscribe(result => {
    //         this.selectedOption = result;
    //     });
    // }
}



