---
title: Česti problemi
sidebar_position: 2
description: "Što provjeriti kad se račun ne želi registrirati, nema zvuka, poziv ili sastanak nije snimljen, nema prijepisa, šaptač se ne pokreće ili poveznica, prečac ili API ništa ne rade, te što znače poruke samog telefona."
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
- Kad je **Automatsko pokretanje** postavljeno na **Pitaj me** (zadano), odgovorite na pitanje kad se pojavi; uz **Nikad** pritisnite gumb za snimanje sami.
- Koristite **Provjeri** na istoj kartici: gornji stupac mora se micati kad govorite, donji kad nešto svira.
- Modul **Hvatanje** mora biti uključen u [Modulima](/application/modules).

## Snimka postoji, ali nema prijepisa ni sažetka {#there-is-a-recording-but-no-transcript-or-summary}

- Razgovor se prepisuje i obrađuje sam samo ako je u [Postavke → Obrada](/ai-processing/processing) uključeno **Obrađuj razgovore automatski**. Inače to zatražite u [prozoru Snimke](/interface/recordings).
- Mora postojati [prepoznavač](/ai-processing/transcription) i [jezični model](/ai-processing/processing#language-models), a svaki mora odgovarati na svojoj adresi.
- Kad se dosegne mjesečna **Novčana granica** ili **Granica tokena**, automatska pravila staju do kraja mjeseca. Ono što zatražite sami nikada se ne zaustavlja.
- Koraci u [Postavke → Pregled](/interface/settings-overview) pokazuju što još treba postaviti.

## Šaptač se ne pojavljuje ili se ne pokreće {#the-prompter-does-not-appear-or-does-not-start}

**Šaptač** se pojavljuje na popisu pri dnu telefona samo kad postoje tri stvari: prepoznavač s **Adresa za šaptača** koji je prošao svoj **Provjeri** u [Postavke → Prijepis](/ai-processing/transcription#live-recognition-for-the-prompter), jezični model i kvačica **Dopusti korištenje šaptača** u [Postavke → Šaptač](/ai-processing/prompter). Modul **Šaptač** mora biti uključen u [Moduli](/application/modules).

Ako se prozor otvori, a šaptač se ne pokrene, redak ispod njegovih gumba kaže što nedostaje. [Kad se ne pokreće](/interface/prompter#when-it-does-not-start) navodi sve poruke i što učiniti.

## Telefon je nestao kad sam zatvorio prozor {#the-phone-disappeared-when-i-closed-the-window}

Kad je uključeno **Neka telefon nastavi raditi kad se prozor zatvori**, telefon i dalje radi, a pozivi i dalje stižu. Ikona u području obavijesti (traci izbornika na macOS-u) vraća prozor. Na radnoj površini bez područja obavijesti telefon je minimiziran na programskoj traci. Pogledajte [Pokretanje](/program/startup).

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

## Poruke telefona {#messages-the-phone-shows}

Kad se nešto ne dogodi, telefon u zasebnom retku kaže zašto. Redak ispod popisa sam nestaje nakon nekoliko sekundi.

### Kad poziv ne krene {#when-a-call-is-not-placed}

| Poruka | Što učiniti |
| --- | --- |
| *Nije postavljen nijedan račun* | Dodajte račun u [Postavke → Računi](/sip-accounts/setup). |
| *Nijedan račun nije uključen, pa nema linije s koje bi se zvalo.* | Označite potvrdni okvir računa u **Postavke → Računi**. |
| *Nijedna linija još nije registrirana.* | Račun je uključen, ali još nije registriran na centrali. Pričekajte da mu točka pozeleni; ako ne pozeleni, pogledajte [Račun se ne želi registrirati](#the-account-will-not-register). |
| *Već traje onoliko razgovora koliko ovaj telefon nosi.* | Prekinite jedan od poziva pa nazovite ponovno. |
| *Račun s kojeg bi se ovo zvalo više ne postoji.* | Redak pripada računu koji je u međuvremenu izbrisan. Birajte broj na brojčaniku. |
| *Ovaj redak nema broja za uzvrat.* | Pozivatelj je sakrio broj, pa nemate koga nazvati natrag. |

### Kad se račun ne poveže {#when-an-account-does-not-connect}

| Poruka | Što učiniti |
| --- | --- |
| *Ta se adresa poslužitelja nije mogla pronaći. Provjerite ima li tipfelera.* | Provjerite **Adresa poslužitelja** u [obrascu računa](/sip-accounts/setup). |
| *Poslužitelj se nije mogao dosegnuti. Provjerite adresu, port i svoju mrežu.* | Provjerite **Adresa poslužitelja**, kao i **Prijenos** i **Port** pod **Postavke poslužitelja**. SIP može zaustavljati i vatrozid. |
| *Poslužitelj je odbio ovo korisničko ime ili lozinku.* | Provjerite **Korisničko ime** i **Lozinka**. Ako centrala provjerava lozinku pod drugim imenom, ispunite **Korisnik za provjeru**. |
| *Certifikat poslužitelja nije moguće provjeriti. Ako ga je administrator poslužitelja sam izdao, poništite „Provjeravaj certifikat” u „Postavke poslužitelja”.* | Pojavljuje se kod TLS veze. Ako centrala koristi certifikat koji je sama napravila, uklonite oznaku **Provjeravaj certifikat** pod **Postavke poslužitelja**. |
| *Lozinka ovog računa nije se mogla pročitati iz privjeska. Otključajte ga i povežite se ponovno.* | Otključajte spremnik lozinki računala (na macOS-u Privjesak ključeva), zatim pritisnite **Poveži** uz račun. |

### Tijekom poziva {#during-a-call}

| Poruka | Što učiniti |
| --- | --- |
| *Nema zajedničkog zvučnog formata* | Centrala i telefon nemaju zajednički kodek. Uključite neki koji centrala koristi u [Zvučni formati](/sip-accounts/calls#audio-formats). |
| *Nema ni mikrofona ni zvučnika* | Odaberite uređaje u [Postavke → Uređaji](/sip-accounts/devices). |
| *Ne snima se: disk je pao do granice. Oslobodite mjesto ili promijenite granicu u postavkama.* | Slobodni prostor na disku pao je na **Prag prostora na disku** — pogledajte [Snimke](/recordings). Oslobodite prostor ili smanjite prag. |

### Pri pokretanju telefona {#when-the-phone-starts}

*Baza podataka se ne može pročitati* znači da je bazu podataka napravila druga inačica programa i ova je ne može pročitati. Obično je starija inačica pokrenuta na podacima novije: ako ponovno instalirate noviju inačicu, ona otvara bazu kakva je bila. **Počni ispočetka** umjesto toga radi praznu bazu — svaki kontakt i svaki poziv u povijesti nestaju, i to se ne može poništiti. Prije nego što pritisnete, možete sačuvati kopiju datoteke baze; [Dijagnostika](/troubleshooting/diagnostics#files) kaže gdje se nalazi.
