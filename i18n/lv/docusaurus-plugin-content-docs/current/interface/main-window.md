---
title: Galvenais logs
sidebar_position: 1
description: Tālrunis kreisajā pusē, bibliotēka un iestatījumi labajā — AI Softphone galvenā loga izkārtojums.
---

Galvenais logs ir pats tālrunis. Ar noklusējuma izkārtojumu **Viens logs** tālrunis atrodas kreisajā pusē, bet viss pārējais atveras labajā. [Izkārtojumu var mainīt](../program/appearance.md).

<Shot name="03_contacts" full alt="Galvenais logs: tālrunis kreisajā pusē un cilne Kontakti labajā" />

## Tālrunis {#the-phone}

No augšas uz leju kreisajā pusē ir:

- lauks **Numurs**;
- tastatūra un zvana taustiņš;
- kontu žetoni;
- pogas, kas uzrauga citus iekšējos numurus;
- četras vietas, kurp doties: **Ieraksti**, **Kontakti**, **Vēsture** un **Iestatījumi**.

### Numura sastādītājs {#the-dialler}

- **Numurs** — ierakstiet vai ielīmējiet numuru, uz kuru zvanīt. Pulksteņa ikona lauka galā atver to numuru sarakstu, uz kuriem nesen zvanījāt vai no kuriem jums zvanīja.
- Apaļie taustiņi **1–9**, **\***, **0** un **#** aizpilda numuru, bet zvana laikā sūta toņus (DTMF).
- Klausules taustiņš veic zvanu. Tas paliek pelēks, kamēr nav numura.

<Shot name="22_last_calls" full alt="Pēdējo zvanu saraksts zem lauka Numurs, blakus cilnei Vēsture" />

Kad pēdējo numuru saraksts ir atvērts, laukā redzama bultiņa, un zvana taustiņš pārvietojas pa labi no tā. Katrs ieraksts ir vārds vai numurs, ja zvanītājs nav [Kontaktos](contacts-history.md), ar datumu. Sarkana klausule apzīmē neatbildētu zvanu; skaits iekavās — piemēram, *Palīdzības dienests (4)* — nozīmē vairākus zvanus pēc kārtas vienai pusei.

### Kontu žetoni {#the-account-chips}

Zem tastatūras ir viens žetons katram [kontam](../sip-accounts/setup.md). Zaļš punkts nozīmē, ka konts ir reģistrēts centrālē. Izceltais žetons (attēlā **305 Atbalsts**) ir konts, no kura tiks veikts nākamais zvans; nospiediet citu žetonu, lai to mainītu. Apaļā sarkanā poga pa labi no žetoniem ir režīms „netraucēt”.

### Pogas {#the-buttons}

Zem žetoniem ir [pogas](../sip-accounts/buttons.md), ko esat izveidojuši kolēģiem un līnijām, katra ar lampiņu — attēlos **Bērziņš** un **Noliktava**. Nospiediet pogu, lai zvanītu uz tās numuru.

### Ieraksti, Kontakti, Vēsture, Iestatījumi {#recordings-contacts-history-settings}

Šie četri ieraksti apakšā katrs atver cilni labajā pusē, blakus viena otrai: [Ieraksti](../interface/recordings.md), [Kontakti un vēsture](contacts-history.md) un [Iestatījumi](settings-overview.md). Atvērtās cilnes paliek rindā labās puses augšā.

## Notiekošs zvans {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Notiekošs zvans" />

Zvana laikā numura lauks pārvietojas uz augšu ar tastatūras ikonu iekšpusē, un zvans tiek rādīts kartītē:

- zvana stāvoklis un ilgums (**Sarunā · 0:21**), otras puses vārds, **Līnija** un tā konta nosaukums, kurā notiek zvans, kā arī numurs;
- divas vertikālas līmeņa joslas kartītes malās, pa vienai katram skaņas kanālam;
- pogu rinda: ierakstīt (aplis), apklusināt (mikrofons), aizturēt (pauze) un sarkanā poga **Nolikt klausuli**;
- otra rinda: pāradresēt (klausule ar bultiņu) un tastatūra.

Zvanu var pāradresēt uzreiz vai pēc tam, kad vispirms esat runājuši ar personu.

Ja numurs ir zināms **Kontaktos**, numura vietā tiek rādīts vārds. Tām pašām darbībām ir [saīsnes](../program/shortcuts.md): atbildēt, nolikt klausuli, aizturēt un apklusināt.

## Vairāki zvani vienlaikus {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Vairāki zvani" />

Par ienākošu zvanu paziņo reklāmkarogs, lai kur jūs strādātu, pat ja tālrunis ir paslēpts. Jauns ienākošs zvans parādās savā kartītē virs saraksta ar zaļu, dzeltenu un sarkanu pogu un rindu, kas norāda, ar ko jūs pašlaik runājat (**Sarunā ar …**). Zemāk esošais saraksts rāda katru zvanu ar tā stāvokli — **Aizturēts**, **Sarunā**, **Ienākošs zvans** — un kontu, kurā tas notiek. Pauzes ikona apzīmē aizturētu zvanu, bet skaļruņa ikona — to, kurā jūs runājat.

Tas, kas notiek, kad kāds zvana, kamēr jūs jau runājat, tiek iestatīts sadaļā [Zvanu iestatījumi](../sip-accounts/calls.md#call-waiting).

## Konference {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konference" />

Apvienoti zvani tiek rādīti kā viena kartīte **Konference** konta līnijā. Katrs dalībnieks ir sarakstā ar laiku zvanā un savu pogu **Nolikt klausuli**. Zemāk esošās pogas ieraksta, apklusina un beidz konferenci visiem; platā poga apakšā sadala konferenci atpakaļ atsevišķos zvanos.

## Tveršana {#capture}

Kad [tveršana no citām lietotnēm](../capture/capture.md) ir atļauta sadaļā **Iestatījumi → Tveršana**, starp kontu žetoniem un pogām parādās josla.

<Shot name="10_settings_capture" full alt="Tveršanas josla tālruņa apakšā: Tveršana · gatavs, Ierakstīt un divas līmeņa joslas" />

- **Tveršana · gatavs** nozīmē, ka programma klausās, vai citā lietotnē notiek saruna.
- **Ierakstīt** sāk tveršanu manuāli.
- Divas tievās joslas zem tās rāda skaņas līmeni: augšējā esat jūs, apakšējā — tas, ko atskaņo dators. To zīmēšanas veidu iestata sadaļā **Attēls joslā telefona pakājē**.

Programma var arī atrasties paziņojumu apgabalā (macOS — izvēļņu joslā) un tikt izsaukta ar [saīsni](../program/shortcuts.md).
