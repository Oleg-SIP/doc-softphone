---
title: Probleme frecvente
sidebar_position: 2
description: Ce să verificați când un cont nu se înregistrează, nu există sunet, un apel sau o ședință nu este înregistrată, nu există transcriere, sufleurul nu pornește ori când un link, o scurtătură sau API-ul nu face nimic, precum și ce înseamnă mesajele telefonului însuși.
---

Fiecare intrare trimite la setarea care o hotărăște. Dacă răspunsul nu este aici, deschideți [Diagnostic](/troubleshooting/diagnostics): arată ce își spun telefonul și centrala.

## Contul nu se înregistrează {#the-account-will-not-register}

Punctul de lângă cont din **Setări → Conturi** rămâne gri sau roșu.

1. Verificați **Nume de utilizator**, **Parolă** și **Adresa serverului** în [formularul contului](/sip-accounts/setup).
2. Dacă centrala verifică parola pentru alt nume decât interiorul, completați **Utilizator de autentificare** din **Setările serverului**.
3. Verificați dacă **Transport** și **Port** corespund cu ce așteaptă centrala.
4. Deschideți fila **SIP** din [fereastra de diagnostic](/troubleshooting/diagnostics) și uitați-vă la cererea `REGISTER` și la ce a răspuns serverul.

## Nu aud sau nu se aude ce spun {#i-cannot-hear-or-i-cannot-be-heard}

Deschideți [Setări → Dispozitive](/sip-accounts/devices).

- Spuneți ceva: bara de sub **Microfon** trebuie să se miște. Dacă nu se mișcă, alegeți alt microfon.
- Apăsați **Verifică** sub **Difuzoare** ca să auziți un sunet pe dispozitivul ales.
- Verificați glisoarele **Volum**. **Oprește microfonul** de pe cardul apelului și [scurtătura](/program/shortcuts) **Oprește microfonul** opresc microfonul în timpul unui apel.
- Soneria poate fi setată să sune pe alt dispozitiv decât cel pe care vorbiți — **Sonerie**, a doua listă derulantă.

## Apelul sună prost sau nu pornește {#the-call-sounds-bad-or-does-not-start}

Codecurile sunt oferite în ordinea listei din [Setări → Apeluri](/sip-accounts/calls#audio-formats). Lăsați pornite codecurile pe care le folosește centrala și puneți-l pe cel mai bun primul. O modificare se aplică de la următorul apel.

## Al doilea apel nu sună {#a-second-call-does-not-ring}

Ce se întâmplă când vă sună cineva în timp ce sunteți într-o convorbire se configurează la [Apel în așteptare](/sip-accounts/calls#call-waiting).

## Un apel nu a fost înregistrat {#a-call-was-not-recorded}

- **Setări → Înregistrare**, prima listă derulantă, hotărăște ce apeluri se înregistrează; valoarea implicită, **Manual**, înregistrează doar când apăsați butonul de înregistrare de pe cardul apelului. Consultați [Înregistrări](/recordings).
- Înregistrarea începe când se răspunde la apel, așa că un apel la care nu s-a răspuns nu are fișier.
- Modulul **Înregistrare** trebuie să fie pornit în [Module](/application/modules).
- Înregistrările sunt eliminate de limitele din **Păstrare**; o înregistrare fixată nu este eliminată niciodată.

## O ședință din altă aplicație nu a fost captată {#a-meeting-in-another-application-was-not-captured}

Consultați [Captare](/capture/).

- **Permite captarea sunetului** din **Setări → Captare** trebuie să fie pornit.
- Cu **Pornire automată** setată la **Întreabă-mă** (implicit), răspundeți la întrebare când apare; cu **Niciodată**, apăsați chiar dumneavoastră butonul de înregistrare.
- Folosiți **Verifică** din aceeași filă: bara de sus trebuie să se miște când vorbiți, cea de jos când se redă ceva.
- Modulul **Captare** trebuie să fie pornit în [Module](/application/modules).

## Există o înregistrare, dar nu și o transcriere sau un rezumat {#there-is-a-recording-but-no-transcript-or-summary}

- O conversație este transcrisă și prelucrată de la sine doar dacă **Prelucrează conversațiile automat** este pornit în [Setări → Prelucrare](/ai-processing/processing). Altfel, cereți acest lucru în [fereastra Înregistrări](/interface/recordings).
- Trebuie să existe un [recunoscător](/ai-processing/transcription) și un [model de limbă](/ai-processing/processing#language-models), iar fiecare trebuie să răspundă la adresa lui.
- Când este atinsă **Limită de bani, lunar** sau **Limită de tokenuri, lunar**, regulile automate se opresc până la începutul lunii următoare. Ceea ce cereți chiar dumneavoastră nu este oprit niciodată.
- Pașii din [Setări → Prezentare generală](/interface/settings-overview) arată ce mai rămâne de configurat.

## Sufleurul nu apare sau nu pornește {#the-prompter-does-not-appear-or-does-not-start}

**Sufleur** apare în lista din partea de jos a telefonului doar când există trei lucruri: un recunoscător cu o **Adresă pentru sufleur** care a trecut de **Verifică** în [Setări → Transcriere](/ai-processing/transcription#live-recognition-for-the-prompter), un model de limbaj și bifa **Permite folosirea sufleurului** în [Setări → Sufleur](/ai-processing/prompter). Modulul **Sufleur** trebuie să fie activat în [Module](/application/modules).

Dacă fereastra se deschide, dar sufleurul nu pornește, rândul de sub butoanele lui spune ce lipsește. [Când nu pornește](/interface/prompter#when-it-does-not-start) enumeră fiecare mesaj și ce e de făcut.

## Telefonul a dispărut când am închis fereastra {#the-phone-disappeared-when-i-closed-the-window}

Cu **Lasă telefonul să meargă când fereastra se închide** pornit, telefonul încă rulează, iar apelurile sosesc în continuare. Pictograma din zona de notificări (bara de meniu pe macOS) readuce fereastra. Pe un desktop fără zonă de notificări, telefonul este minimizat în bara de activități. Consultați [Pornire](/program/startup).

## Un număr de telefon dintr-un navigator sau dintr-un CRM nu sună {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Apăsați **Deschide linkurile de apel cu acest telefon** în [Setări → Pornire](/program/startup#call-links). Un număr pe care s-a făcut clic ajunge în tastatura de apelare și așteaptă acolo, cu excepția cazului în care **Sună imediat, fără a apăsa Sună** este pornit.

## Indicatorul unui buton rămâne gri {#a-buttons-lamp-stays-grey}

Centrala nu spune dacă interiorul este liber. Butonul tot formează numărul. Consultați [Butoane](/sip-accounts/buttons).

## API-ul REST nu răspunde {#the-rest-api-does-not-answer}

- **Lasă alte programe de pe acest calculator să conducă telefonul** trebuie să fie pornit în [Setări → Integrare](/integration/rest-api), iar modulul **Integrare** în [Module](/application/modules).
- Adresa este `http://127.0.0.1:8377`, dacă nu ați schimbat **Port**.
- Un grup pe care nu l-ați deschis în **Acces** răspunde la fiecare cerere cu `404`.
- Dacă ați setat un **Token**, cererile care modifică datele stocate trebuie să-l poarte în antetul `Authorization`.
- Mai multe simptome se găsesc în [Când nu funcționează](/integration/rest-api#when-it-does-not-work).

## Webhookurile nu sosesc {#webhooks-do-not-arrive}

Apăsați **Trimite un eveniment de probă** în [Setări → Integrare](/integration/webhooks). Contoarele `webhooks_failed_total` și `webhooks_dropped_total` ale API-ului REST arată cum merge livrarea; [Când nu sosește nimic](/integration/webhooks#when-nothing-arrives) explică ce înseamnă fiecare.

## O scurtătură nu face nimic {#a-hotkey-does-nothing}

Deschideți [Scurtături](/program/shortcuts). O scurtătură funcționează cât timp telefonul este programul pe care îl folosiți; ca să o folosiți din orice program, bifați **Peste tot**. Faceți clic pe scurtătură și apăsați din nou combinația dacă un alt program a preluat-o.

## Mesajele telefonului {#messages-the-phone-shows}

Când ceva nu se întâmplă, telefonul spune de ce pe un rând separat. Un rând de sub o listă dispare singur după câteva secunde.

### Când un apel nu pleacă {#when-a-call-is-not-placed}

| Mesaj | Ce trebuie făcut |
| --- | --- |
| *Nu este configurat niciun cont* | Adăugați un cont în [Setări → Conturi](/sip-accounts/setup). |
| *Niciun cont nu este pornit, deci nu există linie de pe care să se sune.* | Bifați caseta unui cont în **Setări → Conturi**. |
| *Nicio linie nu este încă înregistrată.* | Contul este pornit, dar încă nu este înregistrat la centrală. Așteptați ca punctul lui să devină verde; dacă nu devine, vedeți [Contul nu se înregistrează](#the-account-will-not-register). |
| *Sunt deja atâtea apeluri câte duce acest telefon.* | Închideți unul dintre apeluri, apoi sunați din nou. |
| *Contul de pe care s-ar fi sunat nu mai există.* | Rândul aparține unui cont care între timp a fost șters. Formați numărul la tastatură. |
| *Acest rând nu are număr la care să se sune înapoi.* | Apelantul și-a ascuns numărul, deci nu aveți pe cine suna înapoi. |

### Când un cont nu se conectează {#when-an-account-does-not-connect}

| Mesaj | Ce trebuie făcut |
| --- | --- |
| *Adresa aceea de server nu a fost găsită. Verificați dacă nu are greșeli de scriere.* | Verificați **Adresa serverului** în [formularul contului](/sip-accounts/setup). |
| *Serverul nu a putut fi atins. Verificați adresa, portul și rețeaua dumneavoastră.* | Verificați **Adresa serverului**, precum și **Transport** și **Port** din **Setările serverului**. Și un firewall poate opri SIP. |
| *Serverul a respins acest nume de utilizator sau această parolă.* | Verificați **Nume de utilizator** și **Parolă**. Dacă centrala verifică parola pentru alt nume, completați **Utilizator de autentificare**. |
| *Certificatul serverului nu a putut fi verificat. Dacă administratorul serverului l-a emis singur, debifați „Verifică certificatul” în „Setările serverului”.* | Apare la o conexiune TLS. Dacă centrala folosește un certificat făcut de ea însăși, debifați **Verifică certificatul** din **Setările serverului**. |
| *Parola acestui cont nu a putut fi citită din portchei. Deblocați-l și conectați-vă din nou.* | Deblocați seiful de parole al computerului (Keychain pe macOS), apoi apăsați **Conectează** lângă cont. |

### În timpul unui apel {#during-a-call}

| Mesaj | Ce trebuie făcut |
| --- | --- |
| *Niciun format audio comun* | Centrala și telefonul nu au niciun codec comun. Porniți unul folosit de centrală în [Formate audio](/sip-accounts/calls#audio-formats). |
| *Nici microfon, nici difuzoare* | Alegeți dispozitivele în [Setări → Dispozitive](/sip-accounts/devices). |
| *Nu se înregistrează: discul a coborât până la limită. Eliberați spațiu sau schimbați limita din setări.* | Spațiul liber de pe disc a ajuns la **Pragul de spațiu pe disc** — vedeți [Înregistrări](/recordings). Eliberați spațiu sau coborâți pragul. |

### La pornirea telefonului {#when-the-phone-starts}

*Baza de date nu poate fi citită* înseamnă că baza de date a fost făcută de o altă versiune a programului, iar aceasta nu o poate citi. De obicei, o versiune mai veche a fost pornită pe datele uneia mai noi: dacă reinstalați versiunea mai nouă, aceasta deschide baza așa cum era. **Începe de la capăt**, în schimb, face o bază goală — fiecare contact și fiecare apel din istoric se pierd, iar asta nu se poate anula. Înainte să apăsați, puteți păstra o copie a fișierului bazei; [Diagnostic](/troubleshooting/diagnostics#files) spune unde se află.
