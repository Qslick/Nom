"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var BarcodeService = (function () {
    function BarcodeService(http) {
        this.http = http;
        this.apiKeyUPC = "ccc8303bdf3e6d6f0d8547f2f7397e88";
        this.apiKeyUSDA = "6FACbOhHgM9wNvz9TuUOU6SUQ8DgyvJnz5njg0oV";
    }
    BarcodeService.prototype.getItem = function (upc) {
        console.log("In getItem() - UPC: " + upc);
        this.upc = upc;
        this.queuePromise();
    };
    BarcodeService.prototype.queuePromise = function () {
        var upcLookupURL = "http://api.upcdatabase.org/json/"
            + this.apiKeyUPC
            + "/"
            + this.upc;
        var ndbLookupURL = " https://api.nal.usda.gov/ndb/search/?format=json&q=Tea,Bags,Benner,Green,Tea,Lemon,and,Ginseng&sort=n&max=25&offset=0&api_key="
            + this.apiKeyUSDA;
        console.log("queuePromise() - Upc Lookup URL: " + upcLookupURL);
        console.log("queuePromise() - NDB Lookup URL: " + ndbLookupURL);
        function queryUPC() {
            console.log("queryUPC()");
            return fetch(upcLookupURL).then(function (response) {
                return response.json();
                // return response.json();
            }).then(function (data) {
                return data;
            }).catch(function (ex) {
                console.error('Error fetching UPC', ex);
                return ex;
            });
        }
        function queryNDB(res) {
            console.log("\nqueryNDB() - RESULT: " + JSON.stringify(res));
            alert(res.description);
            fetch(ndbLookupURL).then(function (response) {
                return response.json();
            }).then(function (data) {
            }).catch(function (ex) {
            });
        }
        var queryArr = [queryUPC, queryNDB];
        this.exicuteQueiry(queryArr);
    };
    BarcodeService.prototype.exicuteQueiry = function (list) {
        var p = Promise.resolve();
        return list.reduce(function (pacc, fn) {
            return pacc = pacc.then(fn);
        }, p);
    };
    return BarcodeService;
}());
BarcodeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BarcodeService);
exports.BarcodeService = BarcodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFyY29kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUErQztBQUcvQyxtQ0FBaUM7QUFDakMsaUNBQStCO0FBRS9CLElBQWEsY0FBYztJQVN2Qix3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFQOUIsY0FBUyxHQUFXLGtDQUFrQyxDQUFDO1FBQ3ZELGVBQVUsR0FBVywwQ0FBMEMsQ0FBQztJQVFoRSxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxxQ0FBWSxHQUFwQjtRQUNJLElBQUksWUFBWSxHQUFHLGtDQUFrQztjQUMvQyxJQUFJLENBQUMsU0FBUztjQUNkLEdBQUc7Y0FDSCxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRWYsSUFBSSxZQUFZLEdBQUcsaUlBQWlJO2NBQzlJLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBRWhFO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7Z0JBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLDBCQUEwQjtZQUM5QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsa0JBQWtCLEdBQUc7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV2QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ2IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsRUFBRTtZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELElBQUksUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLHNDQUFhLEdBQXJCLFVBQXNCLElBQUk7UUFDdEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDakMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUM7QUFsRVksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQVVpQixXQUFJO0dBVHJCLGNBQWMsQ0FrRTFCO0FBbEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2VydmljZSB7XHJcblxyXG4gICAgYXBpS2V5VVBDOiBzdHJpbmcgPSBcImNjYzgzMDNiZGYzZTZkNmYwZDg1NDdmMmY3Mzk3ZTg4XCI7XHJcbiAgICBhcGlLZXlVU0RBOiBzdHJpbmcgPSBcIjZGQUNiT2hIZ005d052ejlUdVVPVTZTVVE4RGd5dkpuejVuamcwb1ZcIjtcclxuICAgICRpdGVtOiBhbnlbXTtcclxuICAgICROREJubzogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgdXBjOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0odXBjOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluIGdldEl0ZW0oKSAtIFVQQzogXCIgKyB1cGMpO1xyXG5cclxuICAgICAgICB0aGlzLnVwYyA9IHVwYztcclxuICAgICAgICB0aGlzLnF1ZXVlUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcXVldWVQcm9taXNlKCkge1xyXG4gICAgICAgIGxldCB1cGNMb29rdXBVUkwgPSBcImh0dHA6Ly9hcGkudXBjZGF0YWJhc2Uub3JnL2pzb24vXCJcclxuICAgICAgICAgICAgKyB0aGlzLmFwaUtleVVQQ1xyXG4gICAgICAgICAgICArIFwiL1wiXHJcbiAgICAgICAgICAgICsgdGhpcy51cGM7XHJcblxyXG4gICAgICAgIGxldCBuZGJMb29rdXBVUkwgPSBcIiBodHRwczovL2FwaS5uYWwudXNkYS5nb3YvbmRiL3NlYXJjaC8/Zm9ybWF0PWpzb24mcT1UZWEsQmFncyxCZW5uZXIsR3JlZW4sVGVhLExlbW9uLGFuZCxHaW5zZW5nJnNvcnQ9biZtYXg9MjUmb2Zmc2V0PTAmYXBpX2tleT1cIlxyXG4gICAgICAgICAgICArIHRoaXMuYXBpS2V5VVNEQTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWV1ZVByb21pc2UoKSAtIFVwYyBMb29rdXAgVVJMOiBcIiArIHVwY0xvb2t1cFVSTCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWV1ZVByb21pc2UoKSAtIE5EQiBMb29rdXAgVVJMOiBcIiArIG5kYkxvb2t1cFVSTCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHF1ZXJ5VVBDKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5VVBDKClcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh1cGNMb29rdXBVUkwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgVVBDJywgZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHF1ZXJ5TkRCKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcbnF1ZXJ5TkRCKCkgLSBSRVNVTFQ6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlcy5kZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICBmZXRjaChuZGJMb29rdXBVUkwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChleCkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBxdWVyeUFyciA9IFtxdWVyeVVQQywgcXVlcnlOREJdO1xyXG4gICAgICAgIHRoaXMuZXhpY3V0ZVF1ZWlyeShxdWVyeUFycik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGljdXRlUXVlaXJ5KGxpc3QpIHtcclxuICAgICAgICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybiBsaXN0LnJlZHVjZShmdW5jdGlvbiAocGFjYywgZm4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhY2MgPSBwYWNjLnRoZW4oZm4pO1xyXG4gICAgICAgIH0sIHApO1xyXG4gICAgfVxyXG59Il19