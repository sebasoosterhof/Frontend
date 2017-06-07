import { Component } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ExamCandidate } from '../../interfaces/exam-candidate';
import { ExamApplicationService } from '../../services/exam-application.service';

@Component({
  selector: 'add-candidate-dialog',
  templateUrl: './add-candidate-dialog.component.html',
  styleUrls: ['./add-candidate-dialog.component.scss']
})
export class AddCandidateDialogComponent {
  examCandidate = Array<ExamCandidate[]>();
  firstname: string;
  lastname: string;
  studentnumber: number;
  educationValue: string;
  creboValue: string;
  crebo_id: number;
  cohort: string;



  cohorts = [
    { value: 'Kies...', viewValue: 'Kies...' },
    { value: '2012-2013', viewValue: '2012-2013' },
    { value: '2013-2014', viewValue: '2013-2014' },
    { value: '2014-2015', viewValue: '2014-2015' },
    { value: '2015-2016', viewValue: '2015-2016' },
    { value: '2016-2017', viewValue: '2016-2017' },
  ];


  constructor(public dialogRef: MdDialogRef<AddCandidateDialogComponent>,
    public dialog: MdDialog,
    private examApplicationService: ExamApplicationService) { }


  /*
  * @function: public addCandidate()
  * @description: adds a candidate and sets it to the examApplicationService.
  * @params: creboValue
  * @returns: none
  * @date: 07-06-2017
  */
  public addExamCandidate() {
    this.examCandidate['firstname'] = this.firstname;
    this.examCandidate['lastname'] = this.lastname;
    this.examCandidate['studentnumber'] = this.studentnumber;
    this.examCandidate['education'] = this.educationValue;
    this.examCandidate['crebo'] = this.creboValue;
    this.examCandidate['crebo_id'] = this.crebo_id;
    this.examCandidate['cohort'] = this.cohort;

    this.examApplicationService.addExamCandidate(this.examCandidate).subscribe(
      data => {
        // refresh the list
        this.examApplicationService.getExamLines();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    );
  }

  /*
  * @function: public onFirstnameChanged()
  * @description: changes firstname to corresponding change in the firstname input.
  * @params: educationValue
  * @returns: none
  * @date: 07-06-2017
  */
  protected onFirstnameChanged(firstname: string) {
    this.firstname = firstname;
    console.log(firstname);
  }

  /*
    * @function: public onLastnameChanged()
    * @description: changes lastname to corresponding change in the lastname input.
    * @params: educationValue
    * @returns: none
    * @date: 07-06-2017
    */
  protected onLastnameChanged(lastname: string) {
    this.lastname = lastname;
    console.log(lastname);
  }

  /*
  * @function: public onStudentnumberChanged()
  * @description: changes studentnumber to corresponding change in the studentnumber input.
  * @params: educationValue
  * @returns: none
  * @date: 07-06-2017
  */
  protected onStudentnumberChanged(studentnumber: number) {
    this.studentnumber = studentnumber;
    console.log(studentnumber);
  }

  /*
   * @function: public onEducationChanged()
   * @description: changes education to corresponding change in the education input.
   * @params: educationValue
   * @returns: none
   * @date: 07-06-2017
   */
  protected onEducationChanged(education: string) {
    this.educationValue = education;
    const applicationdeveloper = 'Applicatieontwikkelaar';
    const mediadeveloper = 'Mediadeveloper';
    const adCrebo = '95311';
    const mdCrebo = '95213';

    // Applicationdeveloper
    if (this.educationValue === applicationdeveloper) {
      this.creboValue = adCrebo;
      this.crebo_id = 1;
    }

    // Mediadeveloper
    if (this.educationValue === mediadeveloper) {
      this.creboValue = mdCrebo;
      this.crebo_id = 2;
    }
    console.log(education);
  }

  /*
  * @function: public onCreboChanged()
  * @description: changes crebo to corresponding change in the crebo input.
  * @params: creboValue
  * @returns: none
  * @date: 07-06-2017
  */
  protected onCreboChanged(crebo: string) {
    this.creboValue = crebo;
    const applicationdeveloper = 'Applicatieontwikkelaar';
    const mediadeveloper = 'Mediadeveloper';
    const adCrebo = '95311';
    const mdCrebo = '95213';

    // Applicationdeveloper
    if (this.creboValue === adCrebo) {
      this.crebo_id = 1;
      this.educationValue = applicationdeveloper;
    }

    // Mediadeveloper
    if (this.creboValue === mdCrebo) {
      this.crebo_id = 2;
      this.educationValue = mediadeveloper;
    }
    console.log(crebo);
  }

  /*
  * @function: public onCohortChanged()
  * @description: changes cohort to corresponding change in the cohort input.
  * @params: creboValue
  * @returns: none
  * @date: 07-06-2017
  */
  protected onCohortChanged(cohort: string) {
    this.cohort = cohort;

    console.log(cohort);
  }
}
