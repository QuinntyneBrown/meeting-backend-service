import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppEditFormComponent } from "./app-edit-form.component";
import { AppListComponent } from "./app-list.component";
import { MeetingEditFormComponent } from "./meeting-edit-form.component";
import { MeetingListComponent } from "./meeting-list.component";
import { PageHeaderComponent } from "./page-header.component";
import { SideNavComponent } from "./side-nav.component";

const declarables = [
    AppEditFormComponent,
    AppListComponent,
    MeetingEditFormComponent,
    MeetingListComponent,
    PageHeaderComponent,
    SideNavComponent
];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [declarables],
    declarations: [declarables]
})
export class ComponentsModule { }
