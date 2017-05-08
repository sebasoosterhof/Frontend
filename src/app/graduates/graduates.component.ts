import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'graduates',
    templateUrl: './graduates.component.html',
    styleUrls: ['./graduates.component.scss']
})
export class GraduatesComponent {

    selectedOption: string;

    constructor(public dialog: MdDialog) { }

}



