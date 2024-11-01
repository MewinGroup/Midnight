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
    const [totalResponse, lastMonthResponse] = await Promise.all([
      fetch("http://localhost:8000/clientes/total", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authcode}`,
        },
      }),
      fetch("http://localhost:8000/clientes/lastmonth", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authcode}`,
        },
      }),
    ]);

    if (totalResponse.ok) {
      const totalData = await totalResponse.json();
      valores.total = totalData.total;
    }

    if (lastMonthResponse.ok) {
      const lastMonthData = await lastMonthResponse.json();
      valores.lastmonth = lastMonthData.total;
    }
  } catch (error) {
    console.error(error);
    return;
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


export { totalclientes, clientes };
