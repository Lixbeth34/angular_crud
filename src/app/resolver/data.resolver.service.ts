import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

const departments= ['Marketing', 'Sales', 'HR','Other']

@Injectable({providedIn: 'root'})
    export class DataResolverService implements Resolve<any>{
        resolve(): Observable<any> {
            return of(departments);
    }
}