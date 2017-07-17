import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class BarcodeService {

    apiKeyUPC: string = "ccc8303bdf3e6d6f0d8547f2f7397e88";
    apiKeyUSDA: string = "6FACbOhHgM9wNvz9TuUOU6SUQ8DgyvJnz5njg0oV";
    $item: any[];
    $NDBno: string;

    private upc: string;

    constructor(private http: Http) {

    }

    getItem(upc: string) {
        console.log("In getItem() - UPC: " + upc);

        this.upc = upc;
        this.queuePromise();
    }

    private queuePromise() {
        let upcLookupURL = "http://api.upcdatabase.org/json/"
            + this.apiKeyUPC
            + "/"
            + this.upc;

        let ndbLookupURL = " https://api.nal.usda.gov/ndb/search/?format=json&q=Tea,Bags,Benner,Green,Tea,Lemon,and,Ginseng&sort=n&max=25&offset=0&api_key="
            + this.apiKeyUSDA;

        console.log("queuePromise() - Upc Lookup URL: " + upcLookupURL);
        console.log("queuePromise() - NDB Lookup URL: " + ndbLookupURL);

        function queryUPC() {
            console.log("queryUPC()");
            return fetch(upcLookupURL).then((response) => {
                return response.json();
                // return response.json();
            }).then((data) => {
                return data;
            }).catch((ex) => {
                console.error('Error fetching UPC', ex);
                return ex;
            });
        }

        function queryNDB(res) {
            console.log("\nqueryNDB() - RESULT: " + JSON.stringify(res));
            alert(res.description);

            fetch(ndbLookupURL).then((response) => {
                return response.json();
            }).then((data) => {
            }).catch((ex) => {
            });
        }

        let queryArr = [queryUPC, queryNDB];
        this.exicuteQueiry(queryArr);
    }

    private exicuteQueiry(list) {
        var p = Promise.resolve();
        return list.reduce(function (pacc, fn) {
            return pacc = pacc.then(fn);
        }, p);
    }
}