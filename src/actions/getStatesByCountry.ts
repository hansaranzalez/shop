import Http from "../Http";
import listsStore from "../store/listsStore";

export async function getStatesByCountry(countryId: string) {
    try {
        const response = await Http.get(`lists/countries/${countryId}/states`);
        if (response.status) throw response;
        listsStore.setStates(response);
    } catch (error: any) {
        return error;
    }
}