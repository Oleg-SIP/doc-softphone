---
slug: /
title: Dokumentation til AI Softphone
sidebar_position: 1
description: Hvad AI Softphone er, hvad det kører på, og hvor hver del af programmet er beskrevet.
---

[AI Softphone](https://ai-softphone.com/) er en softphone til et IP-omstillingsanlæg, som også gør hver samtale til tekst og et skriftligt resumé. En samtale kan nå frem på tre måder, og alle tre ender i det samme bibliotek med den samme optagelse, udskrift og opsummering:

- **et opkald** foretaget eller modtaget i programmet, gennem et hvilket som helst IP-omstillingsanlæg eller en SIP-udbyder;
- **et møde** i Zoom, Teams, Meet eller et andet program, optaget fra selve computeren;
- **en optagelse, du allerede har** — fra en mobiltelefon, en diktafon eller et andet system — lagt ind i biblioteket.

Optagelser, udskrifter og historik gemmes i en fil, som du ejer. Der kræves ingen konto og intet abonnement, og programmet er fri software under GPL v2.

## Fra en samtale til en opsummering {#from-a-conversation-to-a-write-up}

1. En samtale kommer ind: et opkald, et møde eller en fil.
2. Den optages på to kanaler, så det, du sagde, og det, den anden side sagde, holdes adskilt.
3. Den skrives ud, taler for taler, i takt med lyden.
4. Den sprogmodel, du har valgt, opsummerer den: resumé, opgaver, kategori, etiketter og signaler — og du kan stille samtalen et spørgsmål.

## Download og systemkrav {#download-and-system-requirements}

Programmet kan hentes gratis fra [ai-softphone.com](https://ai-softphone.com/#download): et installationsprogram (`.exe`) til Windows, et diskbillede (`.dmg`) til macOS og en AppImage eller en `.deb` til Linux. Installationsprogrammet, diskbilledet og AppImage kræver ikke, at noget andet installeres først — Qt, OpenSSL og C++-runtime følger med i dem. Undtagelsen er `.deb`: den bruger systemets egen C++-runtime, se nedenfor. Du skal bruge en SIP-konto, fra din udbyder eller fra det omstillingsanlæg, du selv driver. Optagelse virker, så snart programmet er installeret; udskriften og opsummeringen kræver en tjeneste, du vælger, eller en model på din egen maskine.

| System | Krav |
| --- | --- |
| macOS | macOS 14.4 eller nyere; kun Apple silicon — en Intel-Mac kan ikke åbne det, heller ikke via Rosetta; Metal-grafik; 160 MB diskplads plus optagelserne. Systemet spørger én gang om mikrofonen. |
| Windows | Windows 10 version 1809 (build 17763) eller nyere og Windows 11; 64-bit Intel- eller AMD-processor; Direct3D 11 eller OpenGL 2.1; 250 MB diskplads plus optagelserne. |
| Linux | Ubuntu 22.04 LTS eller nyere, Debian 12 eller nyere og alt fra samme tid — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C-bibliotek 2.35 eller nyere; 64-bit Intel- eller AMD-processor; OpenGL 2.1 eller OpenGL ES 2.0 på X11 eller Wayland; PipeWire eller PulseAudio (ALSA, hvor ingen af dem findes); 200 MB diskplads plus optagelserne. Ikonet i statusområdet kræver et skrivebord med et statusområde. |

På Linux kører AppImage på enhver distribution fra samme tid: gør filen eksekverbar, og start den. `.deb` kræver desuden systemets egen C++-runtime fra GCC 13, som Ubuntu 24.04 og Debian 13 har, men Ubuntu 22.04 ikke har; på alt ældre skal du tage AppImage.

Brugerfladen findes på tredive sprog, vælges under [Udseende](/program/appearance) og skiftes uden genstart.

Skærmbillederne i denne dokumentation er taget på macOS og vises små: klik på et for at se det i fuld størrelse. Programmet ser ens ud og virker ens på de andre systemer.

## Første skridt {#first-steps}

1. [Tilføj en konto](sip-accounts/setup.md) til dit omstillingsanlæg eller din SIP-udbyder.
2. [Vælg mikrofon og højttalere](sip-accounts/devices.md), og foretag et testopkald.
3. Bestem, [hvilke opkald der optages](recordings/call-recording.md).
4. Tilføj en [genkender](ai-processing/transcription.md) og en [sprogmodel](ai-processing/processing.md), hvis du vil have udskrifter og opsummeringer.

**Indstillinger → Oversigt** holder styr på denne liste for dig: en grøn prik markerer et trin, der er klaret, en rød et trin, der mangler. Se [Oversigt over indstillingerne](interface/settings-overview.md).

## Hvad du kan læse bagefter {#where-to-read-next}

| Hvis du vil… | Læs |
| --- | --- |
| Finde rundt i vinduerne | [Brugerflade](interface/main-window.md) |
| Forbinde telefonen med dit omstillingsanlæg | [Opsætning af en SIP-konto](sip-accounts/setup.md) |
| Vælge mikrofon, højttalere og ringetone | [Enheder](sip-accounts/devices.md) |
| Indstille codecs, banke på og opkaldshistorikken | [Opkaldsindstillinger](sip-accounts/calls.md) |
| Lægge kolleger på knapper med ét tryk | [Knapper](sip-accounts/buttons.md) |
| Bestemme, hvilke opkald der optages, og hvor længe | [Optagelse af opkald](recordings/call-recording.md) |
| Lytte til, søge i og læse dine samtaler | [Vinduet Optagelser](interface/recordings.md) |
| Optage et møde, der holdes i et andet program | [Opfangning](capture/capture.md) |
| Vælge den genkender, der gør tale til tekst | [Transskription](ai-processing/transcription.md) |
| Bestemme, hvilken AI der opsummerer dine samtaler, og hvad det må koste | [Behandling](ai-processing/processing.md) |
| Ændre kategorier, etiketter og signaler | [Ordlister](ai-processing/dictionaries.md) |
| Ændre layout, tema, opstart og genveje | [Udseende](program/appearance.md), [Opstart](program/startup.md) og [Genveje](program/shortcuts.md) |
| Forbinde et CRM eller et andet program | [Webhooks](integration/webhooks.md) og [Lokalt REST-API](integration/rest-api.md) |
| Se, hvad telefonen og omstillingsanlægget siger til hinanden | [Diagnostik](troubleshooting/diagnostics.md) |
| Finde årsagen til et problem | [Almindelige problemer](troubleshooting/common-problems.md) |
| Slå dele af programmet fra | [Moduler](application/modules.md) |
| Se versionen, opdateringerne og hvad brugsrapporten indeholder | [Om](application/about.md) |

Siderne følger rækkefølgen af fanerne i **Indstillinger**.

## Privatliv {#privacy}

- Som standard bliver alt på din computer: optagelser, udskrifter og historik ligger i en fil, som du ejer. Intet fra en samtale — hverken et nummer, et navn eller et ord af det sagte — sendes nogen steder hen, som du ikke selv har sendt det.
- Kontoadgangskoder, webhookens hovedværdi og API-nøglen gemmes i operativsystemets nøglering, aldrig i en indstillingsfil.
- En ny version melder sig, når den kommer — aldrig under et opkald — og installeres kun, når du siger til.
- Programmet sender én lille brugsrapport om dagen. Du får vist, hvad den indeholder, før den første sendes, og du vælger, hvor meget den rummer: **Enkel** eller **Udvidet**. Den indeholder aldrig numre, kontakter, adressen på dit omstillingsanlæg eller noget, der er sagt i en samtale. Den fulde liste står under [Om](/application/about#telemetry).
- Programmet er fri software under GPL v2.
