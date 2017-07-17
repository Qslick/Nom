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
    function HomeComponent(allergen, barcodeService, lookupService, barcodescanner, http, page) {
        this.allergen = allergen;
        this.barcodeService = barcodeService;
        this.lookupService = lookupService;
        this.barcodescanner = barcodescanner;
        this.http = http;
        this.page = page;
        this.test = "testing123";
        this.somethingSelected = false;
        console.log("CONSTRUCTOR");
        // this.subscription = this.barcodeService.getMessage().subscribe(NDBno => { this.$NDBno = NDBno; });
        this.testBtn();
        this.page.actionBarHidden = true;
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
            this.allergen.selectedAllergen = this.allergen.wheat;
        }
        else {
        }
        if (this.allergen.gluten.isSelected()) {
            this.allergen.selectedAllergen = this.allergen.gluten;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.fish.isSelected()) {
            this.allergen.selectedAllergen = this.allergen.fish;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.eggs.isSelected()) {
            this.allergen.selectedAllergen = this.allergen.eggs;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.dairy.isSelected()) {
            this.allergen.selectedAllergen = this.allergen.dairy;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.soy.isSelected()) {
            this.allergen.selectedAllergen = this.allergen.soy;
            this.somethingSelected = true;
        }
        else {
        }
        if (this.allergen.nuts.isSelected()) {
            this.allergen.selectedAllergen = this.allergen.nuts;
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
        for (var i = 0; i < this.allergen.selectedAllergen.getRelatedAllergens().length; i++) {
            console.log(this.allergen.selectedAllergen.related_allergens[i]);
        }
    };
    HomeComponent.prototype.wheatBtn = function () {
        console.log("WheatBtn()");
        this.allergen.wheat.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.wheat;
        this.editingImgUrl = "~/assets/images/bread-1.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.glutenBtn = function () {
        console.log("glutenBtn()");
        this.allergen.gluten.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.gluten;
        this.editingImgUrl = "~/assets/images/flour.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.fishBtn = function () {
        console.log("fishBtn()");
        this.allergen.fish.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.fish;
        this.editingImgUrl = "~/assets/images/fish.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.eggsBtn = function () {
        console.log("eggsBtn()");
        this.allergen.eggs.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.eggs;
        this.editingImgUrl = "~/assets/images/eggs.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.dairyBtn = function () {
        console.log("dairyBtn");
        this.allergen.dairy.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.dairy;
        this.editingImgUrl = "~/assets/images/cheese-1.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.soyBtn = function () {
        console.log("soyBtn");
        this.allergen.soy.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.soy;
        this.editingImgUrl = "~/assets/images/soybean.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.nutBtn = function () {
        console.log("nutBtn");
        this.allergen.nuts.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.nuts;
        this.editingImgUrl = "~/assets/images/almond.png";
        this.allergenSelected();
    };
    HomeComponent.prototype.shellFishBtn = function () {
        console.log("shellFishBtn");
        this.allergen.shellFish.toggleSelected();
        this.allergen.selectedAllergen = this.allergen.shellFish;
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
            beepOnScan: false,
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
    }; //end of scan()
    HomeComponent.prototype.testBtn = function () {
        this.upc = 30000050705;
        this.getItem();
    };
    HomeComponent.prototype.emit = function (val) {
        // this.barcodeService.valueEmmiter(val);
    };
    HomeComponent.prototype.reciveItemInfo = function (info) {
        console.log("RECIVED INFO: " + info);
    };
    HomeComponent.prototype.getItem = function () {
        console.log("UPC Scanned:  " + this.upc);
        this.barcodeService.getItem(String(this.upc));
        // let data: any;
        // let promise = this.barcodeService.queuePromise();
        // console.log("Subscription: " + this.subscription);
        // console.log("Subscription NDB: " + this.$NDBno);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxnRkFBOEU7QUFDOUUsNkVBQTJFO0FBQzNFLDJFQUE2RDtBQUM3RCxzQ0FBK0M7QUFDL0MsZ0NBQStCO0FBRS9CLGlDQUErQjtBQUMvQiw2RUFBK0U7QUFLL0Usc0VBQXFFO0FBRXJFLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLGlEQUFpRDtBQVVqRCxJQUFhLGFBQWE7SUFldEIsdUJBQW9CLFFBQW1CLEVBQVUsY0FBOEIsRUFBVSxhQUE0QixFQUN6RyxjQUE4QixFQUFVLElBQVUsRUFBVSxJQUFVO1FBRDlELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN6RyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVRsRixTQUFJLEdBQVEsWUFBWSxDQUFDO1FBR3pCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQU8vQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNCLHFHQUFxRztRQUNyRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFFckMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQscURBQXFEO0lBQ3JELHVEQUF1RDtJQUN2RCxrQ0FBa0M7SUFDbEMsSUFBSTtJQUVKLHdDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIs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NEM7UUFDNUMsNERBQTREO1FBRTVELHNDQUFzQztRQUN0Qyx3Q0FBd0M7SUFDNUMsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxNQUFNO0lBRXJCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFyUEQsSUFxUEM7QUFyUFksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzVCLENBQUM7cUNBZ0JnQyxxQkFBUyxFQUEwQixnQ0FBYyxFQUF5Qiw4QkFBYTtRQUN6Riw0Q0FBYyxFQUFnQixXQUFJLEVBQWdCLFdBQUk7R0FoQnpFLGFBQWEsQ0FxUHpCO0FBclBZLHNDQUFhO0FBdVAxQix3REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFyY29kZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2JhcmNvZGUuc2VydmljZS9iYXJjb2RlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9va3VwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbG9va3VwLnNlcnZpY2UvbG9va3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbmltcG9ydCB7IEFsbGVyZ2VucyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYWxsZXJnZW5zLXNlcnZpY2UvYWxsZXJnZW5zXCI7XHJcbmltcG9ydCB7IEFsbGVyZ3kgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2FsbGVyZ3kvYWxsZXJneVwiO1xyXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbi8vIHJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB1cGM6IG51bWJlcjtcclxuICAgICRpdGVtO1xyXG4gICAgJE5EQm5vOiBhbnk7XHJcbiAgICBpdGVtRmFjdHM6IEpTT047XHJcbiAgICBpdGVtTmFtZTogc3RyaW5nO1xyXG4gICAgdGVzdDogYW55ID0gXCJ0ZXN0aW5nMTIzXCI7XHJcblxyXG5cclxuICAgIHNvbWV0aGluZ1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBlZGl0aW5nSW1nVXJsOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGxlcmdlbjogQWxsZXJnZW5zLCBwcml2YXRlIGJhcmNvZGVTZXJ2aWNlOiBCYXJjb2RlU2VydmljZSwgcHJpdmF0ZSBsb29rdXBTZXJ2aWNlOiBMb29rdXBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYmFyY29kZXNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCBwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09OU1RSVUNUT1JcIik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iYXJjb2RlU2VydmljZS5nZXRNZXNzYWdlKCkuc3Vic2NyaWJlKE5EQm5vID0+IHsgdGhpcy4kTkRCbm8gPSBOREJubzsgfSk7XHJcbiAgICAgICAgdGhpcy50ZXN0QnRuKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgLy8gICAgIC8vIG9ubHkgdHJpZ2dlcmVkIHdoZW4gYSBkaWZmZXJlbnQgdGFiIGlzIHRhcHBlZFxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGFsbGVyZ2VuU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zb21ldGhpbmdTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbGxlcmdlbi53aGVhdC5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zb21ldGhpbmdTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4ud2hlYXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hbGxlcmdlbi5nbHV0ZW4uaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uZ2x1dGVuO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWV0aGluZ1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbGVyZ2VuLmZpc2guaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uZmlzaDtcclxuICAgICAgICAgICAgdGhpcy5zb21ldGhpbmdTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hbGxlcmdlbi5lZ2dzLmlzU2VsZWN0ZWQoKSkge1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbGxlcmdlbi5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5lZ2dzO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWV0aGluZ1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbGVyZ2VuLmRhaXJ5LmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbGVyZ2VuLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLmRhaXJ5O1xyXG4gICAgICAgICAgICB0aGlzLnNvbWV0aGluZ1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbGVyZ2VuLnNveS5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxlcmdlbi5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5zb3k7XHJcbiAgICAgICAgICAgIHRoaXMuc29tZXRoaW5nU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWxsZXJnZW4ubnV0cy5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxlcmdlbi5zZWxlY3RlZEFsbGVyZ2VuID0gdGhpcy5hbGxlcmdlbi5udXRzO1xyXG4gICAgICAgICAgICB0aGlzLnNvbWV0aGluZ1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbGVyZ2VuLnNoZWxsRmlzaC5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zb21ldGhpbmdTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZ1NlbGVjdGVkOiBcIiArIHRoaXMuc29tZXRoaW5nU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbi5nZXRSZWxhdGVkQWxsZXJnZW5zKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hbGxlcmdlbi5zZWxlY3RlZEFsbGVyZ2VuLnJlbGF0ZWRfYWxsZXJnZW5zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2hlYXRCdG4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXaGVhdEJ0bigpXCIpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4ud2hlYXQudG9nZ2xlU2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLndoZWF0O1xyXG4gICAgICAgIHRoaXMuZWRpdGluZ0ltZ1VybCA9IFwifi9hc3NldHMvaW1hZ2VzL2JyZWFkLTEucG5nXCI7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlblNlbGVjdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2x1dGVuQnRuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2x1dGVuQnRuKClcIik7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlbi5nbHV0ZW4udG9nZ2xlU2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLmdsdXRlbjtcclxuICAgICAgICB0aGlzLmVkaXRpbmdJbWdVcmwgPSBcIn4vYXNzZXRzL2ltYWdlcy9mbG91ci5wbmdcIjtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuU2VsZWN0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXNoQnRuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlzaEJ0bigpXCIpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4uZmlzaC50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uZmlzaDtcclxuICAgICAgICB0aGlzLmVkaXRpbmdJbWdVcmwgPSBcIn4vYXNzZXRzL2ltYWdlcy9maXNoLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW5TZWxlY3RlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlZ2dzQnRuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWdnc0J0bigpXCIpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4uZWdncy50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uZWdncztcclxuICAgICAgICB0aGlzLmVkaXRpbmdJbWdVcmwgPSBcIn4vYXNzZXRzL2ltYWdlcy9lZ2dzLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW5TZWxlY3RlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRhaXJ5QnRuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGFpcnlCdG5cIik7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlbi5kYWlyeS50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uZGFpcnk7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nSW1nVXJsID0gXCJ+L2Fzc2V0cy9pbWFnZXMvY2hlZXNlLTEucG5nXCI7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlblNlbGVjdGVkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNveUJ0bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNveUJ0blwiKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLnNveS50b2dnbGVTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW4uc2VsZWN0ZWRBbGxlcmdlbiA9IHRoaXMuYWxsZXJnZW4uc295O1xyXG4gICAgICAgIHRoaXMuZWRpdGluZ0ltZ1VybCA9IFwifi9hc3NldHMvaW1hZ2VzL3NveWJlYW4ucG5nXCI7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlblNlbGVjdGVkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG51dEJ0bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm51dEJ0blwiKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLm51dHMudG9nZ2xlU2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLm51dHM7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nSW1nVXJsID0gXCJ+L2Fzc2V0cy9pbWFnZXMvYWxtb25kLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuYWxsZXJnZW5TZWxlY3RlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaGVsbEZpc2hCdG4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGVsbEZpc2hCdG5cIik7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlbi5zaGVsbEZpc2gudG9nZ2xlU2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLmFsbGVyZ2VuLnNlbGVjdGVkQWxsZXJnZW4gPSB0aGlzLmFsbGVyZ2VuLnNoZWxsRmlzaDtcclxuICAgICAgICB0aGlzLmVkaXRpbmdJbWdVcmwgPSBcIn4vYXNzZXRzL2ltYWdlcy9zaHJpbXAucG5nXCI7XHJcbiAgICAgICAgdGhpcy5hbGxlcmdlblNlbGVjdGVkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpc2NvdmVyKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2NhbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW4gYnV0dG9uIFRhcHBlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYXJjb2Rlc2Nhbm5lci5zY2FuKHtcclxuICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcclxuICAgICAgICAgICAgY2FuY2VsTGFiZWw6IFwiRVhJVC4gQWxzbywgdHJ5IHRoZSB2b2x1bWUgYnV0dG9ucyFcIiwgLy8gaU9TIG9ubHksIGRlZmF1bHQgJ0Nsb3NlJ1xyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbEJhY2tncm91bmRDb2xvcjogXCIjMzMzMzMzXCIsIC8vIGlPUyBvbmx5LCBkZWZhdWx0ICcjMDAwMDAwJyAoYmxhY2spXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXNlIHRoZSB2b2x1bWUgYnV0dG9ucyBmb3IgZXh0cmEgbGlnaHRcIiwgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IGlzICdQbGFjZSBhIGJhcmNvZGUgaW5zaWRlIHRoZSB2aWV3ZmluZGVyIHJlY3RhbmdsZSB0byBzY2FuIGl0LidcclxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsICAgLy8gZGVmYXVsdCBmYWxzZVxyXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsICAgICAvLyBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSwgICAgICAgIC8vIGRlZmF1bHQgZmFsc2VcclxuICAgICAgICAgICAgYmVlcE9uU2NhbjogZmFsc2UsICAgICAgICAgICAgIC8vIFBsYXkgb3IgU3VwcHJlc3MgYmVlcCBvbiBzY2FuIChkZWZhdWx0IHRydWUpXHJcbiAgICAgICAgICAgIHRvcmNoT246IGZhbHNlLCAgICAgICAgICAgICAgIC8vIGxhdW5jaCB3aXRoIHRoZSBmbGFzaGxpZ2h0IG9uIChkZWZhdWx0IGZhbHNlKVxyXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCwgICAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgMTUwMCAobXMpLCBzZXQgdG8gMCB0byBkaXNhYmxlIGVjaG9pbmcgdGhlIHNjYW5uZWQgdGV4dFxyXG4gICAgICAgICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkOiB0cnVlIC8vIE9uIGlPUyB5b3UgY2FuIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHNldHRpbmdzIGFwcCBpZiBhY2Nlc3Mgd2FzIHByZXZpb3VzbHkgZGVuaWVkXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIFByb21pc2UgaXMgbmV2ZXIgaW52b2tlZCB3aGVuIGEgJ2NvbnRpbnVvdXNTY2FuQ2FsbGJhY2snIGZ1bmN0aW9uIGlzIHByb3ZpZGVkXHJcbiAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNjYW4gcmVzdWx0XCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkZvcm1hdDogXCIgKyByZXN1bHQuZm9ybWF0ICsgXCIsXFxuVmFsdWU6IFwiICsgcmVzdWx0LnRleHQsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy51cGMgPSBOdW1iZXIocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEl0ZW0oKTtcclxuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2Nhbi4gXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnVwYyA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH0vL2VuZCBvZiBzY2FuKClcclxuXHJcbiAgICB0ZXN0QnRuKCkge1xyXG4gICAgICAgIHRoaXMudXBjID0gMzAwMDAwNTA3MDU7XHJcbiAgICAgICAgdGhpcy5nZXRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdCh2YWwpIHsgLy8geW91ciB2YWx1ZSB5b3Ugd2FudCB0byBlbWl0XHJcbiAgICAgICAgLy8gdGhpcy5iYXJjb2RlU2VydmljZS52YWx1ZUVtbWl0ZXIodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICByZWNpdmVJdGVtSW5mbyhpbmZvOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJFQ0lWRUQgSU5GTzogXCIgKyBpbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVBDIFNjYW5uZWQ6ICBcIiArIHRoaXMudXBjKTtcclxuICAgICAgICB0aGlzLmJhcmNvZGVTZXJ2aWNlLmdldEl0ZW0oU3RyaW5nKHRoaXMudXBjKSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBkYXRhOiBhbnk7XHJcblxyXG4gICAgICAgIC8vIGxldCBwcm9taXNlID0gdGhpcy5iYXJjb2RlU2VydmljZS5xdWV1ZVByb21pc2UoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlN1YnNjcmlwdGlvbjogXCIgKyB0aGlzLnN1YnNjcmlwdGlvbik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTdWJzY3JpcHRpb24gTkRCOiBcIiArIHRoaXMuJE5EQm5vKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5iYXJjb2RlU2VydmljZS5nZXRJdGVtTmFtZSh0aGlzLnVwYylcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShyZXNwb25zZURhdGUgPT4gdGhpcy4kaXRlbSA9IHJlc3BvbnNlRGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYmFyY29kZVNlcnZpY2UuZ2V0TkRCbm8odGhpcy4kTkRCbm8pXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoTkRCUmVzcG9uc2UgPT4gdGhpcy4kTkRCbm8gPSBOREJSZXNwb25zZSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbTogXCIgKyB0aGlzLiRpdGVtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5EQm5vOiBcIiArIHRoaXMuJE5EQm5vKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluZGV4Q2hhbmdlZCgkZXZlbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL1VTREEgQVBJIEtFWTogNkZBQ2JPaEhnTTl3TnZ6OVR1VU9VNlNVUThEZ3l2Sm56NW5qZzBvVlxyXG4iXX0=