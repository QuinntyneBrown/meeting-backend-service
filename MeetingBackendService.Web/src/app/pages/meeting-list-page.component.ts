import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { MeetingActions } from "../actions";
import { AppStore } from "../store";
import { Router } from "@angular/router";   

@Component({
    template: require("./meeting-list-page.component.html"),
    styles: [require("./meeting-list-page.component.scss")],
    selector: "meeting-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetingListPageComponent implements OnInit {
    constructor(private _meetingActions: MeetingActions, private _store: AppStore, private _router:Router) { }

    ngOnInit() {
        this._meetingActions.get(); 
    }
    
}
