window.onload = function () {
    fetch('../htmls/cabezera.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
        });

        fetch('../htmls/footer.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('footer').innerHTML = html;
        });
};
