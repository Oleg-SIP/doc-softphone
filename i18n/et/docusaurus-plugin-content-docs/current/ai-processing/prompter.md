---
title: Etteütleja seaded
sidebar_label: Etteütleja
sidebar_position: 5
description: "Seaded → Etteütleja: mida otse töötav etteütleja vajab, lüliti, mis selle lubab, kirja suurus, abilised ja nende kaardid ning kuulimiidid selle kohta, mida see tohib kulutada."
---

Jaotises **Seaded → Etteütleja** otse töötav etteütleja lubatakse, selle suurus seatakse ja sellele antakse abilised. Etteütleja ise — aken, mis kirjutab kõne üles selle ütlemise ajal ja soovitab, mida vastata, ning proov salvestusega — on kirjeldatud lehel [Etteütleja aken](/interface/prompter).

Seadete [Ülevaade](/interface/settings-overview) näitab etteütlejat jaotises **Etteütleja** kahe sammuna: **Luba etteütlemine** ja **Käivita etteütleja**.

## Mida see vajab {#what-it-needs}
- **Tuvastajat, kes oskab vestluse ajal kuulata.** See lisatakse jaotises [Seaded → Ülestähendus](/ai-processing/transcription#live-recognition-for-the-prompter) nagu iga teine tuvastaja ning vajab välja **Aadress etteütleja jaoks** ja õnnestunud **Kontrolli**.
- **Keelemudelit** abilistele, kes midagi soovitavad. See on abilisele seatud mudel või jaotise [Seaded → Töötlemine](/ai-processing/processing#language-models) vaikemudel. Subtiitrid ei vaja üldse mudelit.
- **Märget Luba etteütleja kasutamine** jaotises **Seaded → Etteütleja**.

Kui kõik kolm on olemas, ilmub **Etteütleja** telefoni allosas olevasse loendisse **Ajalugu** ja **Seaded** vahele ning avab [etteütleja akna](/interface/prompter). Programmi osa, mis selle eest hoolitseb, on moodul **Etteütleja**, *Kuulab vestlust selle toimumise ajal ja soovitab*; selle saab välja lülitada jaotises [Moodulid](/application/modules).

## Seaded → Etteütleja {#settings--prompter}
<Shot name="41_settings_prompter" alt="Seaded → Etteütleja: etteütleja lubav lüliti ja kirja suurus" />

*Kõnetuvastus käimasoleva vestluse ajal ja soovitused sinu enda juhiste järgi. Mõlema eest arveldatakse minutite kaupa.*

| Seade | Vaikimisi | Mida see teeb |
| --- | --- | --- |
| **Luba etteütleja kasutamine** | väljas | Ainus lüliti, mis üldse laseb etteütlejat käivitada. Miski muu lehel ei mõju, kuni see on väljas. |
| **Transkriptsioon ja soovitused** | 13 pikslit | Kui suurelt akna kaks veergu joonistatakse. |
| **Korda uusimat rida veergude kohal** | sees | Näitab uusimat soovitust — või abilise puhul, kes midagi ei soovita, uusimat rida — eraldi ribal veergude kohal. |
| **Korratud rida** | 20 pikslit | Kui suur on riba tekst. Kuvatakse, kuni riba on sees. |

:::caution
Teise poole hääl saadetakse tuvastajale rääkimise ajal, mis ei ole sugugi vähem kui salvestamine. Kus [Seaded → Salvestamine](/recordings) nõuab, et teisele poolele öeldaks esmalt, käivitub etteütleja alles pärast seda.
:::

Etteütlejat loetakse rääkimise ajal, sageli kaugemalt kui ülejäänud telefoni, seega valite kaks suurust ise: valige sellised, mida haarate ekraani poole kummardumata. Lohistage riba all olevat eraldajat [etteütleja aknas](/interface/prompter#the-window), et seda kõrgemaks teha.

### Abilised {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Seaded → Etteütleja: abilised ja kuulimiidid" />

Abiline on see, mida etteütlejalt palutakse olla. *Igaüks neist kuulab käimasolevat vestlust ja kirjutab midagi etteütleja aknasse: sõnad nii, nagu need öeldakse, nende tõlke või soovituse, mida edasi öelda.* Millise käivitate, valite etteütleja aknas. Programmiga tuleb kaasa neli:

| Abiline | Mida see kirjutab | Küsib mudelilt |
| --- | --- | --- |
| **Subtiitrid** | Mõlema poole sõnad nende ütlemise ajal. | ei |
| **Tõlge** | Teise poole sõnad, tõlgituna programmi keelde. | jah |
| **Vastuväited kõnes** | Telefoni teel müüjale: kui klient esitab vastuväite, vastuväide ühel real ja üks rida, mis sellele vastab. | jah |
| **Abi vestlusel** | Intervjueeritavale: vastus äsja esitatud küsimusele mõne lühikese reaga või see, mida järgmises vastuses käsitleda. | jah |

**▲** ja **▼** muudavad järjekorda, mis on [etteütleja akna](/interface/prompter#the-window) rippmenüü järjekord. **Lisa** loob oma abilise. **Taasta vaikeväärtused** taastab juhised ja reeglid sellisena, nagu need programmiga kaasa tulid, siin nagu ka jaotises [Töötlemine](/ai-processing/processing#defaults); teie keelemudelitega midagi ei juhtu.

### Abilise kaart {#an-assistants-card}
Abilisele vajutamine avab selle kaardi. See on sama kaart mis [juhisel](/ai-processing/prompt-studio) Töötlemise all, mõne omaette juhtelemendiga.

<Shot name="42_prompter_assistant" alt="Abilise Vastuväited kõnes kaart: tuvastaja, millal vastus on lõppenud, roll ja juhis" />

| Väli | Mida see teeb |
| --- | --- |
| **Nimi** | Nimi, mis on näha loendis ja etteütleja aknas. |
| **Vastuse kuju** ja **Saada ka** | Nagu igal juhisel: vastuse kuju ja koos sellega saadetavad juhised. Kaasasolevad abilised vastavad kujul **Proosa**. |
| **Tuvastaja** | Milline tuvastaja kuulab. Pakutakse ainult neid, kes oskavad kuulata, kui keegi räägib. |
| **Millal vastus on lõppenud** | Kes otsustab, et vastus on läbi ja sellele võib vastata: **Tuvastaja otsustab**, **Pärast pausi** või **Ainult siis, kui ma palun** — siis lõpeb vastus, kui vajutate **Soovitus**. Kuus tuvastajat ütlevad ise, kus vastus lõpeb, neli mitte; **Tuvastaja otsustab** kasutab pausi seal, kus tal vastust pole, ja seepärast tasub see jätta. |
| **Tuvasta ka minu pool** | Teine seanss samas tuvastajas, kahekordse hinnaga, et ka teie enda sõnad transkriptsioonis näha oleksid. Need lähevad sellesse, mida mudelile öeldakse, kuid kunagi ei küsita mudelilt nende kohta. |
| **Roll — mis mudel on** | Saadetakse mudelile enne juhist, näiteks *Aitate inimest, kes müüb telefoni teel…* |
| **Juhis** | Mida mudelilt iga vastuse kohta küsitakse. `{{reply}}` on äsja lõppenud vastus ja `{{conversation}}` kõik enne seda öeldu. *Jätke tühjaks ja mudelilt ei küsita midagi: sõnu näidatakse nii, nagu need saabuvad, ja maksta tuleb ainult tuvastaja eest.* Just see ongi **Subtiitrid**. |
| **Vasta keeles** | Soovituse keel: **Mida iganes räägiti**, **Selle programmi keel** või **Alati üks keel** koos selle koodiga. |
| **Mudel** | **Vaikimisi** või üks teie [keelemudelitest](/ai-processing/processing#language-models). |

### Kulud {#spending}
*Eraldi sellest, mida reeglid tohivad lõpetatud vestlustele kulutada. Kuu jagu kokkuvõtteid ei tohi suuta etteütlejat vestluse keskel vaikima panna.*

| Väli | Kui see on täis |
| --- | --- |
| **Tuvastajad, kuus** | Töötav etteütleja peatub selle vastuse lõpus, mille juures ta on — mitte kunagi sõna keskel. |
| **Mudelid, kuus** | Soovitused lõpevad ja subtiitrid jätkuvad. |

Tühi tähendab, et piirmäära pole. Otseheli minuti hind on tuvastaja **Hind minuti eest**, mis sisestatakse selle kaardile jaotises [Ülestähendus](/ai-processing/transcription#the-recognisers-card); ilma selleta ütleb etteütleja, et näidatud summa on hinnang.
