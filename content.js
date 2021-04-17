RE = /\bMatovič/g;

function repl(n) {
    if (n.nodeType == Node.TEXT_NODE) {
        s = n.nodeValue.replaceAll(RE, "Voldemort");
        n.nodeValue = s;
    }
    if (n.childNodes.length > 0) {
        n.childNodes.forEach((v, i, nl) => {
            repl(v);
        }
        );
    }
}
repl(document.getRootNode());
//document.getElementsByTagName("body").appendChild("<H1>Hello</H1>");