---
title: Vanliga problem
sidebar_position: 2
description: "\"Vad du ska kontrollera när ett konto inte vill registrera sig, det inte hörs något, ett samtal eller ett möte inte spelas in, det inte finns någon utskrift, eller en länk, en genväg eller API:et inte gör något.\""
---

Varje punkt pekar på inställningen som avgör saken. Finns svaret inte här öppnar du [Diagnostik](/troubleshooting/diagnostics): det visar vad telefonen och växeln säger till varandra.

## Kontot vill inte registrera sig {#the-account-will-not-register}

Pricken vid kontot i **Inställningar → Konton** förblir grå eller röd.

1. Kontrollera **Användarnamn**, **Lösenord** och **Serveradress** i [kontoformuläret](/sip-accounts/setup).
2. Om din växel kontrollerar lösenordet under ett annat namn än anknytningen fyller du i **Autentiseringsanvändare** under **Serverinställningar**.
3. Kontrollera **Transport** och **Port** mot vad växeln förväntar sig.
4. Öppna fliken **SIP** i [diagnostikfönstret](/troubleshooting/diagnostics) och titta på begäran `REGISTER` och vad servern svarade.

## Jag hör inte, eller jag hörs inte {#i-cannot-hear-or-i-cannot-be-heard}

Öppna [Inställningar → Enheter](/sip-accounts/devices).

- Säg något: stapeln under **Mikrofon** måste röra sig. Gör den inte det väljer du en annan mikrofon.
- Tryck på **Prova** under **Högtalare** för att höra ett ljud på den valda enheten.
- Kontrollera reglagen för **Volym**. **Stäng av mikrofonen** på samtalskortet och [genvägen](/program/shortcuts) **Stäng av mikrofonen** stänger av mikrofonen under ett samtal.
- Ringsignalen kan vara inställd på att ringa på en annan enhet än den du pratar i — **Ringsignal**, den andra listrutan.

## Samtalet låter dåligt eller startar inte {#the-call-sounds-bad-or-does-not-start}

Kodekarna erbjuds i ordningen från listan under [Inställningar → Samtal](/sip-accounts/calls#audio-formats). Låt de kodekar som din växel använder vara påslagna, och lägg den bästa av dem först. En ändring gäller från ditt nästa samtal.

## Ett andra samtal ringer inte {#a-second-call-does-not-ring}

Vad som händer när någon ringer medan du är i ett samtal ställs in under [Samtal väntar](/sip-accounts/calls#call-waiting).

## Ett samtal spelades inte in {#a-call-was-not-recorded}

- **Inställningar → Inspelning**, den första listrutan, bestämmer vilka samtal som spelas in; standardvärdet, **För hand**, spelar bara in när du trycker på spela in på samtalskortet. Se [Inspelningar](/recordings).
- Inspelningen börjar när samtalet besvaras, så ett samtal som inte besvarades har ingen fil.
- Modulen **Inspelning** måste vara på under [Moduler](/application/modules).
- Inspelningar tas bort av gränserna under **Gallring**; en fäst inspelning tas aldrig bort.

## Ett möte i ett annat program fångades inte {#a-meeting-in-another-application-was-not-captured}

Se [Fångst](/capture/).

- **Tillåt att ljud fångas** i **Inställningar → Fångst** måste vara på.
- Med **Automatisk start** inställd på **Fråga mig** (standard) svarar du på frågan när den visas; med **Aldrig** trycker du själv på **Spela in**.
- Använd **Prova** på samma flik: den övre stapeln måste röra sig när du talar, den nedre när något spelas.
- Modulen **Fångst** måste vara på under [Moduler](/application/modules).

## Det finns en inspelning men ingen utskrift eller sammanfattning {#there-is-a-recording-but-no-transcript-or-summary}

- Ett samtal skrivs bara ut och sammanfattas av sig självt om **Bearbeta samtal automatiskt** är på under [Inställningar → Bearbetning](/ai-processing/processing). Annars ber du om det i [fönstret Inspelningar](/interface/recordings).
- Det måste finnas en [igenkännare](/ai-processing/transcription) och en [språkmodell](/ai-processing/processing#language-models), och var och en måste svara på sin adress.
- När den månatliga **Pengagräns** eller **Tokengräns** har nåtts stannar de automatiska reglerna tills månaden byts. Det du själv ber om stoppas aldrig.
- Stegen i [Inställningar → Översikt](/interface/settings-overview) visar vad som återstår att konfigurera.

## Telefonen försvann när jag stängde fönstret {#the-phone-disappeared-when-i-closed-the-window}

Med **Låt telefonen gå vidare när fönstret stängs** påslaget är telefonen fortfarande igång och samtal kommer fortfarande in. Ikonen i meddelandefältet (menyraden på macOS) tar tillbaka fönstret. Se [Uppstart](/program/startup).

## Ett telefonnummer i en webbläsare eller ett CRM ringer inte {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Tryck på **Öppna samtalslänkar med den här telefonen** under [Inställningar → Uppstart](/program/startup#call-links). Ett nummer du klickar på hamnar i nummerfältet och väntar där, om inte **Ring direkt, utan att trycka på Ring** är på.

## En knapps lampa förblir grå {#a-buttons-lamp-stays-grey}

Växeln talar inte om ifall anknytningen är ledig. Knappen ringer ändå. Se [Knappar](/sip-accounts/buttons).

## REST-API:et svarar inte {#the-rest-api-does-not-answer}

- **Låt andra program på den här datorn styra telefonen** måste vara på under [Inställningar → Integration](/integration/rest-api), och modulen **Integration** under [Moduler](/application/modules).
- Adressen är `http://127.0.0.1:8377`, om du inte har ändrat **Port**.
- En grupp du inte har öppnat under **Åtkomst** svarar på varje begäran med `404`.
- Om du har satt en **Nyckel** måste begäranden som ändrar sparade data ha med den i huvudet `Authorization`.
- Fler symtom finns under [När det inte fungerar](/integration/rest-api#when-it-does-not-work).

## Webhookar kommer inte fram {#webhooks-do-not-arrive}

Tryck på **Skicka en testhändelse** under [Inställningar → Integration](/integration/webhooks). Räknarna `webhooks_failed_total` och `webhooks_dropped_total` i REST-API:et visar hur leveransen går; [När ingenting kommer fram](/integration/webhooks#when-nothing-arrives) förklarar vad var och en av dem betyder.

## En genväg gör ingenting {#a-hotkey-does-nothing}

Öppna [Genvägar](/program/shortcuts). En genväg fungerar medan telefonen är programmet du använder; för att använda den från alla program kryssar du i **Överallt**. Klicka på genvägen och tryck på kombinationen igen om ett annat program har tagit den.
