---
title: Butoane
sidebar_position: 4
description: Butoane BLF — butoane de o singură apăsare care formează un interior de pe centrala IP și arată dacă este liber, sună sau este ocupat.
---

Butoanele sunt tastele **BLF** (Busy Lamp Field) ale telefonului software, aceeași funcție pe care o are un telefon de birou conectat la o centrală IP. Un buton formează un interior dintr-o singură apăsare. Un buton care își urmărește linia arată și un indicator luminos: telefonul întreabă centrala despre acel interior și arată dacă este liber, sună sau este ocupat, așa cum o fac consola unei recepționere sau tastele programabile ale unui telefon de birou.

BLF are nevoie de suport din partea centralei: centrala trebuie să raporteze telefonului starea interiorului. Majoritatea centralelor IP o fac. Dacă a dumneavoastră nu o face, indicatorul rămâne gri, iar butonul tot formează numărul.

Butoanele stau sub insignele conturilor în [fereastra principală](/interface/main-window), iar **Setări → Butoane** este locul în care le creați.

<Shot name="08_settings_buttons" alt="Setări → Butoane: două butoane" />

Fiecare rând este un buton: indicatorul luminos, eticheta lui și, în dreapta, numărul și contul căruia îi aparține — de exemplu *212 · 201 Birou*. **▲** și **▼** mută butonul mai sus sau mai jos; butoanele din fereastra principală urmează această ordine. **Adaugă** creează unul nou.

## Indicatorul luminos {#the-lamp}

Un buton care își urmărește linia arată un indicator luminos:

| Indicator | Linia este |
| --- | --- |
| Verde | liberă |
| Chihlimbariu | sună |
| Roșu | într-o convorbire |
| Gri | necunoscută: centrala nu spune |

## Adăugarea unui buton {#adding-a-button}

<Shot name="08b_button_add" alt="Formularul unui buton nou" />

Apăsați **Adaugă**; sub listă se deschide un formular.

| Câmp | Ce introduceți |
| --- | --- |
| **Număr** | Numărul care se formează. |
| **Linie** | Contul pe care se efectuează apelul. Alegeți-l primul: ca să arate indicatorul luminos, telefonul întreabă despre acest număr centrala liniei respective, așa că trebuie să știe care este. |
| **Etichetă** | Textul de pe buton, de exemplu numele persoanei. Pe buton încape doar o etichetă scurtă; una mai lungă este tăiată. |
| **Arată dacă această linie este ocupată** | Un comutator. Pornit, butonul are un indicator luminos. Oprit, doar formează numărul. |

**Salvează** rămâne gri până când formularul este completat. **Anulează** renunță la formular.

Partea programului care afișează butoanele poate fi oprită în [Module](/application/modules).
