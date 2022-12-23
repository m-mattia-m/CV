/**
 * @type json
 */
let tailwindConfig = {
  mMobile: 24
}

/**
 * @type number
 */
let scrollDirectionHeight = 0;

/**
 * @type string
 */
let scrollDirection = "down";

/**
 * @type number
 */
let oldSiteScrollHeight = 0;

/**
 * @type HTMLElement
 */
let currentElement = document.querySelector("section");

/**
 * @type string
 */
let lastSwitch = ""

/**
 * get the coordinates of a html section
 * @param {HTMLElement} element
 * @returns {{left: number, top: number} | null}
 */
export function getSectionCoordinates(element) {
  if (!element) {
    return null;
  }

  const rect = element.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

/**
 * scroll to
 * @param {ScrollToOptions} scrollOptions
 */
export function scrollTo(scrollOptions) {
  window.scrollTo({ ...scrollOptions, behavior: "smooth" });
}




addEventListener("scroll", (event) => {
  setScrollDirection()
  let currentHeight = window.scrollY
  const sections = document.querySelectorAll("section");
  for (let i = 0; i< sections.length; i++){
    if (scrollDirection === "down"){
      console.log("scroll Direction: down")
      console.log("current Height: " + currentHeight)
      console.log("screen height: " + window.innerHeight)
      console.log("section coordinates: " + getSectionCoordinates(sections[i])?.top )
      if ((currentHeight) < getSectionCoordinates(sections[i])?.top + tailwindConfig.mMobile ){
        if (lastSwitch === sections[i].id) {
          return
        }
        lastSwitch = sections[i].id
        scrollTo({left: 0, top: getSectionCoordinates(sections[i])?.top - 1.2 * tailwindConfig.mMobile})
        break
      }
    }
    if (scrollDirection === "up"){
      if ((currentHeight  - window.innerHeight / 1.5) < getSectionCoordinates(sections[i])?.top){
        if (lastSwitch === sections[i].id) {
          return
        }
        lastSwitch = sections[i].id
        scrollTo({left: 0, top: getSectionCoordinates(sections[i])?.top - 1 * tailwindConfig.mMobile})
        break
      }
    }

  }
});

export function setScrollDirection(){
  let currentHeight = window.scrollY;
  if ( oldSiteScrollHeight <= currentHeight) {
    scrollDirection = "down";
    oldSiteScrollHeight = currentHeight;
    return;
  }
  scrollDirection = "up";
  oldSiteScrollHeight = currentHeight;
  return;
}