import { State } from "./State";

export class City {
    public id: string;
    public name: string;
    public state: State;

    constructor(city?: City) {

        if (city) {
            this.id = city.id;
            this.name = city.name;
            this.state = new State(city.state);
        } else {
            this.id = "";
            this.name = "";
            this.state = new State();
        }

        return this;
    }
}