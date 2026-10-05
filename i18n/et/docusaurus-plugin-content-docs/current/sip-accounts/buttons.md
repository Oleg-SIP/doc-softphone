---
title: Nupud
sidebar_position: 4
description: "\"BLF-nupud: ühe vajutusega nupud, mis helistavad teie IP-keskjaama sisenumbrile ja näitavad, kas see on vaba, heliseb või on hõivatud.\""
---

Nupud on tarkvaratelefoni **BLF**-klahvid (Busy Lamp Field), sama funktsioon, mis on IP-keskjaama lauatelefonil. Nupp helistab sisenumbrile ühe vajutusega. Oma liini jälgiv nupp näitab ka tuld: telefon küsib keskjaamalt selle sisenumbri kohta ja näitab, kas see on vaba, heliseb või on hõivatud, nagu teevad vastuvõtu konsool või lauatelefoni programmeeritavad klahvid.

BLF vajab keskjaama tuge: keskjaam peab teatama telefonile sisenumbri oleku. Enamik IP-keskjaamu teeb seda. Kui teie oma ei tee, jääb tuli halliks ja nupp helistab ikkagi.

Nupud on [peaaknas](/interface/main-window) kontode märkide all ja neid luuakse jaotises **Seaded → Nupud**.

<Shot name="08_settings_buttons" alt="Seaded → Nupud: kaks nuppu" />

Iga rida on nupp: tuli, selle pealkiri ning paremal selle number ja konto, kuhu see kuulub — näiteks *212 · 201 Kontor*. **▲** ja **▼** liigutavad nuppu üles või alla; peaakna nupud järgivad seda järjekorda. **Lisa** teeb uue.

## Tuli {#the-lamp}

Oma liini jälgiv nupp näitab tuld:

| Tuli | Liin on |
| --- | --- |
| Roheline | vaba |
| Kollane | heliseb |
| Punane | kõnes |
| Hall | teadmata: keskjaam ei ütle |

## Nupu lisamine {#adding-a-button}

<Shot name="08b_button_add" alt="Uue nupu vorm" />

Vajutage **Lisa**; loendi alla avaneb vorm.

| Väli | Mida sisestada |
| --- | --- |
| **Number** | Number, kuhu helistada. |
| **Liin** | Konto, millelt kõne tehakse. Valige see esimesena: tule näitamiseks küsib telefon selle liini keskjaamalt selle numbri kohta, nii et see peab teadma, millise. |
| **Pealkiri** | Tekst nupul, näiteks inimese nimi. Nupul on ruumi ainult lühikesele pealkirjale; pikem lõigatakse ära. |
| **Näita, kas see liin on hõivatud** | Lüliti. Sees — nupul on tuli. Väljas — see ainult helistab. |

**Salvesta** jääb halliks, kuni vorm on täidetud. **Loobu** tühistab vormi.

Nuppe näitava programmi osa saab välja lülitada jaotises [Moodulid](/application/modules).
