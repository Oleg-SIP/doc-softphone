---
slug: /
title: Dokumentation för AI Softphone
sidebar_position: 1
description: Vad AI Softphone är, vad det körs på och var varje del av programmet beskrivs.
---

[AI Softphone](https://ai-softphone.com/) är en softphone för en IP-växel som också gör varje samtal till text och en skriftlig sammanfattning. Ett samtal kan komma in på tre sätt, och alla tre hamnar i samma bibliotek med samma inspelning, utskrift och sammanfattning:

- **ett samtal** som rings eller tas emot i programmet, via vilken IP-växel eller SIP-operatör som helst;
- **ett möte** i Zoom, Teams, Meet eller något annat program, inspelat från själva datorn;
- **en inspelning du redan har** — från en mobiltelefon, en diktafon eller ett annat system — tillagd i biblioteket.

Inspelningar, utskrifter och historik sparas i en fil som du äger. Inget konto eller abonnemang behövs, och programmet är fri programvara under GPL v2.

## Från ett samtal till en sammanfattning {#from-a-conversation-to-a-write-up}

1. Ett samtal kommer in: ett telefonsamtal, ett möte eller en fil.
2. Det spelas in på två kanaler, så att det du sa och det den andra sidan sa hålls isär.
3. Det skrivs ut, talare för talare, i takt med ljudet.
4. Språkmodellen du har valt sammanfattar det: sammanfattning, uppgifter, kategori, etiketter och signaler — och du kan ställa en fråga till samtalet.

## Nedladdning och systemkrav {#download-and-system-requirements}

Programmet kan laddas ner gratis från [ai-softphone.com](https://ai-softphone.com/#download): ett installationsprogram (`.exe`) för Windows, en skivavbild (`.dmg`) för macOS och en AppImage eller en `.deb` för Linux. Installationsprogrammet, skivavbilden och AppImage kräver inget annat installerat först — Qt, OpenSSL och C++-körtiden följer med i dem. Undantaget är `.deb`: den använder systemets egen C++-körtid, se nedan. Du behöver ett SIP-konto, från din operatör eller från växeln du själv driver. Inspelning fungerar så snart programmet är installerat; utskriften och sammanfattningen kräver en tjänst du väljer eller en modell på din egen dator.

| System | Krav |
| --- | --- |
| macOS | macOS 14.4 eller senare; endast Apple silicon — en Intel-Mac kan inte öppna det, inte ens via Rosetta; Metal-grafik; 160 MB diskutrymme, plus inspelningarna. Systemet frågar en gång om mikrofonen. |
| Windows | Windows 10 version 1809 (build 17763) eller senare, och Windows 11; 64-bitars Intel- eller AMD-processor; Direct3D 11 eller OpenGL 2.1; 250 MB diskutrymme, plus inspelningarna. |
| Linux | Ubuntu 22.04 LTS eller senare, Debian 12 eller senare och allt från samma tid — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C-bibliotek 2.35 eller senare; 64-bitars Intel- eller AMD-processor; OpenGL 2.1 eller OpenGL ES 2.0, på X11 eller Wayland; PipeWire eller PulseAudio (ALSA där ingen av dem finns); 200 MB diskutrymme, plus inspelningarna. Ikonen i statusfältet kräver ett skrivbord med ett meddelandefält. |

På Linux körs AppImage på varje distribution från samma tid: gör filen körbar och starta den. `.deb` kräver dessutom systemets egen C++-körtid från GCC 13, som Ubuntu 24.04 och Debian 13 har men inte Ubuntu 22.04; på allt äldre bör du ta AppImage.

Gränssnittet finns på trettio språk, väljs under [Utseende](/program/appearance) och byts utan omstart.

Skärmbilderna i den här dokumentationen är tagna på macOS och visas små: klicka på en för att se den i full storlek. Programmet ser likadant ut och fungerar likadant på de andra systemen.

## Första stegen {#first-steps}

1. [Lägg till ett konto](sip-accounts/setup.md) för din växel eller SIP-operatör.
2. [Välj mikrofon och högtalare](sip-accounts/devices.md) och ring ett testsamtal.
3. Bestäm [vilka samtal som spelas in](recordings/call-recording.md).
4. Lägg till en [igenkännare](ai-processing/transcription.md) och en [språkmodell](ai-processing/processing.md) om du vill ha utskrifter och sammanfattningar.

**Inställningar → Översikt** håller den här listan åt dig: en grön prick markerar ett steg som är klart, en röd ett steg som återstår. Se [Översikt över inställningarna](interface/settings-overview.md).

## Vad du kan läsa härnäst {#where-to-read-next}

| Om du vill … | Läs |
| --- | --- |
| Hitta i fönstren | [Gränssnitt](interface/main-window.md) |
| Ansluta telefonen till din växel | [Konfigurera ett SIP-konto](sip-accounts/setup.md) |
| Välja mikrofon, högtalare och ringsignal | [Enheter](sip-accounts/devices.md) |
| Ställa in kodekar, samtal väntar och samtalshistoriken | [Samtalsinställningar](sip-accounts/calls.md) |
| Lägga kolleger på knappar med ett tryck | [Knappar](sip-accounts/buttons.md) |
| Bestämma vilka samtal som spelas in och hur länge | [Spela in samtal](recordings/call-recording.md) |
| Lyssna på, söka i och läsa dina samtal | [Fönstret Inspelningar](recordings/recordings-window.md) |
| Spela in ett möte som hålls i ett annat program | [Fångst](capture/capture.md) |
| Välja igenkännaren som gör tal till text | [Transkription](ai-processing/transcription.md) |
| Bestämma vilken AI som sammanfattar dina samtal och vad det får kosta | [Bearbetning](ai-processing/processing.md) |
| Ändra kategorierna, etiketterna och signalerna | [Ordlistor](ai-processing/dictionaries.md) |
| Ändra layout, tema, uppstart och genvägar | [Utseende](program/appearance.md), [Uppstart](program/startup.md) och [Genvägar](program/shortcuts.md) |
| Ansluta ett CRM eller ett annat program | [Webhookar](integration/webhooks.md) och [Lokalt REST-API](integration/rest-api.md) |
| Se vad telefonen och växeln säger till varandra | [Diagnostik](troubleshooting/diagnostics.md) |
| Hitta orsaken till ett problem | [Vanliga problem](troubleshooting/common-problems.md) |
| Stänga av delar av programmet | [Moduler](application/modules.md) |
| Kontrollera versionen, uppdateringarna och vad användningsrapporten innehåller | [Om](application/about.md) |

Sidorna följer ordningen på flikarna i **Inställningar**.

## Integritet {#privacy}

- Som standard stannar allt på din dator: inspelningar, utskrifter och historik ligger i en fil som du äger. Ingenting från ett samtal — varken ett nummer, ett namn eller ett ord av det som sades — skickas någonstans dit du inte själv har skickat det.
- Kontolösenord, webhookens huvudvärde och API-nyckeln sparas i operativsystemets nyckelring, aldrig i en inställningsfil.
- En ny version meddelar sig när den kommer — aldrig under ett samtal — och installeras först när du säger till.
- Programmet skickar en liten användningsrapport om dagen. Du får se vad den innehåller innan den första skickas, och du väljer hur mycket den innehåller: **Enkelt** eller **Utökat**. Den innehåller aldrig nummer, kontakter, adressen till din växel eller något som sagts i ett samtal. Hela listan finns under [Om](/application/about#telemetry).
- Programmet är fri programvara under GPL v2.
