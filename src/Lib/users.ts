function uploadimage(data){

    const key = import.meta.env.APIKEY
    //curl --location --request POST "https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY" --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
        method: 'POST',
        body: data
    });
    return response.json();
}


async function ventastop(token)
{
    
}

export {uploadimage };