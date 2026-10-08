---
title: Okno nahrávek
sidebar_position: 2
description: "\"Knihovna všech rozhovorů — hovoru, importovaného souboru či schůzky zachycené ze Zoomu, Teams nebo Meetu: filtry, přehrávač, přepis, ze kterého lze přehrávat od kteréhokoli řádku, a zápisy.\""
---

**Nahrávky** jsou místo, kde žije každý rozhovor, ať přišel jakkoli: hovor uskutečněný nebo přijatý v telefonu, importovaný zvukový soubor, nebo schůzka zachycená ze Zoomu, Teams, Meetu či jakékoli jiné aplikace. Všechny leží v jednom seznamu a každý se otevírá stejně: přehrávač, přepis a vše, co o něm napsal jazykový model. Otevřete je tlačítkem **Nahrávky** vlevo dole v [hlavním okně](main-window.md).

<Shot name="01_recordings" alt="Karta Nahrávky: zachycená schůzka v Zoomu, importovaný soubor a hovory v jednom seznamu" />

## Tři druhy nahrávek {#three-kinds-of-recording}

Ikona vlevo na řádku říká, jak rozhovor přišel.

| Ikona | Rozhovor | Jeho název v seznamu | Jak se sem dostane |
| --- | --- | --- | --- |
| Sluchátko se šipkou | Hovor uskutečněný nebo přijatý v tomto telefonu. Šipka míří dovnitř u příchozího a ven u odchozího hovoru. | Jméno kontaktu, nebo číslo | Nahrává se podle nastavení v [Nahrávkách](../recordings.md) |
| Šipka do lišty | Soubor importovaný odjinud: z mobilu, diktafonu nebo jiného systému | Název souboru | **⋮ → Import ze souborů**; viz [níže](#a-recording-you-already-have) |
| Okno | Schůzka vedená v jiné aplikaci | Název, který jste jí dali, nebo **Jiná aplikace** | [Zachytávání](../capture/capture.md) |

Na obrázku jsou horní tři řádky po jednom od každého druhu: schůzka v Zoomu, importovaný soubor s hovorem na podporu banky a hovor přijatý na lince **305 Podpora**. Ať pocházejí odkudkoli, přepisují se, zpracovávají a hledají stejně.

## Hledání rozhovoru {#finding-a-conversation}

Lišta nahoře má pět filtrů, pole hledání a nabídku:

| Ovládací prvek | Zužuje seznam podle |
| --- | --- |
| **Druh** | způsobu, jakým rozhovor přišel: příchozí nebo odchozí hovory, **Importované**, **Zachycené** |
| **Období** | data: **Dnes**, **Včera**, **Posledních 7 dní** nebo **Vybrat data…** |
| **Kategorie** | kategorie, do které byl zařazen — viz [Slovníky](../ai-processing/dictionaries.md) |
| **Značka** | značek a varovných signálů, které nese |
| **Rozpoznávač** | [rozpoznávače](../ai-processing/transcription.md), který vytvořil jeho přepis |
| **Hledat** | toho, co v něm zaznělo — hledá se v přepisech všeho, co jste nahráli |

<Shot name="39_more_menu" alt="Nabídka ⋮ seznamu: Import ze souborů, Export do CSV, Otevřít v prohlížeči" />

Tlačítko **⋮** vpravo na liště otevře další akce se seznamem:

| Položka | Dělá |
| --- | --- |
| **Import ze souborů** | Přinese nahrávky, které už máte. Viz [Nahrávka, kterou už máte](#a-recording-you-already-have). |
| **Export do CSV** | Uloží seznam jako tabulku: kdy, strana a číslo, směr, délku, kategorii, štítky, varovné signály a shrnutí na jeden řádek každého rozhovoru. |
| **Otevřít v prohlížeči** | Otevře seznam v prohlížeči jako stránku, kterou na adrese `/ui` poskytuje [místní REST API](../integration/rest-api.md). |

## Seznam {#the-list}

Každý řádek ukazuje:

- ikonu druhu rozhovoru;
- název — druhou stranu, číslo, soubor nebo schůzku — a pod ním datum a shrnutí na jeden řádek;
- vpravo kategorii se skóre (číslo, například *Podpora · 4*), pak varovné signály a štítky a nakonec délku.

Varovné signály jsou červené (na obrázku *Citlivé údaje*, *Daný slib*, *Rozzlobený zákazník*); štítky jsou obyčejné (*Slíbeno zavolat zpět*). Rozhovor bez shrnutí a kategorie ještě nebyl zpracován — na obrázku řádek **Eva Králová**.

<Shot name="40_row_actions" alt="Řádek s ukazatelem myši nad ním: tlačítka s připínáčkem, tužkou a košem" />

Když na řádek ukážete, objeví se u něj vpravo tři tlačítka:

| Tlačítko | Dělá |
| --- | --- |
| Připínáček | **Uchovat tuto**: uchovaná nahrávka se nikdy nesmaže kvůli limitům [Uchovávání](../recordings.md#retention). Dalším stisknutím ji přestanete uchovávat. |
| Tužka | **Přejmenovat**: dá rozhovoru vlastní název. Hovor si vedle něj nechá jméno druhé strany; schůzka nebo soubor se jinak jmenuje podle aplikace či souboru, ze kterého pochází. |
| Koš | **Smazat tuto nahrávku**, po potvrzení. Smaže se i zvuk a nelze to vrátit. |

## Přehrávač {#the-player}

Výběrem řádku otevřete přehrávač pod seznamem.

- Dvě vlny jsou dva kanály nahrávky: horní jste vy, dolní je druhá strana. Importovaný soubor obvykle obsahuje jednu smíšenou stopu, takže obě čáry ukazují stejný zvuk.
- **▶** přehrává a pozastavuje; časy vlevo jsou pozice a celková délka. Pruh pod vlnami posouvá dlouhou nahrávku.
- **1×** mění rychlost; **Oba** vybírá, který hlas slyšíte: oba, jen svůj (**Já**) nebo jen druhé strany (**Oni**).
- Tlačítko s disketou uloží kopii nahrávky, **×** rozhovor zavře.

Čáru mezi seznamem a přehrávačem lze přetáhnout nahoru, aby měl přepis víc místa, jako na obrázcích níže.

## Přepis {#the-transcript}

Pod přehrávačem je přepis: jeden řádek na každou repliku, s časem, kdy zazněla, a s tím, kdo ji řekl.

<Shot name="26_recording_call" alt="Hovor na lince 305 Podpora: přehrávač a přepis se zvýrazněným řádkem v 0:13" />

| Druh nahrávky | Mluvčí jsou zobrazeni jako |
| --- | --- |
| Hovor | **Vy** a jméno druhé strany, nebo číslo |
| Zachycená schůzka | **Vy** a název nahrávky pro všechny ostatní |
| Importovaný soubor | **Všichni · speaker 1**, **Všichni · speaker 2**… — hlasy rozlišuje rozpoznávač |

**Kliknutím na řádek přejdete na daný okamžik**: přehrávač se tam přesune, řádek se zvýrazní a uvnitř něj se označí právě vyslovované slovo — na obrázku řádek v **0:13** se slovem *Ano*. Stiskem **▶** si poslechnete od tohoto místa. Při přehrávání zvýraznění sleduje řeč, takže můžete číst i poslouchat zároveň a vrátit se k libovolné větě.

Čas vlevo u každého řádku je také to, na co zápis odkazuje: varovný signál, odpověď nebo citát nesou čas slov, o která se opírají.

## Přepis, nebo zápis: rozbalovací seznam {#transcript-or-write-up-the-drop-down}

Rozbalovací seznam nad přepisem vybírá, co se na tom místě zobrazí: přepis, nebo některý ze zápisů, které napsal jazykový model.

<Shot name="27_writeup_menu" alt="Otevřený rozbalovací seznam: přepis od OpenAI a zápisy hovoru" />

- Řádky s **mikrofonem** jsou přepisy, po jednom od každého [rozpoznávače](../ai-processing/transcription.md), který nahrávku přepsal. Hvězdička označuje hlavní. Když na řádek ukážete, uvidíte rozpoznávač, jeho model a jazyk.
- Řádky s **jiskrami** jsou zápisy, které vytvořily [pokyny](/ai-processing/prompt-studio) ve [Zpracování](../ai-processing/processing.md).

Nahrávka může mít přepisy od několika rozpoznávačů, abyste je mohli porovnat: schůzku v Zoomu níže přepsaly X.ai i Deepgram.

<Shot name="36_zoom_menu" alt="Zachycená schůzka se dvěma přepisy, Deepgram a X.ai, a jejími zápisy" />

Zápisy jsou v seznamu pod krátkými názvy:

| V rozbalovacím seznamu | Vytváří pokyn | Co ukazuje |
| --- | --- | --- |
| **Shrnutí** | Shrnutí | Hlavní body, rozhodnutí a další kroky v krátkém odstavci. |
| **Ve zkratce** | Shrnutí na jeden řádek | Jedna věta; stejný řádek je vidět pod názvem v seznamu. |
| **Akce** | Úkoly | Kdo se zavázal co udělat a do kdy. |
| **Témata** | Témata | Předměty, které přišly na řadu. |
| **Zmíněné** | Jména a čísla | Lidé, firmy, data, částky a odkazy. |
| samotná otázka | Otázka k tomuto hovoru | Odpověď na vaši otázku, s větami, o které se opírá. |
| **Kvalita** | Kvalita prodeje, Kvalita podpory | Celkové skóre a hodnocení každého kritéria. |
| **Varovné signály** | Varovné signály | Co vyžaduje pozornost, s důkazem a časem. |
| **Štítky**, **Kategorie** | Štítky, Kategorie | Označení, do kterých byl rozhovor zařazen. |

## Zápisy jeden po druhém {#the-write-ups-one-by-one}

Všechny obrázky níže ukazují tentýž hovor na lince **305 Podpora**, ve kterém se zákaznice ptá, kdy se jí obnovují pojistky.

**Shrnutí** — rozhovor v několika větách.

<Shot name="28_summary" alt="Shrnutí hovoru" />

**Ve zkratce** — jeden řádek, dost krátký na to, aby podle něj bylo možné rozhovor v seznamu poznat.

<Shot name="29_nutshell" alt="Ve zkratce: shrnutí hovoru na jeden řádek" />

**Akce** — každý úkol s tím, kdo ho má udělat, a vpravo s termínem.

<Shot name="30_actions" alt="Akce: dva úkoly pro uživatele, jeden z nich s termínem zítra ráno" />

**Otázka** — zeptejte se rozhovoru na cokoli: otázka se stane názvem položky a pod odpovědí jsou slova, o která se opírá, s časem v nahrávce.

<Shot name="31_question" alt="Odpověď na otázku k hovoru se dvěma citáty v 0:17 a 0:29" />

**Kvalita** — skóre od 1 do 5 s důvodem a každé kritérium označené **splněno**, **slabě** nebo **nesplněno** s poznámkou.

<Shot name="32_quality" alt="Kvalita: skóre 4, dvě kritéria splněna a dvě slabá" />

**Varovné signály** — každý signál se slovy, na kterých vznikl, s mírou závažnosti a časem.

<Shot name="33_red_flags" alt="Varovné signály: Daný slib, nízká, v 0:29" />

**Témata** — předměty schůzky, zde schůzky v Zoomu.

<Shot name="38_topics" alt="Témata schůzky v Zoomu" />

## Tlačítka vedle rozbalovacího seznamu {#the-buttons-beside-the-drop-down}

| Tlačítko | Dělá |
| --- | --- |
| Jiskry | **Přepsat nebo se zeptat modelu…**: otevře nabídku, viz níže. |
| Dva listy | Zkopíruje, co je zobrazeno. |
| Disketa | Uloží to do souboru. Přepis lze uložit jako prostý text nebo jako titulky. |
| Koš | Smaže, co je zobrazeno. |

<Shot name="34_run_menu" alt="Nabídka s jiskrami: Přepis se čtyřmi rozpoznávači, Zpracování s pokyny" />

Nabídka s jiskrami dělá práci na požádání. V části **Přepis** vyberte rozpoznávač, aby nahrávku přepsal znovu; v části **Zpracování** vyberte pokyn, aby se spustil hned — **Otázka k tomuto hovoru** se nejdřív zeptá na otázku. Výsledek se objeví v rozbalovacím seznamu. Takto se rozhovor zapíše, když je ve [Zpracování](../ai-processing/processing.md) vypnuto **Zpracovávat hovory automaticky**, a takto k rozhovoru, který už nějaké zápisy má, přidáte další.

## Tři příklady {#three-examples}

### Hovor uskutečněný v telefonu {#a-call-made-in-the-phone}

Hovor výše: mluvčí jsou **Vy** a **Kateřina Veselá**, jméno kontaktu, na dvou samostatných kanálech.

### Importovaný soubor {#a-file-you-imported}

<Shot name="35_recording_import" alt="Importovaný soubor s hovorem na podporu banky: jedna smíšená stopa a mluvčí 1 a 2" />

`riverside_bank_support_call` je soubor mp3 přinesený přes **⋮ → Import ze souborů**. Jeho název je název souboru, ikona je šipka do lišty a oba mluvčí byli rozlišeni rozpoznávačem. Zápisy našly nahlas řečené číslo karty a vyvolaly **Citlivé údaje**.

### Schůzka zachycená z jiné aplikace {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Schůzka v Zoomu zachycená z počítače: přepis od X.ai s mluvčími Vy a názvem schůzky" />

**Plánování spuštění ve 4. čtvrtletí (Zoom)** se zachytilo během schůzky v Zoomu a tužkou dostalo název. Všichni na druhé straně schůzky jsou uvedeni pod názvem nahrávky; vy jste **Vy**. Viz [Zachytávání](../capture/capture.md).

## Nahrávka, kterou už máte {#a-recording-you-already-have}

Nahrávku pořízenou jinde — na mobilu, diktafonu nebo v jiném systému — lze přidat přes **⋮ → Import ze souborů**. Vyberte jeden či více souborů mp3 nebo wav; telefon řekne, kolik se jich naimportovalo, a vyjmenuje ty, které se nepodařilo přečíst jako nahrávku. Každá se zařadí stejně jako vytočený hovor: přepíše se, zpracuje podle stejných [pravidel](../ai-processing/processing.md#rules) a najde ji stejné hledání.

## Smazání nahrávky {#deleting-a-recording}

Když se nahrávka smaže, odejde s ní vše, co z ní vzniklo: přepisy i zápisy. Jak dlouho se nahrávky uchovávají samy, se nastavuje v [Nahrávkách](../recordings.md#retention).
