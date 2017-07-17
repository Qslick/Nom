import { Component, OnInit, Inject } from "@angular/core";
import { BarcodeService } from "../../shared/barcode.service/barcode.service";
import { LookupService } from "../../shared/lookup.service/lookup.service";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { Http, Response } from "@angular/http";
import { Page } from "ui/page";
import { registerElement } from 'nativescript-angular';
import 'rxjs/add/operator/map';
import * as elementRegistryModule from 'nativescript-angular/element-registry';

import { Allergens } from "../../shared/allergens-service/allergens";
import { Allergy } from "../../shared/allergy/allergy";
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
// registerElement('BottomBar', () => BottomBar);



@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.css"]
})
export class HomeComponent implements OnInit {

    upc: number;
    $item;
    $NDBno: any = [];
    itemFacts: JSON;
    itemName: string;


    somethingSelected: boolean = false
    selectedAllergen;
    // selectedSubAllergens: [1,2,3];
    editingImgUrl: string;


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private allergen: Allergens, private barcodeService: BarcodeService, private lookupService: LookupService,
        private barcodescanner: BarcodeScanner, private http: Http, private page: Page) {

        this.page.actionBarHidden = true;
        // console.log("TEST: " + this.allergen.allergyList[5].name);
        // this.barcodeService.getItem("41498156398");

    }

    ngOnInit(): void {

    }

    // tabSelected(args: SelectedIndexChangedEventData) {
    //     // only triggered when a different tab is tapped
    //     console.log(args.newIndex);
    // }

    allergenSelected() {
        this.somethingSelected = false;

        if (this.allergen.wheat.isSelected()) {
            this.somethingSelected = true;
            this.selectedAllergen = this.allergen.wheat;
        } else {

        }

        if (this.allergen.gluten.isSelected()) {
            this.selectedAllergen = this.allergen.gluten;
            this.somethingSelected = true;
        } else {

        }

        if (this.allergen.fish.isSelected()) {
            this.selectedAllergen = this.allergen.fish;
            this.somethingSelected = true;
        } else {

        }

        if (this.allergen.eggs.isSelected()) {
            this.selectedAllergen = this.allergen.eggs;
            this.somethingSelected = true;
        } else {

        }

        if (this.allergen.dairy.isSelected()) {
            this.selectedAllergen = this.allergen.dairy;
            this.somethingSelected = true;
        } else {

        }

        if (this.allergen.soy.isSelected()) {
            this.selectedAllergen = this.allergen.soy;
            this.somethingSelected = true;
        } else {

        }

        if (this.allergen.nuts.isSelected()) {
            this.selectedAllergen = this.allergen.nuts;
            this.somethingSelected = true;
        } else {

        }

        if (this.allergen.shellFish.isSelected()) {
            this.somethingSelected = true;
        } else {

        }

        console.log("SomethingSelected: " + this.somethingSelected);

        for (let i = 0; i < this.selectedAllergen.related_allergens.length; i++) {
            console.log(this.selectedAllergen.related_allergens[i]);
        }
    }

    wheatBtn() {
        console.log("WheatBtn()");
        this.allergen.wheat.toggleSelected();
        this.selectedAllergen = this.allergen.wheat;
        this.editingImgUrl = "~/assets/images/bread-1.png";
        this.allergenSelected();
    }

    glutenBtn() {
        console.log("glutenBtn()");
        this.allergen.gluten.toggleSelected();
        this.selectedAllergen = this.allergen.gluten;
        this.editingImgUrl = "~/assets/images/flour.png";
        this.allergenSelected();
    }

    fishBtn() {
        console.log("fishBtn()");
        this.allergen.fish.toggleSelected();
        this.selectedAllergen = this.allergen.fish;
        this.editingImgUrl = "~/assets/images/fish.png";
        this.allergenSelected();

    }

    eggsBtn() {
        console.log("eggsBtn()");
        this.allergen.eggs.toggleSelected();
        this.selectedAllergen = this.allergen.eggs;
        this.editingImgUrl = "~/assets/images/eggs.png";
        this.allergenSelected();
    }

    dairyBtn() {
        console.log("dairyBtn");
        this.allergen.dairy.toggleSelected();
        this.selectedAllergen = this.allergen.dairy;
        this.editingImgUrl = "~/assets/images/cheese-1.png";
        this.allergenSelected();

    }

    soyBtn() {
        console.log("soyBtn");
        this.allergen.soy.toggleSelected();
        this.selectedAllergen = this.allergen.soy;
        this.editingImgUrl = "~/assets/images/soybean.png";
        this.allergenSelected();

    }

    nutBtn() {
        console.log("nutBtn");
        this.allergen.nuts.toggleSelected();
        this.selectedAllergen = this.allergen.nuts;
        this.editingImgUrl = "~/assets/images/almond.png";
        this.allergenSelected();

    }

    shellFishBtn() {
        console.log("shellFishBtn");
        this.allergen.shellFish.toggleSelected();
        this.selectedAllergen = this.allergen.shellFish;
        this.editingImgUrl = "~/assets/images/shrimp.png";
        this.allergenSelected();

    }

    discover() {

    }


    scan() {
        console.log("Scan button Tapped");

        this.barcodescanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
            cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
            message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
            showFlipCameraButton: true,   // default false
            preferFrontCamera: false,     // default false
            showTorchButton: true,        // default false
            beepOnScan: true,             // Play or Suppress beep on scan (default true)
            torchOn: false,               // launch with the flashlight on (default false)
            resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }).then((result) => {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
            this.upc = Number(result.text);
            this.getItem();
        }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
            this.upc = -1;
        }
            );
        console.log("UPC: " + this.upc);
    }//end of scan()

    getItem() {
        this.barcodeService.getItem(String(this.upc));
        // this.barcodeService.getItemName(this.upc)
        //     .subscribe(responseDate => this.$item = responseDate);

        // this.barcodeService.getNDBno(this.$NDBno)
        //     .subscribe(NDBResponse => this.$NDBno = NDBResponse);

        // console.log("Item: " + this.$item);
        // console.log("NDBno: " + this.$NDBno);
    }

    onIndexChanged($event) {

    }

}

//USDA API KEY: 6FACbOhHgM9wNvz9TuUOU6SUQ8DgyvJnz5njg0oV
