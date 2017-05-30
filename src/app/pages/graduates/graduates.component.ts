// Angular
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

// Services
import { ExamApplicationService } from '../../services/exam-application.service';

// Interfaces
import { ExamLine } from '../../interfaces/exam-line';


@Component({
  selector: 'graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['./graduates.component.scss']
})
export class GraduatesComponent implements OnInit {
  graduates: ExamLine[];
  selectedOption: string;

  constructor(private router: Router,
    private http: Http,
    public dialog: MdDialog,
    private examApplicationService: ExamApplicationService) { }

/*
* @function: public ngOnInit()
* @description: This is the first function that will be executed. It calls functions that has to be executed on pageload.
* @params: none
* @returns: none
* @date: 30-05-2017
*/
  public ngOnInit() {
    this.getGraduates();
  }

  /*
* @function: public getGraduates()
* @description: gets examLines from the ExamApplicationService through subscription.
* @params: none
* @returns: none
* @date: 30-05-2017
*/
  public getGraduates() {
    this.examApplicationService.getExamLines().subscribe(result => this.graduates = result);
  }

}



