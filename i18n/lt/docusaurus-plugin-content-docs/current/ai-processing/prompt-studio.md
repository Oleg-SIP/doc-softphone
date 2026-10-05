---
title: Personal Prompt Studio
sidebar_position: 3
description: Nurodymai, kurie apibendrina jūsų pokalbius, juos vykdančios taisyklės ir kaip juos pritaikyti sau.
---

**Personal Prompt Studio** — tai AI Softphone dalis, kuri apibendrina jūsų pokalbius jūsų būdu. Apibendrinimą kuria nurodymai: programa pateikiama su vienuolika, paruoštais naudoti, kai tik prijungiamas iššifravimas ir kalbos modelis, o jūs galite juos keisti paprasta kalba, dubliuoti ir pridėti savo. Jie pateikti skiltyje **Nurodymai** puslapyje [Nustatymai → Apdorojimas](processing.md#prompts).

Jūsų LLM, jūsų raktas, jūsų kontrolė: prijunkite norimą modelį su savo raktu per palaikomą paslaugą ar suderinamą API — arba modelį, įdiegtą jūsų organizacijoje. Jei ir [iššifravimas](transcription.md#your-own-models) vyksta jūsų įrangoje, ir garsas, ir iššifruoti tekstai lieka jūsų aplinkoje.

<Shot name="12b_settings_processing_prompts" alt="Nurodymų sąrašas skiltyje Nustatymai → Apdorojimas" />

## Su programa pateikiami nurodymai {#the-prompts-that-come-with-the-program}

Antrasis stulpelis yra tai, ką sąrašas rodo po nurodymo pavadinimu: ką jis rašo ir kokia forma.

| Nurodymas | Forma | Ką jis rašo |
| --- | --- | --- |
| **Santrauka** | Proza | Pagrindinius punktus, sprendimus ir tolesnius žingsnius vienoje trumpoje pastraipoje. |
| **Santrauka viena eilute** | Proza | Trumpą pavadinimą, kad pokalbį atpažintumėte sąraše. |
| **Užduotys** | Punktai | Kas pažadėjo ką padaryti ir kada, su jų pasakytais žodžiais. |
| **Temos** | Punktai | Aptartas temas keliais žodžiais. |
| **Vardai ir skaičiai** | JSON | Žmones, įmones, datas, sumas ir nuorodas. |
| **Kategorija** | Žymos | Priskiria pokalbį vienai iš jūsų [kategorijų](dictionaries.md). |
| **Žymos** | Žymos | Uždeda jūsų [žymas](dictionaries.md), kad vėliau būtų galima rasti. |
| **Įspėjamieji signalai** | Signalai | Problemas su įrodymu ir laiku pokalbyje. |
| **Klausimas apie šį skambutį** | Atsakymas | Atsako į klausimą, kurį užduodate apie vieną pokalbį, remdamasis jo iššifruotu tekstu. |
| **Pardavimo kokybė** | Kriterijai | Įvertina pokalbį pagal pardavimo kriterijus, kuriuos galite redaguoti. |
| **Pagalbos kokybė** | Kriterijai | Įvertina, kaip gerai problema buvo suprasta ir išspręsta. |

Formos yra fiksuotos atsakymo struktūros, ir būtent tai leidžia programai atsakymą laikyti ir vėliau jame ieškoti: **Žymos** yra kodai iš vieno jūsų sąrašų, **Signalai** — kodai su rimtumu, **Kriterijai** — įvertinimas su pagrindimu ir įvertinimas kiekvienam kriterijui, **Atsakymas** — atsakymas su žodžiais, kuriais jis remiasi. Instrukcijos, nurodančios modeliui formą, laikomos skiltyje [Žodynai](dictionaries.md#answer-shapes-and-language).

AI Softphone atlikti skambučiai, iš kompiuterio [perimti](/capture/) susitikimai ir importuoti įrašai visi eina per tuos pačius nurodymus, kai tik turi iššifruotą tekstą.

Užduotys užfiksuoja, dėl ko susitarta — jos nesiunčia žinučių, nerezervuoja vizitų ir nesukuria užklausų už jus.

## Pritaikykite sau {#making-it-yours}

- Keiskite paprasta kalba, ko prašo nurodymas: ko jis ieško, atsakymo formatą ir kalbą, kuria jis atsako.
- Dubliuokite nurodymą, kad išbandytumėte variantą.
- Pasirinkite modelį kiekvienam nurodymui — savo kompiuteryje ar debesyje.
- Nustatykite tvarką, kuria vykdomi nurodymai, įjunkite ir išjunkite juos ir padarykite sąlyginius — tai daroma su [taisyklėmis](processing.md#rules): pavyzdžiui, pardavimo įvertinimas vykdomas tik skambučiams, priskirtiems kategorijai **Pardavimai**.
- Laikykite savo kategorijas, žymas ir įspėjamuosius signalus skiltyje [Žodynai](dictionaries.md).
- Apribokite išlaidas [mėnesio ribomis](processing.md#limits).

Pradinius nurodymus ir taisykles galima atkurti su **Atkurti numatytuosius** skiltyje **Numatytosios reikšmės** puslapyje [Nustatymai → Apdorojimas](processing.md#defaults).
