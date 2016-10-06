import { App } from "../models";

export interface AppState {
    apps: Array<App>;
	currentUser: any;
    isLoggedIn: boolean;
    token: string;
}
