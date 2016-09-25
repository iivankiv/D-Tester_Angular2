import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    constructor(private apiService: ApiService) {}

    authenticate(path:string, creds:any) {
        return this.apiService.postItem(path, creds)
    }
}
