const surah_num = document.getElementById("surah_num");
const load__btn = document.getElementById("load__btn");
const next_num = document.getElementById("next__btn");
let ayat__list = document.getElementById("ayat__list");
const title__eng = document.getElementById("title__eng");
const title__arb = document.getElementById("title__arb");
const language = document.getElementById("language");

let surahNumber = surah_num.value;

load__btn.onclick = async (e) => {
    let number = surah_num.value;
    if (number === "" || number < 0 || number > 114) {
        alert("Invalid Surah Number!")
        return
    }

    await loadAndShow(number);
}

window.onload = async () => {
    await loadAndShow(surahNumber);
}

next_num.onclick = async () => {

    surahNumber = surah_num.value;

    if (surahNumber == 114) {
        surahNumber = 0;
    }
    surah_num.value = ++surahNumber;
    await loadAndShow(surahNumber);
}

async function loadAndShow(number) {

    let lang = language.value;
    let data;

    if (lang === "eng") {
        let engResponse = await fetch(`https://api.alquran.cloud/v1/surah/${number}/en.asad`);
        data = await engResponse.json();
    } else {
        let engResponse = await fetch(`https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`);
        data = await engResponse.json();
    }

    title__eng.innerText = data.data.englishName;
    title__arb.innerText = data.data.name;

    showAyat(data.data, lang);
}

function showAyat(data, lang) {
    let ayahs = data.ayahs;

    ayat__list.innerHTML = "";

    for (let i = 0; i < ayahs.length; i++) {
        let ayah = ayahs[i];
        let tag = createLiTag("li", "ayah", ayah.text, ayah.number);

        if (lang === "arb") {
            let audioTag = createTag("audio", "");
            audioTag.controls = true;
            audioTag.classList.add("audio");

            let sourceTag = createTag("source", "");
            sourceTag.src = ayah.audio;
            sourceTag.type = "audio/mp3";

            audioTag.append(sourceTag);
            tag.append(audioTag);
        }

        ayat__list.append(tag);
    }
}

function createLiTag(name, className, content, number) {
    let liTag = createTag(name, className);
    liTag.innerText = `${number}. ${content}`;
    return liTag;
}

function createTag(name, className) {
    let tag = document.createElement(name);

    if (className.length !== 0) {
        tag.classList.add(className)
    }
    return tag;
}