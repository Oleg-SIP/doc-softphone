---
title: Knapper
sidebar_position: 4
description: "\"BLF-knapper: knapper med ét tryk, der ringer til et lokalnummer på dit IP-omstillingsanlæg og viser, om det er ledigt, ringer eller er optaget.\""
---

Knapper er softphonens **BLF**-taster (Busy Lamp Field), den samme funktion som en bordtelefon på et IP-omstillingsanlæg har. En knap ringer til et lokalnummer med ét tryk. En knap, der overvåger sin linje, viser også en lampe: telefonen spørger omstillingsanlægget om det lokalnummer og viser, om det er ledigt, ringer eller er optaget, ligesom en receptionskonsol eller de programmerbare taster på en bordtelefon gør.

BLF kræver understøttelse i omstillingsanlægget: anlægget skal melde lokalnummerets tilstand til telefonen. De fleste IP-omstillingsanlæg gør det. Gør dit ikke, forbliver lampen grå, og knappen ringer stadig op.

Knapperne står under kontochipsene i [hovedvinduet](/interface/main-window), og **Indstillinger → Knapper** er der, hvor du laver dem.

<Shot name="08_settings_buttons" alt="Indstillinger → Knapper: to knapper" />

Hver række er en knap: lampen, dens etiket og til højre dens nummer og den konto, den hører til — for eksempel *212 · 201 Kontor*. **▲** og **▼** flytter knappen op eller ned; knapperne i hovedvinduet følger denne rækkefølge. **Tilføj** laver en ny.

## Lampen {#the-lamp}

En knap, der overvåger sin linje, viser en lampe:

| Lampe | Linjen er |
| --- | --- |
| Grøn | ledig |
| Rav | ringer |
| Rød | i samtale |
| Grå | ukendt: omstillingen vil ikke sige det |

## Tilføje en knap {#adding-a-button}

<Shot name="08b_button_add" alt="Formularen til en ny knap" />

Tryk på **Tilføj**; en formular åbner under listen.

| Felt | Hvad du skriver |
| --- | --- |
| **Nummer** | Det nummer, der skal ringes til. |
| **Linje** | Den konto, opkaldet foretages på. Vælg den først: for at vise lampen spørger telefonen den linjes omstilling om dette nummer, så den skal vide hvilken. |
| **Etiket** | Teksten på knappen, for eksempel personens navn. Knappen har kun plads til en kort etiket; en længere bliver afskåret. |
| **Vis om denne linje er optaget** | En kontakt. Slået til har knappen en lampe. Slået fra ringer den kun op. |

**Gem** forbliver grå, indtil formularen er udfyldt. **Annullér** kasserer formularen.

Den del af programmet, der viser knapperne, kan slås fra under [Moduler](/application/modules).
