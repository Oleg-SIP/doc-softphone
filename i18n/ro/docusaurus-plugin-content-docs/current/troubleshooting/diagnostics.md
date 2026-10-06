---
title: Diagnostic
sidebar_position: 1
description: Fereastra care arată fiecare cuvânt pe care și-l spun telefonul și centrala, fișierul jurnal și locul în care programul își păstrează fișierele.
---

Fereastra **Diagnostic** arată ce își spun telefonul și centrala, chiar în momentul în care o spun. Este primul loc în care să vă uitați când un cont nu se înregistrează sau un apel nu se conectează, și fereastra pe care departamentul IT vă va cere să o trimiteți.

Se deschide din **Setări → Diagnostic**, cu butonul **Deschide diagnosticarea**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Fereastra Diagnostic" />

Arată fiecare mesaj SIP pe care telefonul îl trimite sau îl primește, chiar în timp ce se întâmplă, împreună cu statisticile audio ale apelurilor în curs. Colectează date doar cât timp este deschisă și nu păstrează nimic după ce se închide.

## SIP {#sip}

Fila **SIP** este jurnalul semnalizării.

- Fiecare mesaj este un rând cu ora (la milisecundă), ce mesaj este și unde a mers: o săgeată spre dreapta este trimisă de telefon, o săgeată spre stânga este primită de la server. Dedesubt: `to` sau `from` adresa serverului și transportul (de exemplu *over UDP*).
- Un mesaj poate fi extins ca să-i arate antetele complete (al treilea mesaj din imagine).
- **Caută** găsește text în jurnal.
- **Golește** îl golește.

Exemplul din captura de ecran este o înregistrare reușită: telefonul trimite `REGISTER`, serverul răspunde `200 OK (REGISTER)`.

## Apeluri {#calls}

A doua filă, **Apeluri**, arată indicatori de calitate pentru fiecare apel în curs.

## Fila Diagnostic din setări {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Setări → Diagnostic" />

### Detaliul jurnalului {#log-detail}

Lista derulantă alege cât de mult scrie programul în fișierul jurnal; în imagine este **Detaliat**. Are efect imediat, inclusiv asupra unui apel deja în curs — tocmai cel pentru care vreți înregistrarea. Setarea cea mai detaliată notează fiecare mesaj SIP. Jurnalul este mare, dar parolele sunt eliminate din el înainte de a se scrie ceva, așa că fișierul poate fi trimis în siguranță împreună cu o cerere de asistență.

**Trimite o copie în jurnalul de sistem** scrie jurnalul și în jurnalul propriu al sistemului, pentru un calculator ale cărui jurnale sunt colectate centralizat. Fișierul de mai jos este scris oricum și el este cel pe care îl atașați la o cerere de asistență.

### Fișiere {#files}

Fila arată unde își păstrează programul fișierele și cât de mare este fiecare. Pe macOS:

| Fișier | Unde | Conține |
| --- | --- | --- |
| Setări | `~/Library/Preferences/ai-softphone/settings.json` | Setările. Niciodată parole sau tokenuri. |
| Bază de date | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Contacte, istoric, transcrieri și prelucrări. |
| Înregistrări | `~/Library/Application Support/ai-softphone/recordings` | Sunetul înregistrărilor. |
| Jurnal | `~/Library/Logs/ai-softphone/ai-softphone.log` | Jurnalul. |

Sub listă, **Deschide** afișează jurnalul, iar **Golește** îl golește. Goliți jurnalul chiar înainte să reproduceți o problemă; golirea nu poate fi anulată.

## Ce să trimiteți echipei de asistență {#what-to-send-to-support}

1. Setați **Detaliul jurnalului** la nivelul cel mai detaliat.
2. Apăsați **Golește**, apoi reproduceți problema.
3. Trimiteți fișierul jurnal sau deschideți **Setări → Despre**, scrieți-ne de acolo și bifați **Atașează jurnalul** — consultați [Despre](../application/about.md#feedback).

Pentru o problemă cu înregistrarea la centrală sau cu un apel, trimiteți și rândurile încercării eșuate din fila **SIP**.

Partea programului din spatele tuturor acestora — urmărirea SIP, statisticile media și contoarele — poate fi oprită în [Module](../application/modules.md) (**Diagnostic**).
