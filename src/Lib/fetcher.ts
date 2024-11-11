async function Fetcher(campo: string, contenido: string, token: string) {
    try {
        const response = await fetch(`http://localhost:8000/${campo}/${contenido}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        return {
            status: response.status,
            data
        };
    } catch (error) {
        return {
            status: 500,
            data: null,
            error: 'Connection failed'
        };
    }
}

export { Fetcher };