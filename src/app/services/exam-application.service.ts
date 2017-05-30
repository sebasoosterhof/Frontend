import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Interfaces
import { ExamLine } from '../interfaces/exam-line';


@Injectable()
export class ExamApplicationService {
  private examLinesURL = 'http://127.0.0.1:8000/api/examlines';


  constructor(private http: Http) { }


  /*
* @function: public getExamLines()
* @description: gets examLines from the examLinesURL link which gets its data from the API.
* @params: none
* @returns: http get API route.
* @date: 22-05-2017
*/
  public getExamLines(): Observable<ExamLine[]> {
    return this.http.get(this.examLinesURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
