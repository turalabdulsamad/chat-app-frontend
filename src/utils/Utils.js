const getUser = async (data) => {
    try {
        const response = await fetch(`http://localhost:3001/users/${data.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const responseData = await response.json();

        if (!responseData) {
            try {
                const response = await fetch('http://localhost:3001/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const responseData = await response.json();
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log(responseData)
        }
    } catch (error) {
        console.error(error);
    }
}

const getMessages = async (username) => {
    try {
        const response = await fetch(`http://localhost:3001/messages/${username.username}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const responseData = await response.json();
        return responseData
    }
    catch (error) {
        console.error(error)
    }
}

const getDirectMessages = async (from, to) => {
    try {
        const response = await fetch(`http://localhost:3001/messages`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "from": from,
                    "to": to,
                }),
            });

        const responseData = await response.json();

        return responseData
    }
    catch (error) {
        console.error(error);
    }
}


const sendMessage = async (me, to, message) => {
    try {
        const response = await fetch(`http://localhost:3001/send-message`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "me": me,
                    "to": to,
                    "message": message
                }),
            });

        const responseData = await response.json();

        return responseData
    }
    catch (error) {
        console.error(error);
    }
}

export { getUser, getMessages, getDirectMessages, sendMessage };