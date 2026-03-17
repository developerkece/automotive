document.addEventListener("DOMContentLoaded", () => {

    requestAnimationFrame(() => {
        document.body.classList.add("page-loaded");
    });

    const pageLinks = document.querySelectorAll("a[href$='.html']");

    pageLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.href;

            document.body.classList.remove("page-loaded");
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = target;
            }, 600); 
        });
    });

});
