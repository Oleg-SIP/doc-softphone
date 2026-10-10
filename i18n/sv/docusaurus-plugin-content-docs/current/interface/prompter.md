---
title: Sufflörens fönster
sidebar_position: 3
description: "Fönstret för sufflören i realtid: orden i ett samtal medan de sägs och förslag på vad du kan säga härnäst, knapparna och kolumnerna, repetition med en inspelning och vad det kostar."
---

**Sufflören** lyssnar på ett samtal medan det pågår. I ett eget fönster skriver den vad varje sida säger, medan det sägs, och — där den valda hjälparen frågar en modell — ett förslag på vad du kan säga härnäst. Den är värd att ha öppen under ett säljsamtal, en anställningsintervju eller ett svårt samtal, och med en annan hjälpare visar samma fönster en löpande översättning av den andra sidan, eller bara undertexter.

<Shot name="46_prompter_running" alt="Sufflören repeterar ett säljsamtal: utskriften till vänster, förslagen till höger och det senaste upprepat i stor stil ovanför" />

På bilden lyssnar hjälparen **Invändningar i samtalet** på ett säljsamtal. Den vänstra kolumnen är det som sades, varje rad med sin tid och sin sida; den högra är vad modellen föreslog till varje svar från kunden; det senaste förslaget upprepas i stor stil ovanför båda.

**Sufflör** dyker upp i listan längst ned i telefonen, mellan **Historik** och **Inställningar**, så snart tre saker är på plats: sufflören är tillåten, det finns en igenkännare som kan lyssna medan ett samtal pågår, och — för de hjälpare som föreslår något — en språkmodell. Allt detta ställs in under [Inställningar → Sufflör](/ai-processing/prompter), där även textstorleken och själva hjälparna finns.

## Fönstret {#the-window}
<Shot name="44_prompter_window" alt="Sufflörens fönster med hjälparen Invändningar i samtalet vald, före start" />

Överst finns listrutan **Hjälpare** och till höger om den knapparna:

| Knapp | Vad den gör |
| --- | --- |
| **Starta** / **Stoppa** (triangel / kvadrat) | *Börja lyssna på det här samtalet* — eller sluta: *Det sagda stannar på skärmen*. En start som trycks innan samtalet är besvarat väntar på det, och knappen avbryter den då igen. |
| **Förslag** (gnistor) | *Avsluta svaret här och föreslå vad som ska sägas*, utan att vänta på en paus. För en hjälpare som inte frågar någon modell heter knappen **Avsluta svaret**: den stänger bara svaret, så att nästa börjar rent. Den är nedtonad så länge sufflören inte körs. |
| **Rensa** (papperskorg) | Glömmer efter en fråga det som står på skärmen. *Båda kolumnerna försvinner, och med dem samtalet som nästa förslag skulle ha byggts av.* Att stoppa och starta igen rensar ingenting: ett samtal som stoppats och startats igen är oftast samma samtal. |
| **Exportera…** (diskett) | Skriver båda kolumnerna med sina tider till en fil: text (`.txt`) eller kalkylblad (`.csv`), under det namn du ger filen. |
| **Repetition…** (bibliotek) | [Provar en hjälpare på en inspelning](#rehearsing-on-a-recording) i stället för ett samtal. |

Listrutan visar [hjälparna](/ai-processing/prompter#assistants) i den ordning som är vald under **Inställningar → Sufflör**. Den kan inte ändras medan en sufflör körs, men den förblir synlig, så att du ser vilken hjälpare som arbetar. Medan den lyssnar står det **Vi lyssnar** på samtalets kort.

Under knapparna ligger bandet med den senaste raden och under det de två kolumnerna:

- **Utskrift** — varje rad med sin tid och sin sida;
- **Förslag** — varje förslag med tiden för det svar det besvarar. För en hjälpare som inte frågar någon modell finns inte den här kolumnen, och utskriften tar hela bredden.

När fönstret är smalt står de två kolumnerna under varandra. En kolumn följer det som kommer in tills du rullar tillbaka i den, och följer igen när du kommer tillbaka till botten. Tryck på valfri rad för att hålla den kvar i bandet; tryck på den senaste, eller på nålen i bandet, för att följa igen. Högerklick kopierar en rad, ett förslag, hela utskriften eller alla förslag. Dra avdelaren under bandet för att göra det högre; textstorlekarna ställs in under [Inställningar → Sufflör](/ai-processing/prompter#settings--prompter).

## Repetition med en inspelning {#rehearsing-on-a-recording}
En hjälpare kan provas utan att någon är i telefonen. **Repetition…** visar samtalen i [biblioteket](/interface/recordings), de senaste först, och **En fil på den här datorn…** för en `.mp3`- eller `.wav`-fil.

<Shot name="45_prompter_rehearse" alt="Repetition…: samtalen i biblioteket och en fil på den här datorn" />

Inspelningen du väljer visas i en spelare under knapparna: spela upp och pausa, båda kanalerna ritade som en vågform du kan klicka i, och tiden. Tryck **Starta**: inspelningen spelas in i sufflören samma väg som ett samtal, i sin egen takt — snabbare uppspelning erbjuds medvetet inte, eftersom en sufflör som matas i en och en halv gånger farten skulle pausa, svara och debitera för ett samtal som ingen har fört. Krysset till höger är **Avsluta repetitionen**, tillbaka till att lyssna på samtal.

En inspelning med en enda kanal, till exempel en importerad fil, hörs som ett enda rum: *sufflören hör allt som motparten*.

## Vad det kostar och vart orden tar vägen {#what-it-costs-and-where-the-words-go}
- Igenkännaren debiteras per minut realtidsljud, och **Känn igen min sida också** fördubblar det. En modell debiteras för varje förslag. Båda räknas mot sufflörens [månadstak](/ai-processing/prompter#spending), inte mot gränserna i Bearbetning.
- Den andra sidans röst lämnar datorn medan den talar, till den igenkännare du har valt. En igenkännare på din egen maskin — **Vosk**, **WhisperLive** eller **NVIDIA Riva** — håller den inom huset.
- Det sufflören visar är ingen inspelning. Tryck **Exportera…** för att spara det; vill du ha själva samtalet, [spela in samtalet](/recordings) också.

## När den inte startar {#when-it-does-not-start}
Fönstret säger på en rad under knapparna vad som saknas.

| Fönstret säger | Vad du gör |
| --- | --- |
| *Sufflering är avstängd. Inställningar → Sufflör.* | Kryssa i **Tillåt att suffeln används**. |
| *Ingen igenkännare här kan lyssna medan någon talar. Inställningar → Transkription.* | Lägg till en igenkännare med en **Adress för sufflören** och tryck **Prova**. |
| *Det finns inget att köra. Inställningar → Sufflör, och lägg till en hjälpare.* | Alla hjälpare har tagits bort eller stängts av: lägg till en, eller tryck **Återställ standardvärden**. |
| *Motparten måste få veta det först. Börja spela in det här samtalet, eller ändra vad Inställningar → Inspelning säger om samtycke.* | Starta inspelningen, som spelar upp meddelandet, eller ändra inställningen för samtycke. |
| *Igenkännaren började inte lyssna. Kontrollera dess live-adress och dess modell under Inställningar → Transkription.* | Adressen för sufflören, modellen eller nyckeln är fel. **Prova** på igenkännarens kort säger vilken. |
| *Månadens belopp för igenkännare är förbrukat.* | Höj **Igenkännare, per månad**, eller vänta tills månaden byts. |
| *Månadens belopp för modeller är förbrukat. Orden fortsätter; sufflering har stannat.* | Höj **Modeller, per månad**. |
