export function index_code_name() {
    setInterval(() => {
        let block = document.querySelector("div#content > div#index > span#username > span");
        if (block.style.opacity == "0") block.style.opacity = "1";
        else block.style.opacity = "0";
    }, 600);
}