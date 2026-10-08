---
title: Kontakter og historikk
sidebar_position: 3
description: Adresseboken og samtalehistorikken, ved siden av telefonen.
---

**Kontakter** og **Historikk** åpnes som to faner til høyre for telefonen, så du kan slå opp et nummer mens du snakker.

## Kontakter {#contacts}

<Shot name="03_contacts" alt="Fanen Kontakter" />

- **Søk** filtrerer listen mens du skriver.
- **Legg til** oppretter en kontakt.
- Hver kontakt står oppført med et navn og under det nummeret og kontoen kontakten ringes via, for eksempel *231 · 201 Kontor*.

En innkommende samtale fra et kjent nummer viser kontaktens navn, og det samme gjør listene over nylige samtaler og samtalehistorikken — slik virker nummervisning.

### Redigere en kontakt {#editing-a-contact}

<Shot name="03b_contact_edit" alt="En kontakt åpnet for redigering" />

Merk en kontakt for å få fram en blyant og et rør til høyre på raden. Røret ringer kontakten; blyanten åpner skjemaet under raden:

| Felt | Hva du skriver |
| --- | --- |
| **Navn** | Hvordan kontakten vises. |
| **Nummer** | Nummeret som skal ringes. |
| Nedtrekkslisten under **Nummer** | Kontoen kontakten ringes via. |

**Lagre** beholder endringene, **Avbryt** forkaster dem, og **Slett** fjerner kontakten.

## Historikk {#history}

<Shot name="21_history" alt="Fanen Historikk" />

Samtalehistorikken, nyeste først. Øverst:

- nedtrekkslisten, som standard **Alle samtaler**, snevrer listen inn til én slags samtale;
- **Søk** filtrerer etter det du skriver.

Hver oppføring har et ikon for slags samtale — et utgående rør, eller et rødt rør med en klokke for et tapt anrop —, navnet på den andre parten (eller nummeret), og under det datoen, hvordan samtalen endte, lengden, nummeret og kontoen. Nylige samtaler vises som *I går, 22:33* eller med en ukedag, eldre med datoen.

| Hvordan samtalen endte | Vises som |
| --- | --- |
| Dere snakket sammen | **utgående** eller innkommende, og lengden, for eksempel *48 s* |
| En innkommende samtale ble ikke besvart | **Tapt** |
| En samtale du ringte, ble ikke koblet opp | **Gikk ikke gjennom** |

Merk en oppføring for å få fram fire knapper til høyre:

| Knapp | Gjør |
| --- | --- |
| Person med et pluss | Legger nummeret til i [Kontakter](#contacts). |
| ▶ | Spiller av opptaket av samtalen, hvis den ble tatt opp. |
| Søppelbøtte | Sletter oppføringen. |
| Rør | Ringer nummeret tilbake. |

### Hvor lenge historikken lagres {#how-long-the-log-is-kept}

En samtalehistorikk er dokumentasjon, så ingenting fjernes fra den med mindre du sier det: som standard lagres hver samtale. Oppbevaringstiden og knappen **Tøm samtalehistorikken** finnes under [Samtaleinnstillinger](../sip-accounts/calls.md#history).

Tapte og avviste samtaler kan også leses gjennom det [lokale REST-API-et](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
