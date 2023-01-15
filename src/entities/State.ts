import { Country } from "./Country";

export class State {
    public id: string;
    public name: string;

    constructor(state?: State) {

        if (state) {
            this.id = state.id;
            this.name = state.name;
        } else {
            this.id = "";
            this.name = "";
        }

        return this;
    }
}