export async function sendFormData(url, data = {}, respFunction = null) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
    if (respFunction !== null) {
        respFunction(false)
    }
    return response.json();
}