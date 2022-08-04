export function loadFunctions() {
    let SOCIALS = document.querySelector("div#content > div#index > div#socials");
    let dc = SOCIALS.querySelector("button#discord");
    let ig = SOCIALS.querySelector("button#instagram");
    let sp = SOCIALS.querySelector("button#spotify");
    let yt = SOCIALS.querySelector("button#youtube");
    let tw = SOCIALS.querySelector("button#twitter");
    let gh = SOCIALS.querySelector("button#github");
    dc.onclick = () => window.open("https://discord.gg/Ac23wWfVhH");
    ig.onclick = () => window.open("https://www.instagram.com/unitedcatdom/");
    sp.onclick = () => window.open("https://open.spotify.com/artist/6XuEvjxGHYo9pqKl2CfwwR?si=8ea9de7b422e4802");
    yt.onclick = () => window.open("https://www.youtube.com/c/CuteBlade");
    tw.onclick = () => window.open("https://twitter.com/blade_cute");
    gh.onclick = () => window.open("https://github.com/CuteBladeYT");
}
