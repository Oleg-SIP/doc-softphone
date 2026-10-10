---
title: Kontaktid ja ajalugu
sidebar_position: 4
description: Aadressiraamat ja kõnede ajalugu telefoni kõrval.
---

**Kontaktid** ja **Ajalugu** avanevad kahe vahekaardina telefonist paremal, nii et saate rääkimise ajal numbrit otsida.

## Kontaktid {#contacts}

<Shot name="03_contacts" alt="Vahekaart Kontaktid" />

- **Otsi** filtreerib loendit tippimise ajal.
- **Lisa** loob kontakti.
- Iga kontakt on loendis nimega ja selle all on number ning konto, mille kaudu kontaktile helistatakse, näiteks *231 · 201 Kontor*.

Tuntud numbrilt tulev kõne näitab kontakti nime, samuti viimaste kõnede loend ja kõnede ajalugu — nii töötab helistaja tuvastamine.

### Kontakti muutmine {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Muutmiseks avatud kontakt" />

Valige kontakt, et selle rea paremas servas ilmuksid pliiats ja toru. Toru helistab kontaktile; pliiats avab rea all vormi:

| Väli | Mida sisestada |
| --- | --- |
| **Nimi** | Kuidas kontakti näidatakse. |
| **Number** | Number, kuhu helistada. |
| Ripploend välja **Number** all | Konto, mille kaudu kontaktile helistatakse. |

**Salvesta** jätab muudatused alles, **Loobu** tühistab need ja **Kustuta** eemaldab kontakti.

## Ajalugu {#history}

<Shot name="21_history" alt="Vahekaart Ajalugu" />

Kõnede ajalugu, uusim eespool. Ülal:

- ripploend, vaikimisi **Kõik kõned**, kitsendab loendi ühele kõneliigile;
- **Otsi** filtreerib tipitu järgi.

Igal kirjel on ikoon kõneliigi kohta — väljaminev toru või punane toru kellaga vastamata kõne puhul —, teise osapoole nimi (või number) ning selle all kuupäev, kõne tulemus, kestus, number ja konto. Hiljutisi kõnesid näidatakse kujul *Eile, 22:33* või nädalapäevaga, vanemaid kuupäevaga.

| Kõne tulemus | Näidatakse |
| --- | --- |
| Te rääkisite | **väljaminev** või sissetulev ning kestus, näiteks *48 s* |
| Sissetulevale kõnele ei vastatud | **Vastamata** |
| Teie tehtud kõne ei saanud ühendust | **Ei läinud läbi** |

Valige kirje, et selle paremale ilmuksid neli nuppu:

| Nupp | Mida teeb |
| --- | --- |
| Inimene plussiga | Lisab numbri [Kontaktidesse](#contacts). |
| ▶ | Mängib kõne salvestist, kui see salvestati. |
| Prügikast | Kustutab kirje. |
| Toru | Helistab numbrile tagasi. |

### Kui kaua ajalugu säilitatakse {#how-long-the-log-is-kept}

Kõnede ajalugu on tõend, nii et sealt ei eemaldata midagi, kui te seda ise ei ütle: vaikimisi säilitatakse iga kõne. Säilitamise aeg ja nupp **Tühjenda kõnede ajalugu** on jaotises [Kõnede seaded](../sip-accounts/calls.md#history).

Vastamata ja tagasi lükatud kõnesid saab lugeda ka [kohaliku REST API](../integration/rest-api.md) kaudu (`/history?missed=true`, `/history?declined=true`).
