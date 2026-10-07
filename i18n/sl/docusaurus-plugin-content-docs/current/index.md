---
slug: /
title: Dokumentacija AI Softphone
sidebar_position: 1
description: Kaj je AI Softphone, na čem deluje in kje je opisan vsak del programa.
---

[AI Softphone](https://ai-softphone.com/) je programski telefon za IP-centralo, ki poleg tega vsak pogovor spremeni v besedilo in pisni povzetek. Pogovor lahko do njega pride na tri načine in vsi trije končajo v isti knjižnici, z enakim posnetkom, prepisom in obdelavo:

- **klic**, opravljen ali sprejet v programu, prek katere koli IP-centrale ali ponudnika SIP;
- **sestanek** v Zoomu, Teams, Meetu ali katerem koli drugem programu, posnet kar z računalnika;
- **posnetek, ki ga že imate** — z mobilnega telefona, diktafona ali iz drugega sistema —, dodan v knjižnico.

Posnetki, prepisi in zgodovina se hranijo v datoteki, ki je vaša. Ne potrebujete ne računa ne naročnine, program pa je prosto programje pod licenco GPL v2.

## Od pogovora do obdelave {#from-a-conversation-to-a-write-up}

1. Pride pogovor: klic, sestanek ali datoteka.
2. Posname se na dva kanala, tako da ostane ločeno, kar ste rekli vi in kar je rekla druga stran.
3. Prepiše se, govorec za govorcem, usklajeno z zvokom.
4. Jezikovni model, ki ste ga izbrali, ga obdela: povzetek, naloge, kategorija, oznake in opozorilni znaki — pogovoru pa lahko zastavite tudi vprašanje.

## Prenos in sistemske zahteve {#download-and-system-requirements}

Program lahko brezplačno prenesete s strani [ai-softphone.com](https://ai-softphone.com/#download): namestitveni program (`.exe`) za Windows, slika diska (`.dmg`) za macOS ter AppImage ali `.deb` za Linux. Namestitveni program, slika diska in AppImage ne potrebujejo ničesar vnaprej nameščenega — Qt, OpenSSL in knjižnice C++ so v njih. Izjema je `.deb`: uporablja knjižnice C++ samega sistema, glejte spodaj. Potrebovali boste račun SIP pri svojem ponudniku ali na centrali, ki jo upravljate sami. Snemanje deluje takoj po namestitvi programa; za prepis in obdelavo potrebujete storitev, ki jo izberete, ali model na lastnem računalniku.

| Sistem | Zahteve |
| --- | --- |
| macOS | macOS 14.4 ali novejši; samo Apple silicon — Mac s procesorjem Intel ga ne more odpreti, niti prek Rosette; grafika Metal; 160 MB prostora na disku in še posnetki. Sistem enkrat vpraša za mikrofon. |
| Windows | Windows 10 različice 1809 (gradnja 17763) ali novejši ter Windows 11; 64-bitni procesor Intel ali AMD; Direct3D 11 ali OpenGL 2.1; 250 MB prostora na disku in še posnetki. |
| Linux | Ubuntu 22.04 LTS ali novejši, Debian 12 ali novejši in vse enako staro — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; knjižnica GNU C 2.35 ali novejša; 64-bitni procesor Intel ali AMD; OpenGL 2.1 ali OpenGL ES 2.0, na X11 ali Waylandu; PipeWire ali PulseAudio (ALSA, kjer ni ne enega ne drugega); 200 MB prostora na disku in še posnetki. Ikona v sistemski vrstici potrebuje namizje s področjem za obvestila o stanju. |

V Linuxu AppImage deluje na kateri koli distribuciji te starosti: označite ga kot izvršljivega in ga zaženite. `.deb` potrebuje še sistemske knjižnice C++ iz GCC 13, ki jih imata Ubuntu 24.04 in Debian 13, Ubuntu 22.04 pa ne; na čemer koli starejšem uporabite AppImage.

Vmesnik je na voljo v tridesetih jezikih; izbere se v [Videzu](/program/appearance) in zamenja brez ponovnega zagona.

Posnetki zaslona v tej dokumentaciji so narejeni v macOS in prikazani pomanjšano: kliknite posnetek, da ga vidite v polni velikosti. V drugih sistemih je program videti in deluje enako.

## Prvi koraki {#first-steps}

1. [Dodajte račun](sip-accounts/setup.md) za svojo centralo ali ponudnika SIP.
2. [Izberite mikrofon in zvočnike](sip-accounts/devices.md) in opravite preizkusni klic.
3. Odločite, [kateri klici se snemajo](recordings/call-recording.md).
4. Dodajte [razpoznavalnik](ai-processing/transcription.md) in [jezikovni model](ai-processing/processing.md), če želite prepise in obdelave.

**Nastavitve → Pregled** vodi ta seznam namesto vas: zelena pika označuje opravljen korak, rdeča korak, ki še ostaja. Glejte [Pregled nastavitev](interface/settings-overview.md).

## Kje brati naprej {#where-to-read-next}

| Če želite… | Preberite |
| --- | --- |
| Se znajti med okni | [Vmesnik](interface/main-window.md) |
| Povezati telefon s centralo | [Nastavitev računa SIP](sip-accounts/setup.md) |
| Izbrati mikrofon, zvočnike in zvonjenje | [Naprave](sip-accounts/devices.md) |
| Nastaviti kodeke, čakajoči klic in dnevnik klicev | [Nastavitve klicev](sip-accounts/calls.md) |
| Postaviti sodelavce na gumbe za en dotik | [Gumbi](sip-accounts/buttons.md) |
| Odločiti, kateri klici se snemajo in kako dolgo | [Snemanje klicev](recordings/call-recording.md) |
| Poslušati, iskati in brati svoje pogovore | [Okno posnetkov](interface/recordings.md) |
| Posneti sestanek v drugem programu | [Zajemanje](capture/capture.md) |
| Izbrati razpoznavalnik, ki govor spremeni v besedilo | [Prepis](ai-processing/transcription.md) |
| Odločiti, katera umetna inteligenca obdeluje vaše pogovore in koliko sme to stati | [Obdelava](ai-processing/processing.md) |
| Spremeniti kategorije, oznake in opozorilne znake | [Slovarji](ai-processing/dictionaries.md) |
| Spremeniti postavitev, temo, zagon in bližnjice | [Videz](program/appearance.md), [Zagon](program/startup.md) in [Bližnjice](program/shortcuts.md) |
| Povezati CRM ali drug program | [Webhooki](integration/webhooks.md) in [Krajevni REST API](integration/rest-api.md) |
| Videti, kaj si govorita telefon in centrala | [Diagnostika](troubleshooting/diagnostics.md) |
| Najti vzrok težave | [Pogoste težave](troubleshooting/common-problems.md) |
| Izklopiti dele programa | [Moduli](application/modules.md) |
| Preveriti različico, posodobitve in vsebino poročila o uporabi | [O programu](application/about.md) |

Strani si sledijo v vrstnem redu zavihkov v **Nastavitvah**.

## Zasebnost {#privacy}

- Privzeto vse ostane na vašem računalniku: posnetki, prepisi in zgodovina so v datoteki, ki je vaša. Nič iz pogovora — ne številka, ne ime, ne beseda tega, kar je bilo rečeno — ne gre nikamor, kamor tega niste poslali sami.
- Gesla računov, vrednost glave webhooka in žeton API-ja se hranijo v shrambi ključev operacijskega sistema, nikoli v datoteki z nastavitvami.
- Nova različica se oglasi, ko izide — nikoli med klicem — in se namesti šele, ko to rečete.
- Program pošlje eno majhno poročilo o uporabi na dan. Preden gre prvo, vam pokaže, kaj vsebuje, in izberete, koliko ga nosi: **Osnovno** ali **Razširjeno**. Nikoli ne vsebuje številk, stikov, naslova vaše centrale ali česar koli, kar je bilo rečeno v pogovoru. Celoten seznam je v [O programu](/application/about#telemetry).
- Program je prosto programje pod licenco GPL v2.
