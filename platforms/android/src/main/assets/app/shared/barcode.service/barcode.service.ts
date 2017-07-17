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

        console.log("queuePromise() - UPC Lookup URL: " + upcLookupURL);
        // console.log("queuePromise() - NDB Lookup URL: " + ndbLookupURL);

        function queryUPC() {
            console.log("queryUPC()");
            return fetch(upcLookupURL).then((response) => {
                return response.json();
                // return response.json();
            }).then((data) => {
                return data;
            }).catch((ex) => {
                // console.error('Error fetching UPC', ex);
                return ex;
            });
        }

        function queryNDB(res) {
            console.log("\nqueryNDB() - UPC lookup results: " + JSON.stringify(res));

            let apiKeyUSDA: string = "6FACbOhHgM9wNvz9TuUOU6SUQ8DgyvJnz5njg0oV";
            alert(res.description);

            let desc: string = res.description;
            let searchTerms: string[] = desc.split(" ");
            let searchString: string = "";

            for (let i = 0; i < searchTerms.length - 1; i++) {
                searchString += searchTerms[i] + " ";
            }

            let ndbLookupURL = " https://api.nal.usda.gov/ndb/search/?format=json&q=" + searchString + "&sort=r&max=10&offset=0&api_key="
                + apiKeyUSDA;
            console.log("NDNno URL: " + ndbLookupURL);


            // let ndbLookupURL = " https://api.nal.usda.gov/ndb/search/?format=json&q=Tea,Bags,Benner,Green,Tea,Lemon,and,Ginseng&sort=n&max=25&offset=0&api_key="
            //     + this.apiKeyUSDA;

            return fetch(ndbLookupURL).then((response) => {
                return response.json();
            }).then((data) => {
                return data;
            }).catch((ex) => {
                return ex;
            });
        }

        function queryUSDA(res) {
            // console.log("USDA Response: " + JSON.stringify(res));
            // console.log("NDBno: " + JSON.stringify(res.list.item));
            let itemDetailList: any[] = res.list.item;
            let NDBno = itemDetailList[0].ndbno;
            console.log("NDBno: " + NDBno);

            let usdaLookupUrl: string = " https://api.nal.usda.gov/ndb/reports/?ndbno="
                + NDBno + "& type=b&format=json&api_key=6FACbOhHgM9wNvz9TuUOU6SUQ8DgyvJnz5njg0oV";
            console.log("USDA Lookup Url: " + usdaLookupUrl);

            return fetch(usdaLookupUrl).then((response) => {
                return response.json();
            }).then((data) => {
                // console.log("Data: " + JSON.stringify(data.ing.desc));
                return data;
            }).catch((ex) => {
                return ex;
            });
        }

        let queryArr = [queryUPC, queryNDB, queryUSDA];
      let list = this.exicuteQueiry(queryArr)[2];
    }

    private exicuteQueiry(list): any {
        var p = Promise.resolve();
        return list.reduce(function (pacc, fn) {
            return pacc = pacc.then(fn);
        }, p);
    }
}