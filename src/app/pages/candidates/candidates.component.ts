// Angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

// Services
import { ExamApplicationService } from '../../services/exam-application.service';

// Controllers
import { ExamApplicationController } from '../../controllers/exam-application.controller';

// Dialogs
import { AddCandidateDialogComponent } from '../../dialogs/add-candidate-dialog/add-candidate-dialog.component';
import { AddRemarksDialogComponent } from '../../dialogs/add-remarks-dialog/add-remarks-dialog.component';
import { RemarksDialogComponent } from '../../dialogs/remarks-dialog/remarks-dialog.component';
import { EditCandidateDialogComponent } from '../../dialogs/edit-candidate-dialog/edit-candidate-dialog.component';

// Interfaces
import { ExamLine } from '../../interfaces/exam-line';
import { Exam } from '../../interfaces/exam';


@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  title = 'Kandidaten';
  candidates: ExamLine[];
  exams: Exam[];

  examLength: number;

  selectedCandidate: ExamLine;

  selectedOption: string;
  selectedPVB: string;
  selectedOG: string;
  pvbBGColor: string;
  ogBGColor: string;

  @Input("'checked1' + line.id")
  checked1 = false;

  @Input("'checked2' + line.id")
  checked2 = false;

  @Input("'checked3' + line.id")
  checked3 = false;

  @Input()
  checked4 = false;

  @Input()
  checked5 = false;

  @Input()
  checked6 = false;

  @Input()
  checked7 = false;

  private statusColorUndefined = '#fff';
  private statusColorYes = '#81C784';
  private statusColorNo = '#EF9A9A';
  private statusColorRequested = '#81C784';
  private statusColorPlanned = '#4DB6AC';
  private statusColorAchieved = '#81D4FA';
  private statusColorSlidingThrough = '#FFF176';
  private statusColorDeterminationList = '#64B5F6';


  pvbs = [
    { value: '0', viewValue: 'Kies...' },
    { value: '1', viewValue: 'Nee' },
    { value: '2', viewValue: 'Ja' },
    { value: '3', viewValue: 'Vaststellingslijst' }
  ];

  ogs = [
    { value: '0', viewValue: 'Kies...' },
    { value: '1', viewValue: 'Aangevraagd' },
    { value: '2', viewValue: 'Ingepland' },
    { value: '3', viewValue: 'Gehaald' },
    { value: '4', viewValue: 'Doorschuiven' }
  ];


  protected addCandidateDialogComponent = AddCandidateDialogComponent;

  protected editCandidateDialogComponent = EditCandidateDialogComponent;

  protected addRemarksDialogComponent = AddRemarksDialogComponent;

  protected remarksDialogComponent = RemarksDialogComponent;


  constructor(
    private router: Router,
    private http: Http,
    private dialog: MdDialog,
    private examApplicationService: ExamApplicationService,
    private examApplicationController: ExamApplicationController) {
  }


  /*
  * @function: public ngOnInit()
  * @description: this is the first function that will be executed. It calls functions that has to be executed on pageload.
  * @params: none
  * @returns: none
  * @date: 22-05-2017
  */
  public ngOnInit() {
    this.selectedPVB = '0';
    this.selectedOG = '0';
    this.getCandidates();
    this.getExams();
  }

  /*
  * @function: protected setExams()
  * @description: this is the first function that will be executed. It calls functions that has to be executed on pageload.
  * @params: none
  * @returns: none
  * @date: 07-06-2017
  */
  public setExams() {
    this.exams.forEach(e => {
      const examDescription = e.description.split('-');
      // console.log(examDescription);

      this.examLength = examDescription.length;

      // console.log(this.examLength);

      // if (examDescription.includes('1')) {
      //   this.checked1 = true;
      // }
      // if (examDescription.includes('2')) {
      //   this.checked2 = true;
      // }
      // if (examDescription.includes('3')) {
      //   this.checked3 = true;
      // }
      // if (examDescription.includes('4')) {
      //   this.checked4 = true;
      // }
      // if (examDescription.includes('5')) {
      //   this.checked5 = true;
      // }
      // if (examDescription.includes('6')) {
      //   this.checked6 = true;
      // }
      // if (examDescription.includes('7')) {
      //   this.checked7 = true;
      // }
    });
  }

  public getHBE(cValue, line_id) {
    console.log(this.checked1);

    console.log('cValue = ' + cValue + ' line_id = ' + line_id);
    for (let i = 0; i < this.candidates.length; i++) {
      const candidate = this.candidates[i];

      this.exams.forEach(e => {
        const examDescription = e.description.split('-');
        // console.log(examDescription);

        if (candidate.id === line_id) {
          if (cValue === 1 && examDescription.includes('1') && this.checked1 === false) {
            this.checked1 = true;
            console.log('this.checked1 = false');
          }
          else if (cValue === 1 && examDescription.includes('1') && this.checked1 === true) {
            this.checked1 = false;
            console.log('this.checked1 = true');
          }
          // if (cValue === 5 && examDescription.includes('5') && this.checked5 === false) {
          //   this.checked5 = true;
          //   console.log('this.checked5 = false');
          // }
          // else if (cValue === 5 && examDescription.includes('5') && this.checked5 === true) {
          //   this.checked5 = false;
          //   console.log('this.checked5 = true');
          // }
        }
      });
    }
  }


  /*
  * @function: public getCandidates()
  * @description: gets candidates from the ExamApplicationService through subscription.
  * @params: none
  * @returns: none
  * @date: 27-05-2017
  */
  public getCandidates() {
    this.examApplicationService.getExamLines().subscribe(result => {
      this.candidates = result;
    });
  }


  /*
  * @function: protected getExams()
  * @description: gets exams from the ExamApplicationService through subscription.
  * @params: none
  * @returns: none
  * @date: 27-05-2017
  */
  public getExams() {
    this.examApplicationService.getExams().subscribe(result => {
      this.exams = result;
    },
      err => console.error(err),
      () => this.setExams());
  }

  /*
  * @function: protected openEditCandidateDialog()
  * @description: opens the EditCandidateDialog. After the dialog has been close, the result will be fetched through subscription.
  * @params: id
  * @returns: none
  * @date: 30-05-2017
  */
  protected openEditCandidateDialog(id) {
    this.candidates.forEach(candidate => {
      if (candidate.id === id) {
        this.selectedCandidate = candidate;
      };
    });
    const dialogRef = this.dialog.open(this.editCandidateDialogComponent, { data: this.selectedCandidate });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      this.examApplicationService.getExamLines();
    });
  }

  /*
  * @function: protected openAddRemarkDialog()
  * @description: opens the AddRemarkDialog. After the dialog has been close, the result will be fetched through subscription.
  * @params: c
  * @returns: none
  * @date: 22-05-2017
  */
  protected openAddRemarkDialog(c) {
    this.candidates.forEach(candidate => {
      const line = c + 1;
      if (candidate.id === line) {
        this.selectedCandidate = candidate;
      };
    });

    const dialogRef = this.dialog.open(this.addRemarksDialogComponent, { data: this.selectedCandidate });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  /*
  * @function: protected openRemarksDialog()
  * @description: opens the EditCandidateDialog.
  * @params: c
  * @returns: none
  * @date: 22-05-2017
  */
  protected openRemarksDialog(c) {
    this.candidates.forEach(candidate => {
      const line = c + 1;
      if (candidate.id === line) {
        this.selectedCandidate = candidate;
      };
    });

    const dialogRef = this.dialog.open(this.remarksDialogComponent, { data: this.selectedCandidate });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }



  protected onPVBChanged(value: string) {
    if (this.selectedPVB === '0') {
      this.pvbBGColor = this.statusColorUndefined;
    }
    if (this.selectedPVB === '1') {
      this.pvbBGColor = this.statusColorNo;
    }
    if (this.selectedPVB === '2') {
      this.pvbBGColor = this.statusColorYes;
    }
    if (this.selectedPVB === '3') {
      this.pvbBGColor = this.statusColorAchieved;
    }
    if (this.selectedPVB === '4') {
      this.pvbBGColor = this.statusColorDeterminationList;
    }
  }

  protected onOGChanged(value: string) {
    if (this.selectedOG === '0') {
      this.ogBGColor = this.statusColorUndefined;
    }
    if (this.selectedOG === '1') {
      this.ogBGColor = this.statusColorRequested;
    }
    if (this.selectedOG === '2') {
      this.ogBGColor = this.statusColorPlanned;
    }
    if (this.selectedOG === '3') {
      this.ogBGColor = this.statusColorAchieved;
    }
    if (this.selectedOG === '4') {
      this.ogBGColor = this.statusColorSlidingThrough;
    }
  }


}
