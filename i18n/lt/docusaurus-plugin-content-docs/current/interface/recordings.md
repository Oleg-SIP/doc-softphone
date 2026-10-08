---
title: Įrašų langas
sidebar_position: 2
description: "\"Visų pokalbių biblioteka — skambučio, įkelto failo ar iš Zoom, Teams ar Meet perimto susitikimo: filtrai, grotuvas, iššifruotas tekstas, kurį galima groti nuo bet kurios eilutės, ir apibendrinimai.\""
---

**Įrašai** — tai vieta, kur yra kiekvienas pokalbis, kad ir kaip jis atėjo: telefonu atliktas ar priimtas skambutis, įkeltas garso failas arba susitikimas, perimtas iš Zoom, Teams, Meet ar bet kurios kitos programos. Jie visi yra viename sąraše, ir kiekvienas atsiveria vienodai: grotuvas, iššifruotas tekstas ir viskas, ką apie jį parašė kalbos modelis. Paspauskite **Įrašai** apačioje kairėje [pagrindiniame lange](main-window.md), kad jį atvertumėte.

<Shot name="01_recordings" alt="Skirtukas Įrašai: perimtas Zoom susitikimas, įkeltas failas ir skambučiai viename sąraše" />

## Trys įrašų rūšys {#three-kinds-of-recording}

Piktograma eilutės kairėje parodo, kaip pokalbis atėjo.

| Piktograma | Pokalbis | Jo pavadinimas sąraše | Kaip jis čia patenka |
| --- | --- | --- | --- |
| Ragelis su rodykle | Šiame telefone atliktas ar priimtas skambutis. Rodyklė rodo į vidų priimamam skambučiui ir į išorę – atliekamam. | Kontakto vardas arba numeris | Įrašomas pagal nustatymus skiltyje [Įrašai](../recordings.md) |
| Rodyklė į juostą | Failas, įkeltas iš kitur: mobiliojo telefono, diktofono ar kitos sistemos | Failo pavadinimas | **⋮ → Įkelti iš failų**; žr. [toliau](#a-recording-you-already-have) |
| Langas | Kitoje programoje vykęs susitikimas | Jūsų duotas pavadinimas arba **Kita programa** | [Fiksavimas](../capture/capture.md) |

Paveikslėlyje viršutinės trys eilutės yra po vieną iš kiekvienos rūšies: Zoom susitikimas, įkeltas banko pagalbos skambučio failas ir skambutis, priimtas **305 Pagalba** linija. Kad ir koks jų šaltinis, jie užrašomi, apibendrinami ir ieškomi vienodai.

## Pokalbio paieška {#finding-a-conversation}

Viršutinėje juostoje yra penki filtrai, paieškos laukas ir meniu:

| Valdiklis | Susiaurina sąrašą pagal |
| --- | --- |
| **Rūšis** | tai, kaip pokalbis atėjo: priimami ar atliekami skambučiai, **Įkelti**, **Užfiksuoti** |
| **Laikotarpis** | datą: **Šiandien**, **Vakar**, **Paskutinės 7 dienos** arba **Pasirinkti datas…** |
| **Kategorija** | kategoriją, kuriai jis priskirtas — žr. [Žodynai](../ai-processing/dictionaries.md) |
| **Ženklas** | jam suteiktas žymas ir įspėjamuosius signalus |
| **Atpažintuvas** | [atpažintuvą](../ai-processing/transcription.md), sukūrusį jo iššifruotą tekstą |
| **Ieškoti** | tai, kas jame pasakyta — paieška eina per visų jūsų įrašų iššifruotus tekstus |

<Shot name="39_more_menu" alt="Sąrašo meniu ⋮: Įkelti iš failų, Eksportuoti į CSV, Atverti naršyklėje" />

Mygtukas **⋮** juostos dešinėje atveria papildomus sąrašo veiksmus:

| Punktas | Ką daro |
| --- | --- |
| **Įkelti iš failų** | Įkelia įrašus, kuriuos jau turite. Žr. [Įrašas, kurį jau turite](#a-recording-you-already-have). |
| **Eksportuoti į CSV** | Išsaugo sąrašą kaip skaičiuoklę: kada, kita pusė ir numeris, kryptis, trukmė, kategorija, žymos, signalai ir kiekvieno pokalbio santrauka viena eilute. |
| **Atverti naršyklėje** | Atveria sąrašą jūsų naršyklėje kaip puslapį, kurį adresu `/ui` pateikia [vietinė REST API](../integration/rest-api.md). |

## Sąrašas {#the-list}

Kiekvienoje eilutėje matoma:

- pokalbio rūšies piktograma;
- pavadinimas — kita pusė, numeris, failas ar susitikimas — o po juo data ir santrauka viena eilute;
- dešinėje kategorija su įvertinimu (skaičius, pavyzdžiui, *Pagalba · 4*), tada įspėjamieji signalai ir žymos, o gale — trukmė.

Įspėjamieji signalai piešiami raudonai (paveikslėlyje *Jautrūs duomenys*, *Duotas pažadas*, *Supykęs klientas*); žymos yra paprastos (*Žadėta perskambinti*). Pokalbis be santraukos ir kategorijos dar neapibendrintas — paveikslėlyje tai eilutė **Ona Butkienė**.

<Shot name="40_row_actions" alt="Eilutė, ant kurios užvestas žymeklis: smeigtuko, pieštuko ir šiukšlinės mygtukai" />

Užveskite žymeklį ant eilutės, kad jos dešinėje atsirastų trys mygtukai:

| Mygtukas | Ką daro |
| --- | --- |
| Smeigtukas | **Saugoti šį**: išsaugoto įrašo niekada neištrina [Laikymo](../recordings.md#retention) apribojimai. Paspauskite dar kartą, kad nustotumėte jį saugoti. |
| Pieštukas | **Pervadinti**: suteikia pokalbiui jūsų pačių pavadinimą. Skambutis šalia pavadinimo išlaiko kitos pusės vardą; susitikimas ar failas kitu atveju pavadinamas pagal programą ar failą, iš kurio atėjo. |
| Šiukšlinė | **Ištrinti šį įrašą**, pirma paklausus. Kartu dingsta ir garsas, o to atšaukti negalima. |

## Grotuvas {#the-player}

Pažymėkite eilutę, kad po sąrašu atvertumėte grotuvą.

- Dvi bangų formos yra du įrašo kanalai: viršutinė – jūs, apatinė – kita pusė. Įkeltame faile paprastai yra vienas sumaišytas takelis, todėl abi linijos rodo tą patį garsą.
- **▶** groja ir pristabdo; laikai kairėje yra padėtis ir bendra trukmė. Juosta po bangų formomis slenka per ilgą įrašą.
- **1×** keičia greitį; **Abu** pasirenka, kurį balsą girdite: abu, tik jus (**Aš**) arba tik kitą pusę (**Jie**).
- Diskelio mygtukas išsaugo įrašo kopiją, **×** užveria pokalbį.

Liniją tarp sąrašo ir grotuvo galima nutempti aukštyn, kad iššifruotas tekstas gautų daugiau vietos, kaip paveikslėliuose žemiau.

## Iššifruotas tekstas {#the-transcript}

Po grotuvu yra iššifruotas tekstas: po vieną eilutę kiekvienai replikai, su laiku, kada ji pasakyta, ir kas ją pasakė.

<Shot name="26_recording_call" alt="Skambutis 305 Pagalba linija: grotuvas ir iššifruotas tekstas, paryškinta eilutė ties 0:14" />

| Įrašo rūšis | Kalbėtojai rodomi kaip |
| --- | --- |
| Skambutis | **Jūs** ir kitos pusės vardas arba numeris |
| Perimtas susitikimas | **Jūs** ir įrašo pavadinimas — visiems kitiems |
| Įkeltas failas | **Visi · speaker 1**, **Visi · speaker 2**… — balsus atskiria atpažintuvas |

**Spustelėkite eilutę, kad pereitumėte į tą akimirką**: grotuvas peršoka ten, eilutė paryškinama, o joje pažymimas tariamas žodis — paveikslėlyje eilutė ties **0:14** su žodžiu *Taip*. Paspauskite **▶**, kad klausytumėte nuo čia. Kol groja, paryškinimas seka kalbą, todėl galite skaityti ir klausyti vienu metu ir grįžti prie bet kurio sakinio.

Laikas kiekvienos eilutės kairėje yra ir tai, į ką rodo apibendrinimas: įspėjamasis signalas, atsakymas ar citata nurodo laiką žodžių, kuriais remiasi.

## Iššifruotas tekstas ar apibendrinimas: išskleidžiamasis sąrašas {#transcript-or-write-up-the-drop-down}

Išskleidžiamasis sąrašas virš iššifruoto teksto pasirenka, ką rodyti toje vietoje: iššifruotą tekstą arba vieną iš apibendrinimų, kuriuos sukūrė kalbos modelis.

<Shot name="27_writeup_menu" alt="Atvertas išskleidžiamasis sąrašas: OpenAI iššifruotas tekstas ir skambučio apibendrinimai" />

- Eilutės su **mikrofonu** yra iššifruoti tekstai — po vieną kiekvienam [atpažintuvui](../ai-processing/transcription.md), kuris užrašė įrašą. Žvaigždutė žymi pagrindinį. Užveskite žymeklį ant vieno, kad pamatytumėte atpažintuvą, jo modelį ir kalbą.
- Eilutės su **kibirkštimis** yra apibendrinimai, kuriuos sukūrė skiltyje [Apdorojimas](../ai-processing/processing.md) nustatyti [nurodymai](/ai-processing/prompt-studio).

Įrašas gali turėti kelių atpažintuvų iššifruotus tekstus, kad juos būtų galima palyginti: žemiau pateiktą Zoom susitikimą užrašė ir X.ai, ir Deepgram.

<Shot name="36_zoom_menu" alt="Perimtas susitikimas su dviem iššifruotais tekstais, Deepgram ir X.ai, ir jo apibendrinimai" />

Apibendrinimai išvardyti trumpais pavadinimais:

| Išskleidžiamajame sąraše | Sukuria nurodymas | Ką rodo |
| --- | --- | --- |
| **Santrauka** | Santrauka | Pagrindiniai dalykai, sprendimai ir tolesni žingsniai trumpoje pastraipoje. |
| **Trumpai** | Santrauka viena eilute | Vienas sakinys; ta pati eilutė rodoma po pavadinimu sąraše. |
| **Veiksmai** | Užduotys | Kas sutiko ką padaryti ir iki kada. |
| **Temos** | Temos | Kilusios temos. |
| **Paminėti** | Vardai ir skaičiai | Žmonės, įmonės, datos, sumos ir nuorodos. |
| pats klausimas | Klausimas apie šį skambutį | Atsakymas į jūsų užduotą klausimą su žodžiais, kuriais jis remiasi. |
| **Kokybė** | Pardavimo kokybė, Pagalbos kokybė | Bendras įvertinimas ir verdiktas kiekvienam kriterijui. |
| **Signalai** | Įspėjamieji signalai | Kam reikia dėmesio, su įrodymu ir laiku. |
| **Žymos**, **Kategorija** | Žymos, Kategorija | Etiketės, kuriomis pokalbis pažymėtas. |

## Apibendrinimai po vieną {#the-write-ups-one-by-one}

Paveikslėliuose žemiau — vis tas pats skambutis **305 Pagalba** linija, kuriame klientė klausia, kada atnaujinami jos draudimai.

**Santrauka** — pokalbis keliais sakiniais.

<Shot name="28_summary" alt="Skambučio santrauka" />

**Trumpai** — viena eilutė, pakankamai trumpa, kad pokalbį atpažintumėte sąraše.

<Shot name="29_nutshell" alt="Trumpai: skambučio santrauka viena eilute" />

**Veiksmai** — kiekviena užduotis su tuo, kas ją turi atlikti, ir kada, dešinėje.

<Shot name="30_actions" alt="Veiksmai: dvi užduotys Jūs, viena iš jų – rytoj ryte" />

**Klausimas** — paklauskite pokalbio ko tik norite: klausimas tampa elemento pavadinimu, o po atsakymu pateikiami žodžiai, kuriais jis remiasi, su jų laiku įraše.

<Shot name="31_question" alt="Atsakymas į klausimą apie skambutį su dviem citatomis ties 0:19 ir 0:36" />

**Kokybė** — įvertinimas nuo 1 iki 5 su priežastimi, o kiekvienas kriterijus pažymėtas **atitinka**, **silpnai** arba **neatitinka** su pastaba.

<Shot name="32_quality" alt="Kokybė: įvertinimas 4, du kriterijai atitinka ir du silpnai" />

**Signalai** — kiekvienas signalas su žodžiais, kuriais jis iškeltas, jo rimtumu ir laiku.

<Shot name="33_red_flags" alt="Signalai: Duotas pažadas, žemas, ties 0:36" />

**Temos** — susitikimo temos, čia — Zoom susitikimo.

<Shot name="38_topics" alt="Zoom susitikimo temos" />

## Mygtukai prie išskleidžiamojo sąrašo {#the-buttons-beside-the-drop-down}

| Mygtukas | Ką daro |
| --- | --- |
| Kibirkštys | **Užrašyti arba paklausti modelio…**: atveria meniu, žr. toliau. |
| Du lapai | Nukopijuoja rodomą turinį. |
| Diskelis | Išsaugo jį faile. Iššifruotą tekstą galite išsaugoti kaip paprastą tekstą arba kaip subtitrus. |
| Šiukšlinė | Ištrina rodomą turinį. |

<Shot name="34_run_menu" alt="Kibirkščių meniu: Užrašas su keturiais atpažintuvais, Apdorojimas su nurodymais" />

Kibirkščių meniu atlieka darbą pagal poreikį. Skiltyje **Užrašas** pasirinkite atpažintuvą, kad įrašą užrašytumėte juo iš naujo; skiltyje **Apdorojimas** pasirinkite nurodymą, kad jį paleistumėte dabar — **Klausimas apie šį skambutį** pirmiausia paprašo klausimo. Rezultatas atsiranda išskleidžiamajame sąraše. Taip pokalbis apibendrinamas, kai skiltyje [Apdorojimas](../ai-processing/processing.md) išjungta **Apdoroti pokalbius automatiškai**, ir taip prie pokalbio, kuris jau turi apibendrinimų, pridedamas dar vienas.

## Trys pavyzdžiai {#three-examples}

### Telefonu atliktas skambutis {#a-call-made-in-the-phone}

Aukščiau pateiktas skambutis: kalbėtojai yra **Jūs** ir **Indrė Paulauskienė** — kontakto vardas, dviem atskirais kanalais.

### Įkeltas failas {#a-file-you-imported}

<Shot name="35_recording_import" alt="Įkeltas banko pagalbos skambučio failas: vienas sumaišytas takelis ir 1 bei 2 kalbėtojai" />

`riverside_bank_support_call` yra mp3, įkeltas per **⋮ → Įkelti iš failų**. Jo pavadinimas yra failo pavadinimas, piktograma — rodyklė į juostą, o du jo kalbėtojus atskyrė atpažintuvas. Apibendrinimai rado garsiai pasakytą kortelės numerį ir iškėlė **Jautrūs duomenys**.

### Iš kitos programos perimtas susitikimas {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Iš kompiuterio perimtas Zoom susitikimas: X.ai iššifruotas tekstas su Jūs ir susitikimo pavadinimu kaip kalbėtojais" />

**IV ketvirčio paleidimo planavimas (Zoom)** buvo perimtas, kol susitikimas vyko Zoom, ir pavadintas pieštuku. Visi kitoje susitikimo pusėje rodomi įrašo pavadinimu; jūs esate **Jūs**. Žr. [Fiksavimas](../capture/capture.md).

## Įrašas, kurį jau turite {#a-recording-you-already-have}

Kitur — mobiliuoju telefonu, diktofonu ar kitoje sistemoje — padarytą įrašą galima pridėti per **⋮ → Įkelti iš failų**. Pasirinkite vieną ar kelis mp3 ar wav failus; telefonas pasako, kiek jų įkelta, ir įvardija tuos, kurių nepavyko perskaityti kaip įrašo. Kiekvienas archyvuojamas lygiai taip pat kaip surinktas skambutis: iššifruojamas, apibendrinamas pagal tas pačias [taisykles](../ai-processing/processing.md#rules) ir randamas ta pačia paieška.

## Įrašo trynimas {#deleting-a-recording}

Kai įrašas ištrinamas, kartu su juo dingsta viskas, kas iš jo sukurta: iššifruoti tekstai ir apibendrinimai. Kiek laiko įrašai laikomi savaime, nustatoma skiltyje [Įrašai](../recordings.md#retention).
