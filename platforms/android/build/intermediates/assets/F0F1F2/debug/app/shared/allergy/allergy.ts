export class Allergy {
    name: string;
    selected: boolean;
    related_allergens: [string];
    has_allergens: [boolean];

    getRelatedAllergens(): [string]{
        return this.related_allergens;
    }

    isSelected(): boolean {
        return this.selected;
    }

    toggleSelected(toggle?: boolean) {
        if (toggle) {
            this.selected = toggle;
        } else {
            this.selected = !this.selected;
        }
    }

}