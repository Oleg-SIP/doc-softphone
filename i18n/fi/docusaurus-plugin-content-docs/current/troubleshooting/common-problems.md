---
title: Yleiset ongelmat
sidebar_position: 2
description: "\"Mitä tarkistaa, kun tili ei rekisteröidy, ääntä ei kuulu, puhelua tai kokousta ei tallenneta, litterointia ei ole tai linkki, pikanäppäin tai API ei tee mitään.\""
---

Jokainen kohta viittaa asetukseen, joka asian ratkaisee. Jos vastausta ei ole tässä, avaa [Diagnostiikka](/troubleshooting/diagnostics): se näyttää, mitä puhelin ja vaihde sanovat toisilleen.

## Tili ei rekisteröidy {#the-account-will-not-register}

Tilin vieressä oleva piste kohdassa **Asetukset → Tilit** pysyy harmaana tai punaisena.

1. Tarkista **Käyttäjätunnus**, **Salasana** ja **Palvelimen osoite** [tilin lomakkeesta](/sip-accounts/setup).
2. Jos vaihteesi tarkistaa salasanan eri nimellä kuin alanumero, täytä **Todennuskäyttäjä** kohdassa **Palvelinasetukset**.
3. Tarkista **Siirtotapa** ja **Portti** sen mukaan, mitä vaihde odottaa.
4. Avaa [diagnostiikkaikkunan](/troubleshooting/diagnostics) **SIP**-välilehti ja katso `REGISTER`-pyyntöä ja palvelimen vastausta.

## En kuule, tai minua ei kuulla {#i-cannot-hear-or-i-cannot-be-heard}

Avaa [Asetukset → Laitteet](/sip-accounts/devices).

- Sano jotain: **Mikrofoni**-kohdan alla olevan palkin on liikuttava. Jos se ei liiku, valitse toinen mikrofoni.
- Paina **Kokeile** kohdan **Kaiuttimet** alla kuullaksesi äänen valitsemastasi laitteesta.
- Tarkista **Äänenvoimakkuus**-liukusäätimet. Puhelukortin **Mykistä mikrofoni** ja [pikanäppäin](/program/shortcuts) **Mykistä mikrofoni** kytkevät mikrofonin pois puhelun aikana.
- Soittoääni voi olla asetettu soimaan eri laitteessa kuin se, jolla puhut — **Soittoääni**, toinen pudotusvalikko.

## Puhelu kuulostaa huonolta tai ei ala {#the-call-sounds-bad-or-does-not-start}

Koodekit tarjotaan kohdan [Asetukset → Puhelut](/sip-accounts/calls#audio-formats) luettelon järjestyksessä. Jätä käyttöön ne koodekit, joita vaihteesi käyttää, ja aseta paras niistä ensimmäiseksi. Muutos koskee seuraavasta puhelustasi alkaen.

## Toinen puhelu ei soi {#a-second-call-does-not-ring}

Se, mitä tapahtuu, kun joku soittaa, kun olet puhelussa, asetetaan kohdassa [Koputus](/sip-accounts/calls#call-waiting).

## Puhelua ei tallennettu {#a-call-was-not-recorded}

- **Asetukset → Tallennus**, ensimmäinen pudotusvalikko, päättää, mitkä puhelut tallennetaan; oletus, **Käsin**, tallentaa vain, kun painat puhelukortin tallennuspainiketta. Katso [Puheluiden tallentaminen](/recordings/call-recording).
- Tallennus alkaa, kun puheluun vastataan, joten puhelulla, johon ei vastattu, ei ole tiedostoa.
- **Tallennus**-moduulin on oltava käytössä kohdassa [Moduulit](/application/modules).
- Tallenteet poistetaan kohdan **Säilytys** rajojen mukaan; kiinnitettyä tallennetta ei koskaan poisteta.

## Toisen sovelluksen kokousta ei kaapattu {#a-meeting-in-another-application-was-not-captured}

Katso [Kaappaus](/capture/).

- **Salli äänen kaappaus** kohdassa **Asetukset → Kaappaus** on oltava käytössä.
- Kun **Automaattinen käynnistys** on asetettu tilaan **Kysy minulta** (oletus), vastaa kysymykseen sen ilmestyessä; tilassa **Ei koskaan** paina itse **Tallenna**.
- Käytä samalla välilehdellä **Kokeile**: ylemmän palkin on liikuttava, kun puhut, alemman, kun jotain soi.
- **Kaappaus**-moduulin on oltava käytössä kohdassa [Moduulit](/application/modules).

## Tallenne on, mutta litterointia tai tiivistelmää ei {#there-is-a-recording-but-no-transcript-or-summary}

- Keskustelu litteroidaan ja siitä tehdään yhteenveto itsestään vain, jos **Käsittele keskustelut automaattisesti** on käytössä kohdassa [Asetukset → Käsittely](/ai-processing/processing). Muuten pyydä sitä [Tallenteet-ikkunassa](/recordings/recordings-window).
- On oltava [tunnistin](/ai-processing/transcription) ja [kielimalli](/ai-processing/processing#language-models), ja kummankin on vastattava osoitteessaan.
- Kun kuukauden **Raharaja** tai **Tokenraja** saavutetaan, automaattiset säännöt pysähtyvät kuukauden vaihtumiseen asti. Itse pyytämääsi ei koskaan pysäytetä.
- Kohdan [Asetukset → Yleiskatsaus](/interface/settings-overview) askeleet näyttävät, mitä on vielä määrittämättä.

## Puhelin katosi, kun suljin ikkunan {#the-phone-disappeared-when-i-closed-the-window}

Kun **Anna puhelimen jatkaa, kun ikkuna suljetaan** on käytössä, puhelin on edelleen käynnissä ja puhelut tulevat edelleen. Ilmoitusalueen kuvake (macOS:ssä valikkorivillä) tuo ikkunan takaisin. Katso [Käynnistys](/program/startup).

## Selaimen tai CRM:n puhelinnumero ei soita {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Paina **Avaa soittolinkit tällä puhelimella** kohdassa [Asetukset → Käynnistys](/program/startup#call-links). Napsautettu numero saapuu numeronvalitsimeen ja odottaa siellä, ellei **Soita heti, ilman Soita-painikkeen painamista** ole käytössä.

## Painikkeen merkkivalo pysyy harmaana {#a-buttons-lamp-stays-grey}

Vaihde ei kerro, onko alanumero vapaa. Painike soittaa silti. Katso [Painikkeet](/sip-accounts/buttons).

## REST API ei vastaa {#the-rest-api-does-not-answer}

- **Anna tämän tietokoneen muiden ohjelmien ohjata puhelinta** on oltava käytössä kohdassa [Asetukset → Integraatio](/integration/rest-api) ja **Integraatio**-moduuli kohdassa [Moduulit](/application/modules).
- Osoite on `http://127.0.0.1:8377`, ellet ole muuttanut **Porttia**.
- Ryhmä, jota et ole avannut kohdassa **Pääsy**, vastaa jokaiseen pyyntöön `404`.
- Jos olet asettanut **Tunnuksen**, tallennettuja tietoja muuttavien pyyntöjen on sisällettävä se `Authorization`-otsakkeessa.
- Lisää oireita on kohdassa [Kun se ei toimi](/integration/rest-api#when-it-does-not-work).

## Webhookit eivät saavu {#webhooks-do-not-arrive}

Paina **Lähetä testitapahtuma** kohdassa [Asetukset → Integraatio](/integration/webhooks). REST API:n laskurit `webhooks_failed_total` ja `webhooks_dropped_total` näyttävät, miten toimitus sujuu; [Kun mitään ei saavu](/integration/webhooks#when-nothing-arrives) kertoo, mitä kukin niistä tarkoittaa.

## Pikanäppäin ei tee mitään {#a-hotkey-does-nothing}

Avaa [Pikanäppäimet](/program/shortcuts). Pikanäppäin toimii, kun puhelin on käyttämäsi ohjelma; käyttääksesi sitä mistä tahansa ohjelmasta rastita **Kaikkialla**. Napsauta pikanäppäintä ja paina yhdistelmää uudelleen, jos toinen ohjelma on ottanut sen.
