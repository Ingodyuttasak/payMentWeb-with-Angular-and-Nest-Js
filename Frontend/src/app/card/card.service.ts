import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class cardApiService {

    constructor(
        private http: HttpClient,) { 
            this.getCard().subscribe((data)=>{console.log(data)});
            
        }

    public getCard(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:8080/api/card');
    }
    public postCard(data): Observable<any>
    {
        console.log(data);
        return this.http.post<any>('http://localhost:8080/api/cards',data);

    }
}
