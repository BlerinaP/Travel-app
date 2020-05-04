
import { mainFunction } from "./js/requests";
//Event Listener to show resulsts

import './styles/main.scss'
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.continue').addEventListener('click', mainFunction);
});
export {
    mainFunction
}