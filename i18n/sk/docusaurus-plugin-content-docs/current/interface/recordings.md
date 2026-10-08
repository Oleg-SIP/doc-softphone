---
title: Okno nahrávok
sidebar_position: 2
description: "\"Knižnica všetkých rozhovorov — hovoru, importovaného súboru alebo stretnutia zachyteného zo Zoomu, Teams či Meet: filtre, prehrávač, prepis, ktorý môžete prehrať od ktoréhokoľvek riadku, a spracovania.\""
---

**Nahrávky** sú miesto, kde žije každý rozhovor, nech prišiel akokoľvek: hovor uskutočnený alebo prijatý v telefóne, importovaný zvukový súbor alebo stretnutie zachytené zo Zoomu, Teams, Meet či akejkoľvek inej aplikácie. Všetky sú v jednom zozname a každý sa otvára rovnako: prehrávač, prepis a všetko, čo o ňom napísal jazykový model. Otvoríte ich tlačidlom **Nahrávky** vľavo dole v [hlavnom okne](main-window.md).

<Shot name="01_recordings" alt="Karta Nahrávky: zachytené stretnutie v Zoome, importovaný súbor a hovory v jednom zozname" />

## Tri druhy nahrávok {#three-kinds-of-recording}

Ikona vľavo v riadku hovorí, ako rozhovor prišiel.

| Ikona | Rozhovor | Jeho názov v zozname | Ako sa sem dostane |
| --- | --- | --- | --- |
| Slúchadlo so šípkou | Hovor uskutočnený alebo prijatý v tomto telefóne. Šípka smeruje dovnútra pri prichádzajúcom hovore a von pri odchádzajúcom. | Meno kontaktu alebo číslo | Nahráva sa podľa nastavenia v [Nahrávkach](../recordings.md) |
| Šípka do lišty | Súbor importovaný odinakiaľ: z mobilného telefónu, diktafónu alebo iného systému | Názov súboru | **⋮ → Importovať zo súborov**; pozrite [nižšie](#a-recording-you-already-have) |
| Okno | Stretnutie v inej aplikácii | Názov, ktorý ste mu dali, alebo **Iná aplikácia** | [Zachytávanie](../capture/capture.md) |

Na obrázku sú horné tri riadky po jednom z každého druhu: stretnutie v Zoome, importovaný súbor s hovorom na podporu banky a hovor prijatý na linke **305 Podpora**. Nech pochádzajú odkiaľkoľvek, prepisujú sa, spracúvajú a hľadajú rovnako.

## Hľadanie rozhovoru {#finding-a-conversation}

Pruh navrchu má päť filtrov, vyhľadávacie pole a ponuku:

| Ovládací prvok | Zúži zoznam podľa |
| --- | --- |
| **Druh** | spôsobu, akým rozhovor prišiel: prichádzajúce alebo odchádzajúce hovory, **Importované**, **Zachytené** |
| **Obdobie** | dátumu: **Dnes**, **Včera**, **Posledných 7 dní** alebo **Vybrať dátumy…** |
| **Kategória** | kategórie, do ktorej bol zaradený — pozrite [Slovníky](../ai-processing/dictionaries.md) |
| **Značka** | štítkov a varovných signálov, ktoré nesie |
| **Rozpoznávač** | [rozpoznávača](../ai-processing/transcription.md), ktorý vytvoril jeho prepis |
| **Hľadať** | toho, čo v ňom zaznelo — hľadanie prechádza prepismi všetkého, čo ste nahrali |

<Shot name="39_more_menu" alt="Ponuka ⋮ zoznamu: Importovať zo súborov, Exportovať do CSV, Otvoriť v prehliadači" />

Tlačidlo **⋮** vpravo na pruhu otvorí ďalšie akcie pre zoznam:

| Položka | Čo robí |
| --- | --- |
| **Importovať zo súborov** | Prinesie nahrávky, ktoré už máte. Pozrite [Nahrávka, ktorú už máte](#a-recording-you-already-have). |
| **Exportovať do CSV** | Uloží zoznam ako tabuľku: kedy, druhá strana a číslo, smer, dĺžku, kategóriu, štítky, varovné signály a zhrnutie na jeden riadok každého rozhovoru. |
| **Otvoriť v prehliadači** | Otvorí zoznam vo vašom prehliadači ako stránku, ktorú [miestne REST API](../integration/rest-api.md) poskytuje na adrese `/ui`. |

## Zoznam {#the-list}

Každý riadok ukazuje:

- ikonu druhu rozhovoru;
- názov — druhú stranu, číslo, súbor alebo stretnutie — a pod ním dátum a zhrnutie na jeden riadok;
- vpravo kategóriu s jej hodnotením (číslo, napríklad *Podpora · 4*), potom varovné signály a štítky a na konci dĺžku.

Varovné signály sú nakreslené červenou (na obrázku *Citlivé údaje*, *Daný sľub*, *Nahnevaný zákazník*); štítky sú obyčajné (*Sľúbené zavolať späť*). Rozhovor bez zhrnutia a kategórie ešte nebol spracovaný — riadok **Anna Nagyová** na obrázku.

<Shot name="40_row_actions" alt="Riadok s ukazovateľom nad ním: tlačidlá s pripináčikom, ceruzkou a košom" />

Keď ukážete na riadok, vpravo sa zobrazia tri tlačidlá:

| Tlačidlo | Čo robí |
| --- | --- |
| Pripináčik | **Uchovať túto**: uchovanú nahrávku nikdy nezmažú hranice v časti [Uchovávanie](../recordings.md#retention). Opätovným stlačením ju prestanete uchovávať. |
| Ceruzka | **Premenovať**: dá rozhovoru vlastný názov. Hovor si ponechá meno druhej strany vedľa neho; stretnutie alebo súbor sú inak pomenované podľa aplikácie alebo súboru, z ktorého pochádzajú. |
| Kôš | **Zmazať túto nahrávku**, po opýtaní. Zmizne aj zvuk a nedá sa to vrátiť. |

## Prehrávač {#the-player}

Vyberte riadok a pod zoznamom sa otvorí prehrávač.

- Dve vlnové krivky sú dva kanály nahrávky: horná ste vy, dolná je druhá strana. Importovaný súbor zvyčajne obsahuje jednu zmiešanú stopu, takže obe čiary ukazujú ten istý zvuk.
- **▶** prehráva a pozastavuje; časy vľavo sú pozícia a celková dĺžka. Pruh pod vlnovými krivkami posúva dlhú nahrávku.
- **1×** mení rýchlosť; **Obaja** vyberá, ktorý hlas počujete: oba, iba vás (**Ja**) alebo iba druhú stranu (**Oni**).
- Tlačidlo disku uloží kópiu nahrávky, **×** zatvorí rozhovor.

Čiaru medzi zoznamom a prehrávačom možno potiahnuť nahor, aby mal prepis viac miesta, ako na obrázkoch nižšie.

## Prepis {#the-transcript}

Pod prehrávačom je prepis: jeden riadok na každú repliku, s časom, kedy zaznela, a s tým, kto ju povedal.

<Shot name="26_recording_call" alt="Hovor na linke 305 Podpora: prehrávač a prepis so zvýrazneným riadkom v 0:15" />

| Druh nahrávky | Hovoriaci sú uvedení ako |
| --- | --- |
| Hovor | **Vy** a meno druhej strany alebo číslo |
| Zachytené stretnutie | **Vy** a názov nahrávky pre všetkých ostatných |
| Importovaný súbor | **Všetci · speaker 1**, **Všetci · speaker 2**… — hlasy rozlišuje rozpoznávač |

**Kliknutím na riadok sa presuniete na ten okamih**: prehrávač sa tam posunie, riadok sa zvýrazní a vyslovované slovo je v ňom označené — na obrázku riadok v **0:15** so slovom *Áno*. Stlačením **▶** si od tej chvíle nahrávku vypočujete. Počas prehrávania zvýraznenie sleduje reč, takže môžete čítať a počúvať zároveň a vrátiť sa k ľubovoľnej vete.

Čas vľavo pri každom riadku je zároveň to, na čo odkazuje spracovanie: varovný signál, odpoveď alebo citát nesie čas slov, o ktoré sa opiera.

## Prepis alebo spracovanie: rozbaľovací zoznam {#transcript-or-write-up-the-drop-down}

Rozbaľovací zoznam nad prepisom vyberá, čo sa na tom mieste zobrazí: prepis alebo jedno zo spracovaní, ktoré vytvoril jazykový model.

<Shot name="27_writeup_menu" alt="Otvorený rozbaľovací zoznam: prepis od OpenAI a spracovania hovoru" />

- Riadky s **mikrofónom** sú prepisy, po jednom pre každý [rozpoznávač](../ai-processing/transcription.md), ktorý nahrávku prepísal. Hviezdička označuje hlavný. Keď naň ukážete, uvidíte rozpoznávač, jeho model a jazyk.
- Riadky s **iskrami** sú spracovania, ktoré vytvorili [pokyny](/ai-processing/prompt-studio) v časti [Spracovanie](../ai-processing/processing.md).

Nahrávka môže mať prepisy od viacerých rozpoznávačov, aby sa dali porovnať: stretnutie v Zoome nižšie prepísali X.ai aj Deepgram.

<Shot name="36_zoom_menu" alt="Zachytené stretnutie s dvoma prepismi, Deepgram a X.ai, a jeho spracovaniami" />

Spracovania sú uvedené pod krátkymi názvami:

| V rozbaľovacom zozname | Vytvorí pokyn | Čo ukazuje |
| --- | --- | --- |
| **Zhrnutie** | Zhrnutie | Hlavné body, rozhodnutia a ďalšie kroky v krátkom odseku. |
| **V skratke** | Zhrnutie na jeden riadok | Jedna veta; rovnaký riadok je v zozname pod názvom. |
| **Akcie** | Úlohy | Kto sa zaviazal čo urobiť a dokedy. |
| **Témy** | Témy | Predmety, ktoré zazneli. |
| **Spomenuté** | Mená a čísla | Ľudia, firmy, dátumy, sumy a odkazy. |
| samotná otázka | Otázka k tomuto hovoru | Odpoveď na otázku, ktorú ste položili, so slovami, o ktoré sa opiera. |
| **Kvalita** | Kvalita predaja, Kvalita podpory | Celkové hodnotenie a posúdenie každého kritéria. |
| **Varovné signály** | Varovné signály | Čo si vyžaduje pozornosť, s dôkazom a časom. |
| **Štítky**, **Kategória** | Štítky, Kategória | Označenia, do ktorých bol rozhovor zaradený. |

## Spracovania jedno po druhom {#the-write-ups-one-by-one}

Všetky obrázky nižšie sú z toho istého hovoru na linke **305 Podpora**, v ktorom sa zákazníčka pýta, kedy sa jej obnovujú poistenia.

**Zhrnutie** — rozhovor v niekoľkých vetách.

<Shot name="28_summary" alt="Zhrnutie hovoru" />

**V skratke** — jeden riadok, dosť krátky na to, aby ste rozhovor spoznali v zozname.

<Shot name="29_nutshell" alt="V skratke: zhrnutie hovoru na jeden riadok" />

**Akcie** — každá úloha s tým, kto ju má urobiť, a dokedy, vpravo.

<Shot name="30_actions" alt="Akcie: dve úlohy pre vás, jedna z nich splatná zajtra ráno" />

**Otázka** — opýtajte sa rozhovoru na čokoľvek: otázka sa stane názvom položky a pod odpoveďou sú slová, o ktoré sa opiera, s ich časom v nahrávke.

<Shot name="31_question" alt="Odpoveď na otázku o hovore s dvoma citátmi v 0:19 a 0:33" />

**Kvalita** — hodnotenie od 1 do 5 s dôvodom a každé kritérium označené ako **splnené**, **slabo** alebo **nesplnené** s poznámkou.

<Shot name="32_quality" alt="Kvalita: hodnotenie 4, dve kritériá splnené a dve slabé" />

**Varovné signály** — každý signál so slovami, na ktoré sa vzťahuje, jeho závažnosťou a časom.

<Shot name="33_red_flags" alt="Varovné signály: Daný sľub, nízka závažnosť, v 0:33" />

**Témy** — predmety stretnutia, tu stretnutia v Zoome.

<Shot name="38_topics" alt="Témy stretnutia v Zoome" />

## Tlačidlá vedľa rozbaľovacieho zoznamu {#the-buttons-beside-the-drop-down}

| Tlačidlo | Čo robí |
| --- | --- |
| Iskry | **Prepísať alebo sa spýtať modelu…**: otvorí ponuku, pozrite nižšie. |
| Dva listy | Skopíruje to, čo je zobrazené. |
| Disk | Uloží to do súboru. Prepis môžete uložiť ako obyčajný text alebo ako titulky. |
| Kôš | Zmaže to, čo je zobrazené. |

<Shot name="34_run_menu" alt="Ponuka s iskrami: Prepis so štyrmi rozpoznávačmi, Spracovanie s pokynmi" />

Ponuka s iskrami vykoná prácu na požiadanie. V časti **Prepis** vyberte rozpoznávač, ktorým sa nahrávka prepíše znova; v časti **Spracovanie** vyberte pokyn, ktorý sa spustí hneď — **Otázka k tomuto hovoru…** sa najprv opýta na otázku. Výsledok sa objaví v rozbaľovacom zozname. Takto sa rozhovor spracuje, keď je v [Spracovaní](../ai-processing/processing.md) vypnuté **Spracovávať hovory automaticky**, a takto k rozhovoru, ktorý už nejaké spracovania má, pridáte ďalšie.

## Tri príklady {#three-examples}

### Hovor uskutočnený v telefóne {#a-call-made-in-the-phone}

Hovor vyššie: hovoriaci sú **Vy** a **Katarína Molnárová**, meno kontaktu, na dvoch samostatných kanáloch.

### Súbor, ktorý ste importovali {#a-file-you-imported}

<Shot name="35_recording_import" alt="Importovaný súbor s hovorom na podporu banky: jedna zmiešaná stopa a hovoriaci 1 a 2" />

`riverside_bank_support_call` je súbor mp3 prinesený cez **⋮ → Importovať zo súborov**. Jeho názov je názov súboru, jeho ikona je šípka do lišty a jeho dvoch hovoriacich rozlíšil rozpoznávač. Spracovania našli nahlas povedané číslo karty a vyvolali **Citlivé údaje**.

### Stretnutie zachytené z inej aplikácie {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Stretnutie v Zoome zachytené z počítača: prepis od X.ai s hovoriacimi Vy a názvom stretnutia" />

**Plánovanie spustenia v 4. štvrťroku (Zoom)** sa zachytilo počas stretnutia v Zoome a ceruzkou dostalo názov. Všetci na druhej strane stretnutia sú uvedení pod názvom nahrávky; vy ste **Vy**. Pozrite [Zachytávanie](../capture/capture.md).

## Nahrávka, ktorú už máte {#a-recording-you-already-have}

Nahrávku urobenú inde — na mobilnom telefóne, diktafóne alebo v inom systéme — môžete pridať cez **⋮ → Importovať zo súborov**. Vyberte jeden alebo viac súborov mp3 alebo wav; telefón povie, koľko sa ich importovalo, a pomenuje tie, ktoré sa nepodarilo prečítať ako nahrávku. Každá sa zaradí presne ako vytočený hovor: prepíše sa, spracuje podľa rovnakých [pravidiel](../ai-processing/processing.md#rules) a nájde rovnakým hľadaním.

## Zmazanie nahrávky {#deleting-a-recording}

Keď sa nahrávka zmaže, odíde s ňou všetko, čo z nej vzniklo: prepisy aj spracovania. Ako dlho sa nahrávky uchovávajú samy, sa nastavuje v [Nahrávkach](../recordings.md#retention).
