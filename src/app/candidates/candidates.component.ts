import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


// const candidates = [
//     {
//         id: 1, name: 'Michael Kruit', studentnumber: '001'
//     },
//     {
//         id: 2, name: 'Marcel Fokke', studentnumber: '002'
//     },
//     {
//         id: 3, name: 'André Nannen', studentnumber: '003'
//     },
//     {
//         id: 4, name: 'Sebastian Oosterhof', studentnumber: '004'
//     }
// ];

@Component({
    selector: 'app-candidates',
    templateUrl: './candidates.component.html',
    styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
    candidates: Array<any>;
    title = 'Kandidaten';

    // candidates = [
    //     {
    //         id: 1, name: 'Michael Kruit', studentnumber: '001'
    //     },
    //     {
    //         id: 2, name: 'Marcel Fokke', studentnumber: '002'
    //     },
    //     {
    //         id: 3, name: 'André Nannen', studentnumber: '003'
    //     },
    //     {
    //         id: 4, name: 'Sebastian Oosterhof', studentnumber: '004'
    //     }
    // ];

    pvb = [
        { value: 'none-0', viewValue: '-' },
        { value: 'nee-1', viewValue: 'Nee' },
        { value: 'ja-2', viewValue: 'Ja' },
        { value: 'gehaald-3', viewValue: 'Gehaald' },
        { value: 'vaststellingslijst-4', viewValue: 'Vaststellingslijst' }
    ];

    og = [
        { value: 'none-0', viewValue: '-' },
        { value: 'aangevraagd-1', viewValue: 'Aangevraagd' },
        { value: 'ingepland-2', viewValue: 'Ingepland' },
        { value: 'gehaald-3', viewValue: 'Gehaald' },
        { value: 'doorschuiven-4', viewValue: 'Doorschuiven' }
    ];



    constructor(private router: Router, private http: Http) {
        this.http.get('../../assets/data.json')
            .map(response => response.json().candidates)
            .subscribe(res => this.candidates = res);
    }

    public ngOnInit() {
    }

}
