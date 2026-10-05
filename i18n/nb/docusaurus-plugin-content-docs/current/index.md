---
slug: /
title: Dokumentasjon for AI Softphone
sidebar_position: 1
description: Hva AI Softphone er, hva det kjører på, og hvor hver del av programmet er beskrevet.
---

[AI Softphone](https://ai-softphone.com/) er en softphone for en IP-sentral som også gjør hver samtale om til tekst og et skriftlig sammendrag. En samtale kan komme inn på tre måter, og alle tre havner i det samme biblioteket med det samme opptaket, den samme utskriften og det samme sammendraget:

- **en samtale** ringt eller mottatt i programmet, gjennom hvilken som helst IP-sentral eller SIP-leverandør;
- **et møte** i Zoom, Teams, Meet eller et annet program, tatt opp fra selve maskinen;
- **et opptak du allerede har** — fra en mobiltelefon, en diktafon eller et annet system — lagt inn i biblioteket.

Opptak, utskrifter og historikk lagres i en fil som du eier. Det trengs ingen konto eller abonnement, og programmet er fri programvare under GPL v2.

## Fra en samtale til et sammendrag {#from-a-conversation-to-a-write-up}

1. En samtale kommer inn: en telefonsamtale, et møte eller en fil.
2. Den tas opp på to kanaler, så det du sa og det den andre siden sa holdes atskilt.
3. Den skrives ut, taler for taler, i takt med lyden.
4. Språkmodellen du har valgt, oppsummerer den: sammendrag, oppgaver, kategori, etiketter og signaler — og du kan stille samtalen et spørsmål.

## Nedlasting og systemkrav {#download-and-system-requirements}

Programmet kan lastes ned gratis fra [ai-softphone.com](https://ai-softphone.com/#download): et installasjonsprogram (`.exe`) for Windows, et diskbilde (`.dmg`) for macOS og en AppImage eller en `.deb` for Linux. Ingenting annet må installeres først — Qt, OpenSSL og C++-kjøretiden følger med i pakken. Du trenger en SIP-konto, fra leverandøren din eller fra sentralen du selv drifter. Opptak virker så snart programmet er installert; utskriften og sammendraget krever en tjeneste du velger, eller en modell på din egen maskin.

| System | Krav |
| --- | --- |
| macOS | macOS 14.4 eller nyere; bare Apple silicon — en Intel-Mac kan ikke åpne det, heller ikke via Rosetta; Metal-grafikk; 160 MB diskplass, pluss opptakene. Systemet spør én gang om mikrofonen. |
| Windows | Windows 10 versjon 1809 (build 17763) eller nyere, og Windows 11; 64-biters Intel- eller AMD-prosessor; Direct3D 11 eller OpenGL 2.1; 250 MB diskplass, pluss opptakene. |
| Linux | Ubuntu 22.04 LTS eller nyere, Debian 12 eller nyere, og alt fra samme tid — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C-bibliotek 2.35 eller nyere; 64-biters Intel- eller AMD-prosessor; OpenGL 2.1 eller OpenGL ES 2.0, på X11 eller Wayland; PipeWire eller PulseAudio (ALSA der ingen av dem finnes); 200 MB diskplass, pluss opptakene. Ikonet i systemstatusfeltet krever et skrivebord med et statusområde. |

På Linux kjører AppImage på enhver distribusjon fra samme tid: gjør filen kjørbar og start den. `.deb` krever i tillegg systemets egen C++-kjøretid fra GCC 13, som Ubuntu 24.04 og Debian 13 har og Ubuntu 22.04 ikke har; på alt eldre bør du ta AppImage.

Grensesnittet finnes på tretti språk, velges under [Utseende](/program/appearance) og byttes uten omstart.

Skjermbildene i denne dokumentasjonen er tatt på macOS og vises små: klikk på et for å se det i full størrelse. Programmet ser likt ut og virker likt på de andre systemene.

## Første steg {#first-steps}

1. [Legg til en konto](sip-accounts/setup.md) for sentralen eller SIP-leverandøren din.
2. [Velg mikrofon og høyttalere](sip-accounts/devices.md), og ring en testsamtale.
3. Bestem [hvilke samtaler som tas opp](recordings/call-recording.md).
4. Legg til en [gjenkjenner](ai-processing/transcription.md) og en [språkmodell](ai-processing/processing.md) hvis du vil ha utskrifter og sammendrag.

**Innstillinger → Oversikt** holder denne listen for deg: en grønn prikk markerer et trinn som er gjort, en rød et trinn som gjenstår. Se [Oversikt over innstillingene](interface/settings-overview.md).

## Hva du kan lese videre {#where-to-read-next}

| Hvis du vil … | Les |
| --- | --- |
| Finne fram i vinduene | [Grensesnitt](interface/main-window.md) |
| Koble telefonen til sentralen din | [Sette opp en SIP-konto](sip-accounts/setup.md) |
| Velge mikrofon, høyttalere og ringetone | [Enheter](sip-accounts/devices.md) |
| Stille inn kodeker, samtale venter og samtalehistorikken | [Samtaleinnstillinger](sip-accounts/calls.md) |
| Legge kolleger på knapper med ett trykk | [Knapper](sip-accounts/buttons.md) |
| Bestemme hvilke samtaler som tas opp, og hvor lenge | [Ta opp samtaler](recordings/call-recording.md) |
| Lytte til, søke i og lese samtalene dine | [Vinduet Opptak](recordings/recordings-window.md) |
| Ta opp et møde som holdes i et annet program | [Fanging](capture/capture.md) |
| Velge gjenkjenneren som gjør tale om til tekst | [Transkripsjon](ai-processing/transcription.md) |
| Bestemme hvilken AI som oppsummerer samtalene dine, og hva det kan koste | [Behandling](ai-processing/processing.md) |
| Endre kategoriene, etikettene og signalene | [Ordlister](ai-processing/dictionaries.md) |
| Endre oppsett, tema, oppstart og snarveier | [Utseende](program/appearance.md), [Oppstart](program/startup.md) og [Snarveier](program/shortcuts.md) |
| Koble til et CRM eller et annet program | [Webhooker](integration/webhooks.md) og [Lokalt REST-API](integration/rest-api.md) |
| Se hva telefonen og sentralen sier til hverandre | [Diagnostikk](troubleshooting/diagnostics.md) |
| Finne årsaken til et problem | [Vanlige problemer](troubleshooting/common-problems.md) |
| Slå av deler av programmet | [Moduler](application/modules.md) |
| Sjekke versjonen, oppdateringene og hva bruksrapporten inneholder | [Om](application/about.md) |

Sidene følger rekkefølgen på fanene i **Innstillinger**.

## Personvern {#privacy}

- Som standard blir alt værende på maskinen din: opptak, utskrifter og historikk ligger i en fil som du eier. Ingenting fra en samtale — verken et nummer, et navn eller et ord av det som ble sagt — går noe sted du ikke selv har sendt det.
- Kontopassord, webhookens hodeverdi og API-nøkkelen lagres i operativsystemets nøkkelring, aldri i en innstillingsfil.
- En ny versjon melder seg når den kommer — aldri under en samtale — og installeres bare når du sier ja.
- Programmet sender én liten bruksrapport om dagen. Du får se hva den inneholder før den første sendes, og du velger hvor mye den har med: **Enkel** eller **Utvidet**. Den inneholder aldri numre, kontakter, adressen til sentralen din eller noe som er sagt i en samtale. Hele listen står under [Om](/application/about#telemetry).
- Programmet er fri programvare under GPL v2.
