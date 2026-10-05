---
title: Dijagnostika
sidebar_position: 1
description: Prozor koji prikazuje svaku riječ koju si telefon i centrala govore, datoteka zapisnika i gdje program čuva svoje datoteke.
---

Prozor **Dijagnostika** prikazuje što si telefon i centrala govore, upravo dok to govore. To je prvo mjesto na koje treba pogledati kad se račun ne želi registrirati ili se poziv ne uspostavlja, i prozor koji će vas IT odjel zamoliti da pošaljete.

Otvara se iz **Postavke → Dijagnostika**, gumbom **Otvori dijagnostiku**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Prozor Dijagnostika" />

Prikazuje svaku SIP poruku koju telefon šalje ili prima, dok se to događa, zajedno sa zvučnom statistikom poziva u tijeku. Prikuplja podatke samo dok je otvoren i nakon zatvaranja ne zadržava ništa.

## SIP {#sip}

Kartica **SIP** je zapisnik signalizacije.

- Svaka poruka je redak s vremenom (do milisekunde), onim što je i kamo je otišla: strelica udesno je poslana s telefona, strelica ulijevo primljena s poslužitelja. Ispod: `to` ili `from` adresa poslužitelja i prijenos (primjerice *preko UDP-a*).
- Poruka se može proširiti da prikaže cijela zaglavlja (treća poruka na slici).
- **Traži** pronalazi tekst u zapisniku.
- **Isprazni** ga prazni.

Primjer na snimci zaslona je ispravna registracija: telefon šalje `REGISTER`, poslužitelj odgovara `200 OK (REGISTER)`.

## Pozivi {#calls}

Druga kartica, **Pozivi**, prikazuje pokazatelje kvalitete svakog poziva u tijeku.

## Kartica Dijagnostika u postavkama {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Postavke → Dijagnostika" />

### Podrobnost zapisnika {#log-detail}

Padajući izbornik odabire koliko program zapisuje u svoju datoteku zapisnika; na slici je to **Podrobno**. Djeluje odmah, uključujući poziv koji već traje — a upravo o njemu želite zapis. Najpodrobnija postavka zapisuje svaku SIP poruku. To je mnogo, ali lozinke se uklanjaju prije nego što se išta zapiše, pa je datoteku sigurno poslati sa zahtjevom za podršku.

**Pošalji kopiju u sustavski zapisnik** zapisuje zapisnik i u vlastiti zapisnik sustava, za računalo čiji se zapisnici prikupljaju centralno. Datoteka u nastavku zapisuje se u svakom slučaju i upravo nju treba priložiti zahtjevu za podršku.

### Datoteke {#files}

Kartica navodi gdje program čuva svoje datoteke i koliko je svaka velika. Na macOS-u:

| Datoteka | Gdje | Sadrži |
| --- | --- | --- |
| Postavke | `~/Library/Preferences/ai-softphone/settings.json` | Postavke. Nikada lozinke ni tokene. |
| Baza podataka | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakte, povijest, prijepise i obrade. |
| Snimke | `~/Library/Application Support/ai-softphone/recordings` | Zvuk snimki. |
| Zapisnik | `~/Library/Logs/ai-softphone/ai-softphone.log` | Zapisnik. |

Ispod popisa **Otvori** prikazuje zapisnik, a **Isprazni** ga prazni. Ispraznite zapisnik neposredno prije nego što ponovite problem; pražnjenje se ne može poništiti.

## Što poslati podršci {#what-to-send-to-support}

1. Postavite **Podrobnost zapisnika** na najpodrobniju razinu.
2. Pritisnite **Isprazni**, a zatim ponovite problem.
3. Pošaljite datoteku zapisnika ili otvorite **Postavke → O programu**, pišite nam odande i označite **Priloži zapisnik** — pogledajte [O programu](../application/about.md#feedback).

Za problem s registracijom ili pozivom pošaljite i retke neuspjelog pokušaja s kartice **SIP**.

Dio programa koji stoji iza svega ovoga — SIP trag, statistika medija i brojači — može se isključiti u [Modulima](../application/modules.md) (**Dijagnostika**).
