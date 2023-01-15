import { State } from "./State";

export class Country {
    public id: string;
    public name: string;
    public code: string;

    constructor(country?: Country) {

        if (country) {
            this.id = country.id;
            this.name = country.name;
            this.code = country.code;
        } else {
            this.id = "";
            this.name = "";
            this.code = "";
        }

        return this;
    }

}