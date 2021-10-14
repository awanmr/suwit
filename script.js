const img = document.querySelector('img');
const pilihan = document.querySelectorAll('a');
const skorKom = document.querySelector('.skor-komputer');
const skorPem = document.querySelector('.skor-pemain');
const skor = document.querySelector('.hasil');
let putar;
let nilaiKom = 0;
let nilaiPem = 0;

function pilihanKomputer() {
    let pilKom = Math.random();
    return (pilKom <= 0.33) ? 'batu' : (pilKom >= 0.66) ? 'gunting' : 'kertas';
}
function aturanPermainan(pilPem, pilKom) {
    return (pilPem == pilKom) ? 'seri' : (pilPem == 'batu' && pilKom == 'gunting') ? 'menang' : (pilPem == 'gunting' && pilKom == 'kertas') ? 'menang' : (pilPem == 'kertas' && pilKom == 'batu') ? 'menang' : 'kalah';
}
function spin() {
    const suwit = ['batu', 'gunting', 'kertas'];
    let i = 0;
    setInterval(() => {
        if (putar) {
            img.src = 'img/' + suwit[i] + '.PNG';
            i++;
            if (i == 3) i = 0;
        }
    }, 100);
}
pilihan.forEach(e => {
    e.addEventListener('click', function () {
        putar = true;
        let pilKom = pilihanKomputer();
        console.log(pilKom);
        let pilPem = this.className;
        let hasil = aturanPermainan(pilPem, pilKom);
        console.log(hasil);
        spin();
        setTimeout(() => {
            putar = false;
            img.src = 'img/' + pilKom + '.PNG';
            skor.innerHTML = hasil.toUpperCase();
            if (hasil == 'menang') {
                skorPem.innerHTML = ++nilaiPem;
            } else if (hasil == 'kalah') {
                skorKom.innerHTML = ++nilaiKom
            }
        }, 1500);
    });
})