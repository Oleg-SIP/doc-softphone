---
title: Česti problemi
sidebar_position: 2
description: "\"Što provjeriti kad se račun ne želi registrirati, nema zvuka, poziv ili sastanak nije snimljen, nema prijepisa ili poveznica, prečac ili API ništa ne rade.\""
---

Svaka stavka upućuje na postavku koja o tome odlučuje. Ako odgovora ovdje nema, otvorite [Dijagnostiku](/troubleshooting/diagnostics): prikazuje što si telefon i centrala govore.

## Račun se ne želi registrirati {#the-account-will-not-register}

Točka uz račun u **Postavke → Računi** ostaje siva ili crvena.

1. Provjerite **Korisničko ime**, **Lozinka** i **Adresa poslužitelja** u [obrascu računa](/sip-accounts/setup).
2. Ako vaša centrala provjerava lozinku pod drugim imenom od internog broja, ispunite **Korisnik za provjeru** pod **Postavke poslužitelja**.
3. Provjerite **Prijenos** i **Port** prema onome što centrala očekuje.
4. Otvorite karticu **SIP** u [prozoru dijagnostike](/troubleshooting/diagnostics) i pogledajte zahtjev `REGISTER` i što je poslužitelj odgovorio.

## Ne čujem ili me ne čuju {#i-cannot-hear-or-i-cannot-be-heard}

Otvorite [Postavke → Uređaji](/sip-accounts/devices).

- Recite nešto: traka ispod **Mikrofon** mora se micati. Ako se ne miče, odaberite drugi mikrofon.
- Pritisnite **Provjeri** ispod **Zvučnici** da čujete zvuk na uređaju koji ste odabrali.
- Provjerite klizače **Glasnoća**. **Utišaj mikrofon** na kartici poziva i [prečac](/program/shortcuts) **Utišaj mikrofon** isključuju mikrofon tijekom poziva.
- Zvonjava može biti postavljena na drugi uređaj od onoga na kojem razgovarate — **Zvonjava**, drugi padajući izbornik.

## Poziv zvuči loše ili ne počinje {#the-call-sounds-bad-or-does-not-start}

Kodeci se nude redoslijedom popisa u [Postavke → Pozivi](/sip-accounts/calls#audio-formats). Ostavite uključene kodeke koje koristi vaša centrala i najbolji od njih stavite na prvo mjesto. Promjena vrijedi od sljedećeg poziva.

## Drugi poziv ne zvoni {#a-second-call-does-not-ring}

Što se događa kad vas netko nazove dok ste u razgovoru postavlja se pod [Poziv na čekanju](/sip-accounts/calls#call-waiting).

## Poziv nije snimljen {#a-call-was-not-recorded}

- **Postavke → Snimanje**, prvi padajući izbornik, odlučuje koji se pozivi snimaju; zadano **Ručno** snima samo kad pritisnete snimanje na kartici poziva. Pogledajte [Snimke](/recordings).
- Snimanje počinje kad se netko javi na poziv, pa poziv na koji se nitko nije javio nema datoteku.
- Modul **Snimanje** mora biti uključen u [Modulima](/application/modules).
- Snimke se uklanjaju prema granicama pod **Čuvanje**; prikvačena snimka nikada se ne uklanja.

## Sastanak u drugoj aplikaciji nije uhvaćen {#a-meeting-in-another-application-was-not-captured}

Pogledajte [Hvatanje](/capture/).

- **Dopusti hvatanje zvuka** u **Postavke → Hvatanje** mora biti uključeno.
- Kad je **Automatsko pokretanje** postavljeno na **Pitaj me** (zadano), odgovorite na pitanje kad se pojavi; uz **Nikad** pritisnite **Snimaj** sami.
- Koristite **Provjeri** na istoj kartici: gornji stupac mora se micati kad govorite, donji kad nešto svira.
- Modul **Hvatanje** mora biti uključen u [Modulima](/application/modules).

## Snimka postoji, ali nema prijepisa ni sažetka {#there-is-a-recording-but-no-transcript-or-summary}

- Razgovor se prepisuje i obrađuje sam samo ako je u [Postavke → Obrada](/ai-processing/processing) uključeno **Obrađuj razgovore automatski**. Inače to zatražite u [prozoru Snimke](/interface/recordings).
- Mora postojati [prepoznavač](/ai-processing/transcription) i [jezični model](/ai-processing/processing#language-models), a svaki mora odgovarati na svojoj adresi.
- Kad se dosegne mjesečna **Novčana granica** ili **Granica tokena**, automatska pravila staju do kraja mjeseca. Ono što zatražite sami nikada se ne zaustavlja.
- Koraci u [Postavke → Pregled](/interface/settings-overview) pokazuju što još treba postaviti.

## Telefon je nestao kad sam zatvorio prozor {#the-phone-disappeared-when-i-closed-the-window}

Kad je uključeno **Neka telefon nastavi raditi kad se prozor zatvori**, telefon i dalje radi, a pozivi i dalje stižu. Ikona u području obavijesti (traci izbornika na macOS-u) vraća prozor. Pogledajte [Pokretanje](/program/startup).

## Telefonski broj u pregledniku ili CRM-u ne zove {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Pritisnite **Otvaraj poveznice za poziv ovim telefonom** u [Postavke → Pokretanje](/program/startup#call-links). Kliknuti broj stiže u polje za biranje i tamo čeka, osim ako je uključeno **Nazovi odmah, bez pritiska na Nazovi**.

## Lampica gumba ostaje siva {#a-buttons-lamp-stays-grey}

Centrala ne kaže je li interni broj slobodan. Gumb i dalje bira. Pogledajte [Gumbi](/sip-accounts/buttons).

## REST API ne odgovara {#the-rest-api-does-not-answer}

- **Dopusti drugim programima na ovom računalu da upravljaju telefonom** mora biti uključeno u [Postavke → Integracija](/integration/rest-api), a modul **Integracija** u [Modulima](/application/modules).
- Adresa je `http://127.0.0.1:8377`, osim ako ste promijenili **Port**.
- Skupina koju niste otvorili pod **Pristup** na svaki zahtjev odgovara s `404`.
- Ako ste postavili **Token**, zahtjevi koji mijenjaju spremljene podatke moraju ga nositi u zaglavlju `Authorization`.
- Više simptoma nalazi se u odjeljku [Kad ne radi](/integration/rest-api#when-it-does-not-work).

## Webhookovi ne stižu {#webhooks-do-not-arrive}

Pritisnite **Pošalji probni događaj** u [Postavke → Integracija](/integration/webhooks). Brojači `webhooks_failed_total` i `webhooks_dropped_total` u REST API-ju pokazuju kako ide isporuka; [Kad ništa ne stiže](/integration/webhooks#when-nothing-arrives) navodi što svaki od njih znači.

## Prečac ništa ne radi {#a-hotkey-does-nothing}

Otvorite [Prečaci](/program/shortcuts). Prečac radi dok je telefon program koji koristite; da biste ga koristili iz bilo kojeg programa, označite **Svugdje**. Kliknite prečac i ponovno pritisnite kombinaciju ako ju je preuzeo drugi program.
