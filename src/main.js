import Alpine from 'alpinejs';

// styles
import './style.scss';

// assets
import imageUrl from '/assets/images/bookspread.png'

const initApp = () => {
    window.Alpine = Alpine;
    Alpine.start();
};

initApp();