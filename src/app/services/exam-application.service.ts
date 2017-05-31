import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Interfaces
import { ExamLine } from '../interfaces/exam-line';
import { Remark } from '../interfaces/remark';


@Injectable()
export class ExamApplicationService {
  private examLinesURL = 'http://127.0.0.1:8000/api/examlines';
  private remarksURL = 'http://127.0.0.1:8000/api/remarks';


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

/*
* @function: public getRemarks()
* @description: gets remarks from the examLinesURL link which gets its data from the API.
* @params: none
* @returns: http get API route.
* @date: 31-05-2017
*/
  public getRemarks(): Observable<Remark[]> {
    return this.http.get(this.remarksURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
