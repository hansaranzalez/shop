import { Country } from "./Country";

export class State {
    public id: string;
    public name: string;
    public country: Country;
    public cities: string;

    constructor(state?: State) {

        if (state) {
            this.id = state.id;
            this.name = state.name;
            this.country = new Country(state.country);
            this.cities = state.cities;
        } else {
            this.id = "";
            this.name = "";
            this.country = new Country();
            this.cities = "";
        }

        return this;
    }
}