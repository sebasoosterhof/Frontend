import { Component } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(private router: Router,
    private http: Http,
    public dialog: MdDialog,
    public dialogRef: MdDialogRef<ConfirmationDialogComponent>, ) { }

}
