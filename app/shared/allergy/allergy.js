"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Allergy = (function () {
    function Allergy() {
    }
    Allergy.prototype.getRelatedAllergens = function () {
        return this.related_allergens;
    };
    Allergy.prototype.isSelected = function () {
        return this.selected;
    };
    Allergy.prototype.toggleSelected = function (toggle) {
        if (toggle) {
            this.selected = toggle;
        }
        else {
            this.selected = !this.selected;
        }
    };
    return Allergy;
}());
exports.Allergy = Allergy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsZXJneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbGVyZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBcUJBLENBQUM7SUFmRyxxQ0FBbUIsR0FBbkI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxNQUFnQjtRQUMzQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBbGxlcmd5IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgcmVsYXRlZF9hbGxlcmdlbnM6IEFycmF5PHN0cmluZz47XHJcbiAgICBoYXNfYWxsZXJnZW5zOiBbYm9vbGVhbl07XHJcblxyXG4gICAgZ2V0UmVsYXRlZEFsbGVyZ2VucygpOiAgQXJyYXk8c3RyaW5nPntcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkX2FsbGVyZ2VucztcclxuICAgIH1cclxuXHJcbiAgICBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNlbGVjdGVkKHRvZ2dsZT86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0b2dnbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==