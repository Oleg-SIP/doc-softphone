---
title: Innstillinger for suffløren
sidebar_label: Sufflør
sidebar_position: 5
description: "Innstillinger → Sufflør: hva suffløren i sanntid trenger, bryteren som tillater den, skriftstørrelsen, hjelperne og kortene deres, og de månedlige takene for hva den får bruke."
---

Under **Innstillinger → Sufflør** blir suffløren i sanntid tillatt, får sin størrelse og sine hjelpere. Selve suffløren — vinduet som skriver ned en samtale mens den blir sagt og foreslår hva du kan svare, og prøven på et opptak — er beskrevet i [Sufflørens vindu](/interface/prompter).

[Oversikten](/interface/settings-overview) over innstillingene viser suffløren under **Sufflør** i to trinn: **Tillat suffløren** og **Start suffløren**.

## Hva den trenger {#what-it-needs}
- **En gjenkjenner som kan lytte mens en samtale pågår.** Den legges til under [Innstillinger → Transkripsjon](/ai-processing/transcription#live-recognition-for-the-prompter) som enhver annen gjenkjenner, og trenger en **Adresse for suffløren** og en vellykket **Prøv**.
- **En språkmodell** for hjelperne som foreslår noe. Det er den som er valgt på hjelperen, eller standardmodellen under [Innstillinger → Behandling](/ai-processing/processing#language-models). Undertekster trenger ingen modell i det hele tatt.
- **Avkrysningen Tillat bruk av suffløren** under **Innstillinger → Sufflør**.

Når alle tre er på plass, dukker **Sufflør** opp i listen nederst i telefonen, mellom **Historikk** og **Innstillinger**, og åpner [sufflørens vindu](/interface/prompter). Delen av programmet som står for dette, er modulen **Sufflør**, *Lytter til en samtale mens den skjer, og foreslår*; den kan slås av under [Moduler](/application/modules).

## Innstillinger → Sufflør {#settings--prompter}
<Shot name="41_settings_prompter" alt="Innstillinger → Sufflør: bryteren som tillater suffløren, og skriftstørrelsen" />

*Talegjenkjenning mens en samtale pågår, og forslag skrevet etter dine egne instruksjoner. Begge faktureres per minutt.*

| Innstilling | Standard | Hva den gjør |
| --- | --- | --- |
| **Tillat bruk av suffløren** | av | Den eneste bryteren som i det hele tatt lar en sufflør starte. Ingenting annet på siden virker så lenge den er av. |
| **Utskrift og forslag** | 13 bildepunkter | Hvor store vinduets to kolonner tegnes. |
| **Gjenta den nyeste linjen over spaltene** | på | Viser det nyeste forslaget — eller den nyeste linjen, for en hjelper som ikke foreslår noe — i et eget bånd over kolonnene. |
| **Den gjentatte linjen** | 20 bildepunkter | Hvor stor teksten i båndet er. Vises så lenge båndet er på. |

:::caution
Motpartens stemme sendes til en gjenkjenner mens den snakker, og det er ikke mindre enn å ta den opp. Der [Innstillinger → Opptak](/recordings) krever at motparten får beskjed først, starter en sufflør først når det er gjort.
:::

Suffløren leses mens du snakker, ofte på lengre avstand enn resten av telefonen, så de to størrelsene velger du selv: ta noen du kan oppfatte uten å lene deg mot skjermen. Dra skillelinjen under båndet i [sufflørens vindu](/interface/prompter#the-window) for å gjøre det høyere.

### Hjelpere {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Innstillinger → Sufflør: hjelperne og de månedlige takene" />

En hjelper er det en sufflør blir bedt om å være. *Hver av dem lytter til en pågående samtale og skriver noe i sufflørens vindu: ordene slik de sies, en oversettelse av dem, eller et forslag til hva du kan si videre.* Hvilken som kjører, velger du i sufflørens vindu. Programmet har med fire:

| Hjelper | Hva den skriver | Spør en modell |
| --- | --- | --- |
| **Undertekster** | Ordene til begge sider, mens de blir sagt. | nei |
| **Oversettelse** | Ordene til den andre siden, oversatt til programmets språk. | ja |
| **Innvendinger i samtalen** | For den som selger over telefon: når kunden kommer med en innvending, innvendingen på én linje og én linje som svarer på den. | ja |
| **Hjelp i intervjuet** | For den som er på jobbintervju: svaret på spørsmålet som nettopp ble stilt, i noen få korte linjer, eller hva neste svar bør ta opp. | ja |

**▲** og **▼** endrer rekkefølgen, og det er rekkefølgen i nedtrekkslisten i [sufflørens vindu](/interface/prompter#the-window). **Legg til** lager en egen hjelper. **Gjenopprett standardverdier** setter promptene og reglene tilbake slik de kom med programmet, her som under [Behandling](/ai-processing/processing#defaults); språkmodellene dine blir ikke rørt.

### Kortet til en hjelper {#an-assistants-card}
Et trykk på en hjelper åpner kortet dens. Det er det samme kortet som for en [prompt](/ai-processing/prompt-studio) under Behandling, med noen egne kontroller.

<Shot name="42_prompter_assistant" alt="Kortet til hjelperen Innvendinger i samtalen: gjenkjenneren, når et svar er slutt, rollen og prompten" />

| Felt | Hva det gjør |
| --- | --- |
| **Navn** | Navnet i listen og i sufflørens vindu. |
| **Svarets form** og **Send også** | Som for enhver prompt: svarets form og instruksjonene som sendes med. De medfølgende hjelperne svarer i **Løpende tekst**. |
| **Gjenkjenner** | Hvilken gjenkjenner som lytter. Bare de som kan lytte mens noen snakker, tilbys. |
| **Når et svar er slutt** | Hvem som avgjør at et svar er over og kan besvares: **Gjenkjenneren bestemmer**, **Etter en pause** eller **Bare når jeg ber om det** — da slutter et svar når du trykker **Forslag**. Seks av gjenkjennerne sier selv hvor et svar slutter, og fire gjør det ikke; **Gjenkjenneren bestemmer** faller tilbake på en pause der den ikke har noe svar, og derfor er det innstillingen man lar stå. |
| **Gjenkjenn min side også** | En ekstra økt hos samme gjenkjenner, til dobbel pris, så dine egne ord også kommer med i utskriften. De går inn i det modellen får vite, men er aldri det den blir spurt om. |
| **Rolle — hva modellen er** | Sendes til modellen før prompten, for eksempel *Du hjelper en person som selger over telefon…* |
| **Prompten** | Det modellen blir spurt om for hvert svar. `{{reply}}` er svaret som nettopp er avsluttet, og `{{conversation}}` alt som ble sagt før. *La det stå tomt, så blir en modell ikke spurt om noe: ordene vises etter hvert som de kommer, og det eneste som betales for, er gjenkjenneren.* Det er nettopp **Undertekster**. |
| **Svar på** | Språket i forslaget: **Hva som enn ble snakket**, **Språket til dette programmet** eller **Ett språk, alltid**, med språkkoden. |
| **Modell** | **Standard** eller en av [språkmodellene](/ai-processing/processing#language-models) dine. |

### Forbruk {#spending}
*Atskilt fra hva reglene får bruke på ferdige samtaler. En måned med sammendrag må ikke kunne tie en sufflør midt i en samtale.*

| Felt | Når det er nådd |
| --- | --- |
| **Gjenkjennere, per måned** | En sufflør som kjører, stanser ved slutten av svaret den er i — aldri midt i et ord. |
| **Modeller, per måned** | Forslagene stanser, og undertekstene fortsetter. |

Tomt betyr ingen tak. Hva et minutt sanntidslyd koster, er gjenkjennerens **Pris per minutt**, oppgitt på kortet under [Transkripsjon](/ai-processing/transcription#the-recognisers-card); uten den sier suffløren at beløpet som vises, er et anslag.
