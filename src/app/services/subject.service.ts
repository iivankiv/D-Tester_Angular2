import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class SubjectService {
    constructor(private apiService: ApiService) {}

    getSubjects(path:string) {
        return this.apiService.getItem(path)
    }

    deleteSubject(path: string, subject_id: any) {
        return this.apiService.deleteItem(path, subject_id)
    }
}

