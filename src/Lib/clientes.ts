async function totalclientes(
  authcode: string | null
): Promise<{ total: number; lastmonth: number } | undefined> {
  if (!authcode) {
    return;
  }

  let valores = {
    total: 0,
    lastmonth: 0,
  };

  try {
//fech /clientes/estadisticas{total, lastmonth}
    const response = await fetch("http://localhost:8000/clientes/estadisticas", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authcode}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      valores.total = data.total;
      valores.lastmonth = data.lastmonth;
    } else {
      console.error(response);
    }
  } catch (error) {
    console.error(error);
  }

  return valores;
}

async function clientes(authcode: string | null): Promise<JSON> {
  if (!authcode) {
    return;
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

//getClientData(idusuario)

async function getClientData( id: number,authcode:string): Promise<JSON> {
  if (!authcode) {
    return;
  }
  try {
    const response = await fetch(`http://localhost:8000/clientes/byuser/${id}`, {
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


export { totalclientes, clientes, getClientData };
