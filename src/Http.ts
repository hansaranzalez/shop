


const logout = () => true

function Http() {
    const production = 'http://ec2-18-224-189-140.us-east-2.compute.amazonaws.com';
    const local = 'http://localhost';
    const port = 3000;
    const apiVersion = 'v1';
    const api = `${local}:${port}/${apiVersion}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('cactus-token')}`,
        'Accept': 'application/json',
    }

    async function get(route: string): Promise<any> {
        try {
            const apiPath = `${api}/${route}`;
            const response = await fetch(apiPath, {
                method: 'get',
                headers: new Headers(headers)
            });
            if (response.status !== 200) throw response;
            return await response.json();
        } catch (error: any) {
            if (error.status === 401 || error.status === 403) {
                logout();
                return;
            }
            return await error.json();
        }
    }

    async function post(route: string, body: any): Promise<any> {
        try {
            const apiPath = `${api}/${route}`;
            // stringify body
            body = JSON.stringify(body);
            const response = await fetch(apiPath, {
                method: 'post',
                body,
                headers: new Headers(headers)
            });
            if (response.status !== 201) throw await response;
            return await response.json()
        } catch (error: any) {
            if (error.status === 401 || error.status === 403) {
                logout();
                return;
            }
            return await error.json();
        }
    }

    async function patch(route: string, body: any): Promise<any> {
        try {
            const apiPath = `${api}/${route}`;
            // stringify body
            body = JSON.stringify(body);
            const response = await fetch(apiPath, {
                method: 'put',
                body,
                headers: new Headers(headers)
            });
            if (response.status !== 201) throw await response;
            return await response.json();
        } catch (error: any) {
            if (error.status === 401 || error.status === 403) {
                logout();
                return;
            }
            return await error.json();
        }
    }

    async function del(route: string): Promise<any> {
        try {
            const apiPath = `${api}/${route}`;
            const response = await fetch(apiPath, {
                method: 'delete',
                headers: new Headers(headers)
            });
            if (response.status !== 201) throw await response;
            return await response.json();
        } catch (error: any) {
            if (error.status === 401 || error.status === 403) {
                logout();
                return;
            }
            return await error.json();
        }
    }


    return {
        get,
        post,
        patch,
        del,
    }
}

export default Http();