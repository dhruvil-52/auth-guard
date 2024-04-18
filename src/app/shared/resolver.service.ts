import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class ResolverService implements Resolve<any> {
    constructor() {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return new Promise((resolve, reject) => {
            console.log(new Date().getSeconds())
            setTimeout(() => {
                resolve({ name: 'Dhruvil', age: 24 })
            }, 2000);
        })
    }
}