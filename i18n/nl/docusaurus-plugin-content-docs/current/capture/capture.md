---
title: Vastleggen
sidebar_label: Opnemen uit andere toepassingen
sidebar_position: 1
description: "\"Vastleggen neemt een gesprek op dat in een andere toepassing plaatsvindt — Zoom, Teams, Meet of een andere — rechtstreeks vanaf de computer.\""
---

**Vastleggen** is de manier waarop AI Softphone een gesprek opneemt dat in een ander programma plaatsvindt, zoals een vergadering in Zoom, Teams of Meet. Het neemt op vanaf de computer zelf, met de andere kant en u op aparte kanalen, en aan het eind wachten hetzelfde transcript en dezelfde uitwerking als bij een telefoongesprek.

Het programma zoekt naar een gesprek, niet naar de naam van een toepassing, dus het werkt met alles wat er een voortbrengt.

Het [Overzicht](../interface/settings-overview.md) van de instellingen vermeldt dit onder **Opnemen uit andere toepassingen** en deelt het op in drie stappen:

1. **Opnemen inschakelen** — [geluid vastleggen toestaan](#turning-capture-on).
2. **Een gesprek opnemen uit een toepassing** — een opname [starten en stoppen](#capturing-a-conversation).
3. **Er een naam aan geven** — de opname [hernoemen](#giving-it-a-name).

## Vastleggen inschakelen {#turning-capture-on}

Vastleggen staat uit tot u het toestaat. Open **Instellingen → Vastleggen**.

<Shot name="10_settings_capture" alt="Instellingen → Vastleggen" />

| Instelling | Standaard | Wat het doet |
| --- | --- | --- |
| **Geluid vastleggen toestaan** | uit | Laat het programma het geluid van andere toepassingen opnemen. Zolang dit uit staat, wordt er niets vastgelegd. |
| **Herinner mij eraan de anderen over de opname te vertellen** | aan | Toont een herinnering zolang er wordt vastgelegd. Het vakje is grijs tot vastleggen is toegestaan. |

:::caution
Alles wat de computer afspeelt wordt opgenomen, niet alleen het gesprek. Deze telefoon kan geen opname aankondigen in de vergadering van iemand anders, dus dat zeggen is aan u.
:::

Het deel van het programma dat dit doet is de module **Vastleggen**, *Een gesprek opnemen dat in een andere toepassing plaatsvindt*. Ze kan worden uitgezet bij [Modules](../application/modules.md).

## Vastleggen starten {#starting-a-capture}

Zodra vastleggen is toegestaan, toont de onderkant van het [hoofdvenster](../interface/main-window.md#capture) de toestand — **Vastleggen · klaar** — met rechts een knop **Opnemen**. Druk op **Opnemen** om met de hand te starten.

### Automatisch starten {#automatic-start}

**Automatisch starten** bepaalt wat er gebeurt als het programma een gesprek in een andere toepassing hoort:

| Keuze | Wat er gebeurt |
| --- | --- |
| **Nooit** | Vastleggen begint alleen als u op **Opnemen** drukt. |
| **Het mij vragen** | Het programma vraagt of het moet worden opgenomen. De standaard. |
| **Altijd** | Het programma begint vanzelf met opnemen. |

Onder **Toepassingen met een eigen antwoord** kan een toepassing een eigen antwoord krijgen — bijvoorbeeld *Deze toepassing altijd opnemen* vanuit de vraag die het programma stelt.

*Vragen kost niets: de seconden vóór uw antwoord zijn al bewaard.*

### Voor het begin {#before-the-start}

De schuifregelaar **Voor het begin** bepaalt hoeveel seconden geluid van vóór het begin van een opname worden bewaard, standaard **15 seconden**. Hij is er zodat er niets verloren gaat terwijl het gesprek wordt opgemerkt: een opname die begint als u op **Opnemen** drukt, of als u de vraag beantwoordt, begint toch met de woorden die eraan voorafgingen.

## Een gesprek vastleggen {#capturing-a-conversation}

Tijdens het opnemen toont het hoofdvenster een rode stip, de naam van de opname (bijvoorbeeld **Vergadering in Zoom**), de verstreken tijd en de twee kanalen als golfvormen.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Een vergadering wordt opgenomen" />

- **Opname stoppen** beëindigt hem.
- Het venster blijft zichtbaar tijdens het opnemen en herinnert u eraan de deelnemers te vertellen dat de vergadering wordt opgenomen.

### Wat het beeld toont {#what-the-picture-shows}

Nog twee instellingen bepalen hoe het geluidsniveau wordt getekend:

| Instelling | Standaard | Waar |
| --- | --- | --- |
| **Beeld in het hoofdvenster** | Golf | De twee kanalen zolang er wordt vastgelegd. |
| **Beeld in de balk aan de voet van de telefoon** | Twee niveaus | De twee dunne balken onder **Vastleggen · klaar**. |

### Testen {#testing-it}

Onder **Testen** heeft het tabblad twee balken: **U** en **De andere kant**. *De bovenste balk beweegt wanneer u spreekt, de onderste wanneer er iets speelt.* Zeg vóór een belangrijke vergadering een woord en speel een willekeurig geluid af om te zien dat het programma beide kanten hoort.

## Er een naam aan geven {#giving-it-a-name}

Met het potlood naast de naam van de opname kunt u haar hernoemen terwijl ze loopt. Een opname die u geen naam gaf, staat in de lijst als **Een andere toepassing**.

## Waar de opname terechtkomt {#where-the-recording-goes}

Een vastgelegd gesprek verschijnt in het [venster Opnames](../recordings/recordings-window.md) zoals elk ander, met een eigen pictogram — een venster in plaats van een hoorn — en met de titel die u gaf of **Een andere toepassing**.

<Shot name="01_recordings" alt="Vastgelegde vergaderingen op het tabblad Opnames, gemarkeerd met een vensterpictogram" />

Het wordt uitgeschreven, samengevat, onder een categorie geordend en gelabeld door dezelfde [regels](../ai-processing/processing.md#rules) als een telefoongesprek. In het transcript van een vastgelegde vergadering staat de spreker als **Een andere toepassing**, waar een telefoongesprek de naam van de andere partij zou tonen; ook het **Zoeken** in de bibliotheek vindt wat erin gezegd is.
