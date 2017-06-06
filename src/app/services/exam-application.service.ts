import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Interfaces
import { ExamLine } from '../interfaces/exam-line';
import { Remark } from '../interfaces/remark';



@Injectable()
export class ExamApplicationService {
  private getExamLinesURL = 'http://127.0.0.1:8000/api/examlines/';
  private setExamLinesURL = 'http://127.0.0.1:8000/api/examlines/update/candidate';
  private getRemarksURL = 'http://127.0.0.1:8000/api/remarks/';



  constructor(private http: Http, ) { }


  /*
  * @function: public getExamLines()
  * @description: gets examLines from the examLinesURL link which gets its data from the API.
  * @params: none
  * @returns: http get API route.
  * @date: 22-05-2017
  */
  public getExamLines(): Observable<ExamLine[]> {
    return this.http.get(this.getExamLinesURL)
      .map((res: Response) => res.json())
      // .catch((error: any) => Observable.throw('Server error'));
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
    return this.http.get(this.getRemarksURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public setExamLines()
  * @description: gets updated examLines from edit-candidate-dialog and sets them to the API.
  * @params: none
  * @returns: http post to API.
  * @date: 31-05-2017
  */
  public setExamLines(candidate): Observable<ExamLine[]> {
    const url = 'http://127.0.0.1:8000/api/examlines/update/candidate?id=' + candidate.id +
      // '&crebo_id=' + candidate.crebo_id +
      // '&crebo=' + candidate.crebo +
      // '&education=' + candidate.education +
      '&status=' + candidate.status;
      // '&remark_id=' + candidate.remark_id;

    console.log(url);

    // console.log(id);
    console.log(candidate);
    console.log(candidate.status);
    const headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.setExamLinesURL, candidate, headers)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
