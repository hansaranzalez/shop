import { reactive } from "vue";
import { ICity, ICountry, IState } from "../@types";
import { Country } from "../entities/Country";
import { State } from "../entities/State";
import { City } from "../entities/City";

interface IListsState {
    countries: Country[];
    states: State[];
    cities: City[];
}

const state = reactive<IListsState>({
    countries: [],
    states: [],
    cities: [],
});

const ListsStore = () => ({
    countries: () => state.countries,
    states: () => state.states,
    cities: () => state.cities,
    setCountries: (countries: Country[]) => state.countries = countries.map(country => new Country(country)),
    setStates: (states: State[]) => state.states = states.map(state => new State(state)),
    setCities: (cities: City[]) => state.cities = cities.map(city => new City(city)),
});

export default ListsStore();