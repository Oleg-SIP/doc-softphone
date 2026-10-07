---
title: Optagelse af opkald
sidebar_position: 1
description: Hvilke opkald der optages, hvad den anden part får at vide, hvordan konferencer gemmes, og hvor længe filerne opbevares.
---

**Indstillinger → Optagelse** bestemmer, hvilke opkald der bliver til optagelser, og hvor længe filerne bliver liggende. Et optaget opkald dukker op i [vinduet Optagelser](/interface/recordings).

<Shot name="09_settings_recording" alt="Indstillinger → Optagelse" />

## Optagelse {#recording}

Rullelisten vælger, hvilke opkald der optages:

| Valg | Optager |
| --- | --- |
| **I hånden** | Kun når du trykker på optag på opkaldets kort. Standard. |
| **Spørg ved hvert opkald** | Telefonen spørger ved hvert opkald, om det skal optages. |
| **Hvert opkald** | Hvert besvaret opkald, af sig selv. Valgt på billedet. |
| **Valgte linjer** | Opkaldene på de konti, du sætter flueben ved i den liste, der dukker op. |

Optagelsen starter, når opkaldet besvares, og aldrig før, så opringningen og de numre, du taster, er ikke med i filen. Et opkald er én stereofil: dig på den ene kanal og alle andre på den anden.

## Samtykke {#consent}

Rullelisten vælger, hvordan den anden part får besked om optagelsen:

| Valg | Hvad den anden part hører |
| --- | --- |
| **En meddelelse** | En kort besked, når optagelsen starter. Standard. **Vælg…** vælger en lydfil, du selv har; *er intet valgt, afspiller telefonen et kort signal*. |
| **En tone med få sekunders mellemrum** | Et bip med et mellemrum, du indstiller med skyderen. |
| **Slet intet** | Ingenting. Valgt på billedet. |

**Behold beskeden i optagelsen** — meddelelsen og tonen afspilles for dem, der er med i opkaldet; slå dette til, så kommer de også med i filen.

:::caution
Mange steder — det meste af Europa og flere amerikanske delstater — er det ulovligt at optage en samtale uden at fortælle den anden part det. Det er din beslutning, og programmet siger det under rullelisten.
:::

## Konferencer {#conferences}

**En fil per person**, slået til som standard. I en konference er den anden kanal et miks af alle, så en ekstra fil per person er det, der gør det muligt for en udskrift at sige, hvem der sagde hvad.

## Opbevaring {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Indstillinger → Optagelse: opbevaring" />

| Indstilling | Standard | Hvad den begrænser |
| --- | --- | --- |
| **Opbevaringstid** | Altid | Hvor længe en optagelse gemmes. |
| **Lagergrænse** | Ingen grænse | Hvor meget plads alle optagelser tilsammen må fylde. |
| **Filer per person** | Altid | Hvor længe en konferences ekstra filer gemmes. |
| **Tærskel for diskplads** | 500 MB | En bund for den ledige plads på disken. Optagelser, du ikke har fastgjort, kan fjernes for at holde sig over den. |

En fastgjort optagelse slettes aldrig af nogen af disse, og den tæller stadig med i grænsen. En times samtale fylder omkring 30 MB.

Den del af programmet, der optager opkald og fortæller den anden part om det, kan slås fra under [Moduler](/application/modules).

Se [Opfangning](/capture/) for at optage et møde, der holdes i et andet program.
