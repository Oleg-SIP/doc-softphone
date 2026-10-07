---
title: Salvestiste aken
sidebar_position: 2
description: Vestluste teek — filtreerige, kuulake, lugege ülestähendust ja kokkuvõtet.
---

**Salvestised** on koht, kus on iga vestlus, ükskõik kuidas see saabus: kõne, teisest rakendusest hõivatud koosolek või imporditud fail. Igaüks on loendis koos juba valmis kokkuvõttega.

<Shot name="01_recordings" alt="Vahekaart Salvestised: vestluste loend" />

## Vestluse leidmine {#finding-a-conversation}

Ülemisel ribal on neli filtrit, otsinguväli ja menüü:

| Juhtelement | Kitsendab loendit |
| --- | --- |
| **Liik** | vestluse saabumise viisi järgi |
| **Ajavahemik** | kuupäeva järgi |
| **Kategooria** | kategooria järgi, millesse see on liigitatud — vaadake [Sõnastikud](../ai-processing/dictionaries.md) |
| **Märgistus** | sellel olevate märgistuste järgi |
| **Otsi** | selles öeldu järgi — otsing käib läbi kõigi teie salvestatu ülestähendused |

Riba paremas servas olev nupp **⋮** avab loendi jaoks lisatoiminguid: **Impordi failidest**, **Ekspordi CSV-sse** ja **Ava brauseris**.

## Loend {#the-list}

Igal real on:

- ikoon vestluse liigi kohta: toru kõne jaoks, aken teises rakenduses peetud koosoleku jaoks;
- pealkiri — teise osapoole nimi, number või hõivatud koosoleku puhul **Teine rakendus** — ja selle all kuupäev ning ühereakokkuvõte;
- paremal kategooria koos punktisummaga (arv, näiteks *Tugi · 2*), siis sildid ja lõpus kestus.

Punasega joonistatud sildid on **hoiatussignaalid** (pildil *Vihane klient* ja *Lahkumise oht*); teised on tavalised sildid (*Kaebus*, *Lubatud tagasihelistamine*). Vestlus ilma kokkuvõtte ja kategooriata ei ole veel kokku võetud — pildil esimene rida.

## Mängija {#the-player}

Valige rida, et avada loendi all mängija.

<Shot name="02_recording_details" alt="Valitud salvestis: mängija ja ülestähendus loendi all" />

- Kaks lainekuju on salvestise kaks kanalit, üks kummagi vestluse poole jaoks. Nende all olev riba kerib pikka salvestist.
- **▶** mängib ja peatab; vasakul olevad ajad on asukoht ja kogupikkus.
- **1×** muudab kiirust; **Mõlemad** valib, millist kanalit kuulete.
- Disketinupp salvestab heli, **×** sulgeb mängija.

## Ülestähendus ja kokkuvõte {#the-transcript-and-the-write-up}

Mängija all on ülestähendus: üks rida iga repliigi kohta, selle ütlemise aeg ja kõneleja nimi (**Teie**, teise osapoole nimi või hõivatud koosoleku puhul **Teine rakendus**). Klõpsake real, et kuulda seda hetke; esitusjärje all olev rida tõstetakse esile ja öeldav sõna märgitakse selles.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Ülestähendus heli kõrval" />

Ülestähenduse kohal olev ripploend valib, mida näidata — mõne teie [tuvastaja](../ai-processing/transcription.md) tehtud ülestähendus (täht tähistab salvestise peamist ülestähendust) või kokkuvõte, näiteks **Toimingud**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Vestlusest jäänud toimingud" />

Ripploendist paremal olevad neli ikooni:

| Ikoon | Mida teeb |
| --- | --- |
| Sädemed | Laseb mudelil valitud üksuse kohe kirjutada. |
| Kaks lehte | Kopeerib selle. |
| Diskett | Salvestab selle faili. |
| Prügikast | Kustutab selle. |

Ülestähenduse saab eksportida lihttekstina või subtiitritena.

Kokkuvõtte teevad [juhised](/ai-processing/prompt-studio) ja mudelid, mille olete seadistanud jaotises [Töötlemine](../ai-processing/processing.md), [reeglite](../ai-processing/processing.md#rules) abil, mis töötavad iseenesest või teie palvel. Salvestiste säilitamise aeg seadistatakse jaotises [Salvestised](../recordings.md#retention).

## Salvestis, mis teil juba on {#a-recording-you-already-have}

Mujal — mobiiltelefoniga, diktofoniga või muus süsteemis — tehtud salvestise saab lisada valikuga **⋮ → Impordi failidest**. See arhiveeritakse täpselt nagu valitud kõne: kirjutatakse üles, võetakse kokku ja leitakse sama otsinguga.

## Salvestise kustutamine {#deleting-a-recording}

Kui salvestis kustutatakse, kaob koos sellega kõik sellest tehtu: ülestähendus ja kokkuvõte.
