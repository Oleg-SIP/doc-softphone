---
title: Almindelige problemer
sidebar_position: 2
description: "\"Hvad du skal tjekke, når en konto ikke vil registrere sig, der ikke er lyd, et opkald eller et møde ikke optages, der ikke er en udskrift, eller et link, en genvej eller API'et ikke gør noget.\""
---

Hvert punkt peger på den indstilling, der afgør det. Står svaret ikke her, så åbn [Diagnostik](/troubleshooting/diagnostics): det viser, hvad telefonen og omstillingsanlægget siger til hinanden.

## Kontoen vil ikke registrere sig {#the-account-will-not-register}

Prikken ved kontoen i **Indstillinger → Konti** forbliver grå eller rød.

1. Tjek **Brugernavn**, **Adgangskode** og **Serveradresse** i [kontoformularen](/sip-accounts/setup).
2. Hvis dit omstillingsanlæg tjekker adgangskoden under et andet navn end lokalnummeret, så udfyld **Godkendelsesbruger** under **Serverindstillinger**.
3. Tjek **Transport** og **Port** mod det, omstillingsanlægget forventer.
4. Åbn fanen **SIP** i [diagnosevinduet](/troubleshooting/diagnostics), og se på forespørgslen `REGISTER` og hvad serveren svarede.

## Jeg kan ikke høre, eller jeg kan ikke høres {#i-cannot-hear-or-i-cannot-be-heard}

Åbn [Indstillinger → Enheder](/sip-accounts/devices).

- Sig noget: bjælken under **Mikrofon** skal bevæge sig. Gør den ikke det, så vælg en anden mikrofon.
- Tryk på **Prøv** under **Højttalere** for at høre en lyd på den valgte enhed.
- Tjek skyderne for **Lydstyrke**. **Slå mikrofonen fra** på opkaldskortet og [genvejen](/program/shortcuts) **Slå mikrofonen fra** slår mikrofonen fra under et opkald.
- Ringetonen kan være sat til at ringe på en anden enhed end den, du taler i — **Ringetone**, den anden rulleliste.

## Opkaldet lyder dårligt eller starter ikke {#the-call-sounds-bad-or-does-not-start}

Codecs tilbydes i rækkefølgen fra listen under [Indstillinger → Opkald](/sip-accounts/calls#audio-formats). Lad de codecs, dit omstillingsanlæg bruger, være slået til, og sæt det bedste af dem først. En ændring gælder fra dit næste opkald.

## Et andet opkald ringer ikke {#a-second-call-does-not-ring}

Hvad der sker, når nogen ringer, mens du er i et opkald, indstilles under [Banke på](/sip-accounts/calls#call-waiting).

## Et opkald blev ikke optaget {#a-call-was-not-recorded}

- **Indstillinger → Optagelse**, den første rulleliste, bestemmer, hvilke opkald der optages; standarden, **I hånden**, optager kun, når du trykker på optag på opkaldskortet. Se [Optagelse af opkald](/recordings/call-recording).
- Optagelsen starter, når opkaldet besvares, så et opkald, der ikke blev besvaret, har ingen fil.
- Modulet **Optagelse** skal være slået til under [Moduler](/application/modules).
- Optagelser fjernes af grænserne under **Opbevaring**; en fastgjort optagelse fjernes aldrig.

## Et møde i et andet program blev ikke opfanget {#a-meeting-in-another-application-was-not-captured}

Se [Opfangning](/capture/).

- **Tillad at lyd opfanges** i **Indstillinger → Opfangning** skal være slået til.
- Med **Automatisk start** sat til **Spørg mig** (standarden) skal du svare på spørgsmålet, når det dukker op; med **Aldrig** skal du selv trykke på **Optag**.
- Brug **Prøv** på samme fane: den øverste bjælke skal bevæge sig, når du taler, den nederste når noget afspilles.
- Modulet **Opfangning** skal være slået til under [Moduler](/application/modules).

## Der er en optagelse, men ingen udskrift eller resumé {#there-is-a-recording-but-no-transcript-or-summary}

- En samtale skrives kun ud og opsummeres af sig selv, hvis **Behandl samtaler automatisk** er slået til under [Indstillinger → Behandling](/ai-processing/processing). Ellers skal du bede om det i [vinduet Optagelser](/interface/recordings).
- Der skal være en [genkender](/ai-processing/transcription) og en [sprogmodel](/ai-processing/processing#language-models), og hver skal svare på sin adresse.
- Når den månedlige **Pengegrænse** eller **Tokengrænse** er nået, stopper de automatiske regler, indtil måneden skifter. Det, du selv beder om, stoppes aldrig.
- Trinene i [Indstillinger → Oversigt](/interface/settings-overview) viser, hvad der stadig mangler at blive sat op.

## Telefonen forsvandt, da jeg lukkede vinduet {#the-phone-disappeared-when-i-closed-the-window}

Med **Lad telefonen køre videre, når vinduet lukkes** slået til kører telefonen stadig, og opkald kommer stadig ind. Ikonet i statusområdet (menulinjen på macOS) henter vinduet frem igen. Se [Opstart](/program/startup).

## Et telefonnummer i en browser eller et CRM ringer ikke op {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Tryk på **Åbn opkaldslinks med denne telefon** under [Indstillinger → Opstart](/program/startup#call-links). Et nummer, der klikkes på, lander i opkaldsfeltet og venter der, medmindre **Ring straks uden at trykke på Ring op** er slået til.

## En knaps lampe forbliver grå {#a-buttons-lamp-stays-grey}

Omstillingsanlægget siger ikke, om lokalnummeret er ledigt. Knappen ringer stadig op. Se [Knapper](/sip-accounts/buttons).

## REST-API'et svarer ikke {#the-rest-api-does-not-answer}

- **Lad andre programmer på denne computer styre telefonen** skal være slået til under [Indstillinger → Integration](/integration/rest-api), og modulet **Integration** under [Moduler](/application/modules).
- Adressen er `http://127.0.0.1:8377`, medmindre du har ændret **Port**.
- En gruppe, du ikke har åbnet under **Adgang**, svarer på hver forespørgsel med `404`.
- Har du sat en **Nøgle**, skal forespørgsler, der ændrer gemte data, have den med i hovedet `Authorization`.
- Flere symptomer står under [Når det ikke virker](/integration/rest-api#when-it-does-not-work).

## Webhooks kommer ikke frem {#webhooks-do-not-arrive}

Tryk på **Send en testhændelse** under [Indstillinger → Integration](/integration/webhooks). Tællerne `webhooks_failed_total` og `webhooks_dropped_total` i REST-API'et viser, hvordan leveringen går; [Når intet kommer frem](/integration/webhooks#when-nothing-arrives) forklarer, hvad hver af dem betyder.

## En genvej gør ingenting {#a-hotkey-does-nothing}

Åbn [Genveje](/program/shortcuts). En genvej virker, mens telefonen er det program, du bruger; for at bruge den fra ethvert program skal du sætte flueben ved **Overalt**. Klik på genvejen, og tryk kombinationen igen, hvis et andet program har taget den.
