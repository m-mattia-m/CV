import { getSectionCordinates, scrollTo } from "../helpers/scroll";
import { setGerman, setEnglish } from "../helpers/language.js";

window.homeComponent = () => {

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

    return {
        language: {
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
        },

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

            console.log("set-text: " + this.language.sectionTwo);
        },
        /**
         * toggleLang
         * @param {MouseEvent} $event
         */
        toggleLang($event){
            console.log("old lang: " + chosenLanguage);
            if (chosenLanguage == "de"){
                chosenLanguage = "en";
            } else if (chosenLanguage == "en"){
                chosenLanguage = "de";
            }
            console.log("new lang: " + chosenLanguage);
            console.log(returnLanguage("title-section-1"));
            this.setText();
        },


    };
};