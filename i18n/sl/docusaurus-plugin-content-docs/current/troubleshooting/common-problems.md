---
title: Pogoste težave
sidebar_position: 2
description: "\"Kaj preveriti, ko se račun noče registrirati, ni zvoka, klic ali sestanek ni bil posnet, ni prepisa ali povezava, bližnjica ali API ne naredi ničesar.\""
---

Vsak vnos kaže na nastavitev, ki o tem odloča. Če odgovora ni tukaj, odprite [Diagnostiko](/troubleshooting/diagnostics): pokaže, kaj si govorita telefon in centrala.

## Račun se noče registrirati {#the-account-will-not-register}

Pika ob računu v **Nastavitve → Računi** ostane siva ali rdeča.

1. Preverite **Uporabniško ime**, **Geslo** in **Naslov strežnika** v [obrazcu računa](/sip-accounts/setup).
2. Če vaša centrala preverja geslo pod drugim imenom kot interno številko, izpolnite **Uporabnik za preverjanje** pod **Nastavitve strežnika**.
3. Preverite **Prenos** in **Vrata** glede na to, kar centrala pričakuje.
4. Odprite zavihek **SIP** v [oknu diagnostike](/troubleshooting/diagnostics) in poglejte zahtevo `REGISTER` in kaj je strežnik odgovoril.

## Ne slišim ali me ne slišijo {#i-cannot-hear-or-i-cannot-be-heard}

Odprite [Nastavitve → Naprave](/sip-accounts/devices).

- Recite kaj: vrstica pod **Mikrofon** se mora premikati. Če se ne, izberite drug mikrofon.
- Pritisnite **Preveri** pod **Zvočniki**, da slišite zvok na izbrani napravi.
- Preverite drsnike **Glasnost**. **Utišaj mikrofon** na kartici klica in [bližnjica](/program/shortcuts) **Utišaj mikrofon** med klicem izklopita mikrofon.
- Zvonjenje je lahko nastavljeno na drugo napravo kot tisto, na kateri se pogovarjate — **Zvonjenje**, drugi spustni seznam.

## Klic zveni slabo ali se ne začne {#the-call-sounds-bad-or-does-not-start}

Kodeki se ponujajo v vrstnem redu seznama v [Nastavitve → Klici](/sip-accounts/calls#audio-formats). Pustite vklopljene kodeke, ki jih uporablja vaša centrala, in najboljšega postavite na prvo mesto. Sprememba velja od naslednjega klica.

## Drugi klic ne zvoni {#a-second-call-does-not-ring}

Kaj se zgodi, ko vas kdo kliče, medtem ko ste v pogovoru, se nastavi pod [Čakajoči klic](/sip-accounts/calls#call-waiting).

## Klic ni bil posnet {#a-call-was-not-recorded}

- **Nastavitve → Snemanje**, prvi spustni seznam, odloča, kateri klici se snemajo; privzeto **Ročno** snema le, ko pritisnete snemanje na kartici klica. Glejte [Posnetki](/recordings).
- Snemanje se začne, ko je klic sprejet, zato nesprejet klic nima datoteke.
- Modul **Snemanje** mora biti vklopljen v [Modulih](/application/modules).
- Posnetki se odstranjujejo po mejah pod **Hramba**; pripet posnetek se nikoli ne odstrani.

## Sestanek v drugem programu ni bil zajet {#a-meeting-in-another-application-was-not-captured}

Glejte [Zajemanje](/capture/).

- **Dovoli zajemanje zvoka** v **Nastavitve → Zajemanje** mora biti vklopljeno.
- Ko je **Samodejni zagon** nastavljen na **Vprašaj me** (privzeto), odgovorite na vprašanje, ko se pojavi; pri **Nikoli** pritisnite **Snemaj** sami.
- Uporabite **Preveri** na istem zavihku: zgornji stolpec se mora premikati, ko govorite, spodnji, ko kaj igra.
- Modul **Zajemanje** mora biti vklopljen v [Modulih](/application/modules).

## Posnetek je, prepisa ali povzetka pa ni {#there-is-a-recording-but-no-transcript-or-summary}

- Pogovor se prepiše in obdela sam le, če je v [Nastavitve → Obdelava](/ai-processing/processing) vklopljeno **Obdeluj pogovore samodejno**. Drugače ga zahtevajte v [oknu Posnetki](/interface/recordings).
- Obstajati morata [razpoznavalnik](/ai-processing/transcription) in [jezikovni model](/ai-processing/processing#language-models), vsak pa mora odgovarjati na svojem naslovu.
- Ko je dosežena mesečna **Denarna meja** ali **Meja žetonov**, se samodejna pravila ustavijo do konca meseca. Kar zahtevate sami, se nikoli ne ustavi.
- Koraki v [Nastavitve → Pregled](/interface/settings-overview) kažejo, kaj je še treba nastaviti.

## Telefon je izginil, ko sem zaprl okno {#the-phone-disappeared-when-i-closed-the-window}

Ko je vklopljeno **Pusti telefon teči, ko se okno zapre**, telefon še vedno teče in klici še vedno prihajajo. Ikona v področju za obvestila (v menijski vrstici v macOS) vrne okno. Glejte [Zagon](/program/startup).

## Telefonska številka v brskalniku ali CRM ne pokliče {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Pritisnite **Odpiraj povezave za klic s tem telefonom** v [Nastavitve → Zagon](/program/startup#call-links). Kliknjena številka pride v polje za klicanje in tam čaka, razen če je vklopljeno **Pokliči takoj, brez pritiska na Pokliči**.

## Lučka gumba ostane siva {#a-buttons-lamp-stays-grey}

Centrala ne pove, ali je interna številka prosta. Gumb še vedno kliče. Glejte [Gumbi](/sip-accounts/buttons).

## REST API ne odgovarja {#the-rest-api-does-not-answer}

- **Dovoli drugim programom na tem računalniku upravljati telefon** mora biti vklopljeno v [Nastavitve → Integracija](/integration/rest-api), modul **Integracija** pa v [Modulih](/application/modules).
- Naslov je `http://127.0.0.1:8377`, razen če ste spremenili **Vrata**.
- Skupina, ki je niste odprli pod **Dostop**, na vsako zahtevo odgovori z `404`.
- Če ste nastavili **Žeton**, ga morajo zahteve, ki spreminjajo shranjene podatke, nositi v glavi `Authorization`.
- Več simptomov je v razdelku [Ko ne deluje](/integration/rest-api#when-it-does-not-work).

## Webhooki ne prihajajo {#webhooks-do-not-arrive}

Pritisnite **Pošlji preizkusni dogodek** v [Nastavitve → Integracija](/integration/webhooks). Števca `webhooks_failed_total` in `webhooks_dropped_total` v REST API-ju kažeta, kako poteka dostava; [Ko nič ne pride](/integration/webhooks#when-nothing-arrives) navaja, kaj pomeni vsak od njiju.

## Bližnjica ne naredi ničesar {#a-hotkey-does-nothing}

Odprite [Bližnjice](/program/shortcuts). Bližnjica deluje, ko je telefon program, ki ga uporabljate; da jo uporabljate iz katerega koli programa, označite **Povsod**. Kliknite bližnjico in znova pritisnite kombinacijo, če jo je prevzel drug program.
