---
title: Spela in samtal
sidebar_position: 1
description: Vilka samtal som spelas in, vad den andra parten får veta, hur konferenser sparas och hur länge filerna behålls.
---

**Inställningar → Inspelning** bestämmer vilka samtal som blir inspelningar och hur länge filerna ligger kvar. Ett inspelat samtal visas i [fönstret Inspelningar](/interface/recordings).

<Shot name="09_settings_recording" alt="Inställningar → Inspelning" />

## Inspelning {#recording}

Listrutan väljer vilka samtal som spelas in:

| Val | Spelar in |
| --- | --- |
| **För hand** | Bara när du trycker på spela in på samtalskortet. Standard. |
| **Fråga vid varje samtal** | Telefonen frågar vid varje samtal om det ska spelas in. |
| **Varje samtal** | Varje besvarat samtal, av sig självt. Valt på bilden. |
| **Valda linjer** | Samtalen på de konton du kryssar i i listan som visas. |

Inspelningen börjar när samtalet besvaras och aldrig tidigare, så signalerna och numren du slår finns inte med i filen. Ett samtal är en enda stereofil: du på den ena kanalen och alla andra på den andra.

## Samtycke {#consent}

Listrutan väljer hur den andra parten får veta om inspelningen:

| Val | Vad den andra parten hör |
| --- | --- |
| **Ett meddelande** | Ett kort meddelande när inspelningen börjar. Standard. **Välj…** väljer en egen ljudfil; *om ingenting är valt spelar telefonen en kort signal*. |
| **En ton med några sekunders mellanrum** | Ett pip med ett intervall som du ställer in med reglaget. |
| **Ingenting alls** | Ingenting. Valt på bilden. |

**Behåll upplysningen i inspelningen** — meddelandet och tonen spelas för dem som är med i samtalet; slå på detta så kommer de också med i filen.

:::caution
På många håll — större delen av Europa och flera amerikanska delstater — är det olagligt att spela in ett samtal utan att tala om det för den andra parten. Det är ditt beslut, och programmet säger det under listrutan.
:::

## Konferenser {#conferences}

**En fil per person**, på som standard. I en konferens är den andra kanalen en blandning av alla, så en extra fil per person är det som gör att en utskrift kan säga vem som sa vad.

## Gallring {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Inställningar → Inspelning: gallring" />

| Inställning | Standard | Vad den begränsar |
| --- | --- | --- |
| **Lagringstid** | Alltid | Hur länge en inspelning sparas. |
| **Lagringsgräns** | Ingen gräns | Hur mycket utrymme alla inspelningar får ta tillsammans. |
| **Filer per person** | Alltid | Hur länge en konferens extra filer sparas. |
| **Tröskel för diskutrymme** | 500 MB | Ett golv för det lediga utrymmet på disken. Inspelningar du inte har fäst kan tas bort för att hålla sig över det. |

En fäst inspelning tas aldrig bort av någon av dessa, och den räknas ändå in i gränsen. En timmes samtal tar ungefär 30 MB.

Den del av programmet som spelar in samtal, och talar om det för den andra parten, kan stängas av under [Moduler](/application/modules).

Se [Fångst](/capture/) för att spela in ett möte som hålls i ett annat program.
