import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { MeetingService } from "../services";
import { AppState, AppStore } from "../store";
import { MEETING_ADD_SUCCESS, MEETING_GET_SUCCESS, MEETING_REMOVE_SUCCESS } from "../constants";
import { Meeting } from "../models";
import { Observable } from "rxjs";
import { guid } from "ng2-utilities";

@Injectable()
export class MeetingActions {
    constructor(private _meetingService: MeetingService, private _store: AppStore) { }

    public add(meeting: Meeting) {
        const newGuid = guid();
        this._meetingService.add(meeting)
            .subscribe(meeting => {
                this._store.dispatch({
                    type: MEETING_ADD_SUCCESS,
                    payload: meeting
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._meetingService.get()
            .subscribe(meetings => {
                this._store.dispatch({
                    type: MEETING_GET_SUCCESS,
                    payload: meetings
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._meetingService.remove({ id: options.id })
            .subscribe(meeting => {
                this._store.dispatch({
                    type: MEETING_REMOVE_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._meetingService.getById({ id: options.id })
            .subscribe(meeting => {
                this._store.dispatch({
                    type: MEETING_GET_SUCCESS,
                    payload: [meeting]
                });
                return true;
            });
    }
}
