---
title: Prozor snimaka
sidebar_position: 2
description: "\"Biblioteka svakog razgovora — poziva, uvezene datoteke ili sastanka uhvaćenog iz Zooma, Teamsa ili Meeta: filteri, plejer, prepis koji možete da pustite od bilo kog reda i obrade.\""
---

**Snimci** su mesto gde živi svaki razgovor, kako god da je stigao: poziv upućen ili primljen u telefonu, zvučna datoteka koju ste uvezli ili sastanak uhvaćen iz Zooma, Teamsa, Meeta ili bilo koje druge aplikacije. Svi stoje na jednom spisku i svaki se otvara na isti način: plejer, prepis i sve što je jezički model napisao o njemu. Pritisnite **Snimci** dole levo u [glavnom prozoru](main-window.md) da ga otvorite.

<Shot name="01_recordings" alt="Kartica Snimci: uhvaćeni Zoom sastanak, uvezena datoteka i pozivi na jednom spisku" />

## Tri vrste snimaka {#three-kinds-of-recording}

Ikona levo u redu kaže kako je razgovor stigao.

| Ikona | Razgovor | Njegovo ime na spisku | Kako dospeva ovamo |
| --- | --- | --- | --- |
| Slušalica sa strelicom | Poziv upućen ili primljen u ovom telefonu. Strelica pokazuje unutra za dolazni poziv, a napolje za odlazni. | Ime kontakta ili broj | Snima se kako je podešeno u [Snimanju poziva](../recordings.md) |
| Strelica u traku | Datoteka uvezena odnekud drugde: sa mobilnog telefona, diktafona ili iz drugog sistema | Ime datoteke | **⋮ → Uvezi iz datoteka**; pogledajte [niže](#a-recording-you-already-have) |
| Prozor | Sastanak održan u drugoj aplikaciji | Ime koje ste mu dali ili **Druga aplikacija** | [Hvatanje](../capture/capture.md) |

Na slici su gornja tri reda po jedan od svake vrste: Zoom sastanak, uvezena datoteka poziva korisničke podrške jedne banke i poziv primljen na liniji **305 Podrška**. Bez obzira na izvor, prepisuju se, obrađuju i pretražuju na isti način.

## Pronalaženje razgovora {#finding-a-conversation}

Traka na vrhu ima pet filtera, polje za pretragu i meni:

| Kontrola | Sužava spisak prema |
| --- | --- |
| **Vrsta** | načinu na koji je razgovor stigao: dolazni ili odlazni pozivi, **Uvezeni**, **Uhvaćeni** |
| **Razdoblje** | datumu: **Danas**, **Juče**, **Poslednjih 7 dana** ili **Izaberite datume…** |
| **Kategorija** | kategoriji u koju je svrstan — pogledajte [Rečnici](../ai-processing/dictionaries.md) |
| **Znak** | oznakama i upozorenjima koje nosi |
| **Prepoznavač** | [prepoznavaču](../ai-processing/transcription.md) koji je napravio njegov prepis |
| **Pretraga** | onome što je u njemu rečeno — pretraga prolazi kroz prepise svega što ste snimili |

<Shot name="39_more_menu" alt="Meni ⋮ spiska: Uvezi iz datoteka, Izvezi u CSV, Otvori u pregledaču" />

Dugme **⋮** desno na traci otvara dodatne radnje za spisak:

| Stavka | Šta radi |
| --- | --- |
| **Uvezi iz datoteka** | Donosi snimke koje već imate. Pogledajte [Snimak koji već imate](#a-recording-you-already-have). |
| **Izvezi u CSV** | Čuva spisak kao tabelu: kada, druga strana i broj, smer, trajanje, kategoriju, oznake, upozorenja i sažetak u jednom redu svakog razgovora. |
| **Otvori u pregledaču** | Otvara spisak u pregledaču, kao stranicu koju [lokalni REST API](../integration/rest-api.md) služi na adresi `/ui`. |

## Spisak {#the-list}

Svaki red prikazuje:

- ikonu vrste razgovora;
- ime — druga strana, broj, datoteka ili sastanak — a ispod njega datum i sažetak u jednom redu;
- desno kategoriju sa njenom ocenom (broj, na primer *Podrška · 4*), zatim upozorenja i oznake, a na kraju trajanje.

Upozorenja su nacrtana crveno (na slici *Osetljivi podaci*, *Dato obećanje*, *Ljutit kupac*); oznake su obične (*Obećan povratni poziv*). Razgovor bez sažetka i kategorije još nije obrađen — red **Ana Marković** na slici.

<Shot name="40_row_actions" alt="Red nad kojim je pokazivač: dugmad sa pribadačom, olovkom i kantom" />

Pokažite na red da se desno u njemu pojave tri dugmeta:

| Dugme | Šta radi |
| --- | --- |
| Pribadača | **Sačuvaj ovaj**: sačuvan snimak ne brišu granice [Čuvanja](../recordings.md#retention). Pritisnite ponovo da prestanete da ga čuvate. |
| Olovka | **Preimenuj**: daje razgovoru ime po vašem izboru. Poziv pored sebe zadržava ime druge strane; sastanak ili datoteka inače nose ime aplikacije ili datoteke iz koje potiču. |
| Kanta | **Obriši ovaj snimak**, nakon pitanja. Odlazi i zvuk, i to se ne može opozvati. |

## Plejer {#the-player}

Izaberite red da se ispod spiska otvori plejer.

- Dva talasna oblika su dva kanala snimka: gornji ste vi, donji je druga strana. Uvezena datoteka obično ima jednu pomešanu traku, pa oba oblika prikazuju isti zvuk.
- **▶** pušta i pauzira; vremena levo su položaj i ukupno trajanje. Traka ispod talasnih oblika pomera dug snimak.
- **1×** menja brzinu; **Oboje** bira koji glas čujete: oba, samo vaš (**Ja**) ili samo drugu stranu (**Oni**).
- Dugme sa diskom čuva kopiju snimka, **×** zatvara razgovor.

Liniju između spiska i plejera možete da povučete nagore da prepis dobije više mesta, kao na slikama ispod.

## Prepis {#the-transcript}

Ispod plejera je prepis: jedan red po replici, sa vremenom kada je izgovorena i imenom govornika.

<Shot name="26_recording_call" alt="Poziv na liniji 305 Podrška: plejer i prepis, sa istaknutim redom na 0:12" />

| Vrsta snimka | Govornici su prikazani kao |
| --- | --- |
| Poziv | **Vi** i ime druge strane ili broj |
| Uhvaćeni sastanak | **Vi** i ime snimka, za sve ostale |
| Uvezena datoteka | **Svi · speaker 1**, **Svi · speaker 2**… — prepoznavač razlikuje glasove |

**Kliknite red da odete na taj trenutak**: plejer se pomera tamo, red je istaknut, a u njemu je označena reč koja se izgovara — na slici red na **0:12**, sa rečju *Da*. Pritisnite **▶** da slušate odatle. Dok se pušta, isticanje prati govor, pa možete istovremeno da čitate i slušate i da se vratite na bilo koju rečenicu.

Vreme levo od svakog reda ujedno je ono na šta obrada upućuje: upozorenje, odgovor ili citat nosi vreme reči na kojima počiva.

## Prepis ili obrada: padajući meni {#transcript-or-write-up-the-drop-down}

Padajući meni iznad prepisa bira šta će se prikazati na tom mestu: prepis ili jedna od obrada koje je napravio jezički model.

<Shot name="27_writeup_menu" alt="Otvoren padajući meni: OpenAI prepis i obrade poziva" />

- Redovi sa **mikrofonom** su prepisi, po jedan za svaki [prepoznavač](../ai-processing/transcription.md) koji je snimak prepisao. Zvezdica označava glavni. Pokažite na jedan da vidite prepoznavač, njegov model i jezik.
- Redovi sa **varnicama** su obrade, koje prave [uputstva](/ai-processing/prompt-studio) iz [Obrade](../ai-processing/processing.md).

Snimak može da ima prepise od nekoliko prepoznavača, radi poređenja: Zoom sastanak ispod prepisali su i X.ai i Deepgram.

<Shot name="36_zoom_menu" alt="Uhvaćeni sastanak sa dva prepisa, Deepgram i X.ai, i njegovim obradama" />

Obrade su navedene pod kratkim imenima:

| U padajućem meniju | Pravi ih uputstvo | Šta prikazuje |
| --- | --- | --- |
| **Sažetak** | Sažetak | Glavne tačke, odluke i sledeće korake u kratkom pasusu. |
| **Ukratko** | Sažetak u jednom redu | Jednu rečenicu; isti red je prikazan ispod imena na spisku. |
| **Radnje** | Zadaci | Ko je pristao da uradi šta i do kada. |
| **Teme** | Teme | Predmete koji su se pojavili. |
| **Pomenuto** | Imena i brojevi | Ljude, firme, datume, iznose i oznake. |
| samo pitanje | Pitanje o ovom pozivu | Odgovor na pitanje koje ste postavili, sa rečima na kojima počiva. |
| **Kvalitet** | Kvalitet prodaje, Kvalitet podrške | Ukupnu ocenu i sud o svakom kriterijumu. |
| **Upozorenja** | Upozorenja | Ono što zahteva pažnju, sa dokazom i vremenom. |
| **Oznake**, **Kategorija** | Oznake, Kategorija | Etikete pod kojima je razgovor svrstan. |

## Obrade, jedna po jedna {#the-write-ups-one-by-one}

Sve slike ispod prikazuju isti poziv, na liniji **305 Podrška**, u kome klijentkinja pita kada joj se obnavljaju polise.

**Sažetak** — razgovor u nekoliko rečenica.

<Shot name="28_summary" alt="Sažetak poziva" />

**Ukratko** — jedan red, dovoljno kratak da po njemu prepoznate razgovor na spisku.

<Shot name="29_nutshell" alt="Ukratko: sažetak poziva u jednom redu" />

**Radnje** — svaki zadatak sa onim ko treba da ga uradi i rokom, desno.

<Shot name="30_actions" alt="Radnje: dva zadatka za Vas, jedan sa rokom sutra ujutru" />

**Pitanje** — pitajte razgovor bilo šta: pitanje postaje ime stavke, a ispod odgovora su reči na kojima počiva, sa vremenom u snimku.

<Shot name="31_question" alt="Odgovor na pitanje o pozivu, sa dva citata na 0:16 i 0:30" />

**Kvalitet** — ocena od 1 do 5 sa razlogom, a svaki kriterijum je označen sa **ispunjeno**, **slabo** ili **neispunjeno** i dobija belešku.

<Shot name="32_quality" alt="Kvalitet: ocena 4, dva kriterijuma ispunjena i dva slaba" />

**Upozorenja** — svako upozorenje sa rečima na osnovu kojih je podignuto, njegovom ozbiljnošću i vremenom.

<Shot name="33_red_flags" alt="Upozorenja: Dato obećanje, niska, na 0:30" />

**Teme** — predmeti sastanka, ovde Zoom sastanka.

<Shot name="38_topics" alt="Teme Zoom sastanka" />

## Dugmad pored padajućeg menija {#the-buttons-beside-the-drop-down}

| Dugme | Šta radi |
| --- | --- |
| Varnice | **Prepiši ili pitaj model…**: otvara meni, pogledajte niže. |
| Dva lista | Kopira ono što je prikazano. |
| Disk | Čuva to u datoteku. Prepis možete da sačuvate kao običan tekst ili kao titlove. |
| Kanta | Briše ono što je prikazano. |

<Shot name="34_run_menu" alt="Meni sa varnicama: Prepisivanje sa četiri prepoznavača, Obrada sa uputstvima" />

Meni sa varnicama obavlja posao na zahtev. Pod **Prepisivanje** izaberite prepoznavač da njime ponovo prepišete snimak; pod **Obrada** izaberite uputstvo da ga odmah pokrenete — **Pitanje o ovom pozivu…** prvo traži pitanje. Rezultat se pojavljuje u padajućem meniju. Tako se razgovor obrađuje kada je **Obrađuj razgovore samostalno** isključeno u [Obradi](../ai-processing/processing.md), i tako razgovoru koji već ima neke obrade dodajete još jednu.

## Tri primera {#three-examples}

### Poziv upućen iz telefona {#a-call-made-in-the-phone}

Poziv odozgo: govornici su **Vi** i **Jelena Pavlović**, ime kontakta, na dva odvojena kanala.

### Datoteka koju ste uvezli {#a-file-you-imported}

<Shot name="35_recording_import" alt="Uvezena datoteka poziva korisničke podrške jedne banke: jedna pomešana traka i govornici 1 i 2" />

`riverside_bank_support_call` je mp3 uvezen pomoću **⋮ → Uvezi iz datoteka**. Njeno ime je ime datoteke, ikona je strelica u traku, a dva govornika razlikovao je prepoznavač. Obrada je u njoj našla broj kartice izgovoren naglas i podigla **Osetljivi podaci**.

### Sastanak uhvaćen iz druge aplikacije {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Zoom sastanak uhvaćen sa računara: X.ai prepis sa govornicima Vi i imenom sastanka" />

**Planiranje lansiranja u IV kvartalu (Zoom)** uhvaćeno je dok je sastanak tekao u Zoomu i dobilo je ime olovkom. Svi sa druge strane sastanka prikazani su pod imenom snimka; vi ste **Vi**. Pogledajte [Hvatanje](../capture/capture.md).

## Snimak koji već imate {#a-recording-you-already-have}

Snimak napravljen negde drugde — na mobilnom telefonu, diktafonu ili u drugom sistemu — može da se doda pomoću **⋮ → Uvezi iz datoteka**. Izaberite jednu ili više mp3 ili wav datoteka; telefon kaže koliko ih je uvezeno i imenuje one koje nije mogao da pročita kao snimak. Svaka se svrstava tačno kao birani poziv: prepisuje se, obrađuje po istim [pravilima](../ai-processing/processing.md#rules) i pronalazi istom pretragom.

## Brisanje snimka {#deleting-a-recording}

Kada se snimak obriše, sa njim odlazi sve što je iz njega nastalo: prepisi i obrade. Koliko se dugo snimci sami čuvaju podešava se u [Snimanju poziva](../recordings.md#retention).
