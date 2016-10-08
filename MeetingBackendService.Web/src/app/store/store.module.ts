import { NgModule } from '@angular/core';
import * as ngrxStore from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";

import { AppStore } from "./app-store";
import { initialState } from "./initial-state";

import { appsReducer } from "./app.reducer";
import { meetingsReducer } from "./meeting.reducer";

const providers = [
    AppStore
];

@NgModule({
    imports: [
        ngrxStore.StoreModule.provideStore(
            {
                apps: appsReducer,
                meetings: meetingsReducer
            },
            [initialState]
        )],
    providers: providers
})
export class StoreModule { }
