import { NgModule } from '@angular/core';

import { AppActions } from "./app.actions";
import { MeetingActions } from "./meeting.actions";

const providers = [
    AppActions,
    MeetingActions
];

@NgModule({
	providers: providers
})
export class ActionsModule { }
