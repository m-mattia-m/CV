import Alpine from 'alpinejs';
import Plausible from 'plausible-tracker'

// styles
import './style.scss';

export const { trackPageview } = Plausible({
    trackLocalhost: false,
    apiHost: "https://plausible.upcraft.li",
    hashMode: true
})

const initApp = () => {
    window.Alpine = Alpine;
    Alpine.start();
};

initApp();
trackPageview()
