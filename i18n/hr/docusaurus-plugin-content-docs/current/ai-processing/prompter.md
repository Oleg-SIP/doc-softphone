---
title: Postavke šaptača
sidebar_label: Šaptač
sidebar_position: 5
description: "Postavke → Šaptač: što treba šaptaču u živo, prekidač koji ga dopušta, veličina teksta, pomoćnici i njihove kartice te mjesečna ograničenja onoga što smije potrošiti."
---

U **Postavke → Šaptač** šaptač u živo se dopušta, postavlja mu se veličina i dobiva svoje pomoćnike. Sam šaptač — prozor koji zapisuje poziv u trenutku kad se izgovara i predlaže što odgovoriti, te proba na snimci — opisan je na stranici [Prozor šaptača](/interface/prompter).

[Pregled](/interface/settings-overview) postavki navodi šaptača u odjeljku **Šaptač** u dva koraka: **Dopusti šaptanje** i **Pokreni šaptača**.

## Što mu treba {#what-it-needs}
- **Prepoznavač koji zna slušati dok traje razgovor.** Dodaje se u [Postavke → Prijepis](/ai-processing/transcription#live-recognition-for-the-prompter) kao i svaki drugi prepoznavač, a treba mu **Adresa za šaptača** i uspješan **Provjeri**.
- **Jezični model** za pomoćnike koji nešto predlažu. To je model postavljen kod pomoćnika ili zadani model u [Postavke → Obrada](/ai-processing/processing#language-models). Titlovima model uopće ne treba.
- **Kvačica Dopusti korištenje šaptača** u **Postavke → Šaptač**.

Kad su ispunjene sve tri, **Šaptač** se pojavljuje na popisu pri dnu telefona, između **Povijest** i **Postavke**, i otvara [prozor šaptača](/interface/prompter). Dio programa koji to obavlja je modul **Šaptač**, *Sluša razgovor dok se vodi i predlaže*; može se isključiti u [Moduli](/application/modules).

## Postavke → Šaptač {#settings--prompter}
<Shot name="41_settings_prompter" alt="Postavke → Šaptač: prekidač koji dopušta šaptača i veličina teksta" />

*Prepoznavanje govora tijekom razgovora i prijedlozi napisani prema vašim vlastitim uputama. Oboje se naplaćuje po minuti.*

| Postavka | Zadano | Što radi |
| --- | --- | --- |
| **Dopusti korištenje šaptača** | isključeno | Jedini prekidač koji uopće dopušta pokretanje šaptača. Ništa drugo na stranici ne djeluje dok je isključen. |
| **Prijepis i prijedlozi** | 13 piksela | Koliko se veliki crtaju oba stupca prozora. |
| **Ponavljaj najnoviji redak nad stupcima** | uključeno | Prikazuje najnoviji prijedlog — ili najnoviji redak kod pomoćnika koji ništa ne predlaže — u zasebnoj traci iznad stupaca. |
| **Ponovljeni redak** | 20 piksela | Koliko je velik tekst trake. Prikazuje se dok je traka uključena. |

:::caution
Glas druge strane šalje se prepoznavaču dok govori, što nije ništa manje od snimanja. Gdje [Postavke → Snimanje](/recordings) traži da je se prvo obavijesti, šaptač se pokreće tek nakon toga.
:::

Šaptač se čita dok se govori, često s veće udaljenosti od ostatka telefona, pa obje veličine birate sami: odaberite takve koje uočavate bez naginjanja prema zaslonu. Povucite razdjelnik ispod trake u [prozoru šaptača](/interface/prompter#the-window) da je povećate.

### Pomoćnici {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Postavke → Šaptač: pomoćnici i mjesečna ograničenja" />

Pomoćnik je ono što se od šaptača traži da bude. *Svaki od njih sluša razgovor u tijeku i piše nešto u prozor šaptača: riječi onako kako se izgovaraju, njihov prijevod, ili prijedlog što reći dalje.* Koji pokrenuti, birate u prozoru šaptača. Program donosi četiri:

| Pomoćnik | Što piše | Pita model |
| --- | --- | --- |
| **Titlovi** | Riječi obiju strana dok se izgovaraju. | ne |
| **Prijevod** | Riječi druge strane, prevedene na jezik programa. | da |
| **Prigovori u pozivu** | Za onoga tko prodaje telefonom: kad kupac iznese prigovor, prigovor u jednom retku i jedan redak koji na njega odgovara. | da |
| **Pomoć na razgovoru** | Za onoga s kim se vodi razgovor za posao: odgovor na upravo postavljeno pitanje u nekoliko kratkih redaka ili ono što obuhvatiti u sljedećem odgovoru. | da |

**▲** i **▼** mijenjaju redoslijed, a to je redoslijed padajućeg popisa u [prozoru šaptača](/interface/prompter#the-window). **Dodaj** stvara vlastitog pomoćnika. **Vrati zadano** vraća upute i pravila kakvi su došli s programom, ovdje kao i u [Obrada](/ai-processing/processing#defaults); vaši jezični modeli ostaju netaknuti.

### Kartica pomoćnika {#an-assistants-card}
Klik na pomoćnika otvara njegovu karticu. To je ista kartica kao kod [upute](/ai-processing/prompt-studio) u Obradi, s nekoliko vlastitih kontrola.

<Shot name="42_prompter_assistant" alt="Kartica pomoćnika Prigovori u pozivu: prepoznavač, kad je odgovor završio, uloga i uputa" />

| Polje | Što radi |
| --- | --- |
| **Naziv** | Naziv na popisu i u prozoru šaptača. |
| **Oblik odgovora** i **Šalji i** | Kao kod svake upute: oblik odgovora i upute koje se šalju uz njega. Isporučeni pomoćnici odgovaraju u obliku **Proza**. |
| **Prepoznavač** | Koji prepoznavač sluša. Nude se samo oni koji znaju slušati dok netko govori. |
| **Kad je odgovor završio** | Tko odlučuje da je odgovor gotov i da se na njega može odgovoriti: **Odlučuje prepoznavač**, **Nakon pauze** ili **Samo kad pitam** — tada odgovor završava kad pritisnete **Predlog**. Šest prepoznavača samo kaže gdje odgovor završava, četiri ne; **Odlučuje prepoznavač** se ondje gdje nema odgovora oslanja na pauzu, i zato je to postavka koju vrijedi ostaviti. |
| **Prepoznavaj i moju stranu** | Druga sesija na istom prepoznavaču, po dvostrukoj cijeni, kako bi se i vaše vlastite riječi pojavile u prijepisu. Ulaze u ono što se kaže modelu, ali nikad nisu ono o čemu ga se pita. |
| **Uloga — što je model** | Šalje se modelu prije upute, na primjer *Pomažete osobi koja prodaje telefonom…* |
| **Uputa** | Što se model pita za svaki odgovor. `{{reply}}` je odgovor koji je upravo završio, a `{{conversation}}` sve što je rečeno prije. *Ostavite prazno i model se ništa ne pita: riječi se prikazuju kako dolaze, a plaća se samo prepoznavač.* Upravo su to **Titlovi**. |
| **Odgovaraj na** | Jezik prijedloga: **Što god da se govorilo**, **Jezik ovog programa** ili **Uvijek jedan jezik** s njegovim kodom. |
| **Model** | **Zadano** ili jedan od vaših [jezičnih modela](/ai-processing/processing#language-models). |

### Trošenje {#spending}
*Odvojeno od onoga što pravila smiju potrošiti na dovršene razgovore. Mjesec sažetaka ne smije moći ušutkati šaptača u sredini razgovora.*

| Polje | Kad se dosegne |
| --- | --- |
| **Prepoznavači, mjesečno** | Šaptač koji radi zaustavlja se na kraju odgovora kod kojeg je — nikad usred riječi. |
| **Modeli, mjesečno** | Prijedlozi prestaju, a titlovi se nastavljaju. |

Prazno znači bez ograničenja. Cijena minute zvuka u živo je **Cijena po minuti** prepoznavača, upisana na njegovoj kartici u [Prijepis](/ai-processing/transcription#the-recognisers-card); bez nje šaptač upozorava da je prikazani iznos procjena.
