---
title: Podešavanja šaptača
sidebar_label: Šaptač
sidebar_position: 5
description: "Podešavanja → Šaptač: šta je potrebno šaptaču uživo, prekidač koji ga dozvoljava, veličina teksta, pomoćnici i njihove kartice i mesečna ograničenja onoga što sme da potroši."
---

U **Podešavanja → Šaptač** šaptač uživo se dozvoljava, podešava mu se veličina i dobija svoje pomoćnike. Sam šaptač — prozor koji zapisuje poziv u trenutku kada se izgovara i predlaže šta odgovoriti, kao i proba na snimku — opisan je na stranici [Prozor šaptača](/interface/prompter).

[Pregled](/interface/settings-overview) podešavanja navodi šaptača u odeljku **Šaptač** u dva koraka: **Dozvoli šaptanje** i **Pokreni šaptača**.

## Šta mu je potrebno {#what-it-needs}
- **Prepoznavač koji zna da sluša dok traje razgovor.** Dodaje se u [Podešavanja → Prepisivanje](/ai-processing/transcription#live-recognition-for-the-prompter) kao i svaki drugi prepoznavač, a potrebni su mu **Adresa za šaptača** i uspešan **Isprobaj**.
- **Jezički model** za pomoćnike koji nešto predlažu. To je model podešen kod pomoćnika ili podrazumevani model u [Podešavanja → Obrada](/ai-processing/processing#language-models). Titlovima model uopšte nije potreban.
- **Oznaka Dozvoli korišćenje šaptača** u **Podešavanja → Šaptač**.

Kada su ispunjene sve tri, **Šaptač** se pojavljuje na listi pri dnu telefona, između **Istorija** i **Podešavanja**, i otvara [prozor šaptača](/interface/prompter). Deo programa koji to obavlja je modul **Šaptač**, *Sluša razgovor dok se vodi i predlaže*; može se isključiti u [Moduli](/application/modules).

## Podešavanja → Šaptač {#settings--prompter}
<Shot name="41_settings_prompter" alt="Podešavanja → Šaptač: prekidač koji dozvoljava šaptača i veličina teksta" />

*Prepoznavanje govora tokom razgovora i predlozi napisani prema vašim sopstvenim uputstvima. Oboje se naplaćuje po minutu.*

| Podešavanje | Podrazumevano | Šta radi |
| --- | --- | --- |
| **Dozvoli korišćenje šaptača** | isključeno | Jedini prekidač koji uopšte dozvoljava pokretanje šaptača. Ništa drugo na stranici ne deluje dok je isključen. |
| **Transkript i predlozi** | 13 piksela | Koliko se velike crtaju obe kolone prozora. |
| **Ponavljaj najnoviji red nad kolonama** | uključeno | Prikazuje najnoviji predlog — ili najnoviji red kod pomoćnika koji ništa ne predlaže — u zasebnoj traci iznad kolona. |
| **Ponovljeni red** | 20 piksela | Koliko je veliki tekst trake. Prikazuje se dok je traka uključena. |

:::caution
Glas druge strane šalje se prepoznavaču dok govori, što nije ništa manje od snimanja. Gde [Podešavanja → Snimanje](/recordings) traži da se ona prvo obavesti, šaptač se pokreće tek posle toga.
:::

Šaptač se čita dok se govori, često sa veće udaljenosti od ostatka telefona, pa obe veličine birate sami: izaberite takve koje uočavate bez naginjanja ka ekranu. Prevucite razdelnik ispod trake u [prozoru šaptača](/interface/prompter#the-window) da je povećate.

### Pomoćnici {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Podešavanja → Šaptač: pomoćnici i mesečna ograničenja" />

Pomoćnik je ono što se od šaptača traži da bude. *Svaki od njih sluša razgovor u toku i piše nešto u prozor šaptača: reči onako kako se izgovaraju, njihov prevod, ili predlog šta reći dalje.* Koji pokrenuti, birate u prozoru šaptača. Program donosi četiri:

| Pomoćnik | Šta piše | Pita model |
| --- | --- | --- |
| **Titlovi** | Reči obe strane dok se izgovaraju. | ne |
| **Prevod** | Reči druge strane, prevedene na jezik programa. | da |
| **Primedbe u pozivu** | Za onoga ko prodaje telefonom: kada kupac iznese primedbu, primedbu u jednom redu i jedan red koji na nju odgovara. | da |
| **Pomoć na razgovoru** | Za onoga s kim se vodi razgovor za posao: odgovor na upravo postavljeno pitanje u nekoliko kratkih redova ili ono što obuhvatiti u sledećem odgovoru. | da |

**▲** i **▼** menjaju redosled, a to je redosled padajuće liste u [prozoru šaptača](/interface/prompter#the-window). **Dodaj** stvara sopstvenog pomoćnika. **Vrati podrazumevano** vraća uputstva i pravila kakva su došla sa programom, ovde kao i u [Obrada](/ai-processing/processing#defaults); vaši jezički modeli ostaju netaknuti.

### Kartica pomoćnika {#an-assistants-card}
Klik na pomoćnika otvara njegovu karticu. To je ista kartica kao kod [uputstva](/ai-processing/prompt-studio) u Obradi, sa nekoliko sopstvenih kontrola.

<Shot name="42_prompter_assistant" alt="Kartica pomoćnika Primedbe u pozivu: prepoznavač, kada je odgovor završio, uloga i uputstvo" />

| Polje | Šta radi |
| --- | --- |
| **Naziv** | Naziv na listi i u prozoru šaptača. |
| **Oblik odgovora** i **Pošalji i** | Kao kod svakog uputstva: oblik odgovora i instrukcije koje se šalju uz njega. Isporučeni pomoćnici odgovaraju u obliku **Proza**. |
| **Prepoznavač** | Koji prepoznavač sluša. Nude se samo oni koji znaju da slušaju dok neko govori. |
| **Kada je odgovor završio** | Ko odlučuje da je odgovor gotov i da se na njega može odgovoriti: **Odlučuje prepoznavač**, **Posle pauze** ili **Samo kada pitam** — tada odgovor završava kada pritisnete **Predlog**. Šest prepoznavača samo kaže gde odgovor završava, četiri ne; **Odlučuje prepoznavač** se tamo gde nema odgovora oslanja na pauzu, i zato je to podešavanje koje vredi ostaviti. |
| **Prepoznavaj i moju stranu** | Druga sesija na istom prepoznavaču, po dvostrukoj ceni, da bi se i vaše sopstvene reči pojavile u transkriptu. Ulaze u ono što se kaže modelu, ali nikada nisu ono o čemu ga pitaju. |
| **Uloga — šta je model** | Šalje se modelu pre uputstva, na primer *Pomažete osobi koja prodaje telefonom…* |
| **Uputstvo** | Šta se model pita za svaki odgovor. `{{reply}}` je odgovor koji je upravo završio, a `{{conversation}}` sve što je rečeno pre toga. *Ostavite prazno i model se ništa ne pita: reči se prikazuju kako pristižu, a plaća se samo prepoznavač.* Upravo to su **Titlovi**. |
| **Odgovaraj na** | Jezik predloga: **Kojim god se govorilo**, **Jezik ovog programa** ili **Jedan jezik, uvek** sa njegovim kodom. |
| **Model** | **Podrazumevano** ili jedan od vaših [jezičkih modela](/ai-processing/processing#language-models). |

### Trošenje {#spending}
*Odvojeno od onoga što pravila smeju da potroše na dovršene razgovore. Mesec sažetaka ne sme da može da ućutka šaptača u sredini razgovora.*

| Polje | Kada se dostigne |
| --- | --- |
| **Prepoznavači, mesečno** | Šaptač koji radi zaustavlja se na kraju odgovora kod kojeg je — nikada usred reči. |
| **Modeli, mesečno** | Predlozi prestaju, a titlovi se nastavljaju. |

Prazno znači bez ograničenja. Cena minuta zvuka uživo je **Cena po minutu** prepoznavača, upisana na njegovoj kartici u [Prepisivanje](/ai-processing/transcription#the-recognisers-card); bez nje šaptač upozorava da je prikazani iznos procena.
