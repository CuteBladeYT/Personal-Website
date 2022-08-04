//import * as imageUtil from "./scripts/imageUtil.mjs";
import * as socialBtns from "./scripts/socialButtons.mjs";
import * as anims from "./scripts/animations.mjs";
import * as contextMenuFN from "./scripts/contextMenu.mjs";
import * as headerFN from "./scripts/header.mjs";

document.addEventListener("DOMContentLoaded", () => {
    socialBtns.loadFunctions();
    anims.index_code_name();
    headerFN.load_button_func();
});

document.oncontextmenu = async (e) => await contextMenuFN.contextMenu(e);

document.onclick = (e) => {
    document.querySelector("div#contextmenu").style.display = "none";
}
