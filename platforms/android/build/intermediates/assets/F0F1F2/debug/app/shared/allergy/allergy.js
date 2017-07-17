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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsZXJneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbGVyZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBc0JBLENBQUM7SUFoQkcscUNBQW1CLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBYyxHQUFkLFVBQWUsTUFBZ0I7UUFDM0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzNCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUwsY0FBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWxsZXJneSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICAgIHJlbGF0ZWRfYWxsZXJnZW5zOiBbc3RyaW5nXTtcclxuICAgIGhhc19hbGxlcmdlbnM6IFtib29sZWFuXTtcclxuXHJcbiAgICBnZXRSZWxhdGVkQWxsZXJnZW5zKCk6IFtzdHJpbmdde1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRfYWxsZXJnZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU2VsZWN0ZWQodG9nZ2xlPzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0b2dnbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRvZ2dsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==