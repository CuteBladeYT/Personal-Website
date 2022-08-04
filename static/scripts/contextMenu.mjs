export function contextMenu(e) {
    let ctxMenu = document.querySelector("div#contextmenu");
    ctxMenu.style = `top: ${e.pageY + 1}px; left: ${e.pageX + 1}px; display: unset;`;
    let ctxTargetNode = e.target;
    let ctxTargetNodeParent = e.target.parentElement;
    switch (ctxTargetNode.nodeName) {
        case "IMG":
            if (ctxTargetNode.parentElement.nodeName == "BUTTON") {
                ctxMenu_createButtons(ctxTargetNodeParent.nodeName, ctxTargetNode);
            } else ctxMenu_createButtons(ctxTargetNode.nodeName, ctxTargetNode);
            break;
        case "BUTTON":
            ctxMenu_createButtons(ctxTargetNode.nodeName, ctxTargetNode);
            break;
        default:
            ctx_createNullButton();
    };
}

function ctxMenu_createButtons(BTN_TYPE = String, CTXTN) {
    let buttons = [];
    switch (BTN_TYPE) {
        case "IMG":
            let openBtn = document.createElement("button");
            openBtn.textContent = "Open in new tab";
            openBtn.onclick = async () => {
                let f = await fetch(CTXTN.src);
                let b = await f.blob();
                let e = window.URL.createObjectURL(b);
                window.open(e);
            };
            buttons.push(openBtn);

            let copyBtn = document.createElement("button");
            copyBtn.textContent = "Copy image";
            copyBtn.onclick = async () => {
                let src = CTXTN.src;
                await imageUtil.copyImage(src);
            };
            buttons.push(copyBtn);

            if (!CTXTN.classList.toString().match("no_download")) {
                let downloadBtn = document.createElement("button");
                downloadBtn.textContent = "Download image";
                downloadBtn.onclick = async () => {
                    let src = CTXTN.src;
                    imageUtil.downloadImage(src, "UnitedCatdom.png");
                };
                buttons.push(downloadBtn);
            };
            ctxMenu_addButtons(buttons);
            break;
        case "BUTTON":
            let clickBtn = document.createElement("button");
            clickBtn.textContent = "Click"
            clickBtn.onclick = () => CTXTN.click();
            buttons.push(clickBtn);
            break;
    };
    if (buttons.length > 0) ctxMenu_addButtons(buttons);
    else ctx_createNullButton();
}

function ctx_createNullButton() {
    let infoBtn = document.createElement("button");
    infoBtn.textContent = "No actions here!";
    ctxMenu_addButtons([infoBtn]);
}

export function ctxMenu_addButtons(buttons = []) {
    let ctxMenu = document.querySelector("div#contextmenu");
    while (ctxMenu.childElementCount > 0) {
        let chd = ctxMenu.children[0];
        if (chd) chd.remove();
        else break;
    };
    while (buttons.length > 0) {
        let btn = buttons[0];
        if (btn) {
            ctxMenu.appendChild(btn);
            buttons.shift();
        } else break;
    };
}