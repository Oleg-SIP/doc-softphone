---
title: Indstillinger for suffløren
sidebar_label: Sufflør
sidebar_position: 5
description: "Indstillinger → Sufflør: hvad suffløren i realtid har brug for, kontakten der tillader den, skriftstørrelsen, hjælperne og deres kort og de månedlige lofter for, hvad den må bruge."
---

Under **Indstillinger → Sufflør** bliver suffløren i realtid tilladt, får sin størrelse og sine hjælpere. Selve suffløren — vinduet, der skriver et opkald ned, mens det bliver sagt, og foreslår, hvad du kan svare, og prøven på en optagelse — er beskrevet i [Sufflørens vindue](/interface/prompter).

[Oversigten](/interface/settings-overview) over indstillingerne viser suffløren under **Sufflør** i to trin: **Tillad souffleren** og **Start souffleren**.

## Hvad den har brug for {#what-it-needs}
- **En genkender, der kan lytte, mens en samtale er i gang.** Den tilføjes under [Indstillinger → Transskription](/ai-processing/transcription#live-recognition-for-the-prompter) som enhver anden genkender og skal have en **Adresse til suffløren** og en vellykket **Prøv**.
- **En sprogmodel** til de hjælpere, der foreslår noget. Det er den, der er valgt på hjælperen, eller standardmodellen under [Indstillinger → Behandling](/ai-processing/processing#language-models). Undertekster har slet ikke brug for en model.
- **Fluebenet Tillad brug af suffløren** under **Indstillinger → Sufflør**.

Når alle tre er på plads, dukker **Sufflør** op i listen nederst i telefonen, mellem **Historik** og **Indstillinger**, og åbner [sufflørens vindue](/interface/prompter). Den del af programmet, der står for det, er modulet **Sufflør**, *Lytter til en samtale, mens den finder sted, og foreslår*; det kan slås fra under [Moduler](/application/modules).

## Indstillinger → Sufflør {#settings--prompter}
<Shot name="41_settings_prompter" alt="Indstillinger → Sufflør: kontakten der tillader suffløren og skriftstørrelsen" />

*Talegenkendelse mens en samtale er i gang, og forslag skrevet efter dine egne instruktioner. Begge afregnes pr. minut.*

| Indstilling | Standard | Hvad den gør |
| --- | --- | --- |
| **Tillad brug af suffløren** | fra | Den eneste kontakt, der overhovedet lader en sufflør starte. Intet andet på siden virker, før den er slået til. |
| **Udskrift og forslag** | 13 billedpunkter | Hvor store vinduets to kolonner tegnes. |
| **Gentag den nyeste linje over spalterne** | til | Viser det nyeste forslag — eller den nyeste linje for en hjælper, der ikke foreslår noget — i et bånd for sig over kolonnerne. |
| **Den gentagne linje** | 20 billedpunkter | Hvor stor båndets tekst er. Vises, så længe båndet er slået til. |

:::caution
Modpartens stemme sendes til en genkender, mens den taler, og det er ikke mindre end at optage den. Hvor [Indstillinger → Optagelse](/recordings) kræver, at modparten får besked først, starter en sufflør først, når det er sket.
:::

Suffløren læses, mens man taler, ofte på længere afstand end resten af telefonen, så de to størrelser vælger du selv: tag nogle, du kan opfatte uden at læne dig ind mod skærmen. Træk skillelinjen under båndet i [sufflørens vindue](/interface/prompter#the-window) for at gøre det højere.

### Hjælpere {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Indstillinger → Sufflør: hjælperne og de månedlige lofter" />

En hjælper er det, en sufflør bliver bedt om at være. *Hver af dem lytter til en igangværende samtale og skriver noget i sufflørens vindue: ordene, som de siges, en oversættelse af dem, eller et forslag til, hvad du kan sige nu.* Hvilken der kører, vælger du i sufflørens vindue. Programmet har fire med:

| Hjælper | Hvad den skriver | Spørger en model |
| --- | --- | --- |
| **Undertekster** | Begge siders ord, mens de bliver sagt. | nej |
| **Oversættelse** | Den anden sides ord, oversat til programmets sprog. | ja |
| **Indvendinger i samtalen** | For den, der sælger over telefonen: når kunden kommer med en indvending, indvendingen på én linje og én linje, der besvarer den. | ja |
| **Hjælp til samtalen** | For den, der er til jobsamtale: svaret på det spørgsmål, der lige er stillet, i nogle få korte linjer, eller hvad det næste svar bør komme ind på. | ja |

**▲** og **▼** ændrer rækkefølgen, og det er rækkefølgen i rullelisten i [sufflørens vindue](/interface/prompter#the-window). **Tilføj** opretter en hjælper af dine egne. **Gendan standardværdier** sætter prompterne og reglerne tilbage, som de kom med programmet, her som under [Behandling](/ai-processing/processing#defaults); dine sprogmodeller bliver ikke rørt.

### En hjælpers kort {#an-assistants-card}
Et tryk på en hjælper åbner dens kort. Det er det samme kort som for en [prompt](/ai-processing/prompt-studio) under Behandling, med et par egne knapper.

<Shot name="42_prompter_assistant" alt="Kortet for hjælperen Indvendinger i samtalen: genkenderen, hvornår et svar er slut, rollen og prompten" />

| Felt | Hvad det gør |
| --- | --- |
| **Navn** | Navnet i listen og i sufflørens vindue. |
| **Svarets form** og **Send også** | Som ved enhver prompt: svarets form og de instruktioner, der sendes med. De medfølgende hjælpere svarer i **Løbende tekst**. |
| **Genkender** | Hvilken genkender der lytter. Kun dem, der kan lytte, mens nogen taler, tilbydes. |
| **Hvornår et svar er slut** | Hvem der afgør, at et svar er forbi og kan besvares: **Genkenderen bestemmer**, **Efter en pause** eller **Kun når jeg beder om det** — så slutter et svar, når du trykker **Forslag**. Seks af genkenderne siger selv, hvor et svar slutter, og fire gør ikke; **Genkenderen bestemmer** falder tilbage på en pause, hvor den ikke har noget svar, og derfor er det den indstilling, man lader stå. |
| **Genkend også min side** | En ekstra session hos samme genkender, til dobbelt pris, så dine egne ord også kommer med i udskriften. De indgår i det, modellen får at vide, men er aldrig det, den bliver spurgt om. |
| **Rolle — hvad modellen er** | Sendes til modellen før prompten, for eksempel *Du hjælper en person, der sælger over telefonen…* |
| **Prompten** | Det, modellen bliver spurgt om ved hvert svar. `{{reply}}` er det svar, der lige er afsluttet, og `{{conversation}}` alt, hvad der blev sagt før. *Lad det stå tomt, så bliver en model ikke spurgt om noget: ordene vises, som de kommer, og det eneste, der betales for, er genkenderen.* Det er netop **Undertekster**. |
| **Svar på** | Forslagets sprog: **Hvad der end blev talt**, **Dette programs sprog** eller **Ét sprog, altid** med sprogets kode. |
| **Model** | **Standard** eller en af dine [sprogmodeller](/ai-processing/processing#language-models). |

### Forbrug {#spending}
*Adskilt fra hvad reglerne må bruge på færdige samtaler. En måned med resuméer må ikke kunne lukke munden på en sufflør midt i en samtale.*

| Felt | Når det er nået |
| --- | --- |
| **Genkendere, pr. måned** | En kørende sufflør stopper ved slutningen af det svar, den er i gang med — aldrig midt i et ord. |
| **Modeller, pr. måned** | Forslagene stopper, og underteksterne fortsætter. |

Tomt betyder intet loft. Hvad et minuts live-lyd koster, er genkenderens **Pris per minut**, indtastet på dens kort under [Transskription](/ai-processing/transcription#the-recognisers-card); uden den siger suffløren, at det viste beløb er et skøn.
