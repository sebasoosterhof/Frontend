import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

import { AddCandidateDialogComponent } from '../dialog/add-candidate-dialog/add-candidate-dialog.component';

@Component({
    selector: 'app-candidates',
    templateUrl: './candidates.component.html',
    styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
    candidates: Array<any>;
    title = 'Kandidaten';
    selectedValue: string;
    selectedOption: string;

    cohort = [
        { value: '0', viewValue: 'Kies...'},
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

    constructor(private router: Router, private http: Http, public dialog: MdDialog) {
        this.http.get('../../assets/data.json')
            .map(response => response.json().candidates)
            .subscribe(res => this.candidates = res);
    }

    public ngOnInit() {
    }

    protected openDialog() {
        const dialogRef = this.dialog.open(this.addCandidateDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    protected ogChanged(value: string) {
        console.log(value);
    }


}
