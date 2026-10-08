---
title: Salvestiste aken
sidebar_position: 2
description: "\"Kõigi vestluste teek — kõne, imporditud fail või Zoomist, Teamsist või Meetist hõivatud koosolek: filtrid, mängija, ülestähendus, mida saab esitada igalt realt, ja kokkuvõtted.\""
---

**Salvestised** on koht, kus on iga vestlus, ükskõik kuidas see saabus: telefonis tehtud või vastu võetud kõne, imporditud helifail või koosolek, mis hõivati Zoomist, Teamsist, Meetist või mõnest muust rakendusest. Kõik asuvad ühes loendis ja igaüks avaneb samamoodi: mängija, ülestähendus ja kõik, mida keelemudel sellest kirjutas. Selle avamiseks vajutage [peaakna](main-window.md) all vasakul nuppu **Salvestised**.

<Shot name="01_recordings" alt="Vahekaart Salvestised: hõivatud Zoomi koosolek, imporditud fail ja kõned ühes loendis" />

## Kolm liiki salvestisi {#three-kinds-of-recording}

Rea vasakul olev ikoon näitab, kuidas vestlus saabus.

| Ikoon | Vestlus | Selle nimi loendis | Kuidas see siia jõuab |
| --- | --- | --- | --- |
| Toru koos noolega | Selles telefonis tehtud või vastu võetud kõne. Nool osutab sissetuleva kõne puhul sissepoole ja väljaminevalt väljapoole. | Kontakti nimi või number | Salvestatakse nii, nagu on seadistatud jaotises [Salvestised](../recordings.md) |
| Nool ribasse | Mujalt imporditud fail: mobiiltelefonist, diktofonist või muust süsteemist | Faili nimi | **⋮ → Impordi failidest**; vt [allpool](#a-recording-you-already-have) |
| Aken | Teises rakenduses peetud koosolek | Nimi, mille te andsite, või **Muu rakendus** | [Hõive](../capture/capture.md) |

Pildil on kolm ülemist rida igaüks ühte liiki: Zoomi koosolek, imporditud fail panga klienditoe kõnest ja liinil **305 Tugi** vastu võetud kõne. Olenemata allikast kirjutatakse need kõik üles, võetakse kokku ja otsitakse ühtmoodi.

## Vestluse leidmine {#finding-a-conversation}

Ülemisel ribal on viis filtrit, otsinguväli ja menüü:

| Juhtelement | Kitsendab loendit |
| --- | --- |
| **Liik** | vestluse saabumise viisi järgi: sissetulevad või väljaminevad kõned, **Imporditud**, **Hõivatud** |
| **Ajavahemik** | kuupäeva järgi: **Täna**, **Eile**, **Viimased 7 päeva** või **Vali kuupäevad…** |
| **Kategooria** | kategooria järgi, millesse see on liigitatud — vaadake [Sõnastikud](../ai-processing/dictionaries.md) |
| **Märgistus** | sellel olevate siltide ja hoiatussignaalide järgi |
| **Tuvastaja** | [tuvastaja](../ai-processing/transcription.md) järgi, kes tegi selle ülestähenduse |
| **Otsi** | selles öeldu järgi — otsing käib läbi kõigi teie salvestatu ülestähendused |

<Shot name="39_more_menu" alt="Loendi menüü ⋮: Impordi failidest, Ekspordi CSV-sse, Ava brauseris" />

Riba paremas servas olev nupp **⋮** avab loendi jaoks lisatoiminguid:

| Üksus | Mida teeb |
| --- | --- |
| **Impordi failidest** | Toob sisse salvestised, mis teil juba on. Vt [Salvestis, mis teil juba on](#a-recording-you-already-have). |
| **Ekspordi CSV-sse** | Salvestab loendi tabelina: millal, osapool ja number, suund, kestus, kategooria, sildid, hoiatussignaalid ja iga vestluse ühereakokkuvõte. |
| **Ava brauseris** | Avab loendi teie brauseris lehena, mida [kohalik REST API](../integration/rest-api.md) pakub aadressil `/ui`. |

## Loend {#the-list}

Igal real on:

- vestluse liigi ikoon;
- nimi — teine osapool, number, fail või koosolek — ja selle all kuupäev ning ühereakokkuvõte;
- paremal kategooria koos punktisummaga (arv, näiteks *Tugi · 4*), siis hoiatussignaalid ja sildid ning lõpus kestus.

Hoiatussignaalid joonistatakse punasega (pildil *Tundlikud andmed*, *Antud lubadus*, *Vihane klient*); sildid on tavalised (*Lubatud tagasihelistamine*). Vestlus ilma kokkuvõtte ja kategooriata ei ole veel kokku võetud — pildil rida **Anna Rebane**.

<Shot name="40_row_actions" alt="Rida, mille kohal on kursor: nõel, pliiats ja prügikast" />

Rea kohale osutades ilmub selle paremale servale kolm nuppu:

| Nupp | Mida teeb |
| --- | --- |
| Nõel | **Hoia see alles**: alles hoitud salvestist ei kustuta kunagi [säilitamise](../recordings.md#retention) piirangud. Vajutage uuesti, et lõpetada selle alleshoidmine. |
| Pliiats | **Nimeta ümber**: annab vestlusele teie enda nime. Kõne juures säilib osapoole nimi; koosolek või fail on muidu nimetatud selle rakenduse või faili järgi, kust see pärineb. |
| Prügikast | **Kustuta see salvestis**, pärast küsimist. Koos sellega kaob ka heli ja seda ei saa tagasi võtta. |

## Mängija {#the-player}

Valige rida, et avada loendi all mängija.

- Kaks lainekuju on salvestise kaks kanalit: ülemine olete teie, alumine on teine pool. Imporditud fail sisaldab tavaliselt ühte segatud rada, nii et mõlemal real on sama heli.
- **▶** mängib ja peatab; vasakul olevad ajad on asukoht ja kogupikkus. Lainekujude all olev riba kerib pikka salvestist.
- **1×** muudab kiirust; **Mõlemad** valib, millist häält kuulete: mõlemat, ainult teid (**Mina**) või ainult teist poolt (**Nemad**).
- Disketinupp salvestab salvestise koopia, **×** sulgeb vestluse.

Loendi ja mängija vahelist joont saab lohistada ülespoole, et anda ülestähendusele rohkem ruumi, nagu allolevatel piltidel.

## Ülestähendus {#the-transcript}

Mängija all on ülestähendus: üks rida iga repliigi kohta, selle ütlemise aja ja kõneleja nimega.

<Shot name="26_recording_call" alt="Kõne liinil 305 Tugi: mängija ja ülestähendus, esile tõstetud rida kohal 0:12" />

| Salvestise liik | Kõnelejad on näidatud kui |
| --- | --- |
| Kõne | **Teie** ja teise osapoole nimi või number |
| Hõivatud koosolek | **Teie** ja salvestise nimi kõigi teiste jaoks |
| Imporditud fail | **Kõik · speaker 1**, **Kõik · speaker 2**… — tuvastaja eristab hääled |

**Klõpsake real, et minna sellele hetkele**: mängija liigub sinna, rida tõstetakse esile ja öeldav sõna märgitakse selles — pildil rida kohal **0:12**, sõnaga *Jah*. Vajutage **▶**, et sealt kuulama hakata. Mängimise ajal liigub esiletõst kõnega kaasa, nii et saate korraga lugeda ja kuulata ning hüpata tagasi mis tahes lause juurde.

Iga rea vasakul olev aeg on ka see, millele kokkuvõte viitab: hoiatussignaal, vastus või tsitaat kannab selle sõnade aega, millel see põhineb.

## Ülestähendus või kokkuvõte: ripploend {#transcript-or-write-up-the-drop-down}

Ülestähenduse kohal olev ripploend valib, mida selles kohas näidata: ülestähendust või ühte kokkuvõtetest, mille keelemudel tegi.

<Shot name="27_writeup_menu" alt="Avatud ripploend: OpenAI ülestähendus ja kõne kokkuvõtted" />

- **Mikrofoniga** read on ülestähendused, üks iga [tuvastaja](../ai-processing/transcription.md) kohta, kes salvestise üles kirjutas. Täht märgib peamist. Osutage ühele, et näha tuvastajat, selle mudelit ja keelt.
- **Sädemetega** read on kokkuvõtted, mille teevad [juhised](/ai-processing/prompt-studio) jaotises [Töötlemine](../ai-processing/processing.md).

Salvestisel võib olla mitme tuvastaja ülestähendused, et neid võrrelda: allolev Zoomi koosolek kirjutati üles nii X.ai kui ka Deepgrami poolt.

<Shot name="36_zoom_menu" alt="Hõivatud koosolek kahe ülestähendusega, Deepgram ja X.ai, ning selle kokkuvõtted" />

Kokkuvõtted on loetletud lühinimedega:

| Ripploendis | Teeb juhis | Mida see näitab |
| --- | --- | --- |
| **Kokkuvõte** | Kokkuvõte | Peamised punktid, otsused ja järgmised sammud lühikese lõiguna. |
| **Lühidalt** | Ühereakokkuvõte | Üks lause; sama rida näidatakse loendis nime all. |
| **Toimingud** | Ülesanded | Kes millega nõustus ja mis ajaks. |
| **Teemad** | Teemad | Teemad, mis üles tulid. |
| **Mainitud** | Nimed ja numbrid | Inimesed, ettevõtted, kuupäevad, summad ja viited. |
| küsimus ise | Küsimus selle kõne kohta | Vastus teie esitatud küsimusele koos sõnadega, millel see põhineb. |
| **Kvaliteet** | Müügi kvaliteet, Toe kvaliteet | Üldhinne ja otsus iga kriteeriumi kohta. |
| **Hoiatussignaalid** | Hoiatussignaalid | Mis vajab tähelepanu, koos tõendi ja ajaga. |
| **Sildid**, **Kategooria** | Sildid, Kategooria | Sildid, mille alla vestlus on liigitatud. |

## Kokkuvõtted ükshaaval {#the-write-ups-one-by-one}

Allolevad pildid on kõik samast kõnest liinil **305 Tugi**, milles klient küsib, millal tema poliisid uuenevad.

**Kokkuvõte** — vestlus mõne lausena.

<Shot name="28_summary" alt="Kõne kokkuvõte" />

**Lühidalt** — üks rida, piisavalt lühike, et vestlus loendis ära tunda.

<Shot name="29_nutshell" alt="Lühidalt: kõne ühereakokkuvõte" />

**Toimingud** — iga ülesanne koos sellega, kes selle teeb ja millal, paremal.

<Shot name="30_actions" alt="Toimingud: kaks ülesannet kasutajale Teie, üks neist homme hommikul" />

**Küsimus** — küsige vestluse kohta mida tahes: küsimusest saab üksuse nimi ja vastuse all on sõnad, millel see põhineb, koos nende ajaga salvestises.

<Shot name="31_question" alt="Vastus kõnet puudutavale küsimusele, kahe tsitaadiga kohtadel 0:17 ja 0:29" />

**Kvaliteet** — hinne 1 kuni 5 koos põhjendusega ja iga kriteerium märgitud kui **täidetud**, **nõrk** või **täitmata**, koos märkusega.

<Shot name="32_quality" alt="Kvaliteet: hinne 4, kaks kriteeriumi täidetud ja kaks nõrka" />

**Hoiatussignaalid** — iga signaal koos sõnadega, mille põhjal see tõsteti, selle tõsiduse ja ajaga.

<Shot name="33_red_flags" alt="Hoiatussignaalid: Antud lubadus, madal, kohal 0:29" />

**Teemad** — koosoleku teemad, siin Zoomi koosoleku omad.

<Shot name="38_topics" alt="Zoomi koosoleku teemad" />

## Ripploendi kõrval olevad nupud {#the-buttons-beside-the-drop-down}

| Nupp | Mida teeb |
| --- | --- |
| Sädemed | **Kirjuta üles või küsi mudelilt…**: avab menüü, vt allpool. |
| Kaks lehte | Kopeerib näidatu. |
| Diskett | Salvestab selle faili. Ülestähenduse saab salvestada lihttekstina või subtiitritena. |
| Prügikast | Kustutab näidatu. |

<Shot name="34_run_menu" alt="Sädemete menüü: Ülestähendus nelja tuvastajaga, Töötlemine koos juhistega" />

Sädemete menüü teeb töö nõudmisel. Jaotises **Ülestähendus** valige tuvastaja, et salvestis sellega uuesti üles kirjutada; jaotises **Töötlemine** valige juhis, et see kohe käivitada — **Küsimus selle kõne kohta** küsib kõigepealt küsimust. Tulemus ilmub ripploendisse. Nii võetakse vestlus kokku siis, kui **Töötle vestlusi automaatselt** on jaotises [Töötlemine](../ai-processing/processing.md) välja lülitatud, ja nii lisate ühe kokkuvõtte vestlusele, millel neid juba on.

## Kolm näidet {#three-examples}

### Telefonis tehtud kõne {#a-call-made-in-the-phone}

Ülaltoodud kõne: kõnelejad on **Teie** ja **Kadri Ilves**, kontakti nimi, kahel eraldi kanalil.

### Fail, mille importisite {#a-file-you-imported}

<Shot name="35_recording_import" alt="Imporditud fail panga klienditoe kõnest: üks segatud rada ning kõnelejad 1 ja 2" />

`riverside_bank_support_call` on mp3, mis toodi sisse valikuga **⋮ → Impordi failidest**. Selle nimi on faili nimi, ikoon on nool ribasse ja selle kaks kõnelejat eristas tuvastaja. Kokkuvõtted leidsid kõneldud kaardinumbri ja tõstsid **Tundlikud andmed**.

### Teisest rakendusest hõivatud koosolek {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Arvutist hõivatud Zoomi koosolek: X.ai ülestähendus, kõnelejateks Teie ja koosoleku nimi" />

**Q4 turuletuleku planeerimine (Zoom)** hõivati, kui koosolek Zoomis käis, ja nimetati pliiatsiga. Kõiki koosoleku teisel poolel olijaid näidatakse salvestise nime all; teie olete **Teie**. Vt [Hõive](../capture/capture.md).

## Salvestis, mis teil juba on {#a-recording-you-already-have}

Mujal — mobiiltelefonis, diktofonis või muus süsteemis — tehtud salvestise saab lisada valikuga **⋮ → Impordi failidest**. Valige üks või mitu mp3- või wav-faili; telefon ütleb, mitu imporditi, ja nimetab need, mida ei suutnud salvestisena lugeda. Igaüks arhiveeritakse täpselt nagu valitud kõne: kirjutatakse üles, võetakse kokku samade [reeglitega](../ai-processing/processing.md#rules) ja leitakse sama otsinguga.

## Salvestise kustutamine {#deleting-a-recording}

Kui salvestis kustutatakse, kaob koos sellega kõik sellest tehtu: ülestähendused ja kokkuvõtted. Kui kaua salvestisi ise hoitakse, seadistatakse jaotises [Salvestised](../recordings.md#retention).
