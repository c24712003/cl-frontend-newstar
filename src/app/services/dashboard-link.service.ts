import { MessageService } from './message.service';
import { DashboardLink } from '../models/dashboard-link';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'appliaction/json' })
};

@Injectable()
export class DashboardLinkService {
    private apiUrl = 'api/dashboard';

    constructor(private http: HttpClient, private messageService: MessageService) { }

    getDashboard() {
        return this.http.get<DashboardLink>(this.apiUrl)
            .pipe(
                tap(dashboard_link => console.log("")),
                catchError(this.handleError('getDashboard', {}))
            )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }
}
