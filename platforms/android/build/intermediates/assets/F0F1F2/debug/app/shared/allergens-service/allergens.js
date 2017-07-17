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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsZXJnZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsZXJnZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDhDQUE2QztBQUk3QyxJQUFhLFNBQVM7SUFrQmxCO1FBZkEsVUFBSyxHQUFZLElBQUksaUJBQU8sQ0FBQztRQUM3QixXQUFNLEdBQVksSUFBSSxpQkFBTyxDQUFDO1FBQzlCLFNBQUksR0FBWSxJQUFJLGlCQUFPLENBQUM7UUFDNUIsU0FBSSxHQUFZLElBQUksaUJBQU8sQ0FBQztRQUM1QixVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1FBQzdCLFFBQUcsR0FBWSxJQUFJLGlCQUFPLENBQUM7UUFDM0IsU0FBSSxHQUFZLElBQUksaUJBQU8sQ0FBQztRQUM1QixjQUFTLEdBQVksSUFBSSxpQkFBTyxDQUFDO1FBRWpDLHdDQUF3QztRQUNqQyxnQkFBVyxHQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDN0QsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUtuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFM0UsQ0FBQztJQUVPLDhCQUFVLEdBQWxCLFVBQW1CLE9BQWdCLEVBQUUsSUFBWSxFQUFFLFFBQWlCLEVBQUUsT0FBa0IsRUFBRSxXQUF1QjtRQUM3RyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM1QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTSxtQ0FBZSxHQUF0QixVQUF1QixRQUFpQjtRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQWFMLGdCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSxTQUFTO0lBRHJCLGlCQUFVLEVBQUU7O0dBQ0EsU0FBUyxDQTJEckI7QUEzRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxsZXJneSB9IGZyb20gXCIuLi9hbGxlcmd5L2FsbGVyZ3lcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbGxlcmdlbnMge1xyXG5cclxuXHJcbiAgICB3aGVhdDogQWxsZXJneSA9IG5ldyBBbGxlcmd5O1xyXG4gICAgZ2x1dGVuOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBmaXNoOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBlZ2dzOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBkYWlyeTogQWxsZXJneSA9IG5ldyBBbGxlcmd5O1xyXG4gICAgc295OiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBudXRzOiBBbGxlcmd5ID0gbmV3IEFsbGVyZ3k7XHJcbiAgICBzaGVsbEZpc2g6IEFsbGVyZ3kgPSBuZXcgQWxsZXJneTtcclxuXHJcbiAgICAvLyBhbGxlcmdlbkxpc3QgPSBuZXcgQXJyYXk8QWxsZXJneT4oMSk7XHJcbiAgICBwdWJsaWMgYWxsZXJneUxpc3Q6IEFycmF5PEFsbGVyZ3k+ID0gW3RoaXMud2hlYXQsIHRoaXMuZ2x1dGVuLFxyXG4gICAgdGhpcy5maXNoLCB0aGlzLmVnZ3MsIHRoaXMuZGFpcnksIHRoaXMuc295LCB0aGlzLm51dHMsIHRoaXMuc2hlbGxGaXNoXTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsZXJneSh0aGlzLndoZWF0LCBcIldoZWF0XCIsIGZhbHNlLCBbXCJHbHV0ZW5cIiwgXCJZZWFzdFwiLCBcIkxldmVuXCJdLCBbZmFsc2UsIGZhbHNlXSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxlcmd5KHRoaXMuZ2x1dGVuLCBcIkdsdXRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxlcmd5KHRoaXMuZmlzaCwgXCJGaXNoXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEFsbGVyZ3kodGhpcy5lZ2dzLCBcIkVnZ3NcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0QWxsZXJneSh0aGlzLmRhaXJ5LCBcIkRhaXJ5XCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEFsbGVyZ3kodGhpcy5zb3ksIFwiU295XCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEFsbGVyZ3kodGhpcy5udXRzLCBcIk51dHNcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0QWxsZXJneSh0aGlzLmdsdXRlbiwgXCJTaGVsbGZpc2hcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFsbGVyZ3lMaXN0ID0gW3RoaXMud2hlYXQsIHRoaXMuZ2x1dGVuLFxyXG4gICAgICAgIHRoaXMuZmlzaCwgdGhpcy5lZ2dzLCB0aGlzLmRhaXJ5LCB0aGlzLnNveSwgdGhpcy5udXRzLCB0aGlzLnNoZWxsRmlzaF07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QWxsZXJneShhbGxlcmd5OiBBbGxlcmd5LCBuYW1lOiBzdHJpbmcsIHNlbGVjdGVkOiBib29sZWFuLCByZWxhdGVkPzogW3N0cmluZ10sIGhhc0FsbGVyZ2VuPzogW2Jvb2xlYW5dKSB7XHJcbiAgICAgICAgYWxsZXJneS5uYW1lID0gbmFtZTtcclxuICAgICAgICBhbGxlcmd5LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgYWxsZXJneS5yZWxhdGVkX2FsbGVyZ2VucyA9IHJlbGF0ZWQ7XHJcbiAgICAgICAgYWxsZXJneS5oYXNfYWxsZXJnZW5zID0gaGFzQWxsZXJnZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbGVyZ2llcygpOiBBcnJheTxBbGxlcmd5PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsZXJneUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzV2hlYXRTZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYWxsZXJneUxpc3RbMF0uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0UmVsYXRlZCgpOiBbU3RyaW5nXSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYWxsZXJnZW4ucmVsYXRlZF9hbGxlcmdlbnM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0SGFzKCk6IFtib29sZWFuXSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYWxsZXJnZW4uaGFzX2FsbGVyZ2VucztcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxufSJdfQ==