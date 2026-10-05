---
title: Apdorojimas
sidebar_position: 2
description: Automatinis pokalbių apdorojimas, mėnesio išlaidų ribos, kalbos modeliai, nurodymai ir juos vykdančios taisyklės.
---

**Nustatymai → Apdorojimas** nusprendžia, kas nutinka pokalbiui jį įrašius, kuris modelis atlieka darbą ir kiek tai gali kainuoti.

<Shot name="12_settings_processing" alt="Nustatymai → Apdorojimas" />

## Apdoroti pokalbius automatiškai {#process-conversations-automatically}

- **Išjungta:** nieko nevyksta, kol to nepaprašote [įrašų lange](../recordings/recordings-window.md).
- **Įjungta:** toliau nurodytos [taisyklės](#rules) vykdomos savaime. Tai paverčia pokalbį santrauka, kategorija ir visa kita, niekam nieko nespaudžiant. Debesyje esantis modelis ima mokestį už kiekvieną šių žingsnių.

Po žymimuoju langeliu programa rodo, kiek išleista šį mėnesį ir per kiek užklausų, pavyzdžiui, *Šį mėnesį: 40.492 žetonų, per 84 užklausas, be mokesčio.*

## Ribos {#limits}

| Laukas | Reikšmė |
| --- | --- |
| **Pinigų riba, per mėnesį** | Didžiausia suma, kurią modeliai gali kainuoti per mėnesį. |
| **Žetonų riba, per mėnesį** | Didžiausias žetonų skaičius, kurį jie gali sunaudoti per mėnesį. |

Ribų yra dvi, nes mėnesį galima matuoti dviem vienetais. Abi tuščios, kol jų neužpildote. Pasiekus bet kurią, automatinės taisyklės sustoja iki mėnesio pabaigos. **Tai, ko prašote patys, niekada nesustabdoma.**

## Kalbos modeliai {#language-models}

Modeliai, kurie skaito iššifruotą tekstą ir rašo apie jį. Paspauskite **Pridėti**, kad pridėtumėte. Kiekvienas pateiktas su pavadinimu, o po juo — modelio identifikatorius ir paslaugos adresas, pavyzdžiui, `qwen3-32b · http://llm.local:8000/v1`. Pažymėtas kaip **numatytasis** naudojamas pagal numatymą. Mygtukas modelio formoje patikrina, ar paslauga tikrai atsako, prieš jums ja pasikliaujant.

- Modelis **jūsų kompiuteryje** laiko kiekvieną pokalbį pastato viduje ir nieko nekainuoja.
- Debesyje esantis modelis — OpenAI, Claude, Mistral, DeepSeek, Groq ir kiti — apmokestinamas pagal naudojimą. Programa rodo kiekvieno iškvietimo kainą žetonais ir pinigais.

## Nurodymai {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Nustatymai → Apdorojimas: nurodymai" />

*Tai, ko prašoma modelių.* Kiekvienas nurodymas atėjo su programa, ir kiekvienas yra jūsų, kad jį pakeistumėte — ir grąžintumėte. Kiekvienas pateiktas su pavadinimu, o po juo — ką jis rašo ir kokia forma. Forma — **Atsakymas**, **Punktai**, **Žymos**, **JSON**, **Proza**, **Signalai** ar **Kriterijai** — nusprendžia, kaip atsakymas laikomas ir rodomas. Nurodymai aprašyti puslapyje [Personal Prompt Studio](prompt-studio.md). **Pridėti** sukuria jūsų nurodymą.

## Taisyklės {#rules}

<Shot name="12c_settings_processing_rules" alt="Nustatymai → Apdorojimas: taisyklės" />

*Tai, kas veikia savaime, tokia tvarka. Kiekviena suveikia daugiausia kartą per pokalbį.* Taisyklė yra eilutė su žymimuoju langeliu, kuris ją įjungia ar išjungia, jos pavadinimu, o po juo — ką ji daro. **▲** ir **▼** keičia tvarką. Programa pateikiama su aštuoniomis:

| Taisyklė | Ką daro | Kada |
| --- | --- | --- |
| **Užrašyti kiekvieną pokalbį** | Jį iššifruoja. | visada |
| **Apibendrinti jį** | Prašo modelio: **Santrauka**. | visada |
| **Sutraukti jį į vieną eilutę** | Prašo modelio: **Santrauka viena eilute**. | visada |
| **Priskirti jį kategorijai** | Prašo modelio: **Kategorija**. | visada |
| **Pažymėti jį** | Prašo modelio: **Žymos**. | visada |
| **Iškelti, kas verta žvilgsnio** | Prašo modelio: **Įspėjamieji signalai**. | visada |
| **Įvertinti jį, jei buvo pardavimas** | Prašo modelio: **Pardavimo kokybė**. | tik jei kategorija **Pardavimai** |
| **Įvertinti jį, jei buvo pagalba** | Prašo modelio: **Pagalbos kokybė**. | tik jei kategorija **Pagalba** |

Tvarka svarbi: paskutinėms dviem taisyklėms reikia kategorijos, kurią nustatė prieš jas esanti taisyklė. **Pridėti** sukuria jūsų taisyklę.

## Numatytosios reikšmės {#defaults}

**Atkurti numatytuosius** grąžina nurodymus ir taisykles tokius, kokie atėjo su programa, dabartine sąsajos kalba. Jūsų kalbos modeliai nepaliečiami.

Su programa atėję nurodymai ir taisyklės lieka ta kalba, kuria buvo, kai keičiate sąsajos kalbą; **Atkurti numatytuosius** perkelia juos į naująją. Tada kiekvienas nurodymas dešinėje pažymimas kaip *pakeista*.
