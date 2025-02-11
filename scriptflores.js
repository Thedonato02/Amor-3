window.addEventListener("load", () => {
    document.body.classList.remove("container");

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Puedo ser o quieres ser mi San Valentín...? ❤️').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 300); // 300ms delay
            }
        }

        appendTitle();
        clearTimeout(c);
    }, 1000);
});

// Código de MailerLite
(function(w, d, e, u, f, l, n) {
    w[f] = w[f] || function() {
        (w[f].q = w[f].q || []).push(arguments);
    }, l = d.createElement(e), l.async = 1, l.src = u,
    n = d.getElementsByTagName(e)[0], n.parentNode.insertBefore(l, n);
})(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');

ml('account', '736768');
