---
title: Personal Prompt Studio
sidebar_position: 3
description: Uputstva koja obrađuju vaše razgovore, pravila koja ih pokreću i kako da ih prilagodite sebi.
---

**Personal Prompt Studio** je deo AI Softphonea koji obrađuje vaše razgovore na vaš način. Obradu rade uputstva: program dolazi sa jedanaest, spremnih za korišćenje čim su povezani prepis i jezički model, a vi možete da ih menjate običnim jezikom, udvostručite i dodate sopstvena. Navedena su pod **Uputstva** u [Podešavanja → Obrada](processing.md#prompts).

Vaš LLM, vaš ključ, vaša kontrola: povežite model koji vam je draži sa sopstvenim ključem, preko podržane usluge ili kompatibilnog API-ja — ili model postavljen unutar vaše organizacije. Kada i [prepisivanje](transcription.md#your-own-models) radi na sopstvenom hardveru, i zvuk i prepisi ostaju u vašem okruženju.

<Shot name="12b_settings_processing_prompts" alt="Spisak uputstava u Podešavanja → Obrada" />

## Uputstva koja dolaze sa programom {#the-prompts-that-come-with-the-program}

Druga kolona je ono što spisak prikazuje ispod naziva uputstva: šta piše i u kom obliku.

| Uputstvo | Oblik | Šta piše |
| --- | --- | --- |
| **Sažetak** | Proza | Glavne tačke, odluke i sledeće korake u jednom kratkom pasusu. |
| **Sažetak u jednom redu** | Proza | Kratak naslov po kom ćete razgovor prepoznati na spisku. |
| **Zadaci** | Stavke | Ko je pristao da uradi šta i kada, sa rečima koje je izgovorio. |
| **Teme** | Stavke | Teme koje su obrađene, u nekoliko reči. |
| **Imena i brojevi** | JSON | Ljudi, firme, datumi, iznosi i reference. |
| **Kategorija** | Oznake | Svrstava razgovor u jednu od vaših [kategorija](dictionaries.md). |
| **Oznake** | Oznake | Stavlja na njega vaše [oznake](dictionaries.md) kako bi kasnije mogao da se pronađe. |
| **Upozorenja** | Znaci | Problemi, sa dokazom i vremenom u razgovoru. |
| **Pitanje o ovom pozivu** | Odgovor | Odgovara na pitanje koje postavite o jednom razgovoru, na osnovu njegovog prepisa. |
| **Kvalitet prodaje** | Merila | Pregleda razgovor prema prodajnim merilima koja možete da uređujete. |
| **Kvalitet podrške** | Merila | Ocenjuje koliko je dobro problem shvaćen i rešen. |

Oblici su stalni oblici odgovora, i upravo to programu omogućava da ga sačuva i kasnije u njemu pretražuje: **Oznake** su kodovi sa jednog od vaših spiskova, **Znaci** su kodovi sa ozbiljnošću, **Merila** su ocena sa razlogom i ocenom za svako merilo, **Odgovor** je odgovor sa rečima na koje se oslanja. Uputstva koja modelu govore oblik čuvaju se u [Rečnicima](dictionaries.md#answer-shapes-and-language).

Pozivi upućeni u AI Softphoneu, sastanci [uhvaćeni](/capture/) sa računara i uvezeni snimci prolaze kroz ista uputstva čim imaju prepis.

Zadaci beleže šta je dogovoreno — ne šalju poruke, ne zakazuju posete i ne otvaraju zahteve umesto vas.

## Prilagođavanje {#making-it-yours}

- Promenite šta uputstvo traži, običnim jezikom: šta traži, oblik odgovora i jezik na kom odgovara.
- Udvostručite uputstvo da isprobate varijantu.
- Izaberite model za svako uputstvo — na sopstvenom računaru ili u oblaku.
- Podesite redosled kojim se uputstva izvode, uključujte ih i isključujte i učinite ih uslovnim — to se radi [pravilima](processing.md#rules): na primer, pregled prodaje izvodi se samo na pozivima svrstanim kao **Prodaja**.
- Vodite sopstvene kategorije, oznake i upozorenja u [Rečnicima](dictionaries.md).
- Ograničite trošak [mesečnim granicama](processing.md#limits).

Izvorna uputstva i pravila mogu da se vrate sa **Vrati podrazumevano** pod **Podrazumevano** u [Podešavanja → Obrada](processing.md#defaults).
