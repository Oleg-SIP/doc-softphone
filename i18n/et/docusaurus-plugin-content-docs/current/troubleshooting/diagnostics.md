---
title: Diagnostika
sidebar_position: 1
description: Aken, mis näitab iga sõna, mida telefon ja keskjaam teineteisele ütlevad, logifail ja koht, kus programm oma faile hoiab.
---

Aken **Diagnostika** näitab, mida telefon ja keskjaam teineteisele ütlevad, just siis, kui nad seda ütlevad. See on esimene koht, kuhu vaadata, kui konto ei registreeru või kõne ei ühendu, ja aken, mida IT-osakond teil saata palub.

See avatakse jaotisest **Seaded → Diagnostika** nupuga **Ava diagnostika**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Aken Diagnostika" />

See näitab iga SIP-sõnumit, mille telefon saadab või võtab vastu, selle toimumise ajal, koos pooleliolevate kõnede helistatistikaga. See kogub andmeid ainult siis, kui on avatud, ega hoia pärast sulgemist midagi alles.

## SIP {#sip}

Vahekaart **SIP** on signaalimise logi.

- Iga sõnum on rida, kus on aeg (millisekundi täpsusega), mis see on ja kuhu see läks: paremale suunatud nool on telefoni saadetud, vasakule suunatud nool on serverilt saadud. Selle all: `to` või `from` serveri aadress ja transport (näiteks *üle UDP*).
- Sõnumit saab laiendada, et näha selle päiseid täielikult (pildil kolmas sõnum).
- **Otsi** leiab logist teksti.
- **Tühjenda** tühjendab selle.

Ekraanipildi näide on terve registreerimine: telefon saadab `REGISTER`, server vastab `200 OK (REGISTER)`.

## Kõned {#calls}

Teine vahekaart, **Kõned**, näitab iga poolelioleva kõne kvaliteedinäitajaid.

## Seadete vahekaart Diagnostika {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Seaded → Diagnostika" />

### Logi üksikasjalikkus {#log-detail}

Ripploend valib, kui palju programm oma logifaili kirjutab; pildil on see **Üksikasjalik**. See jõustub kohe, ka juba pooleliolevas kõnes — mis ongi see, millest te kirjet soovite. Kõige üksikasjalikum seade kirjutab üles iga SIP-sõnumi. See on mahukas, kuid paroolid eemaldatakse enne mis tahes kirjutamist, nii et faili on ohutu saata koos tugipäringuga.

**Saada koopia süsteemilogisse** kirjutab logi ka süsteemi enda logisse, kui masina logisid kogutakse tsentraalselt. Allolev fail kirjutatakse igal juhul ja just see tuleb lisada tugipäringule.

### Failid {#files}

Vahekaart loetleb, kus programm oma faile hoiab ja kui suur igaüks on. macOS-is:

| Fail | Kus | Sisaldab |
| --- | --- | --- |
| Seaded | `~/Library/Preferences/ai-softphone/settings.json` | Seaded. Mitte kunagi paroole ega märgiseid. |
| Andmebaas | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontaktid, ajalugu, ülestähendused ja kokkuvõtted. |
| Salvestised | `~/Library/Application Support/ai-softphone/recordings` | Salvestiste heli. |
| Logi | `~/Library/Logs/ai-softphone/ai-softphone.log` | Logi. |

Loendi all näitab **Ava** logi ja **Tühjenda** tühjendab selle. Tühjendage logi vahetult enne probleemi taasesitamist; tühjendamist ei saa tagasi võtta.

## Mida toele saata {#what-to-send-to-support}

1. Seadke **Logi üksikasjalikkus** kõige üksikasjalikumale tasemele.
2. Vajutage **Tühjenda** ja taasesitage siis probleem.
3. Saatke logifail või avage **Seaded → Teave**, kirjutage meile sealt ja märkige **Lisa logi** — vaadake [Teave](../application/about.md#feedback).

Registreerimise või kõne probleemi korral saatke ka ebaõnnestunud katse read vahekaardilt **SIP**.

Kõige selle taga olev programmi osa — SIP-jälg, meediastatistika ja loendurid — saab välja lülitada jaotises [Moodulid](../application/modules.md) (**Diagnostika**).
