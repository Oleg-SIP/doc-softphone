---
title: Tallenteet
sidebar_position: 4
description: Mitkä puhelut tallennetaan, mitä toiselle osapuolelle kerrotaan, miten neuvottelut tallennetaan ja kuinka kauan tiedostot säilytetään.
---

**Asetukset → Tallennus** päättää, mistä puheluista tulee tallenteita ja kuinka kauan tiedostot säilyvät. Tallennettu puhelu ilmestyy [Tallenteet-ikkunaan](/interface/recordings).

<Shot name="09_settings_recording" alt="Asetukset → Tallennus" />

## Tallennus {#recording}

Pudotusvalikko valitsee, mitkä puhelut tallennetaan:

| Valinta | Tallentaa |
| --- | --- |
| **Käsin** | Vain kun painat puhelukortin tallennuspainiketta. Oletus. |
| **Kysy joka puhelussa** | Puhelin kysyy jokaisessa puhelussa, tallennetaanko se. |
| **Jokainen puhelu** | Jokaisen vastatun puhelun, itsestään. Valittuna kuvassa. |
| **Valitut linjat** | Niiden tilien puhelut, jotka rastitat esiin tulevassa luettelossa. |

Tallennus alkaa, kun puheluun vastataan, eikä koskaan aiemmin, joten soiminen ja valitsemasi numerot eivät ole tiedostossa. Puhelu on yksi stereotiedosto: sinä yhdellä kanavalla ja kaikki muut toisella.

## Suostumus {#consent}

Pudotusvalikko valitsee, miten toiselle osapuolelle kerrotaan tallennuksesta:

| Valinta | Mitä toinen osapuoli kuulee |
| --- | --- |
| **Kuulutus** | Lyhyen viestin, kun tallennus alkaa. Oletus. **Valitse…** valitsee oman äänitiedoston; *jos mitään ei ole valittu, puhelin soittaa lyhyen merkkiäänen*. |
| **Ääni muutaman sekunnin välein** | Piippauksen liukusäätimellä asettamasi välein. |
| **Ei mitään** | Ei mitään. Valittuna kuvassa. |

**Säilytä ilmoitus tallenteessa** — kuulutus ja ääni soitetaan puhelussa oleville; ota tämä käyttöön, niin ne ovat myös tiedostossa.

:::caution
Monissa paikoissa — suurimmassa osassa Eurooppaa ja useissa Yhdysvaltain osavaltioissa — keskustelun tallentaminen kertomatta siitä toiselle osapuolelle on lainvastaista. Päätös on sinun, ja ohjelma sanoo sen pudotusvalikon alla.
:::

## Neuvottelut {#conferences}

**Tiedosto kutakin henkilöä kohti**, oletuksena käytössä. Neuvottelussa toinen kanava on kaikkien sekoitus, joten ylimääräinen tiedosto henkilöä kohti on se, minkä ansiosta litterointi voi kertoa, kuka sanoi mitäkin.

## Säilytys {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Asetukset → Tallennus: säilytys" />

| Asetus | Oletus | Mitä se rajoittaa |
| --- | --- | --- |
| **Säilytysaika** | Aina | Kuinka kauan tallenne säilytetään. |
| **Tallennusraja** | Ei rajaa | Kuinka paljon tilaa kaikki tallenteet saavat yhteensä viedä. |
| **Tiedostoja henkilöä kohti** | Aina | Kuinka kauan neuvottelun ylimääräiset tiedostot säilytetään. |
| **Levytilan raja** | 500 Mt | Alaraja levyn vapaalle tilalle. Tallenteita, joita et ole kiinnittänyt, voidaan poistaa, jotta sen yläpuolella pysytään. |

Kiinnitettyä tallennetta ei poisteta millään näistä, ja se lasketaan silti rajaan. Tunnin keskustelu vie noin 30 Mt.

Puhelut tallentavan ja toiselle osapuolelle siitä kertovan ohjelman osan voi poistaa käytöstä kohdassa [Moduulit](/application/modules).

Jos haluat tallentaa toisessa sovelluksessa pidetyn kokouksen, katso [Kaappaus](/capture/).
