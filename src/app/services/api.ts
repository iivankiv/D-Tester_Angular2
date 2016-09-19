import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    api_url: string = 'http://dtapi.local';

    constructor(private http: Http) {}

    private getJson(response: Response) {
        return response.json();
    }

    private checkForError(response: Response): Response {
        if(response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }

    get(path: string): Observable<any> {
        return this.http.get(`${this.api_url}${path}`)
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .do((response) => console.log(response))
            .map(this.getJson)
    }

    post(path: string, data): Observable<any> {
        return this.http.post(`${this.api_url}${path}`, data)
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .do((response) => console.log(response))
            .map(this.getJson)
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${this.api_url}${path}`)
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .do((response) => console.log(response))
            .map(this.getJson)
    }
}