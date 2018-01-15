import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({ // component decorator makes a class a component
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent {
    // @Input decorator is used to decaorate any input in a nested compnent class
    @Input() rating: number; // passing the rating property to the container component so the container can provide the rating number
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>() //new instance of the event emmitter

    ngOnChanges(): void {
        //ngOnChanges watches changes to input properties
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
    }
}
