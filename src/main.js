import Alpine from 'alpinejs';

// styles
import './style.scss';

// assets
import bookspread from '/assets/images/bookspread.png';
import crm from '/assets/images/crm.png';
import moebilo from '/assets/images/moebilo.png';

export { bookspread, crm, moebilo };

const initApp = () => {
    window.Alpine = Alpine;
    Alpine.start();
};

initApp();