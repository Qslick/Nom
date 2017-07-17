"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var barcode_service_1 = require("../../shared/barcode.service/barcode.service");
var lookup_service_1 = require("../../shared/lookup.service/lookup.service");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var http_1 = require("@angular/http");
var page_1 = require("ui/page");
require("rxjs/add/operator/map");
var elementRegistryModule = require("nativescript-angular/element-registry");
var allergens_1 = require("../../shared/allergens-service/allergens");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
// registerElement('BottomBar', () => BottomBar);
var HomeComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function HomeComponent(allergen, barcodeService, lookupService, barcodescanner, http, page) {
        this.allergen = allergen;
        this.barcodeService = barcodeService;
        this.lookupService = lookupService;
        this.barcodescanner = barcodescanner;
        this.http = http;
        this.page = page;
        this.$NDBno = [];
        this.somethingSelected = false;
        this.page.actionBarHidden = true;
        // console.log("TEST: " + this.allergen.allergyList[5].name);
        // this.barcodeService.getItem("41498156398");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // tabSelected(args: SelectedIndexChangedEventData) {
    //     // only triggered when a different tab is tapped
    //     console.log(args.newIndex);
    // }
    HomeComponent.prototype.allergenSelected = function () {
        this.somethingSelected = false;
        if (this.allergen.wheat.isSelected()) {
            this.somethingSelected = true;
            this.selectedAllergen = this.allergen.wheat;
        }
        else {
        }
        if (this.allergen.gluten.isSelected()) {
            this.selectedAllergen = this.allergen.gluten;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.fish.isSelected()) {
            this.selectedAllergen = this.allergen.fish;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.eggs.isSelected()) {
            this.selectedAllergen = this.allergen.eggs;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.dairy.isSelected()) {
            this.selectedAllergen = this.allergen.dairy;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.soy.isSelected()) {
            this.selectedAllergen = this.allergen.soy;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.nuts.isSelected()) {
            this.selectedAllergen = this.allergen.nuts;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.shellFish.isSelected()) {
            this.somethingSelected = true;
        }
        else {
        }
        console.log("SomethingSelected: " + this.somethingSelected);
        for (var i = 0; i < this.selectedAllergen.related_allergens.length; i++) {
            console.log(this.selectedAllergen.related_allergens[i]);
        }
    };
    HomeComponent.prototype.wheatBtn = function () {
        console.log("WheatBtn()");
        this.allergen.wheat.toggleSelected();
        this.selectedAllergen = this.allergen.wheat;
        this.editingImgUrl = "~/assets/images/bread-1.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.glutenBtn = function () {
        console.log("glutenBtn()");
        this.allergen.gluten.toggleSelected();
        this.selectedAllergen = this.allergen.gluten;
        this.editingImgUrl = "~/assets/images/flour.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.fishBtn = function () {
        console.log("fishBtn()");
        this.allergen.fish.toggleSelected();
        this.selectedAllergen = this.allergen.fish;
        this.editingImgUrl = "~/assets/images/fish.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.eggsBtn = function () {
        console.log("eggsBtn()");
        this.allergen.eggs.toggleSelected();
        this.selectedAllergen = this.allergen.eggs;
        this.editingImgUrl = "~/assets/images/eggs.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.dairyBtn = function () {
        console.log("dairyBtn");
        this.allergen.dairy.toggleSelected();
        this.selectedAllergen = this.allergen.dairy;
        this.editingImgUrl = "~/assets/images/cheese-1.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.soyBtn = function () {
        console.log("soyBtn");
        this.allergen.soy.toggleSelected();
        this.selectedAllergen = this.allergen.soy;
        this.editingImgUrl = "~/assets/images/soybean.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.nutBtn = function () {
        console.log("nutBtn");
        this.allergen.nuts.toggleSelected();
        this.selectedAllergen = this.allergen.nuts;
        this.editingImgUrl = "~/assets/images/almond.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.shellFishBtn = function () {
        console.log("shellFishBtn");
        this.allergen.shellFish.toggleSelected();
        this.selectedAllergen = this.allergen.shellFish;
        this.editingImgUrl = "~/assets/images/shrimp.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.discover = function () {
    };
    HomeComponent.prototype.scan = function () {
        var _this = this;
        console.log("Scan button Tapped");
        this.barcodescanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "EXIT. Also, try the volume buttons!",
            cancelLabelBackgroundColor: "#333333",
            message: "Use the volume buttons for extra light",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }).then(function (result) {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
            _this.upc = Number(result.text);
            _this.getItem();
        }, function (errorMessage) {
            console.log("No scan. " + errorMessage);
            _this.upc = -1;
        });
        console.log("UPC: " + this.upc);
    }; //end of scan()
    HomeComponent.prototype.getItem = function () {
        this.barcodeService.getItem(String(this.upc));
        // this.barcodeService.getItemName(this.upc)
        //     .subscribe(responseDate => this.$item = responseDate);
        // this.barcodeService.getNDBno(this.$NDBno)
        //     .subscribe(NDBResponse => this.$NDBno = NDBResponse);
        // console.log("Item: " + this.$item);
        // console.log("NDBno: " + this.$NDBno);
    };
    HomeComponent.prototype.onIndexChanged = function ($event) {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./home.component.html",
        styleUrls: ["./home.css"]
    }),
    __metadata("design:paramtypes", [allergens_1.Allergens, barcode_service_1.BarcodeService, lookup_service_1.LookupService,
        nativescript_barcodescanner_1.BarcodeScanner, http_1.Http, page_1.Page])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//USDA API KEY: 6FACbOhHgM9wNvz9TuUOU6SUQ8DgyvJnz5njg0oV
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxnRkFBOEU7QUFDOUUsNkVBQTJFO0FBQzNFLDJFQUE2RDtBQUM3RCxzQ0FBK0M7QUFDL0MsZ0NBQStCO0FBRS9CLGlDQUErQjtBQUMvQiw2RUFBK0U7QUFFL0Usc0VBQXFFO0FBRXJFLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLGlEQUFpRDtBQVVqRCxJQUFhLGFBQWE7SUFldEIsNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx1QkFBb0IsUUFBbUIsRUFBVSxjQUE4QixFQUFVLGFBQTRCLEVBQ3pHLGNBQThCLEVBQVUsSUFBVSxFQUFVLElBQVU7UUFEOUQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3pHLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBZGxGLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFLakIsc0JBQWlCLEdBQVksS0FBSyxDQUFBO1FBVzlCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyw2REFBNkQ7UUFDN0QsOENBQThDO0lBRWxELENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHFEQUFxRDtJQUNyRCx1REFBdUQ7SUFDdkQsa0NBQWtDO0lBQ2xDLElBQUk7SUFFSix3Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxD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QUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFFLFVBQUMsWUFBWTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUNJLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxFQUFBLGVBQWU7SUFFaEIsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5Qyw0Q0FBNEM7UUFDNUMsNkRBQTZEO1FBRTdELDRDQUE0QztRQUM1Qyw0REFBNEQ7UUFFNUQsc0NBQXNDO1FBQ3RDLHdDQUF3QztJQUM1QyxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLE1BQU07SUFFckIsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQTlORCxJQThOQztBQTlOWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDNUIsQ0FBQztxQ0FrQmdDLHFCQUFTLEVBQTBCLGdDQUFjLEVBQXlCLDhCQUFhO1FBQ3pGLDRDQUFjLEVBQWdCLFdBQUksRUFBZ0IsV0FBSTtHQWxCekUsYUFBYSxDQThOekI7QUE5Tlksc0NBQWE7QUFnTzFCLHdEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCYXJjb2RlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYmFyY29kZS5zZXJ2aWNlL2JhcmNvZGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb29rdXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9sb29rdXAuc2VydmljZS9sb29rdXAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcblxyXG5pbXBvcnQgeyBBbGxlcmdlbnMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2FsbGVyZ2Vucy1zZXJ2aWNlL2FsbGVyZ2Vuc1wiO1xyXG5pbXBvcnQgeyBBbGxlcmd5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9hbGxlcmd5L2FsbGVyZ3lcIjtcclxuZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG4vLyByZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdXBjOiBudW1iZXI7XHJcbiAgICAkaXRlbTtcclxuICAgICROREJubzogYW55ID0gW107XHJcbiAgICBpdGVtRmFjdHM6IEpTT047XHJcbiAgICBpdGVtTmFtZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBzb21ldGhpbmdTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBzZWxlY3RlZEFsbGVyZ2VuO1xyXG4gICAgLy8gc2VsZWN0ZWRTdWJBbGxlcmdlbnM6IFsxLDIsM107XHJcbiAgICBlZGl0aW5nSW1nVXJsOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsbGVyZ2VuOiBBbGxlcmdlbnMsIHByaXZhdGUgYmFyY29kZVNlcnZpY2U6IEJhcmNvZGVTZXJ2aWNlLCBwcml2YXRlIGxvb2t1cFNlcnZpY2U6IExvb2t1cFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBiYXJjb2Rlc2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsIHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVDogXCIgKyB0aGlzLmFsbGVyZ2VuLmFsbGVyZ3lMaXN0WzVdLm5hbWUpO1xyXG4gICAgICAgIC8vIHRoaXMuYmFyY29kZVNlcnZpY2UuZ2V0SXRlbShcIjQxNDk4MTU2Mzk4XCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgIC8vICAgICAvLyBvbmx5IHRyaWdnZXJlZCB3aGVuIGEgZGlmZmVyZW50IHRhYiBpcyB0YXBwZWRcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBhbGxlcmdlblNlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc29tZXRoaW5nU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWxsZXJnZW4ud2hlYXQuaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZXRoaW5nU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLndoZWF0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWxsZXJnZW4uZ2x1dGVuLmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLmdsdXRlbjtcclxuICAgICAgICAgICAgdGhpcy5zb21ldGhpbmdTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hbGxlcmdlbi5maXNoLmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLmZpc2g7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZXRoaW5nU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWxsZXJnZW4uZWdncy5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5lZ2dzO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWV0aGluZ1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbGVyZ2VuLmRhaXJ5LmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLmRhaXJ5O1xyXG4gICAgICAgICAgICB0aGlzLnNvbWV0aGluZ1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbGVyZ2VuLnNveS5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5zb3k7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZXRoaW5nU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWxsZXJnZW4ubnV0cy5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5udXRzO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWV0aGluZ1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbGVyZ2VuLnNoZWxsRmlzaC5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zb21ldGhpbmdTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZ1NlbGVjdGVkOiBcIiArIHRoaXMuc29tZXRoaW5nU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRBbGxlcmdlbi5yZWxhdGVkX2FsbGVyZ2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkQWxsZXJnZW4ucmVsYXRlZF9hbGxlcmdlbnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aGVhdEJ0bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldoZWF0QnRuKClcIik7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlbi53aGVhdC50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4ud2hlYXQ7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nSW1nVXJsID0gXCJ+L2Fzc2V0cy9pbWFnZXMvYnJlYWQtMS5wbmdcIjtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuU2VsZWN0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnbHV0ZW5CdG4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnbHV0ZW5CdG4oKVwiKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLmdsdXRlbi50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uZ2x1dGVuO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZ0ltZ1VybCA9IFwifi9hc3NldHMvaW1hZ2VzL2Zsb3VyLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW5TZWxlY3RlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpc2hCdG4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXNoQnRuKClcIik7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlbi5maXNoLnRvZ2dsZVNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5maXNoO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZ0ltZ1VybCA9IFwifi9hc3NldHMvaW1hZ2VzL2Zpc2gucG5nXCI7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlblNlbGVjdGVkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVnZ3NCdG4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlZ2dzQnRuKClcIik7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlbi5lZ2dzLnRvZ2dsZVNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5lZ2dzO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZ0ltZ1VybCA9IFwifi9hc3NldHMvaW1hZ2VzL2VnZ3MucG5nXCI7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlblNlbGVjdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGFpcnlCdG4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYWlyeUJ0blwiKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLmRhaXJ5LnRvZ2dsZVNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5kYWlyeTtcclxuICAgICAgICB0aGlzLmVkaXRpbmdJbWdVcmwgPSBcIn4vYXNzZXRzL2ltYWdlcy9jaGVlc2UtMS5wbmdcIjtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuU2VsZWN0ZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc295QnRuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic295QnRuXCIpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4uc295LnRvZ2dsZVNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5zb3k7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nSW1nVXJsID0gXCJ+L2Fzc2V0cy9pbWFnZXMvc295YmVhbi5wbmdcIjtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuU2VsZWN0ZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbnV0QnRuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibnV0QnRuXCIpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4ubnV0cy50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4ubnV0cztcclxuICAgICAgICB0aGlzLmVkaXRpbmdJbWdVcmwgPSBcIn4vYXNzZXRzL2ltYWdlcy9hbG1vbmQucG5nXCI7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlblNlbGVjdGVkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNoZWxsRmlzaEJ0bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNoZWxsRmlzaEJ0blwiKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLnNoZWxsRmlzaC50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uc2hlbGxGaXNoO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZ0ltZ1VybCA9IFwifi9hc3NldHMvaW1hZ2VzL3NocmltcC5wbmdcIjtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuU2VsZWN0ZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzY292ZXIoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzY2FuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhbiBidXR0b24gVGFwcGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJhcmNvZGVzY2FubmVyLnNjYW4oe1xyXG4gICAgICAgICAgICBmb3JtYXRzOiBcIlFSX0NPREUsIEVBTl8xM1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogXCJFWElULiBBbHNvLCB0cnkgdGhlIHZvbHVtZSBidXR0b25zIVwiLCAvLyBpT1Mgb25seSwgZGVmYXVsdCAnQ2xvc2UnXHJcbiAgICAgICAgICAgIGNhbmNlbExhYmVsQmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIiwgLy8gaU9TIG9ubHksIGRlZmF1bHQgJyMwMDAwMDAnIChibGFjaylcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJVc2UgdGhlIHZvbHVtZSBidXR0b25zIGZvciBleHRyYSBsaWdodFwiLCAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgaXMgJ1BsYWNlIGEgYmFyY29kZSBpbnNpZGUgdGhlIHZpZXdmaW5kZXIgcmVjdGFuZ2xlIHRvIHNjYW4gaXQuJ1xyXG4gICAgICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogdHJ1ZSwgICAvLyBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSwgICAgIC8vIGRlZmF1bHQgZmFsc2VcclxuICAgICAgICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0cnVlLCAgICAgICAgLy8gZGVmYXVsdCBmYWxzZVxyXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLCAgICAgICAgICAgICAvLyBQbGF5IG9yIFN1cHByZXNzIGJlZXAgb24gc2NhbiAoZGVmYXVsdCB0cnVlKVxyXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSwgICAgICAgICAgICAgICAvLyBsYXVuY2ggd2l0aCB0aGUgZmxhc2hsaWdodCBvbiAoZGVmYXVsdCBmYWxzZSlcclxuICAgICAgICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiA1MDAsICAgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IDE1MDAgKG1zKSwgc2V0IHRvIDAgdG8gZGlzYWJsZSBlY2hvaW5nIHRoZSBzY2FubmVkIHRleHRcclxuICAgICAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDogdHJ1ZSAvLyBPbiBpT1MgeW91IGNhbiBzZW5kIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBhcHAgaWYgYWNjZXNzIHdhcyBwcmV2aW91c2x5IGRlbmllZFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBQcm9taXNlIGlzIG5ldmVyIGludm9rZWQgd2hlbiBhICdjb250aW51b3VzU2NhbkNhbGxiYWNrJyBmdW5jdGlvbiBpcyBwcm92aWRlZFxyXG4gICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTY2FuIHJlc3VsdFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblZhbHVlOiBcIiArIHJlc3VsdC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBjID0gTnVtYmVyKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5nZXRJdGVtKCk7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNjYW4uIFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy51cGMgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVUEM6IFwiICsgdGhpcy51cGMpO1xyXG4gICAgfS8vZW5kIG9mIHNjYW4oKVxyXG5cclxuICAgIGdldEl0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5iYXJjb2RlU2VydmljZS5nZXRJdGVtKFN0cmluZyh0aGlzLnVwYykpO1xyXG4gICAgICAgIC8vIHRoaXMuYmFyY29kZVNlcnZpY2UuZ2V0SXRlbU5hbWUodGhpcy51cGMpXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2VEYXRlID0+IHRoaXMuJGl0ZW0gPSByZXNwb25zZURhdGUpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmJhcmNvZGVTZXJ2aWNlLmdldE5EQm5vKHRoaXMuJE5EQm5vKVxyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKE5EQlJlc3BvbnNlID0+IHRoaXMuJE5EQm5vID0gTkRCUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW06IFwiICsgdGhpcy4kaXRlbSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJOREJubzogXCIgKyB0aGlzLiROREJubyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbmRleENoYW5nZWQoJGV2ZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy9VU0RBIEFQSSBLRVk6IDZGQUNiT2hIZ005d052ejlUdVVPVTZTVVE4RGd5dkpuejVuamcwb1ZcclxuIl19