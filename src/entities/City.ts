import { State } from "./State";

export class City {
    public id: string;
    public name: string;

    constructor(city?: City) {

        if (city) {
            this.id = city.id;
            this.name = city.name;
        } else {
            this.id = "";
            this.name = "";
        }

        return this;
    }
}