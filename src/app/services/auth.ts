import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    constructor(private apiService: ApiService) {}

    authenticate(path:string, creds:any) {
        return this.apiService.post(path, creds)
            .map(res => res.data);
    }

}
