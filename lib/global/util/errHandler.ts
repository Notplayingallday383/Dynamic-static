export default function basicErr(type: any, state: number) {
    if (type === 'url') {
        const body = `
        <!DOCTYPE html>
        <head>
            <title>Error</title>
        </head>
        <body>
            <h1>Error</h1>
            <p>It appears dynamic failed to connect or load your url.</p>
            <p>If the url you inputted was correct, try the troubleshooting steps below.</p>
            <li>
                <ul>Reregistering your service workers</ul>
                <ul>Refreshing the page</ul>
                <ul>Reviewing the console output</ul>
                <ul>Hard Reloading your Page (Ctrl + Shift + R)</ul>
            </li>
            <button onclick="window.location.reload()">Reload</button>
            <button target="_blank" onclick="https://github.com/nebulaservices/dynamic">Report issue</button>
        </body>
        `
        return new Response (body, {status: state})
    } else if (type === 'method') {
        const body = `
        <!DOCTYPE html>
        <head>
            <title>Error</title>
        </head>
        <body>
            <h1>Error</h1>
            <p>Dynamic failed to load due to a issue with the method your using.</p>
            <button onclick="window.location.reload()">Reload</button>
        </body>
        `
        return new Response (body, {status: state})
    } else {
        const body = `
        <!DOCTYPE html>
        <head>
            <title>Error</title>
        </head>
        <body>
            <h1>Error</h1>
            <p>It appears dynamic has encountered an error.</p>
            <p>If your unaware what has caused this error, Follow the troubleshooting steps below.</p>
            <li>
                <ul>Reregistering your service workers</ul>
                <ul>Refreshing the page</ul>
                <ul>Reviewing the console output</ul>
                <ul>Hard Reloading your Page (Ctrl + Shift + R)</ul>
            </li>
        </body>
        `
        return new Response (body, {status: 400})
    }
}