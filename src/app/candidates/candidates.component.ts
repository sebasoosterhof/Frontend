// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

// Dialogs
import { AddCandidateDialogComponent } from '../dialog/add-candidate-dialog/add-candidate-dialog.component';
import { AddRemarksDialogComponent } from '../dialog/add-remarks-dialog/add-remarks-dialog.component';
import { RemarksDialogComponent } from '../dialog/remarks-dialog/remarks-dialog.component';
import { DateDialogComponent } from '../dialog/date-dialog/date-dialog.component';

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
    selectedCohort: string;

    pvbBGColor: string;
    pvbFontColor: string;
    ogBGColor: string;
    ogFontColor: string;

    cohort = [
        { value: '0', viewValue: 'Kies...' },
        { value: '1', viewValue: '2012-2013' },
        { value: '2', viewValue: '2013-2014' },
        { value: '3', viewValue: '2014-2015' },
        { value: '4', viewValue: '2015-2016' },
        { value: '5', viewValue: '2016-2017' },
    ];

    pvb = [
        { value: '0', viewValue: 'Kies...' },
        { value: '1', viewValue: 'Nee' },
        { value: '2', viewValue: 'Ja' },
        { value: '3', viewValue: 'Gehaald' },
        { value: '4', viewValue: 'Vaststellingslijst' }
    ];

    og = [
        { value: '0', viewValue: 'Kies...' },
        { value: '1', viewValue: 'Aangevraagd' },
        { value: '2', viewValue: 'Ingepland' },
        { value: '3', viewValue: 'Gehaald' },
        { value: '4', viewValue: 'Doorschuiven' }
    ];


    protected addCandidateDialogComponent = AddCandidateDialogComponent;

    protected addRemarksDialogComponent = AddRemarksDialogComponent;

    protected remarksDialogComponent = RemarksDialogComponent;

    protected dateDialogComponent = DateDialogComponent;


    constructor(private router: Router, private http: Http, public dialog: MdDialog) {
        this.http.get('../../assets/data.json')
            .map(response => response.json().candidates)
            .subscribe(res => this.candidates = res);
    }

    public ngOnInit() {
        this.selectedCohort = '0';
        this.selectedPVB = '0';
        this.selectedOG = '0';
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
            this.pvbBGColor = 'darkslateblue';
        }
    }

    protected onOGChanged(value: string) {
        if (this.selectedOG === '0') {
            this.ogBGColor = '';
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
