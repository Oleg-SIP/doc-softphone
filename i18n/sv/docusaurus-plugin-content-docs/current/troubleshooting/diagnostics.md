---
title: Diagnostik
sidebar_position: 1
description: Fönstret som visar varje ord telefonen och växeln säger till varandra, loggfilen och var programmet sparar sina filer.
---

Fönstret **Diagnostik** visar vad telefonen och växeln säger till varandra, medan de säger det. Det är det första stället att titta på när ett konto inte vill registrera sig eller ett samtal inte kopplas upp, och fönstret som en IT-avdelning kommer att be dig skicka.

Det öppnas från **Inställningar → Diagnostik**, med knappen **Öppna diagnostiken**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Fönstret Diagnostik" />

Det visar varje SIP-meddelande som telefonen skickar eller tar emot, medan det sker, tillsammans med ljudstatistiken för samtalen som pågår. Det samlar bara in medan det är öppet och sparar ingenting efter att det har stängts.

## SIP {#sip}

Fliken **SIP** är loggen över signaleringen.

- Varje meddelande är en rad med tiden (på millisekunden), vad det är och vart det gick: en pil åt höger är skickad av telefonen, en pil åt vänster är mottagen från servern. Under det: `to` eller `from` serverns adress och transporten (till exempel *via UDP*).
- Ett meddelande kan fällas ut för att visa sina huvuden i sin helhet (det tredje meddelandet på bilden).
- **Sök** hittar text i loggen.
- **Rensa** tömmer den.

Exemplet på skärmbilden är en frisk registrering: telefonen skickar `REGISTER`, servern svarar `200 OK (REGISTER)`.

## Samtal {#calls}

Den andra fliken, **Samtal**, visar kvalitetsmått för varje samtal som pågår.

## Fliken Diagnostik i inställningarna {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Inställningar → Diagnostik" />

### Loggens detaljnivå {#log-detail}

Listrutan väljer hur mycket programmet skriver i sin loggfil; på bilden är det **Utförligt**. Det gäller direkt, även i ett samtal som redan pågår — vilket är just det du vill ha registrerat. Den utförligaste inställningen skriver ned varje SIP-meddelande. Det blir mycket, men lösenord tas bort innan något skrivs, så filen är säker att skicka med ett supportärende.

**Skicka en kopia till systemloggen** skriver också loggen till systemets egen logg, för en dator vars loggar samlas in centralt. Filen nedan skrivs i vilket fall som helst, och det är den som ska bifogas ett supportärende.

### Filer {#files}

Fliken visar var programmet sparar sina filer och hur stor var och en är. På macOS:

| Fil | Var | Innehåller |
| --- | --- | --- |
| Inställningar | `~/Library/Preferences/ai-softphone/settings.json` | Inställningarna. Aldrig lösenord eller nycklar. |
| Databas | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakter, historik, utskrifter och sammanfattningar. |
| Inspelningar | `~/Library/Application Support/ai-softphone/recordings` | Ljudet från inspelningarna. |
| Logg | `~/Library/Logs/ai-softphone/ai-softphone.log` | Loggen. |

Under listan visar **Öppna** loggen och **Rensa** tömmer den. Rensa loggen precis innan du återskapar ett problem; rensningen kan inte ångras.

## Vad du ska skicka till supporten {#what-to-send-to-support}

1. Ställ **Loggens detaljnivå** på den utförligaste nivån.
2. Tryck på **Rensa** och återskapa sedan problemet.
3. Skicka loggfilen, eller öppna **Inställningar → Om**, skriv till oss därifrån och kryssa i **Bifoga loggen** — se [Om](../application/about.md#feedback).

Vid ett problem med registrering eller ett samtal skickar du också raderna från det misslyckade försöket från fliken **SIP**.

Den del av programmet som ligger bakom allt detta — SIP-spåret, mediestatistiken och räknarna — kan stängas av under [Moduler](../application/modules.md) (**Diagnostik**).
