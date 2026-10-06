---
title: Setările apelurilor
sidebar_position: 3
description: Codecurile oferite centralei, ce se întâmplă când sosește un al doilea apel, reapelarea automată și cât timp se păstrează istoricul apelurilor.
---

**Setări → Apeluri** conține setările care se aplică fiecărui apel, indiferent de contul pe care se află.

## Formate audio {#audio-formats}

<Shot name="07_settings_calls" alt="Setări → Apeluri: formatele audio" />

Lista codecurilor pe care telefonul le oferă celuilalt capăt. Codecurile sunt *oferite în această ordine*, iar celălalt capăt alege dintre cele pe care le oferiți: cu cât un codec stă mai sus, cu atât este mai probabil să fie folosit.

- **Caseta de bifat** pornește sau oprește un codec. Un codec oprit nu este oferit.
- **▲** și **▼** îl mută mai sus sau mai jos în listă.
- *bandă largă*, în dreapta, marchează un codec cu o gamă de sunet mai largă decât a unei linii telefonice: vocea este mai clară.

| Codec | Frecvență de eșantionare | Pornit implicit |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, bandă largă | da |
| **G722** | 16 kHz, bandă largă | da |
| **PCMU** | 8 kHz | da |
| **PCMA** | 8 kHz | da |
| **speex** | 16 kHz, bandă largă | nu |
| **speex** | 8 kHz | nu |
| **speex** | 32 kHz, bandă largă | nu |
| **iLBC** | 8 kHz | nu |
| **GSM** | 8 kHz | nu |
| **L16** | 44 kHz, stereo, bandă largă | nu |
| **L16** | 44 kHz, bandă largă | nu |

Tabelul urmează ordinea în care vine programul.

Codecurile se negociază la începutul unui apel, așa că o modificare se aplică de la următorul apel. Dacă un apel sună prost, lăsați pornite doar codecurile pe care le folosește centrala.

## Apel în așteptare {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Setări → Apeluri: apel în așteptare, reapelare automată și istoric" />

*Ce se întâmplă când vă sună cineva în timp ce sunteți deja într-o convorbire.* Lista derulantă alege acest lucru; implicit este **Sună al doilea apel**. Un apel de tip interfon de la propria centrală trece întotdeauna, orice ați alege — așa ajunge la acest telefon un apel efectuat dintr-un panou CTI.

## Reapelare automată {#autodial}

Când un apel nu poate fi conectat, cardul lui se oferă să continue formarea până când reușește. Două glisoare stabilesc cum:

- **Așteptare între încercări** — implicit 15 secunde;
- **Renunță după** — implicit 30 de minute.

## Istoric {#history}

Istoricul apelurilor este o dovadă, așa că nu se șterge nimic din el decât dacă spuneți aici.

- **Perioada de păstrare** alege cât timp păstrează [istoricul apelurilor](/interface/contacts-history#history) un apel. Implicit este **Întotdeauna**.
- **Golește istoricul apelurilor** șterge toate apelurile deodată, indiferent de perioada aleasă. Operația nu poate fi anulată.
