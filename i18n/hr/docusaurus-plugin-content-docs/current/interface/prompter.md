---
title: Prozor šaptača
sidebar_position: 3
description: "Prozor šaptača u živo: riječi poziva u trenutku kad se izgovaraju i prijedlozi što reći dalje, njegovi gumbi i stupci, proba na snimci i koliko to košta."
---

**Šaptač** sluša razgovor dok se vodi. U vlastitom prozoru zapisuje što govori svaka strana, u trenutku kad se to izgovara, i — kad odabrani pomoćnik pita model — prijedlog što reći dalje. Vrijedi ga imati otvorenog tijekom prodajnog poziva, razgovora za posao ili teškog razgovora, a s drugim pomoćnikom isti prozor prikazuje tekući prijevod druge strane ili jednostavno titlove.

<Shot name="46_prompter_running" alt="Šaptač na probi prodajnog poziva: lijevo prijepis, desno prijedlozi, najnoviji ponovljen velikim slovima iznad njih" />

Na slici pomoćnik **Prigovori u pozivu** sluša prodajni poziv. Lijevi stupac je ono što je rečeno, svaki redak sa svojim vremenom i stranom; desni je ono što je model predložio na svaki odgovor kupca; najnoviji prijedlog ponovljen je velikim slovima iznad obaju.

**Šaptač** se pojavljuje na popisu pri dnu telefona, između **Povijest** i **Postavke**, čim su ispunjene tri stvari: šaptač je dopušten, postoji prepoznavač koji zna slušati dok traje razgovor i — za pomoćnike koji nešto predlažu — jezični model. Sve se to postavlja u [Postavke → Šaptač](/ai-processing/prompter), gdje su i veličina teksta i sami pomoćnici.

## Prozor {#the-window}
<Shot name="44_prompter_window" alt="Prozor šaptača s odabranim pomoćnikom Prigovori u pozivu, prije pokretanja" />

Na vrhu je padajući popis **Pomoćnik**, a desno od njega gumbi:

| Gumb | Što radi |
| --- | --- |
| **Pokreni** / **Zaustavi** (trokut / kvadrat) | *Počni slušati ovaj poziv* — ili prestani: *Izrečeno ostaje na zaslonu*. Pokretanje pritisnuto prije javljanja na poziv čeka ga, a gumb ga tada otkazuje. |
| **Predlog** (iskre) | *Završi odgovor ovdje i predloži što reći*, bez čekanja pauze. Kod pomoćnika koji ne pita nijedan model gumb je **Završi odgovor**: samo zatvara odgovor, kako bi sljedeći počeo ispočetka. Siv je dok šaptač ne radi. |
| **Isprazni** (kanta) | Nakon pitanja zaboravlja ono što je na zaslonu. *Nestaju oba stupca, a s njima i razgovor iz kojeg bi bio izgrađen sljedeći prijedlog.* Zaustavljanje i ponovno pokretanje ništa ne prazni: zaustavljen i ponovno pokrenut razgovor obično je isti razgovor. |
| **Izvezi…** (disketa) | Zapisuje oba stupca s vremenima u datoteku: kao tekst (`.txt`) ili tablicu (`.csv`), pod imenom koje date datoteci. |
| **Proba…** (knjižnica) | [Isprobava pomoćnika na snimci](#rehearsing-on-a-recording) umjesto na pozivu. |

Padajući popis prikazuje [pomoćnike](/ai-processing/prompter#assistants) redoslijedom postavljenim u **Postavke → Šaptač**. Dok šaptač radi, ne može se mijenjati, ali ostaje vidljiv, pa vidite koji pomoćnik radi. Dok sluša, na kartici poziva piše **Slušamo**.

Ispod gumba je traka s najnovijim retkom, a ispod nje dva stupca:

- **Prijepis** — svaki redak sa svojim vremenom i stranom;
- **Predlozi** — svaki prijedlog s vremenom odgovora na koji se odnosi. Kod pomoćnika koji ne pita nijedan model tog stupca nema, a prijepis zauzima cijelu širinu.

U uskom prozoru oba stupca stoje jedan ispod drugog. Stupac prati ono što stiže dok se u njemu ne pomaknete natrag, a ponovno prati kad se vratite na dno. Kliknite bilo koji redak da ga zadržite u traci; kliknite najnoviji ili pribadaču u traci da ponovno pratite. Desni gumb miša kopira redak, prijedlog, cijeli prijepis ili sve prijedloge. Povucite razdjelnik ispod trake da je povećate; veličine teksta postavljaju se u [Postavke → Šaptač](/ai-processing/prompter#settings--prompter).

## Proba na snimci {#rehearsing-on-a-recording}
Pomoćnika se može isprobati a da nitko nije na telefonu. **Proba…** prikazuje razgovore iz [knjižnice](/interface/recordings), najnovije prve, i **Datoteka na ovom računalu…** za datoteku `.mp3` ili `.wav`.

<Shot name="45_prompter_rehearse" alt="Proba…: razgovori iz knjižnice i datoteka na ovom računalu" />

Odabrana snimka pojavljuje se u reproduktoru ispod gumba: reprodukcija i pauza, oba kanala nacrtana kao valni oblik u koji se može kliknuti, i vrijeme. Pritisnite **Pokreni**: snimka se reproducira u šaptača istim putem kao poziv, vlastitim tempom — brža reprodukcija namjerno se ne nudi, jer bi šaptač hranjen jedan i pol puta brže radio pauze, odgovarao i naplaćivao razgovor koji nitko nije vodio. Križić desno je **Završi probu**, natrag na slušanje poziva.

Snimka s jednim kanalom, primjerice uvezena datoteka, čuje se kao jedna prostorija: *šaptač sve to sluša kao sugovornika*.

## Koliko košta i kamo idu riječi {#what-it-costs-and-where-the-words-go}
- Prepoznavač se naplaćuje po minuti zvuka u živo, a **Prepoznavaj i moju stranu** to udvostručuje. Model se naplaćuje po svakom prijedlogu. Oboje se računa u [mjesečna ograničenja](/ai-processing/prompter#spending) šaptača, a ne u ograničenja Obrade.
- Glas druge strane napušta računalo dok govori i odlazi prepoznavaču koji ste odabrali. Prepoznavač na vašem vlastitom računalu — **Vosk**, **WhisperLive** ili **NVIDIA Riva** — zadržava ga u kući.
- Ono što šaptač prikazuje nije snimka. Da biste to zadržali, pritisnite **Izvezi…**; da biste imali sam razgovor, dodatno [snimite poziv](/recordings).

## Kad se ne pokreće {#when-it-does-not-start}
Prozor u retku ispod gumba kaže što nedostaje.

| Prozor kaže | Što učiniti |
| --- | --- |
| *Šaptanje je isključeno. Postavke → Šaptač.* | Označite **Dopusti korištenje šaptača**. |
| *Nijedan prepoznavač ovdje ne zna slušati dok netko govori. Postavke → Prijepis.* | Dodajte prepoznavač s **Adresa za šaptača** i pritisnite **Provjeri**. |
| *Nema što pokrenuti. Postavke → Šaptač, i dodajte pomoćnika.* | Svi su pomoćnici izbrisani ili isključeni: dodajte jednog ili pritisnite **Vrati zadano**. |
| *Drugu stranu treba prvo obavijestiti. Počnite snimati ovaj razgovor ili promijenite ono što o privoli kaže Postavke → Snimanje.* | Pokrenite snimanje, koje reproducira obavijest, ili promijenite postavku privole. |
| *Prepoznavač nije počeo slušati. Provjerite njegovu adresu u živo i model u Postavke → Prijepis.* | Adresa za šaptača, model ili ključ nisu ispravni. **Provjeri** na kartici prepoznavača kaže što točno. |
| *Mjesečni iznos za prepoznavače je potrošen.* | Povećajte **Prepoznavači, mjesečno** ili pričekajte novi mjesec. |
| *Mjesečni iznos za modele je potrošen. Riječi idu dalje; šaptanje je stalo.* | Povećajte **Modeli, mjesečno**. |
