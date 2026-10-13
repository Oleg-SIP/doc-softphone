---
title: Česti problemi
sidebar_position: 2
description: "Šta proveriti kada nalog neće da se registruje, nema zvuka, poziv ili sastanak nije snimljen, nema prepisa, šaptač se ne pokreće ili veza, prečica ili API ništa ne rade, kao i šta znače poruke samog telefona."
---

Svaka stavka upućuje na podešavanje koje o tome odlučuje. Ako odgovora ovde nema, otvorite [Dijagnostiku](/troubleshooting/diagnostics): prikazuje šta jedno drugom govore telefon i centrala.

## Nalog neće da se registruje {#the-account-will-not-register}

Tačka pored naloga u **Podešavanja → Nalozi** ostaje siva ili crvena.

1. Proverite **Korisničko ime**, **Lozinka** i **Adresa servera** u [obrascu naloga](/sip-accounts/setup).
2. Ako vaša centrala proverava lozinku pod drugim imenom od internog broja, popunite **Korisnik za prijavu** pod **Podešavanja servera**.
3. Proverite **Prenos** i **Port** prema onome što centrala očekuje.
4. Otvorite karticu **SIP** u [prozoru dijagnostike](/troubleshooting/diagnostics) i pogledajte zahtev `REGISTER` i šta je server odgovorio.

## Ne čujem ili me ne čuju {#i-cannot-hear-or-i-cannot-be-heard}

Otvorite [Podešavanja → Uređaji](/sip-accounts/devices).

- Recite nešto: traka ispod **Mikrofon** mora da se pomera. Ako se ne pomera, izaberite drugi mikrofon.
- Pritisnite **Isprobaj** ispod **Zvučnici** da čujete zvuk na uređaju koji ste izabrali.
- Proverite klizače **Jačina**. **Isključi mikrofon** na kartici poziva i [prečica](/program/shortcuts) **Isključi mikrofon** isključuju mikrofon tokom poziva.
- Zvono može biti podešeno na drugi uređaj od onog na kom razgovarate — **Zvono**, drugi padajući meni.

## Poziv zvuči loše ili ne počinje {#the-call-sounds-bad-or-does-not-start}

Kodeci se nude redosledom spiska u [Podešavanja → Pozivi](/sip-accounts/calls#audio-formats). Ostavite uključene kodeke koje koristi vaša centrala i najbolji od njih stavite na prvo mesto. Izmena važi od sledećeg poziva.

## Drugi poziv ne zvoni {#a-second-call-does-not-ring}

Šta se dešava kada vas neko pozove dok ste u razgovoru podešava se pod [Poziv na čekanju](/sip-accounts/calls#call-waiting).

## Poziv nije snimljen {#a-call-was-not-recorded}

- **Podešavanja → Snimanje**, prvi padajući meni, odlučuje koji se pozivi snimaju; podrazumevano **Ručno** snima samo kada pritisnete snimanje na kartici poziva. Pogledajte [Snimci](/recordings).
- Snimanje počinje kada se neko javi na poziv, pa poziv na koji se niko nije javio nema datoteku.
- Modul **Snimanje** mora biti uključen u [Modulima](/application/modules).
- Snimci se uklanjaju prema granicama pod **Čuvanje**; zakačen snimak se nikada ne uklanja.

## Sastanak u drugoj aplikaciji nije uhvaćen {#a-meeting-in-another-application-was-not-captured}

Pogledajte [Hvatanje](/capture/).

- **Dozvoli hvatanje zvuka** u **Podešavanja → Hvatanje** mora biti uključeno.
- Kada je **Automatsko pokretanje** podešeno na **Pitaj me** (podrazumevano), odgovorite na pitanje kada se pojavi; uz **Nikad** pritisnite dugme za snimanje sami.
- Koristite **Isprobaj** na istoj kartici: gornja traka mora da se pomera kada govorite, donja kada nešto svira.
- Modul **Hvatanje** mora biti uključen u [Modulima](/application/modules).

## Snimak postoji, ali nema prepisa ni sažetka {#there-is-a-recording-but-no-transcript-or-summary}

- Razgovor se prepisuje i obrađuje sam samo ako je u [Podešavanja → Obrada](/ai-processing/processing) uključeno **Obrađuj razgovore samostalno**. Inače to zatražite u [prozoru Snimci](/interface/recordings).
- Mora da postoje [prepoznavač](/ai-processing/transcription) i [jezički model](/ai-processing/processing#language-models), a svaki mora da odgovara na svojoj adresi.
- Kada se dostigne mesečna **Novčana granica** ili **Granica žetona**, automatska pravila staju do kraja meseca. Ono što zatražite sami nikada se ne zaustavlja.
- Koraci u [Podešavanja → Pregled](/interface/settings-overview) pokazuju šta još treba podesiti.

## Šaptač se ne pojavljuje ili se ne pokreće {#the-prompter-does-not-appear-or-does-not-start}

**Šaptač** se pojavljuje na listi pri dnu telefona samo kada postoje tri stvari: prepoznavač sa **Adresa za šaptača** koji je prošao svoj **Isprobaj** u [Podešavanja → Prepisivanje](/ai-processing/transcription#live-recognition-for-the-prompter), jezički model i oznaka **Dozvoli korišćenje šaptača** u [Podešavanja → Šaptač](/ai-processing/prompter). Modul **Šaptač** mora biti uključen u [Moduli](/application/modules).

Ako se prozor otvori, a šaptač se ne pokrene, red ispod njegovih dugmadi kaže šta nedostaje. [Kada se ne pokreće](/interface/prompter#when-it-does-not-start) navodi sve poruke i šta treba uraditi.

## Telefon je nestao kada sam zatvorio prozor {#the-phone-disappeared-when-i-closed-the-window}

Kada je uključeno **Neka telefon radi i kada se prozor zatvori**, telefon i dalje radi, a pozivi i dalje stižu. Ikona u oblasti obaveštenja (traci menija na macOS-u) vraća prozor. Na radnoj površini bez oblasti obaveštenja telefon je umanjen na traci zadataka. Pogledajte [Pokretanje](/program/startup).

## Telefonski broj u pregledaču ili CRM-u ne poziva {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Pritisnite **Otvaraj veze za pozivanje ovim telefonom** u [Podešavanja → Pokretanje](/program/startup#call-links). Kliknuti broj stiže u polje za biranje i tamo čeka, osim ako je uključeno **Pozovi odmah, bez pritiska na Pozovi**.

## Lampica dugmeta ostaje siva {#a-buttons-lamp-stays-grey}

Centrala ne kaže da li je interni broj slobodan. Dugme i dalje bira. Pogledajte [Dugmad](/sip-accounts/buttons).

## REST API ne odgovara {#the-rest-api-does-not-answer}

- **Dozvoli drugim programima na ovom računaru da upravljaju telefonom** mora biti uključeno u [Podešavanja → Povezivanje](/integration/rest-api), a modul **Povezivanje** u [Modulima](/application/modules).
- Adresa je `http://127.0.0.1:8377`, osim ako ste promenili **Port**.
- Grupa koju niste otvorili pod **Pristup** na svaki zahtev odgovara sa `404`.
- Ako ste podesili **Žeton**, zahtevi koji menjaju sačuvane podatke moraju da ga nose u zaglavlju `Authorization`.
- Više simptoma nalazi se u odeljku [Kada ne radi](/integration/rest-api#when-it-does-not-work).

## Veb-kuke ne stižu {#webhooks-do-not-arrive}

Pritisnite **Pošalji probni događaj** u [Podešavanja → Povezivanje](/integration/webhooks). Brojači `webhooks_failed_total` i `webhooks_dropped_total` u REST API-ju pokazuju kako ide isporuka; [Kada ništa ne stiže](/integration/webhooks#when-nothing-arrives) navodi šta svaki od njih znači.

## Prečica ništa ne radi {#a-hotkey-does-nothing}

Otvorite [Prečice](/program/shortcuts). Prečica radi dok je telefon program koji koristite; da biste je koristili iz bilo kog programa, označite **Svuda**. Kliknite prečicu i ponovo pritisnite kombinaciju ako ju je preuzeo drugi program.

## Poruke telefona {#messages-the-phone-shows}

Kada se nešto ne dogodi, telefon u posebnom redu kaže zašto. Red ispod liste sam nestaje posle nekoliko sekundi.

### Kada poziv ne krene {#when-a-call-is-not-placed}

| Poruka | Šta uraditi |
| --- | --- |
| *Nijedan nalog nije podešen* | Dodajte nalog u [Podešavanja → Nalozi](/sip-accounts/setup). |
| *Nijedan nalog nije uključen, pa nema linije za pozivanje.* | Označite polje za potvrdu naloga u **Podešavanja → Nalozi**. |
| *Nijedna linija još nije prijavljena.* | Nalog je uključen, ali još nije registrovan na centrali. Sačekajte da mu tačka pozeleni; ako ne pozeleni, pogledajte [Nalog neće da se registruje](#the-account-will-not-register). |
| *U toku je onoliko poziva koliko ovaj telefon podnosi.* | Prekinite jedan od poziva pa pozovite ponovo. |
| *Naloga s kojeg bi ovaj poziv krenuo više nema.* | Red pripada nalogu koji je u međuvremenu obrisan. Birajte broj na brojčaniku. |
| *Ovaj red nema broj za uzvraćanje poziva.* | Pozivalac je sakrio broj, pa nemate koga da pozovete nazad. |

### Kada se nalog ne poveže {#when-an-account-does-not-connect}

| Poruka | Šta uraditi |
| --- | --- |
| *Ta adresa servera nije pronađena. Proverite da nema greške u kucanju.* | Proverite **Adresa servera** u [obrascu naloga](/sip-accounts/setup). |
| *Server nije dostupan. Proverite adresu, port i svoju mrežu.* | Proverite **Adresa servera**, kao i **Prenos** i **Port** pod **Podešavanja servera**. SIP može da zaustavlja i zaštitni zid. |
| *Server je odbio ovo korisničko ime ili lozinku.* | Proverite **Korisničko ime** i **Lozinka**. Ako centrala proverava lozinku pod drugim imenom, popunite **Korisnik za prijavu**. |
| *Sertifikat servera nije moguće proveriti. Ako ga je administrator servera sam izdao, isključite „Proveravaj sertifikat” u „Podešavanja servera”.* | Pojavljuje se kod TLS veze. Ako centrala koristi sertifikat koji je sama napravila, uklonite oznaku **Proveravaj sertifikat** pod **Podešavanja servera**. |
| *Lozinka ovog naloga nije mogla da se pročita iz priveska. Otključajte ga i povežite se ponovo.* | Otključajte skladište lozinki računara (na macOS-u Keychain), zatim pritisnite **Poveži** pored naloga. |

### Tokom poziva {#during-a-call}

| Poruka | Šta uraditi |
| --- | --- |
| *Nema zajedničkog formata zvuka* | Centrala i telefon nemaju zajednički kodek. Uključite neki koji centrala koristi u [Zvučni formati](/sip-accounts/calls#audio-formats). |
| *Nema mikrofona ni zvučnika* | Izaberite uređaje u [Podešavanja → Uređaji](/sip-accounts/devices). |
| *Ne snima se: na disku je ostalo manje od granice. Oslobodite nešto ili promenite granicu u Podešavanjima.* | Slobodan prostor na disku pao je na **Prag prostora na disku** — pogledajte [Snimci](/recordings). Oslobodite prostor ili smanjite prag. |

### Pri pokretanju telefona {#when-the-phone-starts}

*Baza podataka se ne može pročitati* znači da je bazu podataka napravila druga verzija programa i ova ne može da je pročita. Obično je starija verzija pokrenuta na podacima novije: ako ponovo instalirate noviju verziju, ona otvara bazu kakva je bila. **Počni ispočetka** umesto toga pravi praznu bazu — svaki kontakt i svaki poziv u istoriji nestaju, i to ne može da se poništi. Pre nego što pritisnete, možete sačuvati kopiju datoteke baze; [Dijagnostika](/troubleshooting/diagnostics#files) kaže gde se nalazi.
