import { Injectable } from "@angular/core";
import { Allergy } from "../allergy/allergy";


@Injectable()
export class Allergens {


    wheat: Allergy = new Allergy;
    gluten: Allergy = new Allergy;
    fish: Allergy = new Allergy;
    eggs: Allergy = new Allergy;
    dairy: Allergy = new Allergy;
    soy: Allergy = new Allergy;
    nuts: Allergy = new Allergy;
    shellFish: Allergy = new Allergy;

    // allergenList = new Array<Allergy>(1);
    public allergyList: Array<Allergy> = [this.wheat, this.gluten,
    this.fish, this.eggs, this.dairy, this.soy, this.nuts, this.shellFish];



    constructor() {
        this.setAllergy(this.wheat, "Wheat", false, ["Gluten", "Yeast", "Leven"], [false, false]);
        this.setAllergy(this.gluten, "Gluten", false);
        this.setAllergy(this.fish, "Fish", false);
        this.setAllergy(this.eggs, "Eggs", false);
        this.setAllergy(this.dairy, "Dairy", false);
        this.setAllergy(this.soy, "Soy", false);
        this.setAllergy(this.nuts, "Nuts", false);
        this.setAllergy(this.gluten, "Shellfish", false);

        this.allergyList = [this.wheat, this.gluten,
        this.fish, this.eggs, this.dairy, this.soy, this.nuts, this.shellFish];

    }

    private setAllergy(allergy: Allergy, name: string, selected: boolean, related?: [string], hasAllergen?: [boolean]) {
        allergy.name = name;
        allergy.selected = selected;
        allergy.related_allergens = related;
        allergy.has_allergens = hasAllergen;
    }

    public getAllergies(): Array<Allergy> {
        return this.allergyList;
    }

    public isWheatSelected(selected: boolean) {
        this.allergyList[0].selected = selected;
    }


    // getRelated(): [String] {
    //     return this.allergen.related_allergens;
    // }

    // getHas(): [boolean] {
    //     return this.allergen.has_allergens;
    // }



}