console.log("module js");

async function start() {
    return await Promise.resolve('working - async')
}

start().then(console.log)