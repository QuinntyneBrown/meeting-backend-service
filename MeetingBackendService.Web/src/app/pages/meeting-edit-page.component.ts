import { Component, Input, OnInit } from "@angular/core";
import { MeetingActions } from "../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../store";

@Component({
    template: require("./meeting-edit-page.component.html"),
    styles: [require("./meeting-edit-page.component.scss")],
    selector: "meeting-edit-page"
})
export class MeetingEditPageComponent { 
    constructor(private _meetingActions: MeetingActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._meetingActions.getById({ id: this._activatedRoute.snapshot.params["id"] });
    }

    public get entity$() {
        return this._store.meetingById$(this._activatedRoute.snapshot.params["id"]);
    }

    public onSubmit($event: any) {
        this._meetingActions.add({
            id: $event.value.id,
            name: $event.value.name,
            agenda: $event.value.agenda,
            minutes: $event.value.minutes,
            start: $event.value.start,
            end: $event.value.end
        });
        setTimeout(() => { this._router.navigate(["/meetings"]); }, 0);        
    }

    public onCancel() {
        setTimeout(() => { this._router.navigate(["/meetings"]); }, 0);
    }
}
