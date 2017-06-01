import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MdDialogRef, MdDialog, MD_DIALOG_DATA } from '@angular/material';

import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

import { ExamLine } from '../../interfaces/exam-line';
import { CandidateStatus } from '../../infrastructure/enums/candidate-status';


@Component({
  selector: 'edit-candidate-dialog',
  templateUrl: './edit-candidate-dialog.component.html',
  styleUrls: ['./edit-candidate-dialog.component.scss']
})
export class EditCandidateDialogComponent implements OnInit {
  selectedOption: string;
  selectedCandidate: ExamLine[];


  protected confirmationDialogComponent = ConfirmationDialogComponent;

  @Input()
  checked;

  constructor( @Optional() @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<EditCandidateDialogComponent>,
    public dialog: MdDialog) { }

  /*
  * @function: public ngOnInit()
  * @description: this is the first function that will be executed. It calls functions that has to be executed on pageload.
  * @params: none
  * @returns: none
  * @date: 31-05-2017
  */
  public ngOnInit() {
    this.selectedCandidate = this.data;

    if (this.selectedCandidate['status'] === 'exit') {
      this.checked = true;
    }
    else {
      this.checked = false;
    }
  }


  /*
  * @function: public openConfirmationDialog()
  * @description: this is the first function that will be executed. It calls functions that has to be executed on pageload.
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

  /*
  * @function: public closeDialog()
  * @description: closes the dialog.
  * @params: none
  * @returns: none
  * @date: 30-05-2017
  */
  protected closeDialog() {
    this.dialog.closeAll();
  }

  /*
  * @function: public onCheckChange()
  * @description: checks for changes on the toggle slider.
  * @params: none
  * @returns: none
  * @date: 30-05-2017
  */
  protected onExitChanged(value: string) {
    // console.log(value);
    if (value) {
      this.selectedCandidate['status'] = 'exit';
      console.log(this.selectedCandidate['status']);
    }
    if (!value) {
      this.selectedCandidate['status'] = 'candidate';
      console.log(this.selectedCandidate['status']);
    }
  }

  /*
  * @function: public onEducationChanged()
  * @description: changes education to corresponding change in the education input.
  * @params: value
  * @returns: none
  * @date: 01-06-2017
  */
  protected onEducationChanged(value: string) {
    this.selectedCandidate['education'] = value;
  }

  /*
  * @function: public onCreboChanged()
  * @description: changes crebo to corresponding change in the crebo input.
  * @params: value
  * @returns: none
  * @date: 01-06-2017
  */
  protected onCreboChanged(value: string) {
    this.selectedCandidate['crebo'] = value;
  }

}
