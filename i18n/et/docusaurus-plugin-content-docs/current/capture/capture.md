---
title: Hõivamine
sidebar_label: Hõive teistest rakendustest
sidebar_position: 1
description: "\"Hõivamine salvestab teises rakenduses — Zoomis, Teamsis, Meetis või mõnes muus — peetud vestluse otse arvutist.\""
---

**Hõivamine** on viis, kuidas AI Softphone salvestab vestluse, mis toimub mõnes teises programmis, näiteks koosoleku Zoomis, Teamsis või Meetis. See salvestab arvutist endast, hoides teise poole ja teid eraldi kanalitel, ning lõpus ootavad sama ülestähendus ja kokkuvõte nagu kõne puhul.

Programm otsib vestlust, mitte rakenduse nime, nii et see töötab kõigega, mis vestlust tekitab.

Seadete [Ülevaade](../interface/settings-overview.md) loetleb selle jaotises **Hõive teistest rakendustest** ja jagab selle kolmeks sammuks:

1. **Lülita hõive sisse** — [lubage heli hõivamine](#turning-capture-on).
2. **Hõiva vestlus** — [alustage ja lõpetage](#capturing-a-conversation) salvestamine.
3. **Anna sellele nimi** — [nimetage](#giving-it-a-name) salvestis ümber.

## Hõivamise sisselülitamine {#turning-capture-on}

Hõivamine on väljas, kuni te selle lubate. Avage **Seaded → Hõivamine**.

<Shot name="10_settings_capture" alt="Seaded → Hõivamine" />

| Seade | Vaikimisi | Mida see teeb |
| --- | --- | --- |
| **Luba heli hõivamine** | väljas | Laseb programmil salvestada teiste rakenduste heli. Kui see on väljas, ei hõivata midagi. |
| **Tuleta mulle meelde teistele salvestamisest rääkida** | sees | Näitab hõivamise ajal meeldetuletust. Märkeruut on hall, kuni hõivamine on lubatud. |

:::caution
Salvestatakse kõik, mida arvuti mängib, mitte ainult vestlus. See telefon ei saa salvestamisest teatada kellegi teise koosolekul, nii et selle ütlemine on teie ülesanne.
:::

Seda tegev programmi osa on moodul **Hõivamine**, *Teises rakenduses toimuva vestluse salvestamine*. Selle saab välja lülitada jaotises [Moodulid](../application/modules.md).

## Hõivamise alustamine {#starting-a-capture}

Kui hõivamine on lubatud, näitab [peaakna](../interface/main-window.md#capture) allosa selle olekut — **Hõivamine · valmis** — ja paremal on nupp **Salvesta**. Vajutage **Salvesta**, et alustada käsitsi.

### Automaatne käivitamine {#automatic-start}

**Automaatne käivitamine** otsustab, mis juhtub, kui programm kuuleb teises rakenduses vestlust:

| Valik | Mis juhtub |
| --- | --- |
| **Mitte kunagi** | Hõivamine algab ainult siis, kui vajutate **Salvesta**. |
| **Küsi minult** | Programm küsib, kas seda salvestada. Vaikimisi. |
| **Alati** | Programm hakkab ise salvestama. |

Jaotises **Oma vastusega rakendused** saab rakendusele anda oma vastuse — näiteks *Salvesta see rakendus alati* programmi esitatud küsimuse juurest.

*Küsimine ei kosta midagi: sekundid enne teie vastust on juba alles hoitud.*

### Enne algust {#before-the-start}

Liugur **Enne algust** määrab, mitu sekundit heli enne salvestamise algust alles hoitakse, vaikimisi **15 sekundit**. See on olemas selleks, et vestluse märkamise ajal midagi ei kaoks: salvestis, mis algab, kui vajutate **Salvesta** või vastate küsimusele, algab ikkagi sõnadega, mis tulid enne.

## Vestluse hõivamine {#capturing-a-conversation}

Salvestamise ajal näitab peaaken punast täppi, salvestise nime (näiteks **Koosolek rakenduses Zoom**), möödunud aega ja kahte kanalit lainekujudena.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Koosoleku salvestamine" />

- **Peata salvestamine** lõpetab selle.
- Aken jääb salvestamise ajal nähtavaks ja tuletab meelde, et osalejatele tuleb öelda, et koosolekut salvestatakse.

### Mida pilt näitab {#what-the-picture-shows}

Kaks muud seadet valivad, kuidas helitaset joonistatakse:

| Seade | Vaikimisi | Kus |
| --- | --- | --- |
| **Pilt peaaknas** | Laine | Kaks kanalit hõivamise ajal. |
| **Pilt telefoni jalamil oleval ribal** | Kaks taset | Kaks peenikest tulpa oleku **Hõivamine · valmis** all. |

### Proovimine {#testing-it}

Jaotises **Kontrolli** on vahekaardil kaks tulpa: **Teie** ja **Teine pool**. *Ülemine tulp liigub, kui te räägite, alumine siis, kui midagi mängib.* Enne olulist koosolekut öelge üks sõna ja mängige mõnda heli, et näha, kas programm kuuleb mõlemat poolt.

## Nime andmine {#giving-it-a-name}

Salvestise nime kõrval olev pliiats laseb seda salvestamise ajal ümber nimetada. Salvestis, millele te nime ei andnud, on loendis nimega **Teine rakendus**.

## Kuhu salvestis läheb {#where-the-recording-goes}

Hõivatud vestlus ilmub [salvestiste aknasse](../interface/recordings.md) nagu iga teinegi, oma ikooniga — aken toru asemel — ja teie antud pealkirjaga või nimega **Teine rakendus**.

<Shot name="01_recordings" alt="Hõivatud koosolekud vahekaardil Salvestised, tähistatud akna ikooniga" />

See kirjutatakse üles, võetakse kokku, liigitatakse kategooriasse ja märgistatakse samade [reeglitega](../ai-processing/processing.md#rules) nagu kõne. Hõivatud koosoleku ülestähenduses näidatakse kõnelejat nimega **Teine rakendus**, kus kõne puhul oleks teise osapoole nimi; ka teegi **Otsi** leiab selles öeldu.
