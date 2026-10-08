---
title: Hvatanje
sidebar_label: Hvatanje iz drugih aplikacija
sidebar_position: 1
description: "\"Hvatanje snima razgovor održan u drugoj aplikaciji — Zoomu, Teamsu, Meetu ili bilo kojoj drugoj — direktno sa računara.\""
---

**Hvatanje** je način na koji AI Softphone snima razgovor koji se odvija u drugom programu, na primer sastanak u Zoomu, Teamsu ili Meetu. Snima direktno sa računara, držeći drugu stranu i vas na odvojenim kanalima, a na kraju čekaju isti prepis i obrada kao kod poziva.

Program traži razgovor, a ne naziv aplikacije, pa radi sa svime što vodi razgovor.

[Pregled](../interface/settings-overview.md) podešavanja navodi ovo pod **Hvatanje iz drugih aplikacija** i deli na tri koraka:

1. **Uključite hvatanje** — [dozvolite hvatanje zvuka](#turning-capture-on).
2. **Uhvatite razgovor** — [pokrenite i zaustavite](#capturing-a-conversation) snimanje.
3. **Dajte mu ime** — [preimenujte](#giving-it-a-name) snimak.

## Uključivanje hvatanja {#turning-capture-on}

Hvatanje je isključeno dok ga ne dozvolite. Otvorite **Podešavanja → Hvatanje**.

<Shot name="10_settings_capture" alt="Podešavanja → Hvatanje" />

| Podešavanje | Podrazumevano | Šta radi |
| --- | --- | --- |
| **Dozvoli hvatanje zvuka** | isključeno | Dozvoljava programu snimanje zvuka drugih aplikacija. Dok je isključeno, ništa se ne hvata. |
| **Podseti me da obavestim druge o snimanju** | uključeno | Prikazuje podsetnik dok hvatanje traje. Polje za potvrdu je sivo dok hvatanje nije dozvoljeno. |

:::caution
Snima se sve što računar reprodukuje, a ne samo razgovor. Ovaj telefon ne može da najavi snimanje u tuđem sastanku, pa je na vama da to kažete.
:::

Deo programa koji to radi je modul **Hvatanje**, *snimanje razgovora koji teče u drugoj aplikaciji*. Može da se isključi u [Modulima](../application/modules.md).

## Pokretanje hvatanja {#starting-a-capture}

Kada je hvatanje dozvoljeno, dno [glavnog prozora](../interface/main-window.md#capture) prikazuje njegovo stanje — **Hvatanje · spremno** — sa dugmetom **Snimi** desno. Pritisnite **Snimi** da pokrenete ručno.

### Automatsko pokretanje {#automatic-start}

**Automatsko pokretanje** odlučuje šta se dešava kada program čuje razgovor u drugoj aplikaciji:

| Izbor | Šta se dešava |
| --- | --- |
| **Nikad** | Hvatanje počinje tek kada pritisnete **Snimi**. |
| **Pitaj me** | Program pita da li da ga snimi. Podrazumevano. |
| **Uvek** | Program počinje da snima sam. |

Pod **Aplikacije sa sopstvenim odgovorom** aplikacija može da dobije sopstveni odgovor — na primer *Uvek snimaj ovu aplikaciju* iz pitanja koje program postavlja.

*Pitanje ne košta ništa: sekunde pre vašeg odgovora već su sačuvane.*

### Pre početka {#before-the-start}

Klizač **Pre početka** određuje koliko se sekundi zvuka čuva od pre početka snimanja, podrazumevano **15 sekundi**. Postoji kako se ništa ne bi izgubilo dok se razgovor primeti: snimak koji počne kada pritisnete **Snimi** ili kada odgovorite na pitanje ipak počinje rečima izgovorenim pre toga.

## Hvatanje razgovora {#capturing-a-conversation}

Dok snima, glavni prozor prikazuje crvenu tačku, naziv snimka (na primer **Sastanak u Zoom**), proteklo vreme i dva kanala kao talasne oblike.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Snimanje sastanka" />

- **Zaustavi snimanje** ga završava.
- Prozor ostaje vidljiv dok snima i podseća vas da učesnicima kažete da se sastanak snima.

### Šta slika prikazuje {#what-the-picture-shows}

Još dva podešavanja biraju kako se crta nivo zvuka:

| Podešavanje | Podrazumevano | Gde |
| --- | --- | --- |
| **Slika u glavnom prozoru** | Talas | Dva kanala dok hvatanje traje. |
| **Slika u traci pri dnu telefona** | Dva nivoa | Dve tanke trake ispod **Hvatanje · spremno**. |

### Isprobavanje {#testing-it}

Pod **Isprobaj** kartica ima dve trake: **Vi** i **Druga strana**. *Gornja traka se pomera kada govorite, donja kada nešto svira.* Pre važnog sastanka izgovorite reč i pustite bilo koji zvuk da vidite da li program čuje obe strane.

## Davanje imena {#giving-it-a-name}

Olovka pored naziva snimka omogućava da ga preimenujete dok traje. Snimak kom niste dali ime naveden je kao **Druga aplikacija**.

## Kuda ide snimak {#where-the-recording-goes}

Uhvaćeni razgovor pojavljuje se u [prozoru Snimci](../interface/recordings.md) kao i svaki drugi, sa sopstvenom ikonom, prozorom umesto slušalice, i sa naslovom koji ste mu dali ili **Druga aplikacija**.

<Shot name="01_recordings" alt="Uhvaćeni sastanci na kartici Snimci, označeni ikonom prozora" />

Prepisuje se, sažima, svrstava u kategoriju i označava prema istim [pravilima](../ai-processing/processing.md#rules) kao poziv. U prepisu uhvaćenog sastanka govornik je prikazan kao **Druga aplikacija** tamo gde bi poziv prikazao ime druge strane; **Pretraga** u biblioteci pronalazi i ono što je u njemu rečeno.
