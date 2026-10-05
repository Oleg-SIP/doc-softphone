---
title: Levinud probleemid
sidebar_position: 2
description: "\"Mida kontrollida, kui konto ei registreeru, heli pole, kõnet või koosolekut ei salvestata, ülestähendust pole või link, otsetee või API ei tee midagi.\""
---

Iga punkt viitab seadele, mis selle otsustab. Kui vastust siin pole, avage [Diagnostika](/troubleshooting/diagnostics): see näitab, mida telefon ja keskjaam teineteisele ütlevad.

## Konto ei registreeru {#the-account-will-not-register}

Konto kõrval olev täpp jaotises **Seaded → Kontod** jääb halliks või punaseks.

1. Kontrollige [konto vormis](/sip-accounts/setup) välju **Kasutajanimi**, **Parool** ja **Serveri aadress**.
2. Kui teie keskjaam kontrollib parooli muu nime kui sisenumbri all, täitke **Autentimise kasutaja** jaotises **Serveri seaded**.
3. Kontrollige **Transport** ja **Port** selle järgi, mida keskjaam ootab.
4. Avage [diagnostikaakna](/troubleshooting/diagnostics) vahekaart **SIP** ja vaadake päringut `REGISTER` ning serveri vastust.

## Ma ei kuule või mind ei kuulda {#i-cannot-hear-or-i-cannot-be-heard}

Avage [Seaded → Seadmed](/sip-accounts/devices).

- Öelge midagi: riba jaotise **Mikrofon** all peab liikuma. Kui ei liigu, valige teine mikrofon.
- Vajutage jaotise **Kõlarid** all **Kontrolli**, et kuulda valitud seadmest heli.
- Kontrollige **Helitugevus** liugureid. **Vaigista mikrofon** kõnekaardil ja [otsetee](/program/shortcuts) **Vaigista mikrofon** lülitavad kõne ajal mikrofoni välja.
- Helin võib olla seadistatud kõlama muus seadmes kui see, milles räägite — **Helin**, teine ripploend.

## Kõne kõlab halvasti või ei alga {#the-call-sounds-bad-or-does-not-start}

Koodekeid pakutakse jaotise [Seaded → Kõned](/sip-accounts/calls#audio-formats) loendi järjekorras. Jätke sisse koodekid, mida teie keskjaam kasutab, ja pange parim neist esimeseks. Muudatus kehtib alates järgmisest kõnest.

## Teine kõne ei helise {#a-second-call-does-not-ring}

Mis juhtub, kui keegi helistab ajal, mil olete kõnes, seadistatakse jaotises [Kõne ootel](/sip-accounts/calls#call-waiting).

## Kõnet ei salvestatud {#a-call-was-not-recorded}

- **Seaded → Salvestamine**, esimene ripploend, otsustab, milliseid kõnesid salvestatakse; vaikimisi valik **Käsitsi** salvestab ainult siis, kui vajutate kõnekaardil salvestamisnuppu. Vaadake [Kõnede salvestamine](/recordings/call-recording).
- Salvestamine algab kõnele vastamisel, nii et vastamata kõnel faili ei ole.
- Moodul **Salvestamine** peab olema jaotises [Moodulid](/application/modules) sisse lülitatud.
- Salvestisi eemaldatakse jaotise **Säilitamine** piiride järgi; kinnitatud salvestist ei eemaldata kunagi.

## Teise rakenduse koosolekut ei hõivatud {#a-meeting-in-another-application-was-not-captured}

Vaadake [Hõivamine](/capture/).

- **Luba heli hõivamine** jaotises **Seaded → Hõivamine** peab olema sisse lülitatud.
- Kui **Automaatne käivitamine** on **Küsi minult** (vaikimisi), vastake küsimusele, kui see ilmub; valikuga **Mitte kunagi** vajutage ise **Salvesta**.
- Kasutage samal vahekaardil **Kontrolli**: ülemine tulp peab liikuma, kui räägite, alumine siis, kui midagi mängib.
- Moodul **Hõivamine** peab olema jaotises [Moodulid](/application/modules) sisse lülitatud.

## Salvestis on olemas, kuid ülestähendust või kokkuvõtet pole {#there-is-a-recording-but-no-transcript-or-summary}

- Vestlus kirjutatakse üles ja võetakse kokku iseenesest ainult siis, kui jaotises [Seaded → Töötlemine](/ai-processing/processing) on sisse lülitatud **Töötle vestlusi automaatselt**. Muul juhul paluge seda [salvestiste aknas](/recordings/recordings-window).
- Peab olema [tuvastaja](/ai-processing/transcription) ja [keelemudel](/ai-processing/processing#language-models) ning kumbki peab oma aadressil vastama.
- Kui igakuine **Rahapiir** või **Märkide piir** on saavutatud, peatuvad automaatsed reeglid kuni kuu vahetumiseni. Seda, mida te ise palute, ei peatata kunagi.
- Jaotise [Seaded → Ülevaade](/interface/settings-overview) sammud näitavad, mis on veel seadistamata.

## Telefon kadus, kui aken suleti {#the-phone-disappeared-when-i-closed-the-window}

Kui **Lase telefonil edasi töötada, kui aken suletakse** on sees, töötab telefon edasi ja kõned saabuvad endiselt. Teavitusala ikoon (macOS-is menüüribal) toob akna tagasi. Vaadake [Käivitumine](/program/startup).

## Brauseris või CRM-is olev telefoninumber ei helista {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Vajutage **Ava kõnelingid selle telefoniga** jaotises [Seaded → Käivitumine](/program/startup#call-links). Klõpsatud number jõuab valijasse ja ootab seal, kui **Helista kohe, ilma Helista nuppu vajutamata** pole sisse lülitatud.

## Nupu tuli jääb halliks {#a-buttons-lamp-stays-grey}

Keskjaam ei ütle, kas sisenumber on vaba. Nupp helistab ikkagi. Vaadake [Nupud](/sip-accounts/buttons).

## REST API ei vasta {#the-rest-api-does-not-answer}

- **Luba teistel selle arvuti programmidel telefoni juhtida** peab olema sisse lülitatud jaotises [Seaded → Sidumine](/integration/rest-api) ja moodul **Sidumine** jaotises [Moodulid](/application/modules).
- Aadress on `http://127.0.0.1:8377`, kui te pole muutnud välja **Port**.
- Rühm, mida te pole jaotises **Juurdepääs** avanud, vastab igale päringule koodiga `404`.
- Kui olete määranud **Märgise**, peavad salvestatud andmeid muutvad päringud kandma seda päises `Authorization`.
- Rohkem sümptomeid on jaotises [Kui see ei tööta](/integration/rest-api#when-it-does-not-work).

## Veebikonksud ei jõua kohale {#webhooks-do-not-arrive}

Vajutage **Saada proovisündmus** jaotises [Seaded → Sidumine](/integration/webhooks). REST API loendurid `webhooks_failed_total` ja `webhooks_dropped_total` näitavad, kuidas kohaletoimetamine läheb; [Kui midagi kohale ei jõua](/integration/webhooks#when-nothing-arrives) selgitab, mida igaüks neist tähendab.

## Otsetee ei tee midagi {#a-hotkey-does-nothing}

Avage [Otseteed](/program/shortcuts). Otsetee töötab siis, kui telefon on programm, mida te kasutate; et seda igast programmist kasutada, märkige **Kõikjal**. Klõpsake otseteel ja vajutage kombinatsiooni uuesti, kui mõni teine programm on selle endale võtnud.
