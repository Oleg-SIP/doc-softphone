---
title: Painikkeet
sidebar_position: 4
description: "\"BLF-painikkeet: yhden painalluksen painikkeet, jotka soittavat IP-vaihteesi alanumeroon ja näyttävät, onko se vapaa, soiko se vai onko se varattu.\""
---

Painikkeet ovat ohjelmistopuhelimen **BLF**-näppäimiä (Busy Lamp Field), sama toiminto kuin IP-vaihteeseen liitetyssä pöytäpuhelimessa. Painike soittaa alanumeroon yhdellä painalluksella. Linjaansa seuraava painike näyttää myös merkkivalon: puhelin kysyy vaihteelta kyseisestä alanumerosta ja näyttää, onko se vapaa, soiko se vai onko se varattu, kuten vaihteenhoitajan konsoli tai pöytäpuhelimen ohjelmoitavat näppäimet tekevät.

BLF vaatii tuen vaihteen puolelta: vaihteen on ilmoitettava alanumeron tila puhelimelle. Useimmat IP-vaihteet tekevät niin. Jos omasi ei tee, merkkivalo pysyy harmaana ja painike soittaa silti.

Painikkeet ovat tilien merkkien alla [pääikkunassa](/interface/main-window), ja ne tehdään kohdassa **Asetukset → Painikkeet**.

<Shot name="08_settings_buttons" alt="Asetukset → Painikkeet: kaksi painiketta" />

Jokainen rivi on painike: merkkivalo, sen nimike ja oikealla sen numero ja tili, johon se kuuluu — esimerkiksi *212 · 201 Toimisto*. **▲** ja **▼** siirtävät painiketta ylös tai alas; pääikkunan painikkeet noudattavat tätä järjestystä. **Lisää** tekee uuden.

## Merkkivalo {#the-lamp}

Linjaansa seuraava painike näyttää merkkivalon:

| Merkkivalo | Linja on |
| --- | --- |
| Vihreä | vapaa |
| Keltainen | soimassa |
| Punainen | puhelussa |
| Harmaa | tuntematon: vaihde ei kerro |

## Painikkeen lisääminen {#adding-a-button}

<Shot name="08b_button_add" alt="Uuden painikkeen lomake" />

Paina **Lisää**; luettelon alle avautuu lomake.

| Kenttä | Mitä kirjoitetaan |
| --- | --- |
| **Numero** | Numero, johon soitetaan. |
| **Linja** | Tili, jolla puhelu soitetaan. Valitse se ensin: näyttääkseen merkkivalon puhelin kysyy tämän linjan vaihteelta tästä numerosta, joten sen on tiedettävä, mistä. |
| **Nimike** | Painikkeen teksti, esimerkiksi henkilön nimi. Painikkeeseen mahtuu vain lyhyt nimike; pidempi katkaistaan. |
| **Näytä, onko tämä linja varattu** | Kytkin. Päällä painikkeessa on merkkivalo. Pois päältä se vain soittaa. |

**Tallenna** pysyy harmaana, kunnes lomake on täytetty. **Peruuta** hylkää lomakkeen.

Painikkeet näyttävän ohjelman osan voi poistaa käytöstä kohdassa [Moduulit](/application/modules).
