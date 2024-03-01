import home from "./pages/home.js";
import skils from "./pages/skils.js";

const main = document.getElementById('root');

const init = () => {
    const links = document.getElementsByClassName('link');
    const currenthash = window.location.hash;

    const hashes = Array.from(links).map(link => link.href.split('#')[1]);
    const updatedHashes = hashes.map(hash => `#${hash}`);

    console.log(updatedHashes);

    window.addEventListener('hashchange', () => {
        main.innerHTML = '';

        switch (currenthash) {
            case " ":
                main.appendChild(home());
                break;
            case "#habilidades":
                main.appendChild(skils());
                break;
            default:
                main.appendChild(home());
        }
    });
}

window.addEventListener('load', () => {
    main.appendChild(home());
    init();
})

