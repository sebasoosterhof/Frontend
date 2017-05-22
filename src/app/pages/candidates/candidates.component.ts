// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

// Services
import { ExamApplicationService } from '../../services/exam-application.service';

// Dialogs
import { AddCandidateDialogComponent } from '../../dialogs/add-candidate-dialog/add-candidate-dialog.component';
import { AddRemarksDialogComponent } from '../../dialogs/add-remarks-dialog/add-remarks-dialog.component';
import { RemarksDialogComponent } from '../../dialogs/remarks-dialog/remarks-dialog.component';
import { EditCandidateDialogComponent } from '../../dialogs/edit-candidate-dialog/edit-candidate-dialog.component';

// Interfaces
import { Student } from '../../interfaces/student';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  title = 'Kandidaten';

  candidates: Array<any>;
  students: Student[];

  selectedOption: string;
  selectedPVB: string;
  selectedOG: string;

  pvbBGColor: string;
  ogBGColor: string;


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
    private examApplicationService: ExamApplicationService) {
    // Candidates
    this.http.get('../../assets/data.json')
      .map(response => response.json().candidates)
      .subscribe(res => this.candidates = res);

    // Students
    // this.http.get('http://127.0.0.1:8000/api/students')
    //   .map(response => response.json().students)
    //   .subscribe(res => this.students = res);
  }


  public ngOnInit() {
    this.selectedPVB = '0';
    this.selectedOG = '0';
    this.getStudents();
  }

  public getStudents() {
    this.examApplicationService.getStudents().subscribe(res => this.students = res);
  }


  protected openEditCandidateDialog() {
    const dialogRef = this.dialog.open(this.editCandidateDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  protected openAddRemarkDialog() {
    const dialogRef = this.dialog.open(this.addRemarksDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  protected openRemarksDialog() {
    const dialogRef = this.dialog.open(this.remarksDialogComponent);
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