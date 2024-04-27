const surah_num = document.getElementById("surah_num");
const load__btn = document.getElementById("load__btn");
const next_num = document.getElementById("next__btn");
let ayat__list = document.getElementById("ayat__list");
const title__eng = document.getElementById("title__eng");
const title__arb = document.getElementById("title__arb");

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
    let response = await fetch(`https://api.alquran.cloud/v1/surah/${number}/en.asad`);
    let data = await response.json();

    title__eng.innerText = data.data.englishName;
    title__arb.innerText = data.data.name;

    showAyat(data.data)
}

function showAyat(data) {
    let ayahs = data.ayahs;

    ayat__list.innerHTML = "";

    for (let i = 0; i < ayahs.length; i++) {
        let ayah = ayahs[i];
        let tag = createLiTag("li", "ayah", ayah.number, ayah.text);
        ayat__list.append(tag);
    }
}

function createLiTag(name, className, number, content) {
    let tag = createTag(name, className);
    tag.innerText = `${number}. ${content}`;
    return tag;
}

function createTag(name, className) {
    let tag = document.createElement(name);
    tag.classList.add(className)
    return tag;
}