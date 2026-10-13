---
title: Vanliga problem
sidebar_position: 2
description: "Vad du ska kontrollera när ett konto inte vill registrera sig, det inte hörs något, ett samtal eller ett möte inte spelas in, det inte finns någon utskrift, sufflören inte startar, eller en länk, en genväg eller API:et inte gör något, och vad telefonens egna meddelanden betyder."
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
- Med **Automatisk start** inställd på **Fråga mig** (standard) svarar du på frågan när den visas; med **Aldrig** trycker du själv på inspelningsknappen.
- Använd **Prova** på samma flik: den övre stapeln måste röra sig när du talar, den nedre när något spelas.
- Modulen **Fångst** måste vara på under [Moduler](/application/modules).

## Det finns en inspelning men ingen utskrift eller sammanfattning {#there-is-a-recording-but-no-transcript-or-summary}

- Ett samtal skrivs bara ut och sammanfattas av sig självt om **Bearbeta samtal automatiskt** är på under [Inställningar → Bearbetning](/ai-processing/processing). Annars ber du om det i [fönstret Inspelningar](/interface/recordings).
- Det måste finnas en [igenkännare](/ai-processing/transcription) och en [språkmodell](/ai-processing/processing#language-models), och var och en måste svara på sin adress.
- När den månatliga **Pengagräns** eller **Tokengräns** har nåtts stannar de automatiska reglerna tills månaden byts. Det du själv ber om stoppas aldrig.
- Stegen i [Inställningar → Översikt](/interface/settings-overview) visar vad som återstår att konfigurera.

## Sufflören syns inte eller startar inte {#the-prompter-does-not-appear-or-does-not-start}

**Sufflör** syns i listan längst ned i telefonen bara när tre saker finns: en igenkännare med en **Adress för sufflören** som har klarat sitt **Prova** under [Inställningar → Transkription](/ai-processing/transcription#live-recognition-for-the-prompter), en språkmodell och kryssrutan **Tillåt att suffeln används** under [Inställningar → Sufflör](/ai-processing/prompter). Modulen **Sufflör** måste vara påslagen under [Moduler](/application/modules).

Om fönstret öppnas men sufflören inte startar, säger raden under knapparna vad som saknas. [När den inte startar](/interface/prompter#when-it-does-not-start) räknar upp alla meddelanden och vad du ska göra.

## Telefonen försvann när jag stängde fönstret {#the-phone-disappeared-when-i-closed-the-window}

Med **Låt telefonen gå vidare när fönstret stängs** påslaget är telefonen fortfarande igång och samtal kommer fortfarande in. Ikonen i meddelandefältet (menyraden på macOS) tar tillbaka fönstret. På ett skrivbord utan meddelandefält ligger telefonen minimerad i aktivitetsfältet. Se [Uppstart](/program/startup).

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

## Telefonens meddelanden {#messages-the-phone-shows}

När något inte händer säger telefonen varför på en egen rad. En rad under en lista försvinner av sig själv efter några sekunder.

### När ett samtal inte kopplas upp {#when-a-call-is-not-placed}

| Meddelande | Vad du gör |
| --- | --- |
| *Inget konto är uppsatt* | Lägg till ett konto under [Inställningar → Konton](/sip-accounts/setup). |
| *Inget konto är påslaget, så det finns ingen linje att ringa från.* | Kryssa i rutan för ett konto under **Inställningar → Konton**. |
| *Ingen linje är registrerad ännu.* | Kontot är påslaget men ännu inte registrerat på växeln. Vänta tills pricken blir grön; blir den inte det, se [Kontot vill inte registrera sig](#the-account-will-not-register). |
| *Det pågår redan så många samtal som den här telefonen bär.* | Lägg på ett av samtalen och ring sedan igen. |
| *Kontot som detta skulle ha ringts från finns inte längre.* | Raden hör till ett konto som har tagits bort sedan dess. Slå numret i knappsatsen. |
| *Den här raden har inget nummer att ringa upp.* | Den som ringde dolde numret, så det finns inget att ringa tillbaka till. |

### När ett konto inte ansluter {#when-an-account-does-not-connect}

| Meddelande | Vad du gör |
| --- | --- |
| *Den serveradressen gick inte att hitta. Kontrollera om det finns skrivfel.* | Kontrollera **Serveradress** i [kontoformuläret](/sip-accounts/setup). |
| *Servern gick inte att nå. Kontrollera adressen, porten och ditt nätverk.* | Kontrollera **Serveradress** samt **Transport** och **Port** under **Serverinställningar**. En brandvägg kan också stoppa SIP. |
| *Servern avvisade det här användarnamnet eller lösenordet.* | Kontrollera **Användarnamn** och **Lösenord**. Om växeln kontrollerar lösenordet under ett annat namn fyller du i **Autentiseringsanvändare**. |
| *Serverns certifikat kunde inte verifieras. Om serverns administratör har utfärdat det själv avmarkerar du ”Verifiera certifikatet” under ”Serverinställningar”.* | Visas vid en TLS-anslutning. Om växeln använder ett certifikat som den har gjort själv avmarkerar du **Verifiera certifikatet** under **Serverinställningar**. |
| *Lösenordet för det här kontot gick inte att läsa ur nyckelringen. Lås upp den och anslut igen.* | Lås upp datorns nyckelring (nyckelringen på macOS) och tryck sedan på **Anslut** vid kontot. |

### Under ett samtal {#during-a-call}

| Meddelande | Vad du gör |
| --- | --- |
| *Inget gemensamt ljudformat* | Växeln och telefonen har ingen kodek gemensam. Slå på en som växeln använder under [Ljudformat](/sip-accounts/calls#audio-formats). |
| *Ingen mikrofon eller högtalare* | Välj enheterna under [Inställningar → Enheter](/sip-accounts/devices). |
| *Spelar inte in: disken har nått gränsen. Frigör utrymme, eller ändra gränsen i inställningarna.* | Det lediga utrymmet på disken har nått **Tröskel för diskutrymme** — se [Inspelningar](/recordings). Frigör utrymme eller sänk tröskeln. |

### När telefonen startar {#when-the-phone-starts}

*Databasen går inte att läsa* betyder att databasen gjordes av en annan version av programmet och att den här inte kan läsa den. Oftast har en äldre version startats på data från en nyare: installerar du den nyare versionen igen öppnar den databasen som den var. **Börja om** gör i stället en tom databas — alla kontakter och alla samtal i historiken försvinner, och det går inte att ångra. Innan du trycker kan du spara en kopia av databasfilen; [Diagnostik](/troubleshooting/diagnostics#files) säger var den ligger.
