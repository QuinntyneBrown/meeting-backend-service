import { App, Meeting } from "../models";

export interface AppState {
    apps: Array<App>;
    meetings: Array<Meeting>;
	currentUser: any;
    isLoggedIn: boolean;
    token: string;
}
