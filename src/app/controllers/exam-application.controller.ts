// Angular
import { Injectable } from '@angular/core';

// Services
import { ExamApplicationService } from '../services/exam-application.service';

// Interfaces
import { ExamLine } from '../interfaces/exam-line';
import { CandidateStatus } from '../infrastructure/enums/candidate-status';

@Injectable()
export class ExamApplicationController {
  examLines: ExamLine[];
  candidates: ExamLine[];
  graduates: ExamLine[];

  constructor(private examApplicationService: ExamApplicationService) { }


  public getExamLines() {
    this.examApplicationService.getExamLines().subscribe(result => this.examLines = result);
    this.filterCandidates();
    this.filterGraduates();
  }

  public filterCandidates() {
    // for (let i = 0; i < this.examLines.length; i++) {
    //   const line = this.examLines[i];
    //   if (line.status[1] || line.status[2]) {
    //     this.candidates.push(line);
    //   }
    // }
    // return this.candidates;
  }

  public filterGraduates() {
    // for (let i = 0; i < this.examLines.length; i++) {
    //   const line = this.examLines[i];
    //   if (line.status[3]) {
    //     this.candidates.push(line);
    //   }
    // }
    // return this.graduates;
  }

}
