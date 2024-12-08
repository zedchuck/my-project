const navEl = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 50) {
        navEl.classList.add('navbar-scrolled');
    }

    else{
        navEl.classList.remove('navbar-scrolled');
    }
});


let counts = setInterval(updated);
        let upto = 0;
        function updated() {
            let count = document.getElementById("counter");
            count.innerHTML = ++upto;
            if (upto === 42) {
                clearInterval(counts);
            }
        }