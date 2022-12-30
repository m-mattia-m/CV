import { getSectionCordinates, scrollTo } from "../helpers/scroll";
import { setGerman, setEnglish } from "../helpers/language.js";

window.homeComponent = () => {
    /**
     * @type string
     */
    let chosenWebTheme = "";
    /**
     * @type string
     */
    let chosenLanguage = "en";
    /**
     * returnLanguage
     * @return string
     */
    function returnLanguage(jsonPath){
        console.log("lang: " + chosenLanguage)
        if (chosenLanguage == "en") {
            return setEnglish(jsonPath);
        }
        if (chosenLanguage == "de") {
            return setGerman(jsonPath);
        }
        return "";
    };
    /**
     * toggleWebTheme
     * @return null
     */
    function toggleWebTheme(){
        if (localStorage.theme === 'dark'){
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light';
            chosenWebTheme = 'light';
            console.log("light")
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark';
            chosenWebTheme = 'dark';
            console.log("dark")
        }
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.theme = 'dark';
        chosenWebTheme = 'dark';
        document.documentElement.classList.add('dark');
    } else {
        localStorage.theme = 'light';
        chosenWebTheme = 'light';
        document.documentElement.classList.remove('dark');
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        localStorage.theme = event.matches ? "dark" : "light";
        console.log("system theme has changed")
        toggleWebTheme();
    });

    return {
        /**
         * @type string
         */
        chosenTheme: chosenWebTheme,
        language: {
            /**
             * @type string
             */
            chosenLanguage: "en",
            /**
             * @type string
             */
            sectionOne: returnLanguage("title-section-1"),
            /**
             * @type string
             */
            sectionTwo: returnLanguage("title-section-2"),
            /**
             * @type string
             */
            sectionThree: returnLanguage("title-section-3"),
            /**
             * @type string
             */
            sectionFour: returnLanguage("title-section-4"),
            /**
             * @type string
             */
            sectionFive: returnLanguage("title-section-5"),
            /**
             * @type string
             */
            sectionSix: returnLanguage("title-section-6"),
            /**
             * @type string
             */
            textSectionOne: returnLanguage("text-section-1"),
            /**
             * @type string
             */
            textSectionTwo: returnLanguage("text-section-2"),
            /**
             * @type string
             */
            textSectionThree: returnLanguage("text-section-3"),
            /**
             * @type string
             */
            textSectionFour: returnLanguage("text-section-4"),
            /**
             * @type string
             */
            textSectionFive: returnLanguage("text-section-5"),
        },
        /**
         * @type number
         */
        currentYear: new Date().getFullYear(),
        /**
         * setText
         * */
        setText(){
            this.language.sectionOne = returnLanguage("title-section-1");
            this.language.sectionTwo = returnLanguage("title-section-2");
            this.language.sectionThree = returnLanguage("title-section-3");
            this.language.sectionFour = returnLanguage("title-section-4");
            this.language.sectionFive = returnLanguage("title-section-5");
            this.language.sectionSix = returnLanguage("title-section-6");
            this.language.textSectionOne = returnLanguage("text-section-1"),
            this.language.textSectionTwo = returnLanguage("text-section-2"),
            this.language.textSectionThree = returnLanguage("text-section-3"),
            this.language.textSectionFour = returnLanguage("text-section-4"),
            this.language.textSectionFive = returnLanguage("text-section-5")
        },
        /**
         * toggleLang
         * @param {MouseEvent} $event
         */
        toggleLang($event){
            if (chosenLanguage == "de"){
                chosenLanguage = "en";
                this.language.chosenLanguage = "en";
            } else if (chosenLanguage == "en"){
                chosenLanguage = "de";
                this.language.chosenLanguage = "de";
            }
            this.setText();
        },
        /**
         * toggleTheme
         * @param {MouseEvent} $event
         * */
        toggleTheme($event) {
            console.log("theme clicked")
            toggleWebTheme();
            this.chosenTheme = chosenWebTheme;
        },
    };
};