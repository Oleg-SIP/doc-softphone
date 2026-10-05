---
title: Knoppen
sidebar_position: 4
description: "\"BLF-knoppen: knoppen met één druk die een toestel op uw IP-centrale bellen en laten zien of het vrij is, overgaat of in gesprek is.\""
---

Knoppen zijn de **BLF**-toetsen (Busy Lamp Field) van de softphone, dezelfde functie die een bureautoestel op een IP-centrale heeft. Een knop belt een toestel met één druk. Een knop die zijn lijn volgt, toont ook een lampje: de telefoon vraagt de centrale naar dat toestel en laat zien of het vrij is, overgaat of in gesprek is, zoals een receptieconsole of de programmeerbare toetsen van een bureautoestel dat doen.

BLF vraagt ondersteuning van de centrale: de centrale moet de toestand van het toestel aan de telefoon doorgeven. De meeste IP-centrales doen dat. Doet de uwe het niet, dan blijft het lampje grijs en belt de knop gewoon.

De knoppen staan onder de accountchips in het [hoofdvenster](/interface/main-window), en bij **Instellingen → Knoppen** maakt u ze aan.

<Shot name="08_settings_buttons" alt="Instellingen → Knoppen: twee knoppen" />

Elke regel is een knop: het lampje, het opschrift en rechts het nummer en het account waartoe de knop behoort — bijvoorbeeld *212 · 201 Kantoor*. **▲** en **▼** schuiven de knop omhoog of omlaag; de knoppen in het hoofdvenster volgen deze volgorde. **Toevoegen** maakt een nieuwe aan.

## Het lampje {#the-lamp}

Een knop die zijn lijn volgt, toont een lampje:

| Lampje | De lijn is |
| --- | --- |
| Groen | vrij |
| Oranje | gaat over |
| Rood | in gesprek |
| Grijs | onbekend: de centrale zegt het niet |

## Een knop toevoegen {#adding-a-button}

<Shot name="08b_button_add" alt="Het formulier van een nieuwe knop" />

Druk op **Toevoegen**; onder de lijst opent een formulier.

| Veld | Wat u invult |
| --- | --- |
| **Nummer** | Het nummer dat gebeld wordt. |
| **Lijn** | Het account waarop het gesprek wordt gevoerd. Kies dit eerst: om het lampje te tonen vraagt de telefoon de centrale van die lijn naar dit nummer, dus moet hij weten welke. |
| **Opschrift** | De tekst op de knop, bijvoorbeeld de naam van de persoon. De knop heeft alleen ruimte voor een kort opschrift; een langer wordt afgekapt. |
| **Tonen of deze lijn bezet is** | Een schakelaar. Aan: de knop heeft een lampje. Uit: hij belt alleen. |

**Opslaan** blijft grijs tot het formulier is ingevuld. **Annuleren** laat het formulier vallen.

Het deel van het programma dat de knoppen toont, kan worden uitgezet bij [Modules](/application/modules).
