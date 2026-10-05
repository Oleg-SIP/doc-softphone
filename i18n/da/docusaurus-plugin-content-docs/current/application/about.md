---
title: Om
sidebar_position: 2
description: Versionen, opdateringer, dit land, licensen, hvad brugsrapporten indeholder, formularen til tilbagemelding og hvad programmet er bygget med.
---

**Indstillinger → Om** rummer alt om selve programmet.

<Shot name="20_settings_about" alt="Indstillinger → Om" />

## Version og land {#version-and-country}

Øverst står navnet, **Version** (på billedet 1.0.0) og et link til hjemmesiden, [ai-softphone.com](https://ai-softphone.com/).

**Land** fortæller programmet, hvor du er. Det hjælper med at vælge den bedste opdateringsserver og åbner for sprog- og taletjenester, der hostes i dit land. **Find det automatisk** udfylder det.

## Opdateringer {#updates}

Fanen fortæller, om du har den nyeste version, og hvornår der sidst blev tjekket. **Se efter opdateringer** tjekker nu.

**Se efter opdateringer automatisk**, slået til som standard, tjekker én gang om dagen og kort efter, at telefonen er startet. Den beder en server om én lille fil, og intet hentes eller installeres, uden at du siger til.

## Licens {#licence}

Programmet er fri software under GPL-2.0-or-later. Det leveres uden nogen garanti, og du må videredistribuere det på licensens vilkår; den fulde tekst følger med i filen `LICENSE`.

## Telemetri {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Indstillinger → Om: hvad brugsrapporten indeholder" />

Programmet sender én lille brugsrapport om dagen. Du får vist, hvad den indeholder, før den første sendes, og fanen viser det:

| | Hvad der sendes |
| --- | --- |
| **Sendes altid** | At programmet blev startet, dets version og brugerfladens sprog; operativsystemets version, landestandard, land og tidszone. |
| **Sendes også, i tilstanden Udvidet** | Tællerne for opkald og opfangede samtaler; producent og version af det tilsluttede omstillingsanlæg, aldrig dets adresse; hvor mange trin i [Oversigt](/interface/settings-overview) der er klaret, og det valgte layout. |
| **Sendes aldrig, i nogen tilstand** | De numre, du har ringet til eller er blevet ringet op fra; konti, adgangskoder eller noget fra nøgleringen; kontakter, samtaler, udskrifter eller optagelser; alt, hvad du har skrevet, og alle private data på computeren. |

Hver installation laver én tilfældig identifikator til sig selv, så rapporter fra samme kopi af programmet kan genkendes som én. Den er ikke afledt af noget om dig eller din computer, og den navngiver ingen — men fordi den varer ved, kan de rapporter, den følger med, kædes sammen. Det gør dem pseudonyme snarere end anonyme.

Den enkle rapport har legitim interesse som grundlag: at vide, hvilke versioner der er i brug, er det, der lader en rettelse nå ud til dem, der har brug for den. Alt, hvad den udvidede rapport tilføjer, er der, fordi du valgte det, og du kan ændre det her når som helst.

### Rapportering {#reporting}

| Valg | |
| --- | --- |
| **Udvidet** | Den enkle rapport og det, *Sendes også* viser. Valgt på billedet. |
| **Enkel** | Kun det, der *Sendes altid*. |
| **Slået fra** | Ingen rapport overhovedet. Kun tilgængelig i Enterprise-udgaven; ellers er valgmuligheden grå. |

## Tilbagemelding {#feedback}

<Shot name="20c_settings_about_bottom" alt="Indstillinger → Om: formularen til tilbagemelding og de komponenter, programmet er bygget med" />

En formular, der skriver til udviklerne uden at forlade programmet.

| Felt | |
| --- | --- |
| **Emne** og **Besked** | Det, du vil sige. |
| **Dit navn** og **Adresse til et svar** | Begge er valgfrie. Uden en adresse er der ingen måde at svare på. |
| **Vedhæft loggen** | Tilføjer slutningen af loggen, omkring 512 kB. Se [Diagnostik](/troubleshooting/diagnostics). |

**Send** forbliver grå, indtil der er noget at sende.

## Bygget med {#built-with}

De komponenter, programmet er bygget på, hver med sin licens: Qt 6 (GPL-2.0 eller GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (public domain), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) og PulseAudio-klienten (LGPL-2.1-or-later). Hver bruges under licensen ved siden af; hvor en komponent tilbyder flere, er den nævnte den, der er valgt.
