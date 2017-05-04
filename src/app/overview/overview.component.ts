import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { CandidatesComponent } from '../candidates/candidates.component';
import { GraduatesComponent } from '../graduates/graduates.component';


const candidates = [
    {
        id: 1, name: 'Michael Kruit', studentnumber: '001'
    },
    {
        id: 2, name: 'Marcel Fokke', studentnumber: '002'
    },
    {
        id: 3, name: 'André Nannen', studentnumber: '003'
    },
    {
        id: 4, name: 'Sebastian Oosterhof', studentnumber: '004'
    }
];


@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

}
