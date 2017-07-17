import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./pages/home/home.component";
import { LookupService } from "./shared/lookup.service/lookup.service";
import { BarcodeService } from "./shared/barcode.service/barcode.service";

import { Allergens } from "./shared/allergens-service/allergens";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { HttpModule } from '@angular/http';
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
export function createBarcodeScanner() {
    return new BarcodeScanner();
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        HomeComponent
    ],
    providers: [
        Allergens,
        ItemService,
        LookupService,
        BarcodeService,
        HttpModule,
        { provide: BarcodeScanner, useFactory: (createBarcodeScanner) }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
