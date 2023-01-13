import { State } from "./State";

export class Country {
    public id: string;
    public name: string;
    public code: string;
    public states: State[];

    constructor(country?: Country) {

        if (country) {
            this.id = country.id;
            this.name = country.name;
            this.code = country.code;
            this.states = country.states.map((state: State) => new State(state));
        } else {
            this.id = "";
            this.name = "";
            this.code = "";
            this.states = [];
        }

        return this;
    }

}