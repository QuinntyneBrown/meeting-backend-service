import { Action } from "@ngrx/store";
import { MEETING_ADD_SUCCESS, MEETING_GET_SUCCESS, MEETING_REMOVE_SUCCESS } from "../constants";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { Meeting } from "../models";
import { addOrUpdate, pluckOut } from "../utilities";

export const meetingsReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case MEETING_ADD_SUCCESS:
            var entities: Array<Meeting> = state.meetings;
            var entity: Meeting = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { meetings: entities });

        case MEETING_GET_SUCCESS:
            var entities: Array<Meeting> = state.meetings;
            var newOrExistingMeetings: Array<Meeting> = action.payload;
            for (let i = 0; i < newOrExistingMeetings.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingMeetings[i] });
            }                                    
            return Object.assign({}, state, { meetings: entities });

        case MEETING_REMOVE_SUCCESS:
            var entities: Array<Meeting> = state.meetings;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { meetings: entities });

        default:
            return state;
    }
}

