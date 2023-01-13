import { City } from "./City";
import { Country } from "./Country";
import { State } from "./State";

export class Address {
    public id: string;
    public name: string;
    public address: string;
    public country: Country;
    public state: State;
    public city: City;
    public postal_code: number;
    public for_shipping: boolean;

    constructor(address?: Address) {

        if (address) {
            this.id = address.id;
            this.name = address.name;
            this.address = address.address;
            this.country = new Country(address.country);
            this.state = new State(address.state);
            this.city = new City(address.city);
            this.postal_code = address.postal_code;
            this.for_shipping = address.for_shipping;
        } else {
            this.id = "";
            this.name = "";
            this.address = "";
            this.country = new Country();
            this.state = new State();
            this.city = new City();
            this.postal_code = 0;
            this.for_shipping = false;
        }

        return this;
    }

    getAddressPayload() {
        return {
            name: this.name,
            address: this.address,
            country: this.country,
            state: this.state,
            city: this.city,
            postal_code: this.postal_code,
            for_shipping: this.for_shipping
        }
    }
}