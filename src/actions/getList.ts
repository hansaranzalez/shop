

import { ListType } from "../@types";
import Http from "../Http";
import listsStore from "../store/listsStore";

export default async function getList(list: ListType) {
    try {
        const response = await Http.get(`lists/${list}`);
        if (response.status) throw response;
        if(list === 'countries') {
            listsStore.setCountries(response);
        }
        if(list === 'states') {
            listsStore.setStates(response);
        }
        if(list === 'cities') {
            listsStore.setCities(response);
        }
    } catch (error: any) {
        return error;
    }
}