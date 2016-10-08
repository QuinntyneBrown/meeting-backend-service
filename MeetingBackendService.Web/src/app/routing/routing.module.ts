import { Routes, RouterModule } from '@angular/router';

import {
    AppEditPageComponent,
    AppListPageComponent,
    MeetingEditPageComponent,
    MeetingListPageComponent,
	HomePageComponent
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        component: AppListPageComponent
    },
    {
        path: 'app',
        component: AppEditPageComponent
    },
    {
        path: 'app/:id',
        component: AppEditPageComponent
    },
    {
        path: 'apps',
        component: AppListPageComponent
    },
    {
        path: 'app/:appId/meeting',
        component: MeetingEditPageComponent
    },
    {
        path: 'app/:appId/meetings',
        component: MeetingListPageComponent
    },
    {
        path: 'app/:appId/meeting/:meetingId',
        component: MeetingEditPageComponent
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    HomePageComponent,
    AppListPageComponent,
    AppEditPageComponent,
    MeetingEditPageComponent,
    MeetingListPageComponent
];

