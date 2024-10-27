async function verify(authcode: string | null): Promise<boolean> {
    if (!authcode) {
        return false;
    }

    try {
        const response = await fetch("http://localhost:8000/auth/verify", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authcode}`,
            },
        });

        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function userinfo(token) {
    try {
      const response = await fetch("http://localhost:8000/usuarios/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
export { verify , userinfo};