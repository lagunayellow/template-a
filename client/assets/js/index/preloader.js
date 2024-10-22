'use strict'
const preloader = (function(elem) {
    
    class Loader {
        constructor(elem, options) {
            this.elem = document.getElementById(elem);
            this.delay(this.fadeOut);
        }
        complete(e) {
            this.elem.style.opacity = 0;
        }
        fadeOut() {
            console.log("hello");
            
            // this.elem.style.opacity = 0;
            window.onload = () => {
                
            }
        }
        delay(callback) {
            let bind = callback.bind(this)
            setTimeout(bind, 4000);
        }
    }
    return {
        init: ((elem) => {
            let loader = new Loader(elem);
        })(elem)
    }
}("preloader"));