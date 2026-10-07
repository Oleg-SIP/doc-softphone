---
title: Zajemanje
sidebar_label: Zajem iz drugih programov
sidebar_position: 1
description: "\"Zajemanje posname pogovor v drugem programu — Zoomu, Teams, Meetu ali katerem koli drugem — kar z računalnika.\""
---

**Zajemanje** je način, kako AI Softphone posname pogovor, ki poteka v drugem programu, na primer sestanek v Zoomu, Teams ali Meetu. Snema kar z računalnika, pri čemer drugo stran in vas drži na ločenih kanalih, na koncu pa čakata enak prepis in obdelava kot pri klicu.

Program išče pogovor, ne imena programa, zato deluje z vsem, kar pogovor vodi.

[Pregled](../interface/settings-overview.md) nastavitev to navaja pod **Zajem iz drugih programov** in razdeli na tri korake:

1. **Vklopite zajem** — [dovolite zajemanje zvoka](#turning-capture-on).
2. **Zajemite pogovor** — [začnite in ustavite](#capturing-a-conversation) snemanje.
3. **Dajte mu ime** — [preimenujte](#giving-it-a-name) posnetek.

## Vklop zajemanja {#turning-capture-on}

Zajemanje je izklopljeno, dokler ga ne dovolite. Odprite **Nastavitve → Zajemanje**.

<Shot name="10_settings_capture" alt="Nastavitve → Zajemanje" />

| Nastavitev | Privzeto | Kaj naredi |
| --- | --- | --- |
| **Dovoli zajemanje zvoka** | izklopljeno | Programu dovoli snemanje zvoka drugih programov. Dokler je izklopljeno, se nič ne zajema. |
| **Opomni me, naj drugim povem o snemanju** | vklopljeno | Med zajemanjem prikazuje opomnik. Potrditveno polje je sivo, dokler zajemanje ni dovoljeno. |

:::caution
Posname se vse, kar predvaja računalnik, ne le pogovor. Ta telefon ne more napovedati snemanja v tuj sestanek, zato je to na vas.
:::

Del programa, ki to počne, je modul **Zajemanje**, *snemanje pogovora, ki teče v drugi aplikaciji*. Izklopiti ga je mogoče v [Modulih](../application/modules.md).

## Začetek zajemanja {#starting-a-capture}

Ko je zajemanje dovoljeno, dno [glavnega okna](../interface/main-window.md#capture) pokaže njegovo stanje — **Zajemanje · pripravljeno** — z gumbom **Snemaj** na desni. Pritisnite **Snemaj**, da začnete ročno.

### Samodejni zagon {#automatic-start}

**Samodejni zagon** odloča, kaj se zgodi, ko program zasliši pogovor v drugem programu:

| Izbira | Kaj se zgodi |
| --- | --- |
| **Nikoli** | Zajemanje se začne le, ko pritisnete **Snemaj**. |
| **Vprašaj me** | Program vpraša, ali naj ga posname. Privzeto. |
| **Vedno** | Program začne snemati sam. |

Pod **Programi z lastnim odgovorom** lahko program dobi svoj odgovor — na primer *Ta program vedno snemaj* iz vprašanja, ki ga program postavi.

*Vprašanje nič ne stane: sekunde pred vašim odgovorom so že shranjene.*

### Pred začetkom {#before-the-start}

Drsnik **Pred začetkom** določa, koliko sekund zvoka se obdrži izpred začetka snemanja, privzeto **15 sekund**. Je zato, da se nič ne izgubi, medtem ko se pogovor opazi: posnetek, ki se začne, ko pritisnete **Snemaj** ali ko odgovorite na vprašanje, se vseeno začne z besedami, ki so bile izrečene prej.

## Zajemanje pogovora {#capturing-a-conversation}

Med snemanjem glavno okno pokaže rdečo piko, ime posnetka (na primer **Sestanek v Zoom**), pretečeni čas in oba kanala kot valovni obliki.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Snemanje sestanka" />

- **Ustavi snemanje** ga konča.
- Okno med snemanjem ostane vidno in vas opominja, da udeležencem poveste, da se sestanek snema.

### Kaj kaže slika {#what-the-picture-shows}

Še dve nastavitvi izbereta, kako se riše raven zvoka:

| Nastavitev | Privzeto | Kje |
| --- | --- | --- |
| **Slika v glavnem oknu** | Val | Oba kanala med zajemanjem. |
| **Slika v pasu ob vznožju telefona** | Dve ravni | Tanka pasova pod **Zajemanje · pripravljeno**. |

### Preizkus {#testing-it}

Pod **Preveri** ima zavihek dva stolpca: **Vi** in **Druga stran**. *Zgornji stolpec se premika, ko govorite, spodnji, ko kaj igra.* Pred pomembnim sestankom recite besedo in predvajajte kakršen koli zvok, da vidite, ali program sliši obe strani.

## Poimenovanje {#giving-it-a-name}

Svinčnik poleg imena posnetka omogoča, da ga preimenujete, medtem ko teče. Posnetek, ki ga niste poimenovali, je naveden kot **Drug program**.

## Kam gre posnetek {#where-the-recording-goes}

Zajet pogovor se pojavi v [oknu Posnetki](../interface/recordings.md) kot vsak drug, s svojo ikono, oknom namesto slušalke, in z naslovom, ki ste mu ga dali, ali **Drug program**.

<Shot name="01_recordings" alt="Zajeti sestanki v zavihku Posnetki, označeni z ikono okna" />

Prepiše se, povzame, uvrsti v kategorijo in označi po istih [pravilih](../ai-processing/processing.md#rules) kot klic. V prepisu zajetega sestanka je govorec prikazan kot **Drug program** tam, kjer bi klic pokazal ime druge strani; **Išči** v knjižnici najde tudi, kar je bilo rečeno v njem.
