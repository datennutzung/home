document.addEventListener("DOMContentLoaded", async () => {
    /* Toggle log off
    const c_like = document.querySelector(".console-like");

    function log(message) {
        let elem = document.createElement("pre");
        elem.textContent = message;
        c_like.appendChild(elem);
    }

    console.log = log;

    //*/

    const form = document.forms[0];

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const query = form.query.value;
        form.query.value = "";
        if (query == "") {
            return;
        }
        const searchEngine = form.searchEngine.value;
        const searchString = searchEngine + encodeURIComponent(query);
        console.log(searchString);
        window.open(searchString, "_blank").focus();
    })

    // date and time
    const clock = document.querySelector(".clock");
    const date = document.querySelector(".date");

    function timeSetter() {
        const now = new Date(Date.now())
        const options = { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
        clock.innerText = now.toLocaleTimeString("en-UK", options)
    }
    timeSetter()
    setInterval(timeSetter, 500)


    function dateSetter() {
        const now = new Date(Date.now())
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        date.innerText = now.toLocaleDateString("en-UK", options)
    }
    dateSetter()
    setInterval(dateSetter, 3600_000)

    form.query.focus()
});