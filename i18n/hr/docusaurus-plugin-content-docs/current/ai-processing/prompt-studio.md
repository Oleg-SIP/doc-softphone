---
title: Personal Prompt Studio
sidebar_position: 3
description: Upute koje obrađuju vaše razgovore, pravila koja ih pokreću i kako ih prilagoditi sebi.
---

**Personal Prompt Studio** je dio AI Softphonea koji obrađuje vaše razgovore na vaš način. Obradu rade upute: program dolazi s jedanaest, spremnih za korištenje čim su povezani prijepis i jezični model, a vi ih možete mijenjati običnim jezikom, udvostručiti i dodati vlastite. Navedene su pod **Upute** u [Postavke → Obrada](processing.md#prompts).

Vaš LLM, vaš ključ, vaša kontrola: povežite model koji vam je draži s vlastitim ključem, preko podržane usluge ili kompatibilnog API-ja — ili model postavljen unutar vaše organizacije. Kad i [prijepis](transcription.md#your-own-models) radi na vlastitom hardveru, i zvuk i prijepisi ostaju u vašem okruženju.

<Shot name="12b_settings_processing_prompts" alt="Popis uputa u Postavke → Obrada" />

## Upute koje dolaze s programom {#the-prompts-that-come-with-the-program}

Drugi stupac je ono što popis prikazuje ispod naziva upute: što piše i u kojem obliku.

| Uputa | Oblik | Što piše |
| --- | --- | --- |
| **Sažetak** | Proza | Glavne točke, odluke i sljedeće korake u jednom kratkom odlomku. |
| **Sažetak u jednom retku** | Proza | Kratak naslov po kojem ćete razgovor prepoznati na popisu. |
| **Zadaci** | Stavke | Tko je pristao što učiniti i kada, s riječima koje je izgovorio. |
| **Teme** | Stavke | Teme koje su obrađene, u nekoliko riječi. |
| **Imena i brojevi** | JSON | Ljudi, tvrtke, datumi, iznosi i reference. |
| **Kategorija** | Oznake | Svrstava razgovor u jednu od vaših [kategorija](dictionaries.md). |
| **Oznake** | Oznake | Stavlja na njega vaše [oznake](dictionaries.md) kako bi se kasnije mogao pronaći. |
| **Upozoravajući signali** | Signali | Problemi, s dokazom i vremenom u razgovoru. |
| **Pitanje o ovom pozivu** | Odgovor | Odgovara na pitanje koje postavite o jednom razgovoru, na temelju njegova prijepisa. |
| **Kvaliteta prodaje** | Mjerila | Pregledava razgovor prema prodajnim mjerilima koja možete uređivati. |
| **Kvaliteta podrške** | Mjerila | Prosuđuje koliko je dobro problem shvaćen i riješen. |

Oblici su stalni oblici odgovora, i upravo to programu omogućuje da ga sačuva i kasnije u njemu pretražuje: **Oznake** su kodovi s jednog od vaših popisa, **Signali** su kodovi s ozbiljnošću, **Mjerila** su ocjena s razlogom i ocjenom za svako mjerilo, **Odgovor** je odgovor s riječima na koje se oslanja. Upute koje modelu govore oblik čuvaju se u [Rječnicima](dictionaries.md#answer-shapes-and-language).

Pozivi upućeni u AI Softphoneu, sastanci [uhvaćeni](/capture/) s računala i uvezene snimke prolaze kroz iste upute čim imaju prijepis.

Zadaci bilježe što je dogovoreno — ne šalju poruke, ne rezerviraju posjete i ne otvaraju zahtjeve umjesto vas.

## Prilagodba {#making-it-yours}

- Promijenite što uputa traži, običnim jezikom: što traži, oblik odgovora i jezik na kojem odgovara.
- Udvostručite uputu da isprobate inačicu.
- Odaberite model za svaku uputu — na vlastitom računalu ili u oblaku.
- Postavite redoslijed kojim se upute izvode, uključujte ih i isključujte te ih učinite uvjetnima — to se radi [pravilima](processing.md#rules): primjerice, pregled prodaje izvodi se samo na pozivima svrstanima kao **Prodaja**.
- Vodite vlastite kategorije, oznake i upozoravajuće signale u [Rječnicima](dictionaries.md).
- Ograničite trošak [mjesečnim granicama](processing.md#limits).

Izvorne upute i pravila mogu se vratiti s **Vrati zadano** pod **Zadane vrijednosti** u [Postavke → Obrada](processing.md#defaults).
