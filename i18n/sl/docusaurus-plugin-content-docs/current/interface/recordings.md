---
title: Okno posnetkov
sidebar_position: 2
description: Knjižnica pogovorov — filtriranje, predvajanje, branje prepisa in obdelave.
---

**Posnetki** so mesto, kjer živi vsak pogovor, ne glede na to, kako je prišel: klic, sestanek, zajet iz drugega programa, ali uvožena datoteka. Vsak je naveden z že narejeno obdelavo.

<Shot name="01_recordings" alt="Zavihek Posnetki: seznam pogovorov" />

## Iskanje pogovora {#finding-a-conversation}

Vrstica na vrhu ima štiri filtre, iskalno polje in meni:

| Kontrolnik | Zoži seznam po |
| --- | --- |
| **Vrsta** | načinu, kako je pogovor prišel |
| **Obdobje** | datumu |
| **Kategorija** | kategoriji, v katero je bil uvrščen — glejte [Slovarji](../ai-processing/dictionaries.md) |
| **Znamka** | znamkah, ki jih nosi |
| **Išči** | tem, kar je bilo v njem rečeno — iskanje gre skozi prepise vsega, kar ste posneli |

Gumb **⋮** desno v vrstici odpre več dejanj za seznam: **Uvozi iz datotek**, **Izvozi v CSV** in **Odpri v brskalniku**.

## Seznam {#the-list}

Vsaka vrstica prikazuje:

- ikono vrste pogovora: slušalko za klic, okno za sestanek v drugem programu;
- naslov — ime druge strani, številko ali **Drug program** za zajet sestanek —, pod njim pa datum in povzetek v eni vrstici;
- na desni kategorijo z njeno oceno (število, na primer *Podpora · 2*), nato oznake in na koncu trajanje.

Oznake, narisane rdeče, so **opozorilni znaki** (na sliki *Jezna stranka* in *Tveganje odhoda*); druge so navadne oznake (*Pritožba*, *Obljubljen povratni klic*). Pogovor brez povzetka in kategorije še ni bil obdelan — prva vrstica na sliki.

## Predvajalnik {#the-player}

Izberite vrstico, da se pod seznamom odpre predvajalnik.

<Shot name="02_recording_details" alt="Izbran posnetek: predvajalnik in prepis pod seznamom" />

- Valovni obliki sta kanala posnetka, po eden za vsako stran pogovora. Vrstica pod njima pomika dolg posnetek.
- **▶** predvaja in zaustavi; časa na levi sta položaj in skupno trajanje.
- **1×** spremeni hitrost; **Oba** izbere, kateri kanal slišite.
- Gumb z diskom shrani zvok, **×** zapre predvajalnik.

## Prepis in obdelava {#the-transcript-and-the-write-up}

Pod predvajalnikom je prepis, z eno vrstico na repliko, časom, ko je bila izrečena, in imenom govorca (**Vi**, ime druge strani ali pri zajetem sestanku **Drug program**). Kliknite vrstico, da slišite tisti trenutek; vrstica pod predvajalno glavo je poudarjena, izgovarjana beseda pa je v njej označena.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Prepis ob zvoku" />

Spustni seznam nad prepisom izbere, kaj prikazati — prepis, ki ga je naredil eden od vaših [razpoznavalnikov](../ai-processing/transcription.md) (zvezdica označuje glavni prepis posnetka), ali obdelavo, kot je **Dejanja**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Naloge, ki jih je pogovor pustil za seboj" />

Štiri ikone desno od spustnega seznama:

| Ikona | Kaj naredi |
| --- | --- |
| Iskrice | Naj model takoj napiše izbrani element. |
| Dva lista | Ga kopira. |
| Disk | Ga shrani v datoteko. |
| Koš | Ga izbriše. |

Prepis lahko izvozite kot navadno besedilo ali kot podnapise.

Obdelavo naredijo [navodila](/ai-processing/prompt-studio) in modeli, ki jih nastavite v [Obdelavi](../ai-processing/processing.md), prek [pravil](../ai-processing/processing.md#rules), ki tečejo sama ali ko to zahtevate. Kako dolgo se posnetki hranijo, se nastavi v [Snemanju klicev](../recordings/call-recording.md#retention).

## Posnetek, ki ga že imate {#a-recording-you-already-have}

Posnetek, narejen drugje — na mobilnem telefonu, diktafonu ali v drugem sistemu —, lahko dodate z **⋮ → Uvozi iz datotek**. Uvrsti se natanko kot poklican klic: prepiše se, obdela in najde z istim iskanjem.

## Brisanje posnetka {#deleting-a-recording}

Ko se posnetek izbriše, gre z njim vse, kar je iz njega nastalo: prepis in obdelava.
