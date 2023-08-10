function generateScript (url, data, div, async) {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = url;
    script.async = async;
    script.innerHTML = JSON.stringify(data);

    div.appendChild(script);
}

export { generateScript }