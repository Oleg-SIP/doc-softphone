---
title: Sufleriaus nustatymai
sidebar_label: Suflerius
sidebar_position: 5
description: "Nustatymai → Suflerius: ko reikia gyvam sufleriui, jungiklis, kuris jį leidžia, teksto dydis, pagalbininkai ir jų kortelės bei mėnesio lubos tam, ką jis gali išleisti."
---

Skiltyje **Nustatymai → Suflerius** gyvas suflerius leidžiamas, nustatomas jo dydis ir jam suteikiami pagalbininkai. Pats suflerius — langas, kuris užrašo skambutį jam vykstant ir pataria, ką atsakyti, bei repeticija su įrašu — aprašytas puslapyje [Sufleriaus langas](/interface/prompter).

Nustatymų [Apžvalga](/interface/settings-overview) rodo suflerių skiltyje **Suflerius** dviem žingsniais: **Leisti suflerį** ir **Paleisti suflerių**.

## Ko jam reikia {#what-it-needs}
- **Atpažintuvo, kuris moka klausytis vykstant pokalbiui.** Jis pridedamas skiltyje [Nustatymai → Užrašas](/ai-processing/transcription#live-recognition-for-the-prompter) kaip bet kuris kitas atpažintuvas, ir jam reikia **Adresas sufleriui** bei sėkmingo **Patikrinti**.
- **Kalbos modelio** ką nors patariantiems pagalbininkams. Tai pagalbininkui nustatytas modelis arba numatytasis skilties [Nustatymai → Apdorojimas](/ai-processing/processing#language-models) modelis. Subtitrams modelio visai nereikia.
- **Žymės Leisti naudoti suflerių** skiltyje **Nustatymai → Suflerius**.

Kai visi trys įvykdyti, **Suflerius** atsiranda telefono apačioje esančiame sąraše tarp **Istorija** ir **Nustatymai** ir atveria [sufleriaus langą](/interface/prompter). Programos dalis, kuri tuo rūpinasi, yra modulis **Suflerius**, *Klausosi pokalbio jam vykstant ir pasiūlo*; jį galima išjungti skiltyje [Moduliai](/application/modules).

## Nustatymai → Suflerius {#settings--prompter}
<Shot name="41_settings_prompter" alt="Nustatymai → Suflerius: jungiklis, leidžiantis suflerių, ir teksto dydis" />

*Kalbos atpažinimas pokalbio metu ir patarimai, parašyti pagal jūsų pačių nurodymus. Abu apmokestinami minutėmis.*

| Nustatymas | Numatytasis | Ką jis daro |
| --- | --- | --- |
| **Leisti naudoti suflerių** | išjungta | Vienintelis jungiklis, kuris apskritai leidžia paleisti suflerių. Niekas kitas puslapyje neveikia, kol jis išjungtas. |
| **Stenograma ir patarimai** | 13 pikselių | Kokio dydžio piešiami abu lango stulpeliai. |
| **Pakartoti naujausią eilutę virš skilčių** | įjungta | Rodo naujausią patarimą — arba naujausią eilutę pagalbininkui, kuris nieko nepataria — atskiroje juostoje virš stulpelių. |
| **Kartojama eilutė** | 20 pikselių | Kokio dydžio juostos tekstas. Rodoma, kol juosta įjungta. |

:::caution
Kitos pusės balsas siunčiamas atpažintuvui jai kalbant, o tai yra ne mažiau nei įrašymas. Kur [Nustatymai → Įrašymas](/recordings) reikalauja pirmiausia apie tai pasakyti, suflerius pasileidžia tik po to.
:::

Suflerius skaitomas kalbant, dažnai iš toliau nei likęs telefonas, todėl abu dydžius renkatės patys: pasirinkite tokius, kuriuos suvokiate nepasilenkę prie ekrano. Vilkite skirtuką po juosta [sufleriaus lange](/interface/prompter#the-window), kad ją padidintumėte.

### Pagalbininkai {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Nustatymai → Suflerius: pagalbininkai ir mėnesio lubos" />

Pagalbininkas yra tai, kuo sufleriaus prašoma būti. *Kiekvienas jų klauso vykstančio pokalbio ir rašo kažką į suflerio langą: žodžius tokius, kokie pasakomi, jų vertimą arba patarimą, ką sakyti toliau.* Kurį paleisti, pasirenkate sufleriaus lange. Su programa pateikiami keturi:

| Pagalbininkas | Ką jis rašo | Klausia modelio |
| --- | --- | --- |
| **Subtitrai** | Abiejų pusių žodžius, kai jie tariami. | ne |
| **Vertimas** | Kitos pusės žodžius, išverstus į programos kalbą. | taip |
| **Prieštaravimai skambutyje** | Parduodančiam telefonu: kai klientas išsako prieštaravimą, prieštaravimą viena eilute ir vieną eilutę, kuri į jį atsako. | taip |
| **Pagalba per pokalbį** | Tam, su kuriuo vyksta darbo pokalbis: atsakymą į ką tik užduotą klausimą keliomis trumpomis eilutėmis arba tai, ką aptarti kitame atsakyme. | taip |

**▲** ir **▼** keičia tvarką, ir tai yra [sufleriaus lango](/interface/prompter#the-window) išskleidžiamojo sąrašo tvarka. **Pridėti** sukuria jūsų pačių pagalbininką. **Atkurti numatytuosius** grąžina nurodymus ir taisykles tokius, kokie atėjo su programa, tiek čia, tiek skiltyje [Apdorojimas](/ai-processing/processing#defaults); jūsų kalbos modeliai lieka nepaliesti.

### Pagalbininko kortelė {#an-assistants-card}
Paspaudus pagalbininką atsiveria jo kortelė. Tai ta pati kortelė kaip [nurodymo](/ai-processing/prompt-studio) skiltyje Apdorojimas, su keliais savais valdikliais.

<Shot name="42_prompter_assistant" alt="Pagalbininko Prieštaravimai skambutyje kortelė: atpažintuvas, kada atsakymas pasibaigė, vaidmuo ir nurodymas" />

| Laukas | Ką jis daro |
| --- | --- |
| **Pavadinimas** | Pavadinimas sąraše ir sufleriaus lange. |
| **Atsakymo forma** ir **Siųsti taip pat** | Kaip ir bet kuriam nurodymui: atsakymo forma ir kartu siunčiamos instrukcijos. Pateikiami pagalbininkai atsako forma **Proza**. |
| **Atpažintuvas** | Kuris atpažintuvas klausosi. Siūlomi tik tie, kurie moka klausytis, kol kas nors kalba. |
| **Kada atsakymas pasibaigė** | Kas nusprendžia, kad atsakymas baigėsi ir į jį galima atsakyti: **Sprendžia atpažintuvas**, **Po pauzės** arba **Tik kai paprašau** — tada atsakymas baigiasi, kai paspaudžiate **Patarimas**. Šeši atpažintuvai patys pasako, kur baigiasi atsakymas, keturi ne; **Sprendžia atpažintuvas** pasikliauja pauze ten, kur jis atsakymo neturi, todėl šį nustatymą verta palikti. |
| **Atpažinti ir mano pusę** | Antra sesija tame pačiame atpažintuve, už dvigubą kainą, kad ir jūsų pačių žodžiai atsirastų stenogramoje. Jie patenka į tai, kas pasakoma modeliui, bet niekada nėra tai, ko modelio klausiama. |
| **Vaidmuo — kas yra modelis** | Siunčiamas modeliui prieš nurodymą, pavyzdžiui, *Padedate žmogui, kuris pardavinėja telefonu…* |
| **Nurodymas** | Ko modelio klausiama dėl kiekvieno atsakymo. `{{reply}}` yra ką tik pasibaigęs atsakymas, o `{{conversation}}` — viskas, kas pasakyta anksčiau. *Palikite tuščią — ir modelio nieko neklausiama: žodžiai rodomi vos atėję, o mokama tik už atpažintuvą.* Būtent tai ir yra **Subtitrai**. |
| **Atsakyti kalba** | Patarimo kalba: **Kad ir kas būtų kalbėta**, **Šios programos kalba** arba **Visada viena kalba** su jos kodu. |
| **Modelis** | **Numatytasis** arba vienas iš jūsų [kalbos modelių](/ai-processing/processing#language-models). |

### Išlaidos {#spending}
*Atskirai nuo to, ką taisyklės gali išleisti užbaigtiems pokalbiams. Mėnuo santraukų neturi galėti nutildyti sufleriaus pokalbio viduryje.*

| Laukas | Kai pasiekiama |
| --- | --- |
| **Atpažintuvai, per mėnesį** | Veikiantis suflerius sustoja to atsakymo, prie kurio yra, pabaigoje — niekada žodžio viduryje. |
| **Modeliai, per mėnesį** | Patarimai sustoja, o subtitrai tęsiasi. |

Tuščia reiškia, kad lubų nėra. Gyvo garso minutės kaina yra atpažintuvo **Kaina už minutę**, nurodyta jo kortelėje skiltyje [Užrašas](/ai-processing/transcription#the-recognisers-card); be jos suflerius praneša, kad rodoma suma yra apytikslė.
