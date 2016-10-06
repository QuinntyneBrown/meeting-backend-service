import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meeting } from "../models";

@Component({
    template: require("./meeting-list.component.html"),
    styles: [require("./meeting-list.component.scss")],
    selector: "meeting-list"
})
export class MeetingListComponent {     
    @Input() public entities: Array<Meeting> = [];
    @Output() onDelete: EventEmitter<{ value: Meeting }> = new EventEmitter<{ value: Meeting }>();
    @Output() onSelect: EventEmitter<{ value: Meeting }> = new EventEmitter<{ value: Meeting }>();
    @Output() onEdit: EventEmitter<{ value: Meeting }> = new EventEmitter<{ value: Meeting }>();
}
