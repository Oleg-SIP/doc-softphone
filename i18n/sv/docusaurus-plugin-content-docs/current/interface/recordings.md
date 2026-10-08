---
title: Fönstret Inspelningar
sidebar_position: 2
description: "\"Biblioteket med alla samtal — ett telefonsamtal, en importerad fil eller ett möte fångat från Zoom, Teams eller Meet: filter, spelaren, utskriften som du kan spela upp från vilken rad som helst, och sammanfattningarna.\""
---

**Inspelningar** är där varje samtal bor, hur det än kom in: ett samtal som rings eller tas emot i telefonen, en ljudfil du importerat eller ett möte fångat från Zoom, Teams, Meet eller något annat program. Alla står i en och samma lista, och var och en öppnas på samma sätt: spelaren, utskriften och allt som språkmodellen skrivit om den. Tryck på **Inspelningar** nere till vänster i [huvudfönstret](main-window.md) för att öppna fönstret.

<Shot name="01_recordings" alt="Fliken Inspelningar: ett fångat Zoom-möte, en importerad fil och samtal i en lista" />

## Tre sorters inspelningar {#three-kinds-of-recording}

Ikonen till vänster på en rad visar hur samtalet kom in.

| Ikon | Samtal | Dess namn i listan | Hur det hamnar här |
| --- | --- | --- | --- |
| En lur med en pil | Ett samtal som rings eller tas emot i den här telefonen. Pilen pekar in för ett inkommande samtal och ut för ett utgående. | Kontaktens namn eller numret | Spelas in enligt inställningarna i [Inspelningar](../recordings.md) |
| En pil in i ett streck | En fil importerad från annat håll: en mobiltelefon, en diktafon eller ett annat system | Filens namn | **⋮ → Importera från filer**; se [nedan](#a-recording-you-already-have) |
| Ett fönster | Ett möte som hålls i ett annat program | Namnet du gav det, eller **Ett annat program** | [Fångst](../capture/capture.md) |

På bilden är de tre översta raderna en av varje sort: ett Zoom-möte, en importerad fil med ett banksamtal till supporten och ett samtal som togs emot på linjen **305 Support**. Oavsett varifrån de kommer skrivs de ut, sammanfattas och söks på samma sätt.

## Hitta ett samtal {#finding-a-conversation}

Raden överst har fem filter, ett sökfält och en meny:

| Kontroll | Begränsar listan efter |
| --- | --- |
| **Sort** | sättet samtalet kom in på: inkommande eller utgående samtal, **Importerade**, **Fångade** |
| **Period** | datumet: **I dag**, **I går**, **Senaste 7 dagarna** eller **Välj datum…** |
| **Kategori** | kategorin det sorterats under — se [Ordlistor](../ai-processing/dictionaries.md) |
| **Märke** | etiketterna och signalerna det har |
| **Igenkännare** | den [igenkännare](../ai-processing/transcription.md) som gjorde dess utskrift |
| **Sök** | det som sades i det — sökningen går igenom utskrifterna av allt du har spelat in |

<Shot name="39_more_menu" alt="Menyn ⋮ i listan: Importera från filer, Exportera till CSV, Öppna i en webbläsare" />

Knappen **⋮** till höger på raden öppnar fler åtgärder för listan:

| Val | Gör |
| --- | --- |
| **Importera från filer** | Tar in inspelningar du redan har. Se [En inspelning du redan har](#a-recording-you-already-have). |
| **Exportera till CSV** | Sparar listan som ett kalkylblad: när, parten och numret, riktning, längd, kategori, etiketter, signaler och sammanfattningen på en rad för varje samtal. |
| **Öppna i en webbläsare** | Öppnar listan i din webbläsare, som den sida det [lokala REST-API:et](../integration/rest-api.md) visar på `/ui`. |

## Listan {#the-list}

Varje rad visar:

- ikonen för sorts samtal;
- namnet — den andra parten, numret, filen eller mötet — och under det datumet och sammanfattningen på en rad;
- till höger kategorin med dess poäng (ett tal, till exempel *Support · 4*), sedan signalerna och etiketterna och sist längden.

Signaler ritas i rött (på bilden *Känsliga uppgifter*, *Löfte givet*, *Arg kund*); etiketter är vanliga (*Återuppringning utlovad*). Ett samtal utan sammanfattning och kategori har inte sammanfattats än — raden **Anna Eriksson** på bilden.

<Shot name="40_row_actions" alt="En rad med pekaren över sig: knapparna nål, penna och papperskorg" />

Peka på en rad så visas tre knappar till höger på den:

| Knapp | Gör |
| --- | --- |
| Nål | **Behåll den här**: en behållen inspelning tas aldrig bort av gränserna under [Gallring](../recordings.md#retention). Tryck igen för att sluta behålla den. |
| Penna | **Byt namn**: ger samtalet ett eget namn. Ett samtal behåller partens namn bredvid; ett möte eller en fil får annars namn efter programmet eller filen det kom från. |
| Papperskorg | **Ta bort den här inspelningen**, efter en fråga. Ljudet försvinner också, och det går inte att ångra. |

## Spelaren {#the-player}

Markera en rad för att öppna spelaren under listan.

- De två vågformerna är inspelningens två kanaler: den övre är du, den nedre är den andra sidan. En importerad fil har oftast ett enda blandat spår, så båda linjerna visar samma ljud.
- **▶** spelar upp och pausar; tiderna till vänster är positionen och den totala längden. Stapeln under vågformerna rullar genom en lång inspelning.
- **1×** ändrar hastigheten; **Båda** väljer vilken röst du hör: båda, bara du (**Jag**) eller bara den andra sidan (**De**).
- Diskettknappen sparar en kopia av inspelningen, **×** stänger samtalet.

Linjen mellan listan och spelaren kan dras uppåt för att ge utskriften mer plats, som på bilderna nedan.

## Utskriften {#the-transcript}

Under spelaren finns utskriften: en rad per replik, med tidpunkten då den sades och vem som sa den.

<Shot name="26_recording_call" alt="Ett samtal på linjen 305 Support: spelaren och utskriften, med raden vid 0:13 markerad" />

| Sorts inspelning | Talarna visas som |
| --- | --- |
| Ett samtal | **Du** och den andra partens namn, eller numret |
| Ett fångat möte | **Du** och inspelningens namn, för alla andra |
| En importerad fil | **Alla · speaker 1**, **Alla · speaker 2** … — igenkännaren skiljer rösterna åt |

**Klicka på en rad för att gå till det ögonblicket**: spelaren flyttas dit, raden markeras och ordet som sägs markeras inuti den — på bilden raden vid **0:13**, med ordet *Ja*. Tryck på **▶** för att lyssna därifrån. Medan det spelas följer markeringen talet, så att du kan läsa och lyssna samtidigt och hoppa tillbaka till vilken mening som helst.

Tiden till vänster på varje rad är också det en sammanfattning pekar på: en signal, ett svar eller ett citat bär tiden för de ord det bygger på.

## Utskrift eller sammanfattning: listrutan {#transcript-or-write-up-the-drop-down}

Listrutan ovanför utskriften väljer vad som visas på platsen: en utskrift, eller en av de sammanfattningar som språkmodellen gjort.

<Shot name="27_writeup_menu" alt="Den öppna listrutan: OpenAI-utskriften och samtalets sammanfattningar" />

- Rader med en **mikrofon** är utskrifter, en för varje [igenkännare](../ai-processing/transcription.md) som skrivit ut inspelningen. Stjärnan markerar huvudutskriften. Peka på en för att se igenkännaren, dess modell och språket.
- Rader med **gnistor** är sammanfattningar, gjorda av [prompterna](/ai-processing/prompt-studio) i [Bearbetning](../ai-processing/processing.md).

En inspelning kan ha utskrifter från flera igenkännare, för jämförelse: Zoom-mötet nedan skrevs ut av både X.ai och Deepgram.

<Shot name="36_zoom_menu" alt="Ett fångat möte med två utskrifter, Deepgram och X.ai, och dess sammanfattningar" />

Sammanfattningarna står under korta namn:

| I listrutan | Görs av prompten | Vad den visar |
| --- | --- | --- |
| **Sammanfattning** | Sammanfattning | Huvudpunkterna, besluten och nästa steg i ett kort stycke. |
| **I korthet** | Sammanfattning på en rad | En mening; samma rad visas under namnet i listan. |
| **Åtgärder** | Att göra | Vem som kommit överens om att göra vad, och till när. |
| **Ämnen** | Ämnen | De ämnen som kom upp. |
| **Nämnda** | Namn och tal | Personer, företag, datum, belopp och referenser. |
| själva frågan | En fråga om det här samtalet | Svaret på en fråga du ställt, med orden det bygger på. |
| **Kvalitet** | Säljkvalitet, Supportkvalitet | Ett helhetsbetyg och ett omdöme om varje kriterium. |
| **Signaler** | Signaler | Det som behöver uppmärksammas, med belägget och tiden. |
| **Etiketter**, **Kategori** | Etiketter, Kategori | Märkena som samtalet sorterats under. |

## Sammanfattningarna, en och en {#the-write-ups-one-by-one}

Bilderna nedan visar alla samma samtal, på linjen **305 Support**, där en kund frågar när hennes försäkringar förnyas.

**Sammanfattning** — samtalet i några meningar.

<Shot name="28_summary" alt="Samtalets sammanfattning" />

**I korthet** — en rad, kort nog för att känna igen samtalet i listan.

<Shot name="29_nutshell" alt="I korthet: samtalets sammanfattning på en rad" />

**Åtgärder** — varje uppgift med vem som ska göra den och när, till höger.

<Shot name="30_actions" alt="Åtgärder: två uppgifter för Du, en av dem ska göras i morgon bitti" />

**En fråga** — fråga samtalet vad du vill: frågan blir namnet på objektet, och under svaret står orden det bygger på, med deras tid i inspelningen.

<Shot name="31_question" alt="Svaret på en fråga om samtalet, med två citat vid 0:16 och 0:28" />

**Kvalitet** — betyget från 1 till 5 med skälet till det, och varje kriterium markerat **uppfyllt**, **svagt** eller **ej uppfyllt** med en anmärkning.

<Shot name="32_quality" alt="Kvalitet: betyg 4, två kriterier uppfyllda och två svaga" />

**Signaler** — varje signal med orden den väcktes av, dess allvarlighetsgrad och tiden.

<Shot name="33_red_flags" alt="Signaler: Löfte givet, låg, vid 0:28" />

**Ämnen** — ämnena för ett möte, här för Zoom-mötet.

<Shot name="38_topics" alt="Ämnen för Zoom-mötet" />

## Knapparna bredvid listrutan {#the-buttons-beside-the-drop-down}

| Knapp | Gör |
| --- | --- |
| Gnistor | **Transkribera eller fråga en modell…**: öppnar en meny, se nedan. |
| Två ark | Kopierar det som visas. |
| Diskett | Sparar det i en fil. En utskrift kan sparas som vanlig text eller som undertexter. |
| Papperskorg | Tar bort det som visas. |

<Shot name="34_run_menu" alt="Gnistmenyn: Transkription med fyra igenkännare, Bearbetning med prompterna" />

Gnistmenyn utför arbetet på begäran. Under **Transkription** väljer du en igenkännare för att skriva ut inspelningen på nytt med den; under **Bearbetning** väljer du en prompt för att köra den nu — **En fråga om det här samtalet** frågar först efter frågan. Resultatet visas i listrutan. Så sammanfattas ett samtal när **Bearbeta samtal automatiskt** är av i [Bearbetning](../ai-processing/processing.md), och så lägger du till ytterligare en sammanfattning till ett samtal som redan har några.

## Tre exempel {#three-examples}

### Ett samtal som rings i telefonen {#a-call-made-in-the-phone}

Samtalet ovan: talarna är **Du** och **Karin Larsson**, kontaktens namn, på två separata kanaler.

### En fil du importerat {#a-file-you-imported}

<Shot name="35_recording_import" alt="En importerad fil med en banks supportsamtal: ett blandat spår och talarna 1 och 2" />

`riverside_bank_support_call` är en mp3-fil som tagits in med **⋮ → Importera från filer**. Dess namn är filens namn, dess ikon en pil in i ett streck, och dess två talare har igenkännaren skilt åt. Sammanfattningarna hittade ett kortnummer som sagts högt och väckte **Känsliga uppgifter**.

### Ett möte fångat från ett annat program {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Ett Zoom-möte fångat från datorn: X.ai-utskriften med Du och mötets namn som talare" />

**Planering av Q4-lanseringen (Zoom)** fångades medan mötet pågick i Zoom och fick sitt namn med pennan. Alla på andra sidan av mötet visas under inspelningens namn; du är **Du**. Se [Fångst](../capture/capture.md).

## En inspelning du redan har {#a-recording-you-already-have}

En inspelning som gjorts någon annanstans — på en mobiltelefon, en diktafon eller ett annat system — kan läggas till med **⋮ → Importera från filer**. Välj en eller flera mp3- eller wav-filer; telefonen säger hur många som importerades och nämner de som inte gick att läsa som en inspelning. Var och en arkiveras precis som ett ringt samtal: utskriven, sammanfattad av samma [regler](../ai-processing/processing.md#rules) och hittad av samma sökning.

## Ta bort en inspelning {#deleting-a-recording}

När en inspelning tas bort försvinner allt som gjorts av den tillsammans med den: utskrifterna och sammanfattningarna. Hur länge inspelningar sparas av sig själva ställs in under [Gallring](../recordings.md#retention).
