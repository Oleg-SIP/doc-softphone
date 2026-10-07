---
title: Įrašų langas
sidebar_position: 2
description: Pokalbių biblioteka — filtruokite, grokite, skaitykite iššifruotą tekstą ir apibendrinimą.
---

**Įrašai** — tai vieta, kur yra kiekvienas pokalbis, kad ir kaip jis atėjo: skambutis, iš kitos programos perimtas susitikimas ar importuotas failas. Kiekvienas pateiktas su jau parengtu apibendrinimu.

<Shot name="01_recordings" alt="Skirtukas Įrašai: pokalbių sąrašas" />

## Pokalbio paieška {#finding-a-conversation}

Viršutinėje juostoje yra keturi filtrai, paieškos laukas ir meniu:

| Valdiklis | Susiaurina sąrašą pagal |
| --- | --- |
| **Rūšis** | tai, kaip pokalbis atėjo |
| **Laikotarpis** | datą |
| **Kategorija** | kategoriją, kuriai jis priskirtas — žr. [Žodynai](../ai-processing/dictionaries.md) |
| **Ženklas** | jam suteiktus ženklus |
| **Ieškoti** | tai, kas jame pasakyta — paieška eina per visų jūsų įrašų iššifruotus tekstus |

Mygtukas **⋮** juostos dešinėje atveria papildomus sąrašo veiksmus: **Įkelti iš failų**, **Eksportuoti į CSV** ir **Atverti naršyklėje**.

## Sąrašas {#the-list}

Kiekvienoje eilutėje matoma:

- piktograma pokalbio rūšiai: ragelis skambučiui, langas kitoje programoje vykusiam susitikimui;
- pavadinimas — kitos pusės vardas, numeris arba perimtam susitikimui **Kita programa** — o po juo data ir santrauka viena eilute;
- dešinėje kategorija su įvertinimu (skaičius, pavyzdžiui, *Pagalba · 2*), tada žymos ir galiausiai trukmė.

Raudonai nupieštos žymos yra **įspėjamieji signalai** (paveikslėlyje *Supykęs klientas* ir *Pasitraukimo rizika*); kitos yra įprastos žymos (*Skundas*, *Žadėta perskambinti*). Pokalbis be santraukos ir kategorijos dar neapibendrintas — pirmoji eilutė paveikslėlyje.

## Grotuvas {#the-player}

Pažymėkite eilutę, kad po sąrašu atvertumėte grotuvą.

<Shot name="02_recording_details" alt="Pažymėtas įrašas: grotuvas ir iššifruotas tekstas po sąrašu" />

- Dvi bangų formos yra du įrašo kanalai, po vieną kiekvienai pokalbio pusei. Juosta po jomis slenka per ilgą įrašą.
- **▶** groja ir pristabdo; laikai kairėje yra padėtis ir bendra trukmė.
- **1×** keičia greitį; **Abu** pasirenka, kurį kanalą girdite.
- Diskelio mygtukas išsaugo garsą, **×** užveria grotuvą.

## Iššifruotas tekstas ir apibendrinimas {#the-transcript-and-the-write-up}

Po grotuvu yra iššifruotas tekstas: po vieną eilutę kiekvienai replikai, laikas, kada ji pasakyta, ir kalbėtojo vardas (**Jūs**, kitos pusės vardas arba perimtam susitikimui **Kita programa**). Spustelėkite eilutę, kad išgirstumėte tą akimirką; eilutė po grojimo žymekliu paryškinama, o tariamas žodis joje pažymimas.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Iššifruotas tekstas šalia garso" />

Išskleidžiamasis sąrašas virš iššifruoto teksto pasirenka, ką rodyti — vieno iš jūsų [atpažintuvų](../ai-processing/transcription.md) iššifruotą tekstą (žvaigždutė žymi pagrindinį įrašo iššifruotą tekstą) arba apibendrinimą, pavyzdžiui, **Veiksmai**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Veiksmai, kurie liko po pokalbio" />

Keturios piktogramos dešinėje nuo išskleidžiamojo sąrašo:

| Piktograma | Ką daro |
| --- | --- |
| Kibirkštys | Liepia modeliui dabar parašyti pasirinktą elementą. |
| Du lapai | Nukopijuoja jį. |
| Diskelis | Išsaugo jį faile. |
| Šiukšlinė | Ištrina jį. |

Iššifruotą tekstą galite eksportuoti kaip paprastą tekstą arba kaip subtitrus.

Apibendrinimą kuria [nurodymai](/ai-processing/prompt-studio) ir modeliai, kuriuos nustatėte skiltyje [Apdorojimas](../ai-processing/processing.md), per [taisykles](../ai-processing/processing.md#rules), kurios vykdomos savaime arba jums paprašius. Kiek laiko laikomi įrašai, nustatoma skiltyje [Įrašai](../recordings.md#retention).

## Įrašas, kurį jau turite {#a-recording-you-already-have}

Kitur — mobiliuoju telefonu, diktofonu ar kitoje sistemoje — padarytą įrašą galima pridėti per **⋮ → Įkelti iš failų**. Jis archyvuojamas lygiai taip pat kaip skambutis: iššifruojamas, apibendrinamas ir randamas ta pačia paieška.

## Įrašo trynimas {#deleting-a-recording}

Kai įrašas ištrinamas, kartu su juo dingsta viskas, kas iš jo sukurta: iššifruotas tekstas ir apibendrinimas.
