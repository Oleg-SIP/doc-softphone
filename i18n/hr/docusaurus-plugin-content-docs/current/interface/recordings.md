---
title: Prozor snimki
sidebar_position: 2
description: Knjižnica svih razgovora — poziva, uvezene datoteke ili sastanka uhvaćenog iz Zooma, Teamsa ili Meeta — s filtrima, reproduktorom, prijepisom koji možete reproducirati od bilo kojeg retka i obradama.
---

**Snimke** su mjesto gdje živi svaki razgovor, kako god stigao: poziv upućen ili primljen u telefonu, zvučna datoteka koju ste uvezli ili sastanak uhvaćen iz Zooma, Teamsa, Meeta ili bilo koje druge aplikacije. Svi su u jednom popisu i svaki se otvara na isti način: reproduktor, prijepis i sve što je jezični model napisao o njemu. Pritisnite **Snimke** dolje lijevo u [glavnom prozoru](main-window.md) da ga otvorite.

<Shot name="01_recordings" alt="Kartica Snimke: uhvaćeni Zoom sastanak, uvezena datoteka i pozivi u jednom popisu" />

## Tri vrste snimki {#three-kinds-of-recording}

Ikona lijevo u retku kaže kako je razgovor stigao.

| Ikona | Razgovor | Njegovo ime u popisu | Kako dolazi ovamo |
| --- | --- | --- | --- |
| Slušalica sa strelicom | Poziv upućen ili primljen u ovom telefonu. Strelica pokazuje unutra za dolazni poziv, a van za odlazni. | Ime kontakta ili broj | Snima se prema postavkama u [Snimkama](../recordings.md) |
| Strelica u traku | Datoteka uvezena odnekud drugdje: s mobitela, diktafona ili iz drugog sustava | Ime datoteke | **⋮ → Uvoz iz datoteka**; pogledajte [niže](#a-recording-you-already-have) |
| Prozor | Sastanak održan u drugoj aplikaciji | Ime koje ste mu dali ili **Druga aplikacija** | [Hvatanje](../capture/capture.md) |

Na slici su prva tri retka po jedan od svake vrste: Zoom sastanak, uvezena datoteka s razgovorom bankine podrške i poziv primljen na liniji **305 Podrška**. Odakle god dolazili, jednako se prepisuju, obrađuju i pretražuju.

## Pronalaženje razgovora {#finding-a-conversation}

Traka na vrhu ima pet filtara, polje za pretraživanje i izbornik:

| Kontrola | Sužava popis prema |
| --- | --- |
| **Vrsta** | načinu na koji je razgovor stigao: dolazni ili odlazni pozivi, **Uvezeni**, **Uhvaćeni** |
| **Razdoblje** | datumu: **Danas**, **Jučer**, **Zadnjih 7 dana** ili **Odaberi datume…** |
| **Kategorija** | kategoriji u koju je svrstan — pogledajte [Rječnici](../ai-processing/dictionaries.md) |
| **Biljeg** | oznakama i upozoravajućim signalima koje nosi |
| **Prepoznavač** | [prepoznavaču](../ai-processing/transcription.md) koji je napravio njegov prijepis |
| **Traži** | onome što je u njemu rečeno — pretraživanje prolazi kroz prijepise svega što ste snimili |

<Shot name="39_more_menu" alt="Izbornik ⋮ popisa: Uvoz iz datoteka, Izvoz u CSV, Otvori u pregledniku" />

Gumb **⋮** desno na traci otvara dodatne radnje za popis:

| Stavka | Što radi |
| --- | --- |
| **Uvoz iz datoteka** | Unosi snimke koje već imate. Pogledajte [Snimka koju već imate](#a-recording-you-already-have). |
| **Izvoz u CSV** | Sprema popis kao proračunsku tablicu: kada, sugovornik i broj, smjer, trajanje, kategoriju, oznake, upozoravajuće signale i sažetak u jednom retku svakog razgovora. |
| **Otvori u pregledniku** | Otvara popis u vašem pregledniku, kao stranicu koju [lokalni REST API](../integration/rest-api.md) poslužuje na `/ui`. |

## Popis {#the-list}

Svaki redak prikazuje:

- ikonu vrste razgovora;
- ime — druge strane, broj, datoteku ili sastanak — a ispod njega datum i sažetak u jednom retku;
- desno kategoriju s njezinom ocjenom (broj, primjerice *Podrška · 4*), zatim upozoravajuće signale i oznake, a na kraju trajanje.

Upozoravajući signali nacrtani su crveno (na slici *Osjetljivi podaci*, *Dano obećanje*, *Ljutit kupac*); oznake su obične (*Obećan povratni poziv*). Razgovor bez sažetka i kategorije još nije obrađen — redak **Ana Knežević** na slici.

<Shot name="40_row_actions" alt="Redak s pokazivačem iznad njega: gumbi s pribadačom, olovkom i kantom" />

Pokažite na redak i desno će se pojaviti tri gumba:

| Gumb | Što radi |
| --- | --- |
| Pribadača | **Sačuvaj ovu**: sačuvanu snimku nikad ne brišu granice iz [Čuvanja](../recordings.md#retention). Pritisnite je ponovno da je prestanete čuvati. |
| Olovka | **Preimenuj**: daje razgovoru vaše ime. Poziv pokraj njega zadržava ime sugovornika; sastanak ili datoteka inače nose ime aplikacije ili datoteke iz koje potječu. |
| Kanta | **Izbriši ovu snimku**, nakon pitanja. Briše se i zvuk, a to se ne može poništiti. |

## Reproduktor {#the-player}

Odaberite redak da se ispod popisa otvori reproduktor.

- Dva valna oblika su dva kanala snimke: gornji ste vi, donji je druga strana. Uvezena datoteka obično ima jedan pomiješani zapis, pa oba retka prikazuju isti zvuk.
- **▶** reproducira i pauzira; vremena lijevo su položaj i ukupno trajanje. Traka ispod valnih oblika pomiče dugu snimku.
- **1×** mijenja brzinu; **Oboje** odabire koji glas čujete: oba, samo vaš (**Ja**) ili samo drugu stranu (**Oni**).
- Gumb s diskom sprema kopiju snimke, **×** zatvara razgovor.

Crta između popisa i reproduktora može se povući prema gore da prijepis dobije više mjesta, kao na slikama niže.

## Prijepis {#the-transcript}

Ispod reproduktora je prijepis: jedan redak po replici, s vremenom kad je izrečena i imenom govornika.

<Shot name="26_recording_call" alt="Poziv na liniji 305 Podrška: reproduktor i prijepis, s istaknutim retkom na 0:13" />

| Vrsta snimke | Govornici su prikazani kao |
| --- | --- |
| Poziv | **Vi** i ime druge strane ili broj |
| Uhvaćeni sastanak | **Vi** i ime snimke za sve ostale |
| Uvezena datoteka | **Svi · speaker 1**, **Svi · speaker 2**… — prepoznavač razlikuje glasove |

**Kliknite redak da odete na taj trenutak**: reproduktor se pomiče tamo, redak se ističe, a u njemu je označena riječ koja se upravo izgovara — na slici redak na **0:13**, s riječju *Da*. Pritisnite **▶** da slušate od tog mjesta. Dok se reproducira, istaknuto mjesto prati govor, pa možete istodobno čitati i slušati te se vratiti na bilo koju rečenicu.

Vrijeme lijevo od svakog retka ujedno je ono na što obrada upućuje: upozoravajući signal, odgovor ili citat nosi vrijeme riječi na kojima se temelji.

## Prijepis ili obrada: padajući izbornik {#transcript-or-write-up-the-drop-down}

Padajući izbornik iznad prijepisa odabire što će se prikazati na tom mjestu: prijepis ili jedna od obrada koje je napravio jezični model.

<Shot name="27_writeup_menu" alt="Otvoreni padajući izbornik: OpenAI prijepis i obrade poziva" />

- Retci s **mikrofonom** su prijepisi, po jedan za svaki [prepoznavač](../ai-processing/transcription.md) koji je prepisao snimku. Zvjezdica označava glavni. Pokažite na jedan da vidite prepoznavač, njegov model i jezik.
- Retci s **iskricama** su obrade, koje rade [upute](/ai-processing/prompt-studio) iz [Obrade](../ai-processing/processing.md).

Snimka može imati prijepise od više prepoznavača, radi usporedbe: Zoom sastanak niže prepisali su i X.ai i Deepgram.

<Shot name="36_zoom_menu" alt="Uhvaćeni sastanak s dva prijepisa, Deepgram i X.ai, i njegove obrade" />

Obrade su navedene pod kratkim imenima:

| U padajućem izborniku | Napravljeno uputom | Što prikazuje |
| --- | --- | --- |
| **Sažetak** | Sažetak | Glavne točke, odluke i sljedeće korake u kratkom odlomku. |
| **Ukratko** | Sažetak u jednom retku | Jednu rečenicu; ista se rečenica prikazuje pod imenom u popisu. |
| **Radnje** | Zadaci | Tko je pristao što učiniti i do kada. |
| **Teme** | Teme | Predmete koji su se pojavili. |
| **Spomenuti** | Imena i brojevi | Osobe, tvrtke, datume, iznose i reference. |
| samo pitanje | Pitanje o ovom pozivu | Odgovor na pitanje koje ste postavili, s riječima na kojima se temelji. |
| **Kvaliteta** | Kvaliteta prodaje, Kvaliteta podrške | Ukupnu ocjenu i sud o svakom kriteriju. |
| **Upozoravajući signali** | Upozoravajući signali | Što zahtijeva pozornost, s dokazom i vremenom. |
| **Oznake**, **Kategorija** | Oznake, Kategorija | Biljege pod kojima je razgovor svrstan. |

## Obrade, jedna po jedna {#the-write-ups-one-by-one}

Slike niže prikazuju isti poziv, na liniji **305 Podrška**, u kojem klijentica pita kada se obnavljaju njezine police.

**Sažetak** — razgovor u nekoliko rečenica.

<Shot name="28_summary" alt="Sažetak poziva" />

**Ukratko** — jedan redak, dovoljno kratak da prepoznate razgovor u popisu.

<Shot name="29_nutshell" alt="Ukratko: sažetak poziva u jednom retku" />

**Radnje** — svaki zadatak s onim tko ga treba obaviti i rokom, desno.

<Shot name="30_actions" alt="Radnje: dva zadatka za vas, jedan s rokom sutra ujutro" />

**Pitanje** — pitajte razgovor što god želite: pitanje postaje ime stavke, a pod odgovorom su riječi na kojima se temelji, s njihovim vremenom u snimci.

<Shot name="31_question" alt="Odgovor na pitanje o pozivu, s dva citata na 0:17 i 0:31" />

**Kvaliteta** — ocjena od 1 do 5 s razlogom, a svaki kriterij označen je kao **ispunjeno**, **slabo** ili **neispunjeno**, uz napomenu.

<Shot name="32_quality" alt="Kvaliteta: ocjena 4, dva kriterija ispunjena i dva slaba" />

**Upozoravajući signali** — svaki signal s riječima na kojima je nastao, njegovom težinom i vremenom.

<Shot name="33_red_flags" alt="Upozoravajući signali: Dano obećanje, niska, na 0:31" />

**Teme** — predmeti sastanka, ovdje Zoom sastanka.

<Shot name="38_topics" alt="Teme Zoom sastanka" />

## Gumbi pokraj padajućeg izbornika {#the-buttons-beside-the-drop-down}

| Gumb | Što radi |
| --- | --- |
| Iskrice | **Prepiši ili pitaj model…**: otvara izbornik, pogledajte niže. |
| Dva lista | Kopira ono što je prikazano. |
| Disk | Sprema to u datoteku. Prijepis možete spremiti kao običan tekst ili kao titlove. |
| Kanta | Briše ono što je prikazano. |

<Shot name="34_run_menu" alt="Izbornik s iskricama: Prijepis s četiri prepoznavača, Obrada s uputama" />

Izbornik s iskricama obavlja posao na zahtjev. Pod **Prijepis** odaberite prepoznavač da njime ponovno prepišete snimku; pod **Obrada** odaberite uputu da je odmah pokrenete — **Pitanje o ovom pozivu…** najprije traži pitanje. Rezultat se pojavljuje u padajućem izborniku. Tako se razgovor obrađuje kad je **Obrađuj razgovore automatski** isključeno u [Obradi](../ai-processing/processing.md), i tako razgovoru koji već ima obrade dodajete još jednu.

## Tri primjera {#three-examples}

### Poziv upućen u telefonu {#a-call-made-in-the-phone}

Gornji poziv: govornici su **Vi** i **Ivana Vuković**, ime kontakta, na dva odvojena kanala.

### Datoteka koju ste uvezli {#a-file-you-imported}

<Shot name="35_recording_import" alt="Uvezena datoteka s razgovorom bankine podrške: jedan pomiješani zapis i govornici 1 i 2" />

`riverside_bank_support_call` je mp3 unesen pomoću **⋮ → Uvoz iz datoteka**. Njezino ime je ime datoteke, ikona strelica u traku, a njezina dva govornika razlikovao je prepoznavač. Obrade su pronašle naglas izgovoren broj kartice i podigle **Osjetljivi podaci**.

### Sastanak uhvaćen iz druge aplikacije {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Zoom sastanak uhvaćen s računala: X.ai prijepis s govornicima Vi i imenom sastanka" />

**Planiranje lansiranja za Q4 (Zoom)** uhvaćeno je dok je sastanak tekao u Zoomu i imenovano olovkom. Svi s druge strane sastanka prikazani su pod imenom snimke; vi ste **Vi**. Pogledajte [Hvatanje](../capture/capture.md).

## Snimka koju već imate {#a-recording-you-already-have}

Snimka napravljena negdje drugdje — na mobitelu, diktafonu ili u drugom sustavu — može se dodati pomoću **⋮ → Uvoz iz datoteka**. Odaberite jednu ili više mp3 ili wav datoteka; telefon kaže koliko ih je uvezeno i navodi one koje nije mogao pročitati kao snimku. Svaka se svrstava točno kao birani poziv: prepisuje se, obrađuje po istim [pravilima](../ai-processing/processing.md#rules) i pronalazi istim pretraživanjem.

## Brisanje snimke {#deleting-a-recording}

Kad se snimka izbriše, s njom odlazi sve što je iz nje nastalo: prijepisi i obrade. Koliko se dugo snimke same čuvaju postavlja se u [Snimkama](../recordings.md#retention).
