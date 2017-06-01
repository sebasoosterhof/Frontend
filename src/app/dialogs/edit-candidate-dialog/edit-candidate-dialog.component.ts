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

  creboValue: string;
  educationValue: string;
  statusValue: string;
  crebo_id: number;


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
    this.initializeData();
    console.log(this.selectedCandidate);


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
  * @function: public onExitChange()
  * @description: checks for changes on the toggle slider.
  * @params: none
  * @returns: none
  * @date: 30-05-2017
  */
  protected onExitChanged(value: string) {
    this.statusValue = value;
  }

  /*
  * @function: public onEducationChanged()
  * @description: changes education to corresponding change in the education input.
  * @params: value
  * @returns: none
  * @date: 01-06-2017
  */
  protected onEducationChanged(educationValue: string) {
    this.educationValue = educationValue;

    // Applicationdeveloper
    if (this.educationValue === 'Applicatieontwikkelaar') {
      this.creboValue = '95311';
      this.crebo_id = 1;
    }

    // Mediadeveloper
    if (this.educationValue === 'Mediadeveloper') {
      this.creboValue = '95213';
      this.crebo_id = 2;
    }

  }

  /*
  * @function: public onCreboChanged()
  * @description: changes crebo to corresponding change in the crebo input.
  * @params: value
  * @returns: none
  * @date: 01-06-2017
  */
  protected onCreboChanged(creboValue: string) {
    this.creboValue = creboValue;

    // Applicationdeveloper
    if (this.creboValue === '95311') {
      this.crebo_id = 1;
      this.educationValue = 'Applicatieontwikkelaar';
    }

    // Mediadeveloper
    if (this.creboValue === '95213') {
      this.crebo_id = 2;
      this.educationValue = 'Mediadeveloper';
    }
  }

  /*
  * @function: public onCreboChanged()
  * @description: changes crebo to corresponding change in the crebo input.
  * @params: value
  * @returns: none
  * @date: 01-06-2017
  */
  protected setChanges() {
    // Exit
    if (this.statusValue) {
      this.selectedCandidate['status'] = 'exit';
    }
    // Candidate
    if (!this.statusValue) {
      this.selectedCandidate['status'] = 'candidate';
    }

    this.selectedCandidate['crebo_id'] = this.crebo_id;
    this.selectedCandidate['education'] = this.educationValue;
    this.selectedCandidate['crebo'] = this.creboValue;
  }


  /*
  * @function: private initializeData()
  * @description: initializes the data from this.data, sets exit toggle based on selectedCandidate status, sets education/crebo.
  * @params: none
  * @returns: none
  * @date: 01-06-2017
  */
  private initializeData() {
    if (this.selectedCandidate['status'] === 'exit') {
      this.checked = true;
    }
    else {
      this.checked = false;
    }

    // Applicationdeveloper
    if (this.selectedCandidate['education'] === 'Applicatieontwikkelaar') {
      this.creboValue = '95311';
      this.crebo_id = 1;
    }
    if (this.selectedCandidate['crebo'] === '95311') {
      this.educationValue = 'Applicatieontwikkelaar';
      this.crebo_id = 1;
    }

    // Mediadeveloper
    if (this.selectedCandidate['education'] === 'Mediadeveloper') {
      this.creboValue = '95213';
      this.crebo_id = 2;
    }
    if (this.selectedCandidate['crebo'] === '95213') {
      this.educationValue = 'Mediadeveloper';
      this.crebo_id = 2;
    }

  }

}
