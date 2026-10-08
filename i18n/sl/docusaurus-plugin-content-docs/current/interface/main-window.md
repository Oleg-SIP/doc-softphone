---
title: Glavno okno
sidebar_position: 1
description: Telefon na levi, knjižnica in nastavitve na desni — postavitev glavnega okna AI Softphone.
---

Glavno okno je sam telefon. Pri privzeti postavitvi, **Eno okno**, je telefon na levi, vse drugo pa se odpira na desni. [Postavitev je mogoče spremeniti](../program/appearance.md).

<Shot name="03_contacts" full alt="Glavno okno: telefon na levi in zavihek Stiki na desni" />

## Telefon {#the-phone}

Od zgoraj navzdol leva stran vsebuje:

- polje **Številka**;
- tipkovnico in tipko za klic;
- značke računov;
- gumbe, ki spremljajo druge interne številke;
- štiri mesta, kamor greste: **Posnetki**, **Stiki**, **Zgodovina** in **Nastavitve**.

### Klicanje {#the-dialler}

- **Številka** — vpišite ali prilepite številko, ki jo želite poklicati. Ikona ure na desnem koncu polja odpre seznam številk, ki ste jih nedavno klicali ali s katerih so klicali vas.
- Okrogle tipke **1–9**, **\***, **0** in **#** dopolnjujejo številko, med klicem pa pošiljajo tone (DTMF).
- Tipka s slušalko opravi klic. Ostane siva, dokler ni številke.

<Shot name="22_last_calls" full alt="Seznam nedavnih klicev pod poljem Številka, poleg zavihka Zgodovina" />

Ko je seznam nedavnih številk odprt, polje pokaže puščico, tipka za klic pa se premakne na njeno desno. Vsak vnos je ime ali številka, če klicatelja ni med [Stiki](contacts-history.md), z datumom. Rdeča slušalka označuje zgrešen klic; število ponovitev v oklepaju — na primer *Tehnična pomoč (4)* — pomeni več zaporednih klicev z isto stranjo.

### Značke računov {#the-account-chips}

Pod tipkovnico je ena značka za vsak [račun](../sip-accounts/setup.md). Zelena pika pomeni, da je račun registriran na centrali. Poudarjena značka (na sliki **305 Podpora**) je račun, s katerega bo opravljen naslednji klic; pritisnite drugo značko, da ga zamenjate. Okrogli rdeči gumb desno od značk je način Ne moti.

### Gumbi {#the-buttons}

Pod značkami so [gumbi](../sip-accounts/buttons.md), ki ste jih naredili za sodelavce in linije, vsak z lučko — na slikah **Novak** in **Skladišče**. Pritisnite gumb, da pokličete njegovo številko.

### Posnetki, Stiki, Zgodovina, Nastavitve {#recordings-contacts-history-settings}

Ti štirje vnosi spodaj odprejo zavihek na desni, drug ob drugem: [Posnetki](../interface/recordings.md), [Stiki in Zgodovina](contacts-history.md) ter [Nastavitve](settings-overview.md). Zavihki, ki ste jih odprli, ostanejo v vrsti na vrhu desne strani.

## Klic v teku {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Klic v teku" />

Med klicem se polje s številko premakne na vrh z ikono tipkovnice v njem, klic pa se pokaže na kartici:

- stanje in trajanje klica (**V pogovoru · 0:21**), ime druge strani, **Linija** in ime računa, na katerem je klic, ter številka;
- dva navpična merilnika ravni ob straneh kartice, po en za vsak kanal zvoka;
- vrsta gumbov: snemanje (krog), utišanje (mikrofon), zadržanje (premor) in rdeči gumb **Odloži**;
- druga vrsta: preusmeritev (slušalka s puščico) in tipkovnica.

Klic je mogoče preusmeriti neposredno ali šele potem, ko ste se z osebo najprej pogovorili.

Če je številka znana med **Stiki**, se namesto številke pokaže ime. Ista dejanja imajo [bližnjice](../program/shortcuts.md): sprejem, odložitev, zadržanje in utišanje.

## Več klicev hkrati {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Več klicev" />

Dohodni klic napove pasica, kjer koli delate, tudi ko je telefon skrit. Nov dohodni klic se pojavi na svoji kartici nad seznamom, z zelenim, rumenim in rdečim gumbom ter vrstico, ki pove, s kom se zdaj pogovarjate (**V pogovoru z …**). Seznam spodaj prikazuje vsak klic z njegovim stanjem — **Zadržano**, **V pogovoru**, **Dohodni klic** — in računom, na katerem je. Ikona premora označuje zadržan klic, ikona zvočnika pa tistega, v katerem se pogovarjate.

Kaj se zgodi, ko vas kdo kliče, medtem ko ste že v pogovoru, se nastavi v [Nastavitvah klicev](../sip-accounts/calls.md#call-waiting).

## Konferenca {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferenca" />

Združeni klici se pokažejo kot ena kartica **Konferenca** na liniji računa. Vsak udeleženec je naveden s časom v klicu in svojim gumbom **Odloži**. Gumbi spodaj snemajo, utišajo in končajo konferenco za vse; široki gumb na dnu konferenco spet razdeli na ločene klice.

## Zajemanje {#capture}

Ko je [zajemanje drugih programov](../capture/capture.md) dovoljeno v **Nastavitve → Zajemanje**, se med značkami računov in gumbi pojavi pas.

<Shot name="10_settings_capture" full alt="Pas Zajemanje ob vznožju telefona: Zajemanje · pripravljeno, Snemaj in dva merilnika ravni" />

- **Zajemanje · pripravljeno** pove, da program prisluškuje pogovoru v drugem programu.
- **Snemaj** ročno začne zajemanje.
- Tanka pasova pod njim kažeta raven zvoka: zgornji ste vi, spodnji to, kar predvaja računalnik. Kako se rišeta, se nastavi pod **Slika v pasu ob vznožju telefona**.

Program lahko živi tudi v sistemski vrstici (v menijski vrstici v macOS) in ga prikličete z [bližnjico](../program/shortcuts.md).
