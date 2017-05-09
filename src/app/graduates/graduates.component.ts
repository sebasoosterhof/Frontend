import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'graduates',
    templateUrl: './graduates.component.html',
    styleUrls: ['./graduates.component.scss']
})
export class GraduatesComponent {
    graduates: Array<any>;

    selectedOption: string;

    constructor(private router: Router, private http: Http, public dialog: MdDialog) {
        // Graduates
        this.http.get('../../assets/data.json')
            .map(response => response.json().graduates)
            .subscribe(res => this.graduates = res);
    }

}



