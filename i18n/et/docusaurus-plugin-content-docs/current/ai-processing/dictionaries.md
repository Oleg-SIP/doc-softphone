---
title: Sõnastikud
sidebar_position: 4
description: Teie oma kategooriad, sildid ja hoiatussignaalid — sõnad, mille alla teie vestlused liigitatakse.
---

**Seaded → Sõnastikud** sisaldab sõnu, mille alla vestlust saab liigitada, millega seda märgistada või mille põhjal sellele tähelepanu juhtida. Neid loendeid näidatakse mudelitele ja nende hulgast peavad mudelid valima, nii et vastus on alati midagi, mida saate hiljem otsida.

<Shot name="13_settings_dictionaries" alt="Seaded → Sõnastikud" />

**Näita kustutatuid** näitab kirjeid, mille olete kustutanud.

Iga kirje on nimi, lühike väikeses kirjas kood ja kirjeldus, mis ütleb mudelile, millal seda valida. Kood on see, mida talletatakse ja mida [REST API](../integration/rest-api.md#taxonomy-and-settings) tagastab, nii et see jääb samaks, kui kirje ümber nimetate.

## Kategooriad {#categories}

Millest vestlus oli; **vestluse kohta valitakse üks**. Programm alustab neljaga:

| Nimi | Kood | Kasutatakse |
| --- | --- | --- |
| **Müük** | `sales` | Müümine, pakkumise tegemine, läbirääkimine või ostu järelkontroll — ka klient, kes küsib, mis miski maksab. |
| **Tugi** | `support` | Kellegi aitamine toote või teenusega, mis tal juba on: rike, küsimus kasutamise kohta, kaebus töö kohta. |
| **Isiklik** | `personal` | Üldse mitte töö — eravestlus, mis juhtus toimuma sellel liinil. |
| **Muu** | `other` | Töö, kuid mitte müük ega tugi: tarnija, kolleeg, kohaletoimetamine, vale number. Valige see, selle asemel et teiste vahel arvata. |

Vajutage **Lisa**, et lisada oma kategooria.

## Sildid {#tags}

Märgistused, mis *võivad kõik samale vestlusele sobida*. Vajutage **Lisa**, et lisada. Loend algab näiteks järgmiste kirjetega:

| Nimi | Kood | Kasutatakse |
| --- | --- | --- |
| **Lubatud tagasihelistamine** | `callback` | Keegi selles kõnes lubas tagasi helistada või palus endale tagasi helistada. |
| **Kaebus** | `complaint` | Teine osapool väljendas rahulolematust, olenemata sellest, kas asi lahendati. |
| **Antud edasi** | `escalation` | Kõne anti edasi kellelegi teisele või teine osapool palus seda. |
| **VIP-klient** | `vip` | Teist osapoolt koheldi olulise kliendina või ta ütles end selleks olevat. |

## Hoiatussignaalid {#red-flags}

Asjad, mis vajavad tähelepanu, leitud vestlusest koos tõendi ja ajaga — näiteks *Vihane klient* või *Lahkumise oht*. Hoiatussignaalid joonistatakse [salvestiste aknas](../interface/recordings.md) punasega ja igaühel on tõsidus: madal, keskmine või kõrge.

## Vastuse kujud ja keel {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Seaded → Sõnastikud: vastuse kujud ja keelejuhised" />

Vahekaardil allpool on juhised, millest juhised kokku pannakse. Neid hoitakse siin, et iga juhis saaks kasutada sama sõnastust, ja te saate neid muuta nagu iga teist kirjet.

| Nimi | Kood | Mida see mudelile ütleb |
| --- | --- | --- |
| **Sildid** | `shape-labels` | Vasta JSON-is koodide loendiga ja kindlusega iga koodi kohta, kasutades ainult antud loendi koode. |
| **Hinne** | `shape-score` | Vasta hindega, selle põhjendusega ja sõnadega, millele see tugineb. |
| **Kriteeriumid** | `shape-rubric` | Vasta koondhindega ja hindega iga kriteeriumi kohta. |
| **Signaalid** | `shape-flags` | Vasta loendi koodidega, igaüks koos tõsidusega. |
| **Vastus** | `shape-qa` | Vasta vastusega või ütle otse, et vestlus seda ei ütle, ning sõnad, millele vastus tugineb. |
| **JSON** | `shape-json` | Vasta ainult JSON-iga, ülal palutud kujul. |
| **Nagu räägiti** | `language-as-spoken` | Kirjuta keeles, milles vestlus toimus. |
| **Nagu räägiti, nimetatult** | `language-as-spoken-named` | Sama, keelt nimetades. |
| **Nimetatud keel** | `language-named` | Kirjuta keeles, mille te nimetate. |

Loendi lõpus olev **Lisa** lisab kirje.

## Vaikeväärtused {#defaults}

**Taasta vaikeväärtused** taastab iga sõnastiku sellisena, nagu see programmiga kaasa tuli, kasutajaliidese praeguses keeles. Seda, mille alla teie vestlused on juba liigitatud, see ei puuduta.
