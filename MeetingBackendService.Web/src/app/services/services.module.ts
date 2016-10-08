import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { AppService } from "./app.service";
import { MeetingService } from "./meeting.service";

const providers = [
    AppService,
    MeetingService
];

@NgModule({
    imports: [CommonModule, HttpModule],
	providers: providers
})
export class ServicesModule { }
