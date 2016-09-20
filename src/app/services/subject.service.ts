import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class SubjectService {
    constructor(private apiService: ApiService) {}

    getSubjects(path:string) {
        return this.apiService.get(path)
            .do(res => console.log(res))
            .map(res => res.data)
    }
}

