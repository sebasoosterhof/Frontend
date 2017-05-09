// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

// Dialogs
import { AddCandidateDialogComponent } from '../dialog/add-candidate-dialog/add-candidate-dialog.component';
import { AddRemarksDialogComponent } from '../dialog/add-remarks-dialog/add-remarks-dialog.component';
import { RemarksDialogComponent } from '../dialog/remarks-dialog/remarks-dialog.component';
import { EditCandidateDialogComponent } from '../dialog/edit-candidate-dialog/edit-candidate-dialog.component';


@Component({
    selector: 'candidates',
    templateUrl: './candidates.component.html',
    styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
    candidates: Array<any>;
    title = 'Kandidaten';
    selectedOption: string;
    selectedPVB: string;
    selectedOG: string;

    pvbBGColor: string;
    pvbFontColor: string;
    ogBGColor: string;
    ogFontColor: string;



    pvbs = [
        { value: '0', viewValue: 'Kies...' },
        { value: '1', viewValue: 'Nee' },
        { value: '2', viewValue: 'Ja' },
        { value: '3', viewValue: 'Gehaald' },
        { value: '4', viewValue: 'Vaststellingslijst' }
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


    constructor(private router: Router, private http: Http, public dialog: MdDialog) {
        // Candidates
        this.http.get('../../assets/data.json')
            .map(response => response.json().candidates)
            .subscribe(res => this.candidates = res);
    }

    public ngOnInit() {
        this.selectedPVB = '0';
        this.selectedOG = '0';
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
            this.pvbBGColor = '';
            this.pvbFontColor = 'lightgrey';
        }
        if (this.selectedPVB === '1') {
            this.pvbFontColor = 'white';
            this.pvbBGColor = 'crimson';
        }
        if (this.selectedPVB === '2') {
            this.pvbBGColor = 'lawngreen';
        }
        if (this.selectedPVB === '3') {
            this.pvbBGColor = 'skyblue';
        }
        if (this.selectedPVB === '4') {
            this.pvbFontColor = 'white';
            this.pvbBGColor = 'darkslateblue';
        }
    }

    protected onOGChanged(value: string) {
        if (this.selectedOG === '0') {
            this.ogBGColor = '';
            this.pvbFontColor = 'lightgrey';
        }
        if (this.selectedOG === '1') {
            this.ogBGColor = 'lawngreen';
        }
        if (this.selectedOG === '2') {
            this.ogBGColor = 'darkseagreen';
        }
        if (this.selectedOG === '3') {
            this.ogBGColor = 'skyblue';
        }
        if (this.selectedOG === '4') {
            this.ogBGColor = 'palegoldenrod';
        }
    }


}
