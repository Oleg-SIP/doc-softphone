---
title: Knapper
sidebar_position: 4
description: "\"BLF-knapper: knapper med ett trykk som ringer et internnummer på IP-sentralen din og viser om det er ledig, ringer eller er opptatt.\""
---

Knapper er softphonens **BLF**-taster (Busy Lamp Field), den samme funksjonen en bordtelefon på en IP-sentral har. En knapp ringer et internnummer med ett trykk. En knapp som følger med på linjen sin, viser også en lampe: telefonen spør sentralen om det internnummeret og viser om det er ledig, ringer eller er opptatt, slik en sentralbordkonsoll eller de programmerbare tastene på en bordtelefon gjør.

BLF krever støtte i sentralen: sentralen må melde tilstanden til internnummeret til telefonen. De fleste IP-sentraler gjør det. Gjør ikke din det, forblir lampen grå, og knappen ringer likevel.

Knappene står under kontobrikkene i [hovedvinduet](/interface/main-window), og **Innstillinger → Knapper** er der du lager dem.

<Shot name="08_settings_buttons" alt="Innstillinger → Knapper: to knapper" />

Hver rad er en knapp: lampen, etiketten og til høyre nummeret og kontoen den hører til — for eksempel *212 · 201 Kontor*. **▲** og **▼** flytter knappen opp eller ned; knappene i hovedvinduet følger denne rekkefølgen. **Legg til** lager en ny.

## Lampen {#the-lamp}

En knapp som følger med på linjen sin, viser en lampe:

| Lampe | Linjen er |
| --- | --- |
| Grønn | ledig |
| Gul | ringer |
| Rød | i samtale |
| Grå | ukjent: sentralen vil ikke si det |

## Legge til en knapp {#adding-a-button}

<Shot name="08b_button_add" alt="Skjemaet for en ny knapp" />

Trykk på **Legg til**; et skjema åpnes under listen.

| Felt | Hva du skriver |
| --- | --- |
| **Nummer** | Nummeret som skal ringes. |
| **Linje** | Kontoen samtalen ringes på. Velg den først: for å vise lampen spør telefonen sentralen for den linjen om dette nummeret, så den må vite hvilken. |
| **Etikett** | Teksten på knappen, for eksempel navnet på personen. Knappen har bare plass til en kort etikett; en lengre blir kuttet. |
| **Vis om denne linjen er opptatt** | En bryter. På: knappen har en lampe. Av: den bare ringer. |

**Lagre** forblir grå til skjemaet er fylt ut. **Avbryt** forkaster skjemaet.

Den delen av programmet som viser knappene, kan slås av under [Moduler](/application/modules).
