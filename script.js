// 1. Feladat - OsszesOszto
function osszesOszto(szam) {
    var osztok = [];
    // Az összes osztó keresése
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
// 2. Feladat - ParosDarab
function parosDarab(szamok) {
    var parosCount = 0;
    // A páros számok számlálása
    for (var _i = 0, szamok_1 = szamok; _i < szamok_1.length; _i++) {
        var szam = szamok_1[_i];
        if (szam % 2 === 0) {
            parosCount++;
        }
    }
    return parosCount;
}
// 3. Feladat - FuggvenyhivasPalindrom
function fuggvenyhivasPalindrom(fuggveny) {
    // A szöveg visszaadása a függvényből
    var szoveg = fuggveny();
    // A szóközök eltávolítása
    var tisztitottSzoveg = szoveg.replace(/\s+/g, '').toLowerCase();
    // A palindrom ellenőrzés: a tisztított szöveg és annak fordított változata összehasonlítása
    var fordítottSzoveg = tisztitottSzoveg.split('').reverse().join('');
    return tisztitottSzoveg === fordítottSzoveg;
}
// Tesztelés:
// 1. Feladat tesztelése: osszesOszto
console.log(osszesOszto(12)); // [1, 2, 3, 4, 6, 12]
// 2. Feladat tesztelése: parosDarab
console.log(parosDarab([1, 2, 3, 4, 5, 6])); // 3
// 3. Feladat tesztelése: fuggvenyhivasPalindrom
var palindromFuggveny = function () { return "indul a görög aludni"; };
console.log(fuggvenyhivasPalindrom(palindromFuggveny)); // true
