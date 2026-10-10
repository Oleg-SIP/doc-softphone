---
title: Sufleriaus langas
sidebar_position: 3
description: "Gyvo sufleriaus langas: skambučio žodžiai tuo metu, kai jie tariami, ir patarimai, ką sakyti toliau, lango mygtukai ir stulpeliai, repeticija su įrašu ir kiek tai kainuoja."
---

**Suflerius** klausosi pokalbio jam vykstant. Savo lange jis užrašo, ką sako kiekviena pusė, tą akimirką, kai tai sakoma, ir — kai pasirinktas pagalbininkas klausia modelio — patarimą, ką sakyti toliau. Jį verta laikyti atvertą per pardavimo skambutį, darbo pokalbį ar sunkų pokalbį, o su kitu pagalbininku tas pats langas rodo nuolatinį kitos pusės vertimą arba tiesiog subtitrus.

<Shot name="46_prompter_running" alt="Suflerius repetuoja pardavimo skambutį: kairėje stenograma, dešinėje patarimai, naujausias dideliu šriftu pakartotas virš jų" />

Paveikslėlyje pagalbininkas **Prieštaravimai skambutyje** klausosi pardavimo skambučio. Kairysis stulpelis yra tai, kas buvo pasakyta, kiekviena eilutė su savo laiku ir puse; dešinysis — tai, ką modelis patarė į kiekvieną kliento atsakymą; naujausias patarimas dideliu šriftu pakartotas virš abiejų.

**Suflerius** atsiranda telefono apačioje esančiame sąraše tarp **Istorija** ir **Nustatymai**, kai tik įvykdomi trys dalykai: suflerius leidžiamas, yra atpažintuvas, mokantis klausytis vykstant pokalbiui, ir — ką nors patariantiems pagalbininkams — kalbos modelis. Visa tai nustatoma skiltyje [Nustatymai → Suflerius](/ai-processing/prompter), kurioje yra ir teksto dydis bei patys pagalbininkai.

## Langas {#the-window}
<Shot name="44_prompter_window" alt="Sufleriaus langas su pasirinktu pagalbininku Prieštaravimai skambutyje prieš paleidžiant" />

Viršuje yra išskleidžiamasis sąrašas **Pagalbininkas**, o dešinėje nuo jo — mygtukai:

| Mygtukas | Ką jis daro |
| --- | --- |
| **Pradėti** / **Sustabdyti** (trikampis / kvadratas) | *Pradėti klausytis šio skambučio* — arba baigti: *Pasakyta lieka ekrane*. Paleidimas, paspaustas prieš atsiliepiant į skambutį, jo laukia, o mygtukas tada jį atšaukia. |
| **Patarimas** (kibirkštys) | *Užbaigti atsakymą čia ir patarti, ką sakyti*, nelaukiant pauzės. Pagalbininkui, kuris neklausia jokio modelio, mygtukas vadinasi **Užbaigti atsakymą**: jis tik užbaigia atsakymą, kad kitas prasidėtų švariai. Jis pilkas, kol suflerius neveikia. |
| **Išvalyti** (šiukšlinė) | Paklausęs pamiršta, kas yra ekrane. *Dings abu stulpeliai, o kartu su jais ir pokalbis, iš kurio būtų sudarytas kitas patarimas.* Sustabdymas ir paleidimas iš naujo nieko neišvalo: sustabdytas ir vėl paleistas pokalbis paprastai yra tas pats pokalbis. |
| **Eksportuoti…** (diskelis) | Įrašo abu stulpelius su laikais į failą: tekstu (`.txt`) arba lentele (`.csv`), tokiu pavadinimu, kokį suteikiate failui. |
| **Repeticija…** (biblioteka) | [Išbando pagalbininką su įrašu](#rehearsing-on-a-recording) vietoj skambučio. |

Išskleidžiamasis sąrašas rodo [pagalbininkus](/ai-processing/prompter#assistants) tokia tvarka, kokia nustatyta skiltyje **Nustatymai → Suflerius**. Kol suflerius veikia, jo pakeisti negalima, bet jis lieka matomas, kad matytumėte, kuris pagalbininkas dirba. Kol jis klausosi, skambučio kortelėje parašyta **Klausomės**.

Po mygtukais yra juosta su naujausia eilute, o po ja — du stulpeliai:

- **Stenograma** — kiekviena eilutė su savo laiku ir puse;
- **Patarimai** — kiekvienas patarimas su atsakymo, į kurį jis atsako, laiku. Pagalbininkui, kuris neklausia jokio modelio, šio stulpelio nėra, ir stenograma užima visą plotį.

Siaurame lange abu stulpeliai būna vienas po kitu. Stulpelis seka tai, kas ateina, kol jame neslinksite atgal, ir vėl seka, kai grįžtate į apačią. Paspauskite bet kurią eilutę, kad ji liktų juostoje; paspauskite naujausią arba juostos smeigtuką, kad vėl sektumėte. Dešinysis pelės mygtukas nukopijuoja eilutę, patarimą, visą stenogramą arba visus patarimus. Vilkite skirtuką po juosta, kad ją padidintumėte; teksto dydžiai nustatomi skiltyje [Nustatymai → Suflerius](/ai-processing/prompter#settings--prompter).

## Repeticija su įrašu {#rehearsing-on-a-recording}
Pagalbininką galima išbandyti be nieko prie telefono. **Repeticija…** parodo [bibliotekos](/interface/recordings) pokalbius, naujausius pirmiau, ir **Failas šiame kompiuteryje…** `.mp3` ar `.wav` failui.

<Shot name="45_prompter_rehearse" alt="Repeticija…: bibliotekos pokalbiai ir failas šiame kompiuteryje" />

Pasirinktas įrašas atsiranda grotuve po mygtukais: paleisti ir pristabdyti, abu kanalai nupiešti kaip bangos forma, kurią galima spustelėti, ir laikas. Paspauskite **Pradėti**: įrašas grojamas į suflerių tuo pačiu keliu kaip skambutis, savo tempu — greitesnis grojimas sąmoningai nesiūlomas, nes pusantro karto greičiau maitinamas suflerius darytų pauzes, atsakinėtų ir skaičiuotų mokestį už pokalbį, kurio niekas nevedė. Kryželis dešinėje yra **Baigti repeticiją** — atgal prie skambučių klausymosi.

Vieno kanalo įrašas, pavyzdžiui, importuotas failas, girdimas kaip vienas kambarys: *suflerius visa tai girdi kaip pašnekovą*.

## Kiek tai kainuoja ir kur keliauja žodžiai {#what-it-costs-and-where-the-words-go}
- Atpažintuvas apmokestinamas už gyvo garso minutes, o **Atpažinti ir mano pusę** tai padvigubina. Modelis apmokestinamas už kiekvieną patarimą. Abu skaičiuojami į sufleriaus [mėnesio lubas](/ai-processing/prompter#spending), o ne į Apdorojimo ribas.
- Kitos pusės balsas palieka kompiuterį jai kalbant ir keliauja jūsų pasirinktam atpažintuvui. Atpažintuvas jūsų pačių kompiuteryje — **Vosk**, **WhisperLive** ar **NVIDIA Riva** — jį palieka namie.
- Tai, ką rodo suflerius, nėra įrašas. Norėdami tai išsaugoti, paspauskite **Eksportuoti…**; norėdami turėti patį pokalbį, papildomai [įrašykite skambutį](/recordings).

## Kai jis nepasileidžia {#when-it-does-not-start}
Langas eilutėje po mygtukais pasako, ko trūksta.

| Langas sako | Ką daryti |
| --- | --- |
| *Suflavimas išjungtas. Nustatymai → Suflerius.* | Pažymėkite **Leisti naudoti suflerių**. |
| *Nė vienas atpažintuvas čia nemoka klausytis, kol kas nors kalba. Nustatymai → Užrašas.* | Pridėkite atpažintuvą su **Adresas sufleriui** ir paspauskite **Patikrinti**. |
| *Nėra ko paleisti. Nustatymai → Suflerius, ir pridėkite pagalbininką.* | Visi pagalbininkai ištrinti arba išjungti: pridėkite vieną arba paspauskite **Atkurti numatytuosius**. |
| *Kitai pusei pirmiausia reikia pasakyti. Pradėkite įrašinėti šį pokalbį arba pakeiskite tai, ką apie sutikimą sako Nustatymai → Įrašymas.* | Pradėkite įrašymą, kuris paleidžia pranešimą, arba pakeiskite sutikimo nustatymą. |
| *Atpažintuvas neprisidėjo klausytis. Patikrinkite jo gyvą adresą ir modelį skiltyje Nustatymai → Užrašas.* | Adresas sufleriui, modelis arba raktas neteisingi. **Patikrinti** atpažintuvo kortelėje pasakys, kuris. |
| *Šio mėnesio suma atpažintuvams išnaudota.* | Padidinkite **Atpažintuvai, per mėnesį** arba palaukite, kol pasikeis mėnuo. |
| *Šio mėnesio suma modeliams išnaudota. Žodžiai tęsiasi; suflavimas sustojo.* | Padidinkite **Modeliai, per mėnesį**. |
