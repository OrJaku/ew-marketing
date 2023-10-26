import urls from '../utils/apiConfig.json'

const handleUrlAddress = (apiEndpoint) => {
    if (process.env.NODE_ENV === 'development') {
        return urls.telegramApiUrl + apiEndpoint
    } else {
        return '/api' + apiEndpoint
    }
}

export async function sendFormData(apiEndpoint, data = {}, respFunction = null) {
    try {
        const response = await fetch(handleUrlAddress(apiEndpoint), {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: 'follow',
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        if (respFunction !== null) {
            respFunction(false)
        }
        return response.json();
    }
    catch {
        console.error("Server error. No API response or incorrect response.")
    }
}