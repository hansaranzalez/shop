import { reactive } from "vue";
import { ICity, ICountry, IState } from "../@types";

interface IListsState {
    countries: ICountry[];
    states: IState[];
    cities: ICity[];
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
    setCountries: (countries: ICountry[]) => state.countries = countries,
    setStates: (states: IState[]) => state.states = states,
    setCities: (cities: ICity[]) => state.cities = cities,
});

export default ListsStore();