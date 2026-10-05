---
title: Kõnede seaded
sidebar_position: 3
description: Keskjaamale pakutavad koodekid, mis juhtub teise kõne saabumisel, automaatne kordusvalimine ja kõnede ajaloo säilitamise aeg.
---

**Seaded → Kõned** sisaldab seadeid, mis kehtivad iga kõne kohta, olenemata sellest, millisel kontol see on.

## Helivormingud {#audio-formats}

<Shot name="07_settings_calls" alt="Seaded → Kõned: helivormingud" />

Koodekite loend, mida telefon teisele otsale pakub. Koodekeid *pakutakse selles järjekorras* ja teine ots valib teie pakutu hulgast: mida kõrgemal koodek on, seda tõenäolisemalt seda kasutatakse.

- **Märkeruut** lülitab koodeki sisse või välja. Väljalülitatud koodekit ei pakuta.
- **▲** ja **▼** liigutavad seda loendis üles või alla.
- Paremal olev *lairiba* tähistab koodekit, mille helivahemik on laiem kui telefoniliinil: hääl on selgem.

| Koodek | Diskreetimissagedus | Vaikimisi sees |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, lairiba | jah |
| **G722** | 16 kHz, lairiba | jah |
| **PCMU** | 8 kHz | jah |
| **PCMA** | 8 kHz | jah |
| **speex** | 16 kHz, lairiba | ei |
| **speex** | 8 kHz | ei |
| **speex** | 32 kHz, lairiba | ei |
| **iLBC** | 8 kHz | ei |
| **GSM** | 8 kHz | ei |
| **L16** | 44 kHz, stereo, lairiba | ei |
| **L16** | 44 kHz, lairiba | ei |

Tabel on selles järjekorras, milles programm tarnitakse.

Koodekites lepitakse kokku kõne alguses, nii et muudatus kehtib alates järgmisest kõnest. Kui kõne kõlab halvasti, jätke sisse ainult need koodekid, mida teie keskjaam kasutab.

## Kõne ootel {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Seaded → Kõned: kõne ootel, automaatne kordusvalimine ja ajalugu" />

*Mis juhtub, kui keegi helistab ajal, mil olete juba kõnes.* Seda valib ripploend; vaikimisi on **Lase teisel kõnel heliseda**. Teie enda keskjaama sisetelefoni väljakutse tuleb alati läbi, olenemata valikust — nii jõuab CTI-paneelilt tehtud kõne selle telefonini.

## Automaatne kordusvalimine {#autodial}

Kui kõne ei lähe läbi, pakub selle kaart valimise jätkamist, kuni see õnnestub. Kaks liugurit määravad, kuidas:

- **Ootamine katsete vahel** — vaikimisi 15 sekundit;
- **Anna alla pärast** — vaikimisi 30 minutit.

## Ajalugu {#history}

Kõnede ajalugu on tõend, nii et sealt ei eemaldata midagi, kui te seda siin ei ütle.

- **Säilitamise aeg** valib, kui kaua [kõnede ajalugu](/interface/contacts-history#history) kõnet hoiab. Vaikimisi on **Alati**.
- **Tühjenda kõnede ajalugu** kustutab kõik kõned korraga, olenemata säilitamise ajast. Seda ei saa tagasi võtta.
