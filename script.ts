// 1. Feladat - OsszesOszto
function osszesOszto(szam: number): number[] {
    const osztok: number[] = [];
  
    // Az összes osztó keresése
    for (let i = 1; i <= szam; i++) {
      if (szam % i === 0) {
        osztok.push(i);
      }
    }
  
    return osztok;
  }
  
  // 2. Feladat - ParosDarab
  function parosDarab(szamok: number[]): number {
    let parosCount = 0;
  
    // A páros számok számlálása
    for (let szam of szamok) {
      if (szam % 2 === 0) {
        parosCount++;
      }
    }
  
    return parosCount;
  }
  
  // 3. Feladat - FuggvenyhivasPalindrom
  function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    // A szöveg visszaadása a függvényből
    const szoveg = fuggveny();
  
    // A szóközök eltávolítása
    const tisztitottSzoveg = szoveg.replace(/\s+/g, '').toLowerCase();
  
    // A palindrom ellenőrzés: a tisztított szöveg és annak fordított változata összehasonlítása
    const fordítottSzoveg = tisztitottSzoveg.split('').reverse().join('');
    return tisztitottSzoveg === fordítottSzoveg;
  }
  
  // Tesztelés:
  
  // 1. Feladat tesztelése: osszesOszto
  console.log(osszesOszto(12)); // [1, 2, 3, 4, 6, 12]
  
  // 2. Feladat tesztelése: parosDarab
  console.log(parosDarab([1, 2, 3, 4, 5, 6])); // 3
  
  // 3. Feladat tesztelése: fuggvenyhivasPalindrom
  const palindromFuggveny = () => "indul a görög aludni";
  console.log(fuggvenyhivasPalindrom(palindromFuggveny)); // true
  