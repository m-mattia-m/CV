import Alpine from 'alpinejs';
import fullpage from 'fullpage.js';

// styles
import './style.scss';

// assets
import imageUrl from '/assets/images/bookspread.png'

const initApp = () => {
    window.Alpine = Alpine;
    Alpine.start();
};

initApp();

require('dotenv').config();
console.log("FULLPAGEJS_TOKEN-2: " + process.env.FULLPAGEJS_TOKEN)

new fullpage('#fullpage', {
    licenseKey: 'FULLPAGEJS_TOKEN',
    autoScrolling:true,
    scrollHorizontally: false
});