---
title: Diagnostika
sidebar_position: 1
description: Okno, ki prikazuje vsako besedo, ki si jo izmenjata telefon in centrala, dnevniško datoteko in kje program hrani svoje datoteke.
---

Okno **Diagnostika** prikazuje, kaj si govorita telefon in centrala, prav ko to govorita. To je prvo mesto, kamor pogledate, ko se račun noče registrirati ali se klic ne vzpostavi, in okno, za katerega vas bo oddelek IT prosil, da ga pošljete.

Odpre se iz **Nastavitve → Diagnostika** z gumbom **Odpri diagnostiko**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Okno Diagnostika" />

Prikazuje vsako sporočilo SIP, ki ga telefon pošlje ali prejme, medtem ko se to dogaja, skupaj z zvočno statistiko klicev v teku. Podatke zbira le, ko je odprto, in po zaprtju ne obdrži ničesar.

## SIP {#sip}

Zavihek **SIP** je dnevnik signalizacije.

- Vsako sporočilo je vrstica s časom (na milisekundo natančno), tem, kaj je, in kam je šlo: puščica v desno pomeni poslano s telefona, puščica v levo prejeto s strežnika. Pod njo: `to` ali `from` naslov strežnika in prenos (na primer *prek UDP*).
- Sporočilo je mogoče razširiti, da pokaže celotne glave (tretje sporočilo na sliki).
- **Išči** najde besedilo v dnevniku.
- **Izprazni** ga izprazni.

Primer na posnetku zaslona je zdrava registracija: telefon pošlje `REGISTER`, strežnik odgovori `200 OK (REGISTER)`.

## Klici {#calls}

Drugi zavihek, **Klici**, prikazuje kazalnike kakovosti vsakega klica v teku.

## Zavihek Diagnostika v nastavitvah {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Nastavitve → Diagnostika" />

### Podrobnost dnevnika {#log-detail}

Spustni seznam izbere, koliko program zapiše v svojo dnevniško datoteko; na sliki je to **Podrobno**. Učinkuje takoj, tudi pri klicu, ki že teče — prav o njem želite imeti zapis. Najpodrobnejša nastavitev zapiše vsako sporočilo SIP. To je veliko, a gesla se odstranijo, preden se kar koli zapiše, zato je datoteko varno poslati z zahtevkom za podporo.

**Pošlji kopijo v sistemski dnevnik** dnevnik zapiše tudi v lasten dnevnik sistema, za računalnik, katerega dnevniki se zbirajo centralno. Spodnja datoteka se zapiše v vsakem primeru in prav njo priložite zahtevku za podporo.

### Datoteke {#files}

Zavihek navaja, kje program hrani svoje datoteke in kako velika je vsaka. V macOS:

| Datoteka | Kje | Vsebuje |
| --- | --- | --- |
| Nastavitve | `~/Library/Preferences/ai-softphone/settings.json` | Nastavitve. Nikoli gesel ali žetonov. |
| Zbirka podatkov | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Stike, zgodovino, prepise in obdelave. |
| Posnetki | `~/Library/Application Support/ai-softphone/recordings` | Zvok posnetkov. |
| Dnevnik | `~/Library/Logs/ai-softphone/ai-softphone.log` | Dnevnik. |

Pod seznamom **Odpri** pokaže dnevnik, **Izprazni** pa ga izprazni. Dnevnik izpraznite tik preden ponovite težavo; praznjenja ni mogoče razveljaviti.

## Kaj poslati podpori {#what-to-send-to-support}

1. Nastavite **Podrobnost dnevnika** na najpodrobnejšo raven.
2. Pritisnite **Izprazni**, nato ponovite težavo.
3. Pošljite dnevniško datoteko ali odprite **Nastavitve → O programu**, nam pišite od tam in označite **Priloži dnevnik** — glejte [O programu](../application/about.md#feedback).

Pri težavi z registracijo ali klicem pošljite tudi vrstice neuspelega poskusa z zavihka **SIP**.

Del programa, ki stoji za vsem tem — sled SIP, statistika medijev in števci —, je mogoče izklopiti v [Modulih](../application/modules.md) (**Diagnostika**).
