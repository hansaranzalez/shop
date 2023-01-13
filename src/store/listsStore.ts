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
    setCountries: (countries: Country[]) => state.countries = countries,
    setStates: (states: State[]) => state.states = states,
    setCities: (cities: City[]) => state.cities = cities,
});

export default ListsStore();