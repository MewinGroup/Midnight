async function totalclientes(authcode: string | null): Promise<JSON> {
    if (!authcode) {
        return
    }
//endpoint /clientes/total
    try {
        const response = await fetch("http://localhost:8000/clientes/total", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authcode}`,
            },
        });

        if (response.status === 200) {
            return response.json();
        } else {
            return response.json();
        }
    } catch (error) {
        console.error(error);
        return error;   
    }

}

async function clientes(authcode: string | null): Promise<JSON> {
    if (!authcode) {
        return
    }
    try {
        const response = await fetch("http://localhost:8000/clientes/listar", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authcode}`,
            },
        });

        if (response.status === 200) {
            return response.json();
        } else {
            return response.json();
        }
    } catch (error) {
        console.error(error);
        return error;   
    }

}



export { totalclientes, clientes };