async function getUser(id: number) {
    await sleep(2000);
    console.log('waited 2 seconds');
    if(id === 2) {
        throw Error('User Not Found.');
    } else {
        return {
            name: `user${id}`,
            data: `some data on user${id}`
        };
    }
}

function sleep(duration: number) {
    return new Promise<void>((res) => {
        setTimeout(() => res(), duration)
    });
}


// getUser(1).then((data) => console.log(data)).catch((error) => console.log(error));
getUser(2).then((data) => console.log(data)).catch((error) => console.log(error.message));