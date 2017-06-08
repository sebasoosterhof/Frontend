// Angular
import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MdDialogRef, MdDialog, MD_DIALOG_DATA } from '@angular/material';

// Services
import { ExamApplicationService } from '../../services/exam-application.service';

// Interfaces
import { Remark } from '../../interfaces/remark';

// Dialogs
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'remarks-dialog',
  templateUrl: './remarks-dialog.component.html',
  styleUrls: ['./remarks-dialog.component.scss']
})
export class RemarksDialogComponent implements OnInit {
  selectedOption: string;
  selectedCandidate = Array;
  // remarks = Array;
  remarks: Remark[];


  protected confirmationDialogComponent = ConfirmationDialogComponent;


  constructor( @Optional() @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<RemarksDialogComponent>,
    public dialog: MdDialog,
    private examApplicationService: ExamApplicationService) { }

  /*
  * @function: public ngOnInit()
  * @description: This is the first function that will be executed. It calls functions that has to be executed on pageload.
  * @params: none
  * @returns: none
  * @date: 31-05-2017
  */
  public ngOnInit() {
    this.selectedCandidate = this.data;
    this.getRemarks();
  }

  /*
  * @function: public getRemarks()
  * @description: Gets candidates from the ExamApplicationService through subscription.
  * @params: none
  * @returns: none
  * @date: 31-05-2017
  */
  protected getRemarks() {
    this.examApplicationService.getRemarks().subscribe(result => this.remarks = result);
  }

  /*
  * @function: public openConfirmationDialog()
  * @description: This is the first function that will be executed. It calls functions that has to be executed on pageload.
  * @params: none
  * @returns: none
  * @date: 30-05-2017
  */
  protected openConfirmationDialog() {
    const dialogRef = this.dialog.open(this.confirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
