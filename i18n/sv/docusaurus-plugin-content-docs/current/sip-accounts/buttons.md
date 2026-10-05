---
title: Knappar
sidebar_position: 4
description: "\"BLF-knappar: knappar med ett tryck som ringer en anknytning på din IP-växel och visar om den är ledig, ringer eller är upptagen.\""
---

Knappar är softphonens **BLF**-knappar (Busy Lamp Field), samma funktion som en bordstelefon på en IP-växel har. En knapp ringer en anknytning med ett tryck. En knapp som bevakar sin linje visar också en lampa: telefonen frågar växeln om den anknytningen och visar om den är ledig, ringer eller är upptagen, som en receptionskonsol eller de programmerbara knapparna på en bordstelefon gör.

BLF kräver stöd i växeln: växeln måste rapportera anknytningens tillstånd till telefonen. De flesta IP-växlar gör det. Gör inte din det förblir lampan grå, och knappen ringer ändå.

Knapparna står under kontobrickorna i [huvudfönstret](/interface/main-window), och **Inställningar → Knappar** är där du skapar dem.

<Shot name="08_settings_buttons" alt="Inställningar → Knappar: två knappar" />

Varje rad är en knapp: lampan, dess etikett och till höger dess nummer och kontot den hör till — till exempel *212 · 201 Kontor*. **▲** och **▼** flyttar knappen upp eller ned; knapparna i huvudfönstret följer den här ordningen. **Lägg till** skapar en ny.

## Lampan {#the-lamp}

En knapp som bevakar sin linje visar en lampa:

| Lampa | Linjen är |
| --- | --- |
| Grön | ledig |
| Gul | ringer |
| Röd | i samtal |
| Grå | okänd: växeln vill inte säga |

## Lägga till en knapp {#adding-a-button}

<Shot name="08b_button_add" alt="Formuläret för en ny knapp" />

Tryck på **Lägg till**; ett formulär öppnas under listan.

| Fält | Vad du skriver |
| --- | --- |
| **Nummer** | Numret som ska ringas. |
| **Linje** | Kontot som samtalet rings på. Välj det först: för att visa lampan frågar telefonen den linjens växel om det här numret, så den måste veta vilken. |
| **Etikett** | Texten på knappen, till exempel personens namn. Knappen har bara plats för en kort etikett; en längre klipps av. |
| **Visa om den här linjen är upptagen** | En brytare. På: knappen har en lampa. Av: den bara ringer. |

**Spara** förblir grå tills formuläret är ifyllt. **Avbryt** kastar formuläret.

Den del av programmet som visar knapparna kan stängas av under [Moduler](/application/modules).
