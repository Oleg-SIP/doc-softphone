---
title: Inställningar för sufflören
sidebar_label: Sufflör
sidebar_position: 5
description: "Inställningar → Sufflör: vad sufflören i realtid behöver, reglaget som tillåter den, textstorleken, hjälparna och deras kort och månadstaken för vad den får kosta."
---

Under **Inställningar → Sufflör** tillåts sufflören i realtid, får sin storlek och sina hjälpare. Själva sufflören — fönstret som skriver ned ett samtal medan det sägs och föreslår vad du kan svara, och repetitionen med en inspelning — beskrivs i [Sufflörens fönster](/interface/prompter).

[Översikten](/interface/settings-overview) över inställningarna visar sufflören under **Sufflör** i två steg: **Tillåt sufflören** och **Starta sufflören**.

## Vad den behöver {#what-it-needs}
- **En igenkännare som kan lyssna medan ett samtal pågår.** Den läggs till under [Inställningar → Transkription](/ai-processing/transcription#live-recognition-for-the-prompter) som vilken annan igenkännare som helst och behöver en **Adress för sufflören** och ett lyckat **Prova**.
- **En språkmodell** för de hjälpare som föreslår något. Det är den som är vald på hjälparen, eller standardmodellen under [Inställningar → Bearbetning](/ai-processing/processing#language-models). Undertexter behöver ingen modell alls.
- **Kryssrutan Tillåt att suffeln används** under **Inställningar → Sufflör**.

När alla tre finns dyker **Sufflör** upp i listan längst ned i telefonen, mellan **Historik** och **Inställningar**, och öppnar [sufflörens fönster](/interface/prompter). Den del av programmet som sköter det är modulen **Sufflör**, *Lyssnar på ett pågående samtal och föreslår*; den kan stängas av under [Moduler](/application/modules).

## Inställningar → Sufflör {#settings--prompter}
<Shot name="41_settings_prompter" alt="Inställningar → Sufflör: reglaget som tillåter sufflören och textstorleken" />

*Taligenkänning medan ett samtal pågår, och förslag skrivna efter dina egna instruktioner. Båda debiteras per minut.*

| Inställning | Standard | Vad den gör |
| --- | --- | --- |
| **Tillåt att suffeln används** | av | Det enda reglaget som över huvud taget låter en sufflör starta. Inget annat på sidan har någon verkan så länge det är av. |
| **Utskrift och förslag** | 13 bildpunkter | Hur stora fönstrets två kolumner ritas. |
| **Upprepa den senaste raden ovanför spalterna** | på | Visar det senaste förslaget — eller den senaste raden, för en hjälpare som inte föreslår något — i ett eget band ovanför kolumnerna. |
| **Den upprepade raden** | 20 bildpunkter | Hur stor texten i bandet är. Visas så länge bandet är på. |

:::caution
Motpartens röst skickas till en igenkännare medan den talar, och det är inte mindre än att spela in den. Där [Inställningar → Inspelning](/recordings) kräver att motparten får veta det först, startar en sufflör först när det har skett.
:::

Sufflören läses medan du talar, ofta på längre avstånd än resten av telefonen, så de två storlekarna väljer du själv: välj några du kan uppfatta utan att luta dig mot skärmen. Dra avdelaren under bandet i [sufflörens fönster](/interface/prompter#the-window) för att göra det högre.

### Hjälpare {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Inställningar → Sufflör: hjälparna och månadstaken" />

En hjälpare är det en sufflör ombeds vara. *Var och en lyssnar på ett pågående samtal och skriver något i sufflörens fönster: orden så som de sägs, en översättning av dem, eller ett förslag på vad du kan säga härnäst.* Vilken som körs väljer du i sufflörens fönster. Programmet har med fyra:

| Hjälpare | Vad den skriver | Frågar en modell |
| --- | --- | --- |
| **Undertexter** | Båda sidornas ord, medan de sägs. | nej |
| **Översättning** | Den andra sidans ord, översatta till programmets språk. | ja |
| **Invändningar i samtalet** | För den som säljer per telefon: när kunden kommer med en invändning, invändningen på en rad och en rad som besvarar den. | ja |
| **Hjälp i intervjun** | För den som blir intervjuad: svaret på frågan som just ställdes, på några korta rader, eller vad nästa svar bör ta upp. | ja |

**▲** och **▼** ändrar ordningen, och det är ordningen i listrutan i [sufflörens fönster](/interface/prompter#the-window). **Lägg till** skapar en egen hjälpare. **Återställ standardvärden** sätter tillbaka prompterna och reglerna som de kom med programmet, här liksom under [Bearbetning](/ai-processing/processing#defaults); dina språkmodeller lämnas i fred.

### En hjälpares kort {#an-assistants-card}
Ett tryck på en hjälpare öppnar dess kort. Det är samma kort som för en [prompt](/ai-processing/prompt-studio) under Bearbetning, med några egna reglage.

<Shot name="42_prompter_assistant" alt="Kortet för hjälparen Invändningar i samtalet: igenkännaren, när ett svar har tagit slut, rollen och prompten" />

| Fält | Vad det gör |
| --- | --- |
| **Namn** | Namnet i listan och i sufflörens fönster. |
| **Svarets form** och **Skicka även** | Som för varje prompt: svarets form och de instruktioner som skickas med. De medföljande hjälparna svarar i **Löptext**. |
| **Igenkännare** | Vilken igenkännare som lyssnar. Bara de som kan lyssna medan någon talar erbjuds. |
| **När ett svar har tagit slut** | Vem som avgör att ett svar är över och kan besvaras: **Igenkännaren bestämmer**, **Efter en paus** eller **Bara när jag ber om det** — då tar ett svar slut när du trycker **Förslag**. Sex av igenkännarna säger själva var ett svar slutar och fyra gör det inte; **Igenkännaren bestämmer** faller tillbaka på en paus där den inte har något svar, och därför är det inställningen att låta stå. |
| **Känn igen min sida också** | En andra session hos samma igenkännare, till dubbelt pris, så att även dina egna ord kommer med i utskriften. De ingår i det modellen får veta men är aldrig det den tillfrågas om. |
| **Roll — vad modellen är** | Skickas till modellen före prompten, till exempel *Du hjälper någon som säljer per telefon…* |
| **Prompten** | Det modellen tillfrågas om för varje svar. `{{reply}}` är svaret som just tog slut och `{{conversation}}` allt som sades innan. *Lämna det tomt så frågas en modell ingenting: orden visas när de kommer, och det enda som betalas för är igenkännaren.* Det är just **Undertexter**. |
| **Svara på** | Förslagets språk: **Vad som än talades**, **Det här programmets språk** eller **Ett enda språk, alltid**, med dess kod. |
| **Modell** | **Standard** eller en av dina [språkmodeller](/ai-processing/processing#language-models). |

### Utgifter {#spending}
*Åtskilt från vad reglerna får lägga på avslutade samtal. En månad av sammanfattningar får inte kunna tysta en sufflör mitt i ett samtal.*

| Fält | När det är nått |
| --- | --- |
| **Igenkännare, per månad** | En sufflör som körs stannar i slutet av svaret den är i — aldrig mitt i ett ord. |
| **Modeller, per månad** | Förslagen stannar och undertexterna fortsätter. |

Tomt betyder inget tak. Vad en minut realtidsljud kostar är igenkännarens **Pris per minut**, angivet på dess kort under [Transkription](/ai-processing/transcription#the-recognisers-card); utan det säger sufflören att beloppet den visar är en uppskattning.
