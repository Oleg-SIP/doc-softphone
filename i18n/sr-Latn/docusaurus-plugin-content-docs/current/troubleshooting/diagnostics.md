---
title: Dijagnostika
sidebar_position: 1
description: Prozor koji prikazuje svaku reč koju jedno drugom govore telefon i centrala, datoteka dnevnika i gde program čuva svoje datoteke.
---

Prozor **Dijagnostika** prikazuje šta jedno drugom govore telefon i centrala, upravo dok to govore. To je prvo mesto gde treba pogledati kada nalog neće da se registruje ili se poziv ne uspostavlja, i prozor koji će vas IT odeljenje zamoliti da pošaljete.

Otvara se iz **Podešavanja → Dijagnostika**, dugmetom **Otvori dijagnostiku**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Prozor Dijagnostika" />

Prikazuje svaku SIP poruku koju telefon šalje ili prima, dok se to dešava, zajedno sa zvučnom statistikom poziva u toku. Prikuplja podatke samo dok je otvoren i nakon zatvaranja ne zadržava ništa.

## SIP {#sip}

Kartica **SIP** je dnevnik signalizacije.

- Svaka poruka je red sa vremenom (do milisekunde), onim što je i kuda je otišla: strelica udesno je poslata sa telefona, strelica ulevo primljena sa servera. Ispod: `to` ili `from` adresa servera i prenos (na primer *preko UDP-a*).
- Poruka može da se proširi da prikaže cela zaglavlja (treća poruka na slici).
- **Pretraga** pronalazi tekst u dnevniku.
- **Isprazni** ga prazni.

Primer na snimku ekrana je ispravna registracija: telefon šalje `REGISTER`, server odgovara `200 OK (REGISTER)`.

## Pozivi {#calls}

Druga kartica, **Pozivi**, prikazuje pokazatelje kvaliteta svakog poziva u toku.

## Kartica Dijagnostika u podešavanjima {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Podešavanja → Dijagnostika" />

### Podrobnost dnevnika {#log-detail}

Padajući meni bira koliko program upisuje u svoju datoteku dnevnika; na slici je to **Podrobno**. Važi odmah, uključujući poziv koji već traje — a upravo o njemu želite zapis. Najpodrobnije podešavanje upisuje svaku SIP poruku. To je mnogo, ali lozinke se uklanjaju pre nego što se išta upiše, pa je datoteku bezbedno poslati sa zahtevom za podršku.

**Pošalji umnožak u sistemski dnevnik** upisuje dnevnik i u sopstveni dnevnik sistema, za računar čiji se dnevnici prikupljaju centralno. Datoteka u nastavku upisuje se u svakom slučaju i upravo nju treba priložiti uz zahtev za podršku.

### Datoteke {#files}

Kartica navodi gde program čuva svoje datoteke i koliko je svaka velika. Na macOS-u:

| Datoteka | Gde | Sadrži |
| --- | --- | --- |
| Podešavanja | `~/Library/Preferences/ai-softphone/settings.json` | Podešavanja. Nikada lozinke ni žetone. |
| Baza podataka | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakte, istoriju, prepise i obrade. |
| Snimci | `~/Library/Application Support/ai-softphone/recordings` | Zvuk snimaka. |
| Dnevnik | `~/Library/Logs/ai-softphone/ai-softphone.log` | Dnevnik. |

Ispod spiska **Otvori** prikazuje dnevnik, a **Isprazni** ga prazni. Ispraznite dnevnik neposredno pre nego što ponovite problem; pražnjenje ne može da se poništi.

## Šta poslati podršci {#what-to-send-to-support}

1. Podesite **Podrobnost dnevnika** na najpodrobniji nivo.
2. Pritisnite **Isprazni**, a zatim ponovite problem.
3. Pošaljite datoteku dnevnika ili otvorite **Podešavanja → O programu**, pišite nam odande i označite **Priloži dnevnik** — pogledajte [O programu](../application/about.md#feedback).

Za problem sa registracijom ili pozivom pošaljite i redove neuspelog pokušaja sa kartice **SIP**.

Deo programa koji stoji iza svega ovoga — SIP trag, statistika medija i brojači — može da se isključi u [Modulima](../application/modules.md) (**Dijagnostika**).
