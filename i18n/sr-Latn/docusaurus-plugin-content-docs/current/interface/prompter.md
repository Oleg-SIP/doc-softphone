---
title: Prozor šaptača
sidebar_position: 3
description: "Prozor šaptača uživo: reči poziva u trenutku kada se izgovaraju i predlozi šta reći dalje, njegovi dugmići i kolone, proba na snimku i koliko to košta."
---

**Šaptač** sluša razgovor dok se vodi. U sopstvenom prozoru zapisuje šta govori svaka strana, u trenutku kada se to izgovara, i — kada izabrani pomoćnik pita model — predlog šta reći dalje. Vredi ga imati otvorenog tokom prodajnog poziva, razgovora za posao ili teškog razgovora, a sa drugim pomoćnikom isti prozor prikazuje tekući prevod druge strane ili jednostavno titlove.

<Shot name="46_prompter_running" alt="Šaptač na probi prodajnog poziva: levo transkript, desno predlozi, najnoviji ponovljen krupnim slovima iznad njih" />

Na slici pomoćnik **Primedbe u pozivu** sluša prodajni poziv. Leva kolona je ono što je rečeno, svaki red sa svojim vremenom i stranom; desna je ono što je model predložio na svaki odgovor kupca; najnoviji predlog ponovljen je krupnim slovima iznad obe.

**Šaptač** se pojavljuje na listi pri dnu telefona, između **Istorija** i **Podešavanja**, čim su ispunjene tri stvari: šaptač je dozvoljen, postoji prepoznavač koji zna da sluša dok traje razgovor i — za pomoćnike koji nešto predlažu — jezički model. Sve se to podešava u [Podešavanja → Šaptač](/ai-processing/prompter), gde su i veličina teksta i sami pomoćnici.

## Prozor {#the-window}
<Shot name="44_prompter_window" alt="Prozor šaptača sa izabranim pomoćnikom Primedbe u pozivu, pre pokretanja" />

Na vrhu je padajuća lista **Pomoćnik**, a desno od nje dugmići:

| Dugme | Šta radi |
| --- | --- |
| **Pokreni** / **Stani** (trougao / kvadrat) | *Počni da slušaš ovaj poziv* — ili prestani: *Izrečeno ostaje na ekranu*. Pokretanje pritisnuto pre javljanja na poziv čeka ga, a dugme ga tada otkazuje. |
| **Predlog** (iskre) | *Završi odgovor ovde i predloži šta reći*, bez čekanja pauze. Kod pomoćnika koji ne pita nijedan model dugme je **Završi odgovor**: samo zatvara odgovor, da bi sledeći počeo iznova. Sivo je dok šaptač ne radi. |
| **Isprazni** (kanta) | Posle pitanja zaboravlja ono što je na ekranu. *Nestaju obe kolone, a s njima i razgovor iz kojeg bi bio izgrađen sledeći predlog.* Zaustavljanje i ponovno pokretanje ništa ne prazni: zaustavljen i ponovo pokrenut razgovor obično je isti razgovor. |
| **Izvezite…** (disketa) | Upisuje obe kolone sa vremenima u datoteku: kao tekst (`.txt`) ili tabelu (`.csv`), pod imenom koje date datoteci. |
| **Proba…** (biblioteka) | [Isprobava pomoćnika na snimku](#rehearsing-on-a-recording) umesto na pozivu. |

Padajuća lista prikazuje [pomoćnike](/ai-processing/prompter#assistants) redosledom podešenim u **Podešavanja → Šaptač**. Dok šaptač radi, ne može se menjati, ali ostaje vidljiva, pa vidite koji pomoćnik radi. Dok sluša, na kartici poziva piše **Slušamo**.

Ispod dugmića je traka sa najnovijim redom, a ispod nje dve kolone:

- **Transkript** — svaki red sa svojim vremenom i stranom;
- **Predlozi** — svaki predlog sa vremenom odgovora na koji se odnosi. Kod pomoćnika koji ne pita nijedan model te kolone nema, a transkript zauzima celu širinu.

U uskom prozoru obe kolone stoje jedna ispod druge. Kolona prati ono što stiže dok se u njoj ne pomerite unazad, a ponovo prati kada se vratite na dno. Kliknite bilo koji red da ga zadržite u traci; kliknite najnoviji ili čiodu u traci da ponovo pratite. Desni taster miša kopira red, predlog, ceo transkript ili sve predloge. Prevucite razdelnik ispod trake da je povećate; veličine teksta podešavaju se u [Podešavanja → Šaptač](/ai-processing/prompter#settings--prompter).

## Proba na snimku {#rehearsing-on-a-recording}
Pomoćnika možete isprobati a da niko nije na telefonu. **Proba…** prikazuje razgovore iz [biblioteke](/interface/recordings), najnovije prve, i **Datoteka na ovom računaru…** za datoteku `.mp3` ili `.wav`.

<Shot name="45_prompter_rehearse" alt="Proba…: razgovori iz biblioteke i datoteka na ovom računaru" />

Izabrani snimak pojavljuje se u plejeru ispod dugmića: reprodukcija i pauza, oba kanala nacrtana kao talasni oblik u koji se može kliknuti, i vreme. Pritisnite **Pokreni**: snimak se reprodukuje u šaptača istim putem kao poziv, sopstvenim tempom — brža reprodukcija namerno se ne nudi, jer bi šaptač hranjen jedan i po put brže pravio pauze, odgovarao i naplaćivao razgovor koji niko nije vodio. Krstić desno je **Završi probu**, nazad na slušanje poziva.

Snimak sa jednim kanalom, na primer uvezena datoteka, čuje se kao jedna prostorija: *šaptač sve to sluša kao sagovornika*.

## Koliko košta i kuda idu reči {#what-it-costs-and-where-the-words-go}
- Prepoznavač se naplaćuje po minutu zvuka uživo, a **Prepoznavaj i moju stranu** to udvostručuje. Model se naplaćuje po svakom predlogu. Oboje se računa u [mesečna ograničenja](/ai-processing/prompter#spending) šaptača, a ne u ograničenja Obrade.
- Glas druge strane napušta računar dok govori i odlazi prepoznavaču koji ste izabrali. Prepoznavač na vašem sopstvenom računaru — **Vosk**, **WhisperLive** ili **NVIDIA Riva** — zadržava ga u kući.
- Ono što šaptač prikazuje nije snimak. Da biste to sačuvali, pritisnite **Izvezite…**; da biste imali sam razgovor, dodatno [snimite poziv](/recordings).

## Kada se ne pokreće {#when-it-does-not-start}
Prozor u redu ispod dugmića kaže šta nedostaje.

| Prozor kaže | Šta uraditi |
| --- | --- |
| *Šaptanje je isključeno. Podešavanja → Šaptač.* | Označite **Dozvoli korišćenje šaptača**. |
| *Nijedan prepoznavač ovde ne zna da sluša dok neko govori. Podešavanja → Prepisivanje.* | Dodajte prepoznavač sa **Adresa za šaptača** i pritisnite **Isprobaj**. |
| *Nema šta da se pokrene. Podešavanja → Šaptač, i dodajte pomoćnika.* | Svi pomoćnici su obrisani ili isključeni: dodajte jednog ili pritisnite **Vrati podrazumevano**. |
| *Drugu stranu treba prvo obavestiti. Počnite da snimate ovaj razgovor ili promenite ono što o pristanku kaže Podešavanja → Snimanje.* | Pokrenite snimanje, koje reprodukuje obaveštenje, ili promenite podešavanje pristanka. |
| *Prepoznavač nije počeo da sluša. Proverite njegovu živu adresu i model u Podešavanja → Prepisivanje.* | Adresa za šaptača, model ili ključ nisu ispravni. **Isprobaj** na kartici prepoznavača kaže šta tačno. |
| *Mesečni iznos za prepoznavače je potrošen.* | Povećajte **Prepoznavači, mesečno** ili sačekajte novi mesec. |
| *Mesečni iznos za modele je potrošen. Reči idu dalje; šaptanje je stalo.* | Povećajte **Modeli, mesečno**. |
