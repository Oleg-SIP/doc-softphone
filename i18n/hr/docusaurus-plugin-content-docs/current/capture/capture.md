---
title: Hvatanje
sidebar_label: Hvatanje iz drugih aplikacija
sidebar_position: 1
description: "\"Hvatanje snima razgovor održan u drugoj aplikaciji — Zoomu, Teamsu, Meetu ili bilo kojoj drugoj — izravno s računala.\""
---

**Hvatanje** je način na koji AI Softphone snima razgovor koji se odvija u drugom programu, poput sastanka u Zoomu, Teamsu ili Meetu. Snima izravno s računala, držeći drugu stranu i vas na odvojenim kanalima, a na kraju čekaju isti prijepis i obrada kao kod poziva.

Program traži razgovor, a ne naziv aplikacije, pa radi sa svime što vodi razgovor.

[Pregled](../interface/settings-overview.md) postavki navodi ovo pod **Hvatanje iz drugih aplikacija** i dijeli na tri koraka:

1. **Uključi hvatanje** — [dopustite hvatanje zvuka](#turning-capture-on).
2. **Uhvati razgovor** — [pokrenite i zaustavite](#capturing-a-conversation) snimanje.
3. **Daj mu ime** — [preimenujte](#giving-it-a-name) snimku.

## Uključivanje hvatanja {#turning-capture-on}

Hvatanje je isključeno dok ga ne dopustite. Otvorite **Postavke → Hvatanje**.

<Shot name="10_settings_capture" alt="Postavke → Hvatanje" />

| Postavka | Zadano | Što radi |
| --- | --- | --- |
| **Dopusti hvatanje zvuka** | isključeno | Dopušta programu snimanje zvuka drugih aplikacija. Dok je isključeno, ništa se ne hvata. |
| **Podsjeti me da drugima kažem za snimanje** | uključeno | Prikazuje podsjetnik dok hvatanje traje. Potvrdni okvir je siv dok hvatanje nije dopušteno. |

:::caution
Snima se sve što računalo reproducira, a ne samo razgovor. Ovaj telefon ne može najaviti snimanje u tuđem sastanku, pa je na vama da to kažete.
:::

Dio programa koji to radi je modul **Hvatanje**, *snimanje razgovora koji teče u drugoj aplikaciji*. Može se isključiti u [Modulima](../application/modules.md).

## Pokretanje hvatanja {#starting-a-capture}

Kad je hvatanje dopušteno, dno [glavnog prozora](../interface/main-window.md#capture) prikazuje njegovo stanje — **Hvatanje · spremno** — s gumbom **Snimaj** desno. Pritisnite **Snimaj** da pokrenete ručno.

### Automatsko pokretanje {#automatic-start}

**Automatsko pokretanje** odlučuje što se događa kad program čuje razgovor u drugoj aplikaciji:

| Izbor | Što se događa |
| --- | --- |
| **Nikad** | Hvatanje počinje tek kad pritisnete **Snimaj**. |
| **Pitaj me** | Program pita treba li ga snimiti. Zadano. |
| **Uvijek** | Program počinje snimati sam. |

Pod **Aplikacije s vlastitim odgovorom** aplikacija može dobiti vlastiti odgovor — primjerice *Uvijek snimaj ovu aplikaciju* iz pitanja koje program postavlja.

*Pitanje ne košta ništa: sekunde prije vašeg odgovora već su sačuvane.*

### Prije početka {#before-the-start}

Klizač **Prije početka** određuje koliko se sekundi zvuka čuva od prije početka snimanja, zadano **15 sekundi**. Postoji kako se ništa ne bi izgubilo dok se razgovor primijeti: snimka koja počne kad pritisnete **Snimaj** ili kad odgovorite na pitanje ipak počinje riječima izrečenima prije.

## Hvatanje razgovora {#capturing-a-conversation}

Dok snima, glavni prozor prikazuje crvenu točku, naziv snimke (primjerice **Sastanak u Zoom**), proteklo vrijeme i dva kanala kao valne oblike.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Snimanje sastanka" />

- **Zaustavi snimanje** ga završava.
- Prozor ostaje vidljiv dok snima i podsjeća vas da sudionicima kažete da se sastanak snima.

### Što slika prikazuje {#what-the-picture-shows}

Još dvije postavke odabiru kako se crta razina zvuka:

| Postavka | Zadano | Gdje |
| --- | --- | --- |
| **Slika u glavnom prozoru** | Val | Dva kanala dok hvatanje traje. |
| **Slika u traci pri dnu telefona** | Dvije razine | Dvije tanke trake ispod **Hvatanje · spremno**. |

### Provjera {#testing-it}

Pod **Provjeri** kartica ima dva stupca: **Vi** i **Druga strana**. *Gornji se stupac miče kad govorite, donji kad nešto svira.* Prije važnog sastanka izgovorite riječ i pustite bilo koji zvuk da vidite čuje li program obje strane.

## Davanje imena {#giving-it-a-name}

Olovka pokraj naziva snimke omogućuje da je preimenujete dok traje. Snimka kojoj niste dali ime navedena je kao **Druga aplikacija**.

## Kamo ide snimka {#where-the-recording-goes}

Uhvaćeni razgovor pojavljuje se u [prozoru Snimke](../recordings/recordings-window.md) kao i svaki drugi, s vlastitom ikonom, prozorom umjesto slušalice, i s naslovom koji ste mu dali ili **Druga aplikacija**.

<Shot name="01_recordings" alt="Uhvaćeni sastanci na kartici Snimke, označeni ikonom prozora" />

Prepisuje se, sažima, svrstava u kategoriju i označava prema istim [pravilima](../ai-processing/processing.md#rules) kao poziv. U prijepisu uhvaćenog sastanka govornik je prikazan kao **Druga aplikacija** tamo gdje bi poziv prikazao ime druge strane; **Traži** u knjižnici pronalazi i ono što je u njemu rečeno.
