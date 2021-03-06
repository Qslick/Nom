"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var allergy_1 = require("../allergy/allergy");
var Allergens = (function () {
    function Allergens() {
        this.wheat = new allergy_1.Allergy;
        this.gluten = new allergy_1.Allergy;
        this.fish = new allergy_1.Allergy;
        this.eggs = new allergy_1.Allergy;
        this.dairy = new allergy_1.Allergy;
        this.soy = new allergy_1.Allergy;
        this.nuts = new allergy_1.Allergy;
        this.shellFish = new allergy_1.Allergy;
        // allergenList = new Array<Allergy>(1);
        this.allergyList = [this.wheat, this.gluten,
            this.fish, this.eggs, this.dairy, this.soy, this.nuts, this.shellFish];
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
    Allergens.prototype.related = function () {
        return this.selectedAllergen.getRelatedAllergens();
    };
    Allergens.prototype.setAllergy = function (allergy, name, selected, related, hasAllergen) {
        allergy.name = name;
        allergy.selected = selected;
        allergy.related_allergens = related;
        allergy.has_allergens = hasAllergen;
    };
    Allergens.prototype.getAllergies = function () {
        return this.allergyList;
    };
    Allergens.prototype.isWheatSelected = function (selected) {
        this.allergyList[0].selected = selected;
    };
    return Allergens;
}());
Allergens = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Allergens);
exports.Allergens = Allergens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsZXJnZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsZXJnZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDhDQUE2QztBQUk3QyxJQUFhLFNBQVM7SUF1QmxCO1FBcEJBLFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7UUFDN0IsV0FBTSxHQUFZLElBQUksaUJBQU8sQ0FBQztRQUM5QixTQUFJLEdBQVksSUFBSSxpQkFBTyxDQUFDO1FBQzVCLFNBQUksR0FBWSxJQUFJLGlCQUFPLENBQUM7UUFDNUIsVUFBSyxHQUFZLElBQUksaUJBQU8sQ0FBQztRQUM3QixRQUFHLEdBQVksSUFBSSxpQkFBTyxDQUFDO1FBQzNCLFNBQUksR0FBWSxJQUFJLGlCQUFPLENBQUM7UUFDNUIsY0FBUyxHQUFZLElBQUksaUJBQU8sQ0FBQztRQUlqQyx3Q0FBd0M7UUFDakMsZ0JBQVcsR0FBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQzdELElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFRbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUMzQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTNFLENBQUM7SUFsQkwsMkJBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBa0JXLDhCQUFVLEdBQWxCLFVBQW1CLE9BQWdCLEVBQUUsSUFBWSxFQUFFLFFBQWlCLEVBQUUsT0FBa0IsRUFBRSxXQUF1QjtRQUM3RyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM1QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTSxtQ0FBZSxHQUF0QixVQUF1QixRQUFpQjtRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQWFMLGdCQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQWhFWSxTQUFTO0lBRHJCLGlCQUFVLEVBQUU7O0dBQ0EsU0FBUyxDQWdFckI7QUFoRVksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxsZXJneSB9IGZyb20gXCIuLi9hbGxlcmd5L2FsbGVyZ3lcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbGxlcmdlbnMge1xyXG5cclxuXHJcbiAgICB3aGVhdDogQWxsZXJneSA9IG5ldyBBbGxlcmd5O1xyXG4gICAgZ2x1dGVuOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBmaXNoOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBlZ2dzOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBkYWlyeTogQWxsZXJneSA9IG5ldyBBbGxlcmd5O1xyXG4gICAgc295OiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBudXRzOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBzaGVsbEZpc2g6IEFsbGVyZ3kgPSBuZXcgQWxsZXJneTtcclxuXHJcbiAgICBzZWxlY3RlZEFsbGVyZ2VuOiBBbGxlcmd5O1xyXG5cclxuICAgIC8vIGFsbGVyZ2VuTGlzdCA9IG5ldyBBcnJheTxBbGxlcmd5PigxKTtcclxuICAgIHB1YmxpYyBhbGxlcmd5TGlzdDogQXJyYXk8QWxsZXJneT4gPSBbdGhpcy53aGVhdCwgdGhpcy5nbHV0ZW4sXHJcbiAgICB0aGlzLmZpc2gsIHRoaXMuZWdncywgdGhpcy5kYWlyeSwgdGhpcy5zb3ksIHRoaXMubnV0cywgdGhpcy5zaGVsbEZpc2hdO1xyXG5cclxucmVsYXRlZCgpOkFycmF5PHN0cmluZz57XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEFsbGVyZ2VuLmdldFJlbGF0ZWRBbGxlcmdlbnMoKTtcclxufVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNldEFsbGVyZ3kodGhpcy53aGVhdCwgXCJXaGVhdFwiLCBmYWxzZSwgW1wiR2x1dGVuXCIsIFwiWWVhc3RcIiwgXCJMZXZlblwiXSwgW2ZhbHNlLCBmYWxzZV0pO1xyXG4gICAgICAgIHRoaXMuc2V0QWxsZXJneSh0aGlzLmdsdXRlbiwgXCJHbHV0ZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0QWxsZXJneSh0aGlzLmZpc2gsIFwiRmlzaFwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxlcmd5KHRoaXMuZWdncywgXCJFZ2dzXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEFsbGVyZ3kodGhpcy5kYWlyeSwgXCJEYWlyeVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxlcmd5KHRoaXMuc295LCBcIlNveVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxlcmd5KHRoaXMubnV0cywgXCJOdXRzXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEFsbGVyZ3kodGhpcy5nbHV0ZW4sIFwiU2hlbGxmaXNoXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxlcmd5TGlzdCA9IFt0aGlzLndoZWF0LCB0aGlzLmdsdXRlbixcclxuICAgICAgICB0aGlzLmZpc2gsIHRoaXMuZWdncywgdGhpcy5kYWlyeSwgdGhpcy5zb3ksIHRoaXMubnV0cywgdGhpcy5zaGVsbEZpc2hdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFsbGVyZ3koYWxsZXJneTogQWxsZXJneSwgbmFtZTogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbiwgcmVsYXRlZD86IFtzdHJpbmddLCBoYXNBbGxlcmdlbj86IFtib29sZWFuXSkge1xyXG4gICAgICAgIGFsbGVyZ3kubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgYWxsZXJneS5zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgICAgIGFsbGVyZ3kucmVsYXRlZF9hbGxlcmdlbnMgPSByZWxhdGVkO1xyXG4gICAgICAgIGFsbGVyZ3kuaGFzX2FsbGVyZ2VucyA9IGhhc0FsbGVyZ2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGxlcmdpZXMoKTogQXJyYXk8QWxsZXJneT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbGVyZ3lMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1doZWF0U2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmFsbGVyZ3lMaXN0WzBdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldFJlbGF0ZWQoKTogW1N0cmluZ10ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFsbGVyZ2VuLnJlbGF0ZWRfYWxsZXJnZW5zO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldEhhcygpOiBbYm9vbGVhbl0ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFsbGVyZ2VuLmhhc19hbGxlcmdlbnM7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcbn0iXX0=