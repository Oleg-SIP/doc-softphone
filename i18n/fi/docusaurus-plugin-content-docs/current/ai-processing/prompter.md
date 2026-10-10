---
title: Kuiskaajan asetukset
sidebar_label: Kuiskaaja
sidebar_position: 5
description: "Asetukset → Kuiskaaja: mitä suora kuiskaaja tarvitsee, kytkin joka sallii sen, tekstin koko, avustajat ja niiden kortit sekä kuukausikatot sille, mitä se saa kuluttaa."
---

Kohdassa **Asetukset → Kuiskaaja** suora kuiskaaja sallitaan, sen koko säädetään ja sille annetaan avustajat. Itse kuiskaaja — ikkuna, joka kirjoittaa puhelun sitä mukaa kuin se sanotaan ja ehdottaa, mitä vastata, sekä harjoitus nauhoituksella — on kuvattu sivulla [Kuiskaajan ikkuna](/interface/prompter).

Asetusten [Yleiskatsaus](/interface/settings-overview) näyttää kuiskaajan kohdassa **Kuiskaaja** kahtena vaiheena: **Salli kuiskaaja** ja **Käynnistä kuiskaaja**.

## Mitä se tarvitsee {#what-it-needs}
- **Tunnistimen, joka osaa kuunnella keskustelun aikana.** Se lisätään kohdassa [Asetukset → Litterointi](/ai-processing/transcription#live-recognition-for-the-prompter) kuten mikä tahansa muu tunnistin, ja se tarvitsee **Osoite kuiskaajaa varten** -kentän ja onnistuneen **Kokeile**-testin.
- **Kielimallin** jotakin ehdottaville avustajille. Se on avustajaan asetettu malli tai kohdan [Asetukset → Käsittely](/ai-processing/processing#language-models) oletusmalli. Tekstitykset eivät tarvitse mallia lainkaan.
- **Valinnan Salli kuiskaajan käyttö** kohdassa **Asetukset → Kuiskaaja**.

Kun kaikki kolme ovat kunnossa, **Kuiskaaja** ilmestyy puhelimen alaosan luetteloon **Historia**- ja **Asetukset**-kohtien väliin ja avaa [kuiskaajan ikkunan](/interface/prompter). Ohjelman osa, joka tämän hoitaa, on moduuli **Kuiskaaja**, *Kuuntelee keskustelua sen aikana ja ehdottaa*; sen voi poistaa käytöstä kohdassa [Moduulit](/application/modules).

## Asetukset → Kuiskaaja {#settings--prompter}
<Shot name="41_settings_prompter" alt="Asetukset → Kuiskaaja: kuiskaajan salliva kytkin ja tekstin koko" />

*Puheentunnistus kesken keskustelun ja vihjeet omien ohjeidesi mukaan. Molemmat laskutetaan minuuteittain.*

| Asetus | Oletus | Mitä se tekee |
| --- | --- | --- |
| **Salli kuiskaajan käyttö** | pois | Ainoa kytkin, joka ylipäätään sallii kuiskaajan käynnistämisen. Mikään muu sivulla ei vaikuta, ennen kuin se on päällä. |
| **Litterointi ja vihjeet** | 13 kuvapistettä | Kuinka suurina ikkunan kaksi saraketta piirretään. |
| **Toista uusin rivi palstojen yläpuolella** | päällä | Näyttää uusimman vihjeen — tai uusimman rivin, jos avustaja ei ehdota mitään — omalla kaistallaan sarakkeiden yläpuolella. |
| **Toistettu rivi** | 20 kuvapistettä | Kuinka suurta kaistan teksti on. Näkyy, kun kaista on päällä. |

:::caution
Vastapuolen ääni lähetetään tunnistimelle sitä mukaa kuin hän puhuu, mikä ei ole yhtään vähemmän kuin tallentaminen. Missä [Asetukset → Tallennus](/recordings) vaatii kertomaan siitä hänelle ensin, kuiskaaja käynnistyy vasta, kun niin on tehty.
:::

Kuiskaajaa luetaan puhuessa, usein kauempaa kuin muuta puhelinta, joten valitset kaksi kokoa itse: valitse sellaiset, jotka erotat kumartumatta näytön puoleen. Vedä kaistan alla olevaa erotinta [kuiskaajan ikkunassa](/interface/prompter#the-window) tehdäksesi siitä korkeamman.

### Avustajat {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Asetukset → Kuiskaaja: avustajat ja kuukausikatot" />

Avustaja on se, mitä kuiskaajan pyydetään olevan. *Kukin niistä kuuntelee käynnissä olevaa keskustelua ja kirjoittaa jotakin kuiskaajan ikkunaan: sanat sellaisina kuin ne sanotaan, niiden käännöksen, tai vihjeen siitä, mitä sanoa seuraavaksi.* Minkä niistä käynnistät, valitset kuiskaajan ikkunassa. Ohjelman mukana tulee neljä:

| Avustaja | Mitä se kirjoittaa | Kysyy mallilta |
| --- | --- | --- |
| **Tekstitykset** | Kummankin puolen sanat sitä mukaa kuin ne sanotaan. | ei |
| **Käännös** | Toisen puolen sanat käännettyinä ohjelman kielelle. | kyllä |
| **Vastaväitteet puhelussa** | Puhelimessa myyvälle: kun asiakas esittää vastaväitteen, vastaväite yhdellä rivillä ja yksi rivi, joka vastaa siihen. | kyllä |
| **Apua työhaastattelussa** | Haastateltavalle: vastaus juuri esitettyyn kysymykseen muutamalla lyhyellä rivillä tai se, mitä seuraavassa vastauksessa kannattaa käsitellä. | kyllä |

**▲** ja **▼** muuttavat järjestystä, ja se on [kuiskaajan ikkunan](/interface/prompter#the-window) pudotusvalikon järjestys. **Lisää** luo oman avustajan. **Palauta oletusarvot** palauttaa kehotteet ja säännöt sellaisiksi kuin ne tulivat ohjelman mukana, täällä samoin kuin kohdassa [Käsittely](/ai-processing/processing#defaults); kielimalleihisi ei kosketa.

### Avustajan kortti {#an-assistants-card}
Avustajan painaminen avaa sen kortin. Se on sama kortti kuin [kehotteella](/ai-processing/prompt-studio) Käsittelyn alla, muutamalla omalla säätimellä.

<Shot name="42_prompter_assistant" alt="Avustajan Vastaväitteet puhelussa kortti: tunnistin, milloin vastaus on päättynyt, rooli ja kehote" />

| Kenttä | Mitä se tekee |
| --- | --- |
| **Nimi** | Nimi, joka näkyy luettelossa ja kuiskaajan ikkunassa. |
| **Vastauksen muoto** ja **Lähetä myös** | Kuten kaikissa kehotteissa: vastauksen muoto ja sen mukana lähetettävät ohjeet. Mukana tulevat avustajat vastaavat muodossa **Proosa**. |
| **Tunnistin** | Mikä tunnistin kuuntelee. Tarjolla ovat vain ne, jotka osaavat kuunnella jonkun puhuessa. |
| **Milloin vastaus on päättynyt** | Kuka päättää, että vastaus on ohi ja siihen voi vastata: **Tunnistin päättää**, **Tauon jälkeen** tai **Vain kun pyydän** — silloin vastaus päättyy, kun painat **Vihje**. Kuusi tunnistimista kertoo itse, missä vastaus päättyy, ja neljä ei; **Tunnistin päättää** turvautuu taukoon silloin, kun sillä ei ole vastausta, ja siksi se kannattaa jättää valituksi. |
| **Tunnista myös oma puoleni** | Toinen istunto samalla tunnistimella kaksinkertaiseen hintaan, jotta myös omat sanasi näkyvät litteroinnissa. Ne menevät siihen, mitä mallille kerrotaan, mutta niistä ei koskaan kysytä. |
| **Rooli — mikä malli on** | Lähetetään mallille ennen kehotetta, esimerkiksi *Autat henkilöä, joka myy puhelimessa…* |
| **Kehote** | Mitä mallilta kysytään kunkin vastauksen kohdalla. `{{reply}}` on juuri päättynyt vastaus ja `{{conversation}}` kaikki ennen sitä sanottu. *Jätä tyhjäksi, niin mallilta ei kysytä mitään: sanat näytetään sitä mukaa kuin ne saapuvat, ja maksettavaksi jää pelkkä tunnistin.* Juuri sitä on **Tekstitykset**. |
| **Vastaa kielellä** | Vihjeen kieli: **Mitä ikinä puhuttiinkin**, **Tämän ohjelman kieli** tai **Yksi kieli, aina** koodeineen. |
| **Malli** | **Oletus** tai jokin [kielimalleistasi](/ai-processing/processing#language-models). |

### Kulut {#spending}
*Erillään siitä, mitä säännöt saavat kuluttaa valmiisiin keskusteluihin. Kuukausi tiivistelmiä ei saa voida vaientaa kuiskaajaa keskustelun keskellä.*

| Kenttä | Kun se täyttyy |
| --- | --- |
| **Tunnistimet, kuukaudessa** | Käynnissä oleva kuiskaaja pysähtyy meneillään olevan vastauksen loppuun — ei koskaan kesken sanan. |
| **Mallit, kuukaudessa** | Vihjeet loppuvat ja tekstitykset jatkuvat. |

Tyhjä tarkoittaa, ettei kattoa ole. Suoran äänen minuutin hinta on tunnistimen **Hinta minuutilta**, joka annetaan sen kortissa kohdassa [Litterointi](/ai-processing/transcription#the-recognisers-card); ilman sitä kuiskaaja kertoo, että näytetty summa on arvio.
