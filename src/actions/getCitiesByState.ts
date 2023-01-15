import Http from "../Http";
import listsStore from "../store/listsStore";

export async function getCitiesByState(stateId: string) {
    try {
        const response = await Http.get(`lists/states/${stateId}/cities`);
        if (response.status) throw response;
        listsStore.setCities(response);
    } catch (error: any) {
        return error;
    }
}