---
title: Diagnostiikka
sidebar_position: 1
description: Ikkuna, joka näyttää jokaisen sanan, jonka puhelin ja vaihde sanovat toisilleen, lokitiedosto ja paikka, jossa ohjelma säilyttää tiedostonsa.
---

**Diagnostiikka**-ikkuna näyttää, mitä puhelin ja vaihde sanovat toisilleen, sillä hetkellä kun ne sen sanovat. Se on ensimmäinen paikka, josta katsoa, kun tili ei rekisteröidy tai puhelu ei yhdisty, ja ikkuna, jonka IT-osasto pyytää sinua lähettämään.

Se avataan kohdasta **Asetukset → Diagnostiikka** painikkeella **Avaa diagnostiikka**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Diagnostiikka-ikkuna" />

Se näyttää jokaisen SIP-viestin, jonka puhelin lähettää tai vastaanottaa, sen tapahtuessa, sekä käynnissä olevien puheluiden äänitilastot. Se kerää tietoja vain ollessaan auki eikä säilytä mitään sulkemisen jälkeen.

## SIP {#sip}

**SIP**-välilehti on signaloinnin loki.

- Jokainen viesti on rivi, jossa on aika (millisekunnin tarkkuudella), mikä se on ja minne se meni: oikealle osoittava nuoli on puhelimen lähettämä, vasemmalle osoittava on palvelimelta vastaanotettu. Sen alla: `to` tai `from` palvelimen osoite ja siirtotapa (esimerkiksi *UDP:n kautta*).
- Viestin voi laajentaa näyttämään sen otsakkeet kokonaan (kuvan kolmas viesti).
- **Etsi** löytää tekstiä lokista.
- **Tyhjennä** tyhjentää sen.

Kuvakaappauksen esimerkki on terve rekisteröinti: puhelin lähettää `REGISTER`, palvelin vastaa `200 OK (REGISTER)`.

## Puhelut {#calls}

Toinen välilehti, **Puhelut**, näyttää kunkin käynnissä olevan puhelun laatumittarit.

## Asetusten Diagnostiikka-välilehti {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Asetukset → Diagnostiikka" />

### Lokin tarkkuus {#log-detail}

Pudotusvalikko valitsee, kuinka paljon ohjelma kirjoittaa lokitiedostoonsa; kuvassa se on **Yksityiskohtainen**. Se tulee voimaan heti, myös jo käynnissä olevassa puhelussa — joka on juuri se, josta haluat merkinnät. Yksityiskohtaisin asetus kirjaa jokaisen SIP-viestin. Sitä kertyy paljon, mutta salasanat poistetaan ennen kuin mitään kirjoitetaan, joten tiedoston voi turvallisesti lähettää tukipyynnön mukana.

**Lähetä kopio järjestelmälokiin** kirjoittaa lokin myös järjestelmän omaan lokiin koneelle, jonka lokit kerätään keskitetysti. Alla oleva tiedosto kirjoitetaan joka tapauksessa, ja se liitetään tukipyyntöön.

### Tiedostot {#files}

Välilehti luettelee, missä ohjelma säilyttää tiedostonsa ja kuinka suuri kukin on. macOS:ssä:

| Tiedosto | Missä | Sisältää |
| --- | --- | --- |
| Asetukset | `~/Library/Preferences/ai-softphone/settings.json` | Asetukset. Ei koskaan salasanoja tai tunnuksia. |
| Tietokanta | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Yhteystiedot, historia, litteroinnit ja yhteenvedot. |
| Tallenteet | `~/Library/Application Support/ai-softphone/recordings` | Tallenteiden ääni. |
| Loki | `~/Library/Logs/ai-softphone/ai-softphone.log` | Loki. |

Luettelon alla **Avaa** näyttää lokin ja **Tyhjennä** tyhjentää sen. Tyhjennä loki juuri ennen kuin toistat ongelman; tyhjentämistä ei voi perua.

## Mitä lähettää tukeen {#what-to-send-to-support}

1. Aseta **Lokin tarkkuus** yksityiskohtaisimmalle tasolle.
2. Paina **Tyhjennä** ja toista sitten ongelma.
3. Lähetä lokitiedosto, tai avaa **Asetukset → Tietoja**, kirjoita meille sieltä ja rastita **Liitä loki** — katso [Tietoja](../application/about.md#feedback).

Jos ongelma liittyy rekisteröintiin tai puheluun, lähetä myös epäonnistuneen yrityksen rivit **SIP**-välilehdeltä.

Kaiken tämän takana oleva ohjelman osa — SIP-jäljitys, mediatilastot ja laskurit — voidaan poistaa käytöstä kohdassa [Moduulit](../application/modules.md) (**Diagnostiikka**).
