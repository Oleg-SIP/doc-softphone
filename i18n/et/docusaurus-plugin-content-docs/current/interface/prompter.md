---
title: Etteütleja aken
sidebar_position: 3
description: "Otse töötava etteütleja aken: kõne sõnad nende ütlemise ajal ja soovitused, mida edasi öelda, akna nupud ja veerud, proov salvestusega ning mis see maksab."
---

**Etteütleja** kuulab vestlust selle toimumise ajal. Omaette aknas kirjutab ta üles, mida kumbki pool ütleb, kohe kui seda öeldakse, ja — kui valitud abiline küsib mudelilt — soovituse, mida edasi öelda. Seda tasub hoida avatuna müügikõne, tööintervjuu või raske vestluse ajal, ja teise abilisega näitab sama aken teise poole jooksvat tõlget või lihtsalt subtiitreid.

<Shot name="46_prompter_running" alt="Etteütleja proovib müügikõnet: vasakul transkriptsioon, paremal soovitused, uusim suurelt nende kohal korratud" />

Pildil kuulab abiline **Vastuväited kõnes** müügikõnet. Vasak veerg on see, mida öeldi, iga rida oma aja ja poolega; parem on see, mida mudel kliendi igale vastusele soovitas; uusim soovitus on suures kirjas korratud mõlema kohal.

**Etteütleja** ilmub telefoni allosas olevasse loendisse **Ajalugu** ja **Seaded** vahele niipea, kui kolm asja on paigas: etteütleja on lubatud, on olemas tuvastaja, kes oskab vestluse ajal kuulata, ja — midagi soovitavate abiliste jaoks — keelemudel. Kõik see seatakse jaotises [Seaded → Etteütleja](/ai-processing/prompter), kus on ka kirja suurus ja abilised ise.

## Aken {#the-window}
<Shot name="44_prompter_window" alt="Etteütleja aken, kus on valitud abiline Vastuväited kõnes, enne käivitamist" />

Ülal on rippmenüü **Abiline** ja sellest paremal nupud:

| Nupp | Mida see teeb |
| --- | --- |
| **Käivita** / **Peata** (kolmnurk / ruut) | *Alusta selle kõne kuulamist* — või lõpeta: *Öeldu jääb ekraanile*. Enne kõnele vastamist vajutatud käivitus ootab seda ja nupp tühistab selle siis. |
| **Soovitus** (sädemed) | *Lõpeta vastus siin ja soovita, mida öelda*, ootamata pausi. Abilisel, kes mudelilt ei küsi, on nupp **Lõpeta vastus**: see ainult sulgeb vastuse, et järgmine algaks puhtalt. See on hall, kuni etteütleja ei tööta. |
| **Tühjenda** (prügikast) | Unustab pärast küsimist selle, mis ekraanil on. *Mõlemad veerud kaovad ja koos nendega vestlus, millest järgmine soovitus oleks üles ehitatud.* Peatamine ja uuesti käivitamine ei tühjenda midagi: peatatud ja uuesti käivitatud vestlus on enamasti sama vestlus. |
| **Ekspordi…** (diskett) | Kirjutab mõlemad veerud koos aegadega faili: tekstina (`.txt`) või tabelina (`.csv`), nimega, mille failile annate. |
| **Proov…** (raamatukogu) | [Proovib abilist salvestusel](#rehearsing-on-a-recording) kõne asemel. |

Rippmenüü näitab [abilisi](/ai-processing/prompter#assistants) jaotises **Seaded → Etteütleja** seatud järjekorras. Seda ei saa etteütleja töötamise ajal muuta, kuid see jääb nähtavale, nii et näete, milline abiline tööd teeb. Kuulamise ajal on kõne kaardil kirjas **Kuulame**.

Nuppude all on riba uusima reaga ja selle all kaks veergu:

- **Transkriptsioon** — iga rida oma aja ja poolega;
- **Soovitused** — iga soovitus selle vastuse ajaga, millele see vastab. Abilisel, kes mudelilt ei küsi, seda veergu ei ole ja transkriptsioon võtab kogu laiuse.

Kitsas aknas on kaks veergu teineteise all. Veerg järgib saabuvat teksti, kuni kerite selles tagasi, ja järgib uuesti, kui naasete lõppu. Vajutage mis tahes reale, et hoida seda ribal; vajutage uusimale või riba nööpnõelale, et taas järgida. Parem hiireklahv kopeerib rea, soovituse, kogu transkriptsiooni või kõik soovitused. Lohistage riba all olevat eraldajat, et seda kõrgemaks teha; kirja suurused seatakse jaotises [Seaded → Etteütleja](/ai-processing/prompter#settings--prompter).

## Proov salvestusega {#rehearsing-on-a-recording}
Abilist saab proovida ilma, et keegi telefonis oleks. **Proov…** loetleb [raamatukogu](/interface/recordings) vestlused, uusimad eespool, ning **Fail selles arvutis…** `.mp3`- või `.wav`-faili jaoks.

<Shot name="45_prompter_rehearse" alt="Proov…: raamatukogu vestlused ja fail selles arvutis" />

Valitud salvestus ilmub nuppude alla mängijasse: esitus ja paus, mõlemad kanalid lainekujuna, millele saab klõpsata, ning aeg. Vajutage **Käivita**: salvestus mängitakse etteütlejasse sama teed kui kõne, omas tempos — kiiremat esitust meelega ei pakuta, sest poolteist korda kiiremini toidetud etteütleja peaks pause, vastaks ja arveldaks vestluse eest, mida keegi ei pidanud. Rist paremal on **Lõpeta proov**, tagasi kõnede kuulamise juurde.

Ühe kanaliga salvestust, näiteks imporditud faili, kuuldakse ühe ruumina: *etteütleja kuuleb kõike vestluskaaslasena*.

## Mis see maksab ja kuhu sõnad lähevad {#what-it-costs-and-where-the-words-go}
- Tuvastaja eest arveldatakse otseheli minutite kaupa ja **Tuvasta ka minu pool** kahekordistab seda. Mudeli eest arveldatakse iga soovituse eest. Mõlemad arvestatakse etteütleja [kuulimiitide](/ai-processing/prompter#spending) hulka, mitte Töötlemise piirangute hulka.
- Teise poole hääl lahkub arvutist rääkimise ajal, teie valitud tuvastaja juurde. Teie enda masinas töötav tuvastaja — **Vosk**, **WhisperLive** või **NVIDIA Riva** — hoiab selle maja sees.
- See, mida etteütleja näitab, ei ole salvestus. Selle hoidmiseks vajutage **Ekspordi…**; vestluse enda saamiseks [salvestage kõne](/recordings) lisaks.

## Kui see ei käivitu {#when-it-does-not-start}
Aken ütleb nuppude all oleval real, mis puudu on.

| Aken ütleb | Mida teha |
| --- | --- |
| *Etteütlemine on välja lülitatud. Seaded → Etteütleja.* | Märkige **Luba etteütleja kasutamine**. |
| *Ükski tuvastaja siin ei oska kuulata, kui keegi räägib. Seaded → Ülestähendus.* | Lisage tuvastaja, millel on **Aadress etteütleja jaoks**, ja vajutage **Kontrolli**. |
| *Käivitada pole midagi. Seaded → Etteütleja, ja lisage abiline.* | Kõik abilised on kustutatud või välja lülitatud: lisage üks või vajutage **Taasta vaikeväärtused**. |
| *Teisele poolele tuleb esmalt öelda. Alustage selle vestluse salvestamist või muutke seda, mida Seaded → Salvestamine nõusoleku kohta ütleb.* | Alustage salvestamist, mis esitab teate, või muutke nõusoleku seadet. |
| *Tuvastaja ei hakanud kuulama. Kontrollige selle otseaadressi ja mudelit Seaded → Ülestähendus all.* | Aadress etteütleja jaoks, mudel või võti on vale. **Kontrolli** tuvastaja kaardil ütleb, milline. |
| *Selle kuu summa tuvastajate jaoks on otsas.* | Tõstke **Tuvastajad, kuus** või oodake kuu vahetumist. |
| *Selle kuu summa mudelite jaoks on otsas. Sõnad jätkuvad; etteütlemine on peatunud.* | Tõstke **Mudelid, kuus**. |
