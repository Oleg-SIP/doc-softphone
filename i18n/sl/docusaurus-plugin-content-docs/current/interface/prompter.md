---
title: Okno šepetalca
sidebar_position: 3
description: "Okno šepetalca v živo: besede klica v trenutku, ko so izrečene, in predlogi, kaj reči naprej, njegovi gumbi in stolpci, vaja na posnetku in koliko to stane."
---

**Šepetalec** posluša pogovor med njegovim potekom. V lastnem oknu zapisuje, kaj reče vsaka stran, v trenutku, ko je izrečeno, in — kadar izbrani pomočnik vpraša model — predlog, kaj reči naprej. Vredno ga je imeti odprtega med prodajnim klicem, razgovorom za službo ali težkim pogovorom, z drugim pomočnikom pa isto okno kaže sprotni prevod druge strani ali preproste podnapise.

<Shot name="46_prompter_running" alt="Šepetalec med vajo na prodajnem klicu: levo prepis, desno predlogi, najnovejši ponovljen z velikimi črkami nad njima" />

Na sliki pomočnik **Ugovori v klicu** posluša prodajni klic. Levi stolpec je tisto, kar je bilo izrečeno, vsaka vrstica s svojim časom in stranjo; desni je tisto, kar je model predlagal ob vsakem odgovoru stranke; najnovejši predlog je z velikimi črkami ponovljen nad obema.

**Šepetalec** se pojavi na seznamu na dnu telefona med **Zgodovina** in **Nastavitve**, takoj ko so izpolnjene tri stvari: šepetalec je dovoljen, obstaja razpoznavalnik, ki zna poslušati med pogovorom, in — za pomočnike, ki kaj predlagajo — jezikovni model. Vse to se nastavi v [Nastavitve → Šepetalec](/ai-processing/prompter), kjer sta tudi velikost besedila in sami pomočniki.

## Okno {#the-window}
<Shot name="44_prompter_window" alt="Okno šepetalca z izbranim pomočnikom Ugovori v klicu, pred zagonom" />

Na vrhu je spustni seznam **Pomočnik**, desno od njega pa gumbi:

| Gumb | Kaj naredi |
| --- | --- |
| **Zaženi** / **Ustavi** (trikotnik / kvadrat) | *Začni poslušati ta klic* — ali prenehaj: *Izrečeno ostane na zaslonu*. Zagon, pritisnjen pred sprejemom klica, nanj počaka, gumb pa ga nato prekliče. |
| **Predlog** (iskrice) | *Končaj odgovor tukaj in predlagaj, kaj reči*, ne da bi čakal premor. Pri pomočniku, ki ne sprašuje nobenega modela, je gumb **Končaj odgovor**: samo zaključi odgovor, da se naslednji začne na čisto. Siv je, dokler šepetalec ne teče. |
| **Izprazni** (koš) | Po vprašanju pozabi, kar je na zaslonu. *Izgineta oba stolpca in z njima pogovor, iz katerega bi bil zgrajen naslednji predlog.* Ustavitev in ponovni zagon ne izpraznita ničesar: ustavljen in znova zagnan pogovor je običajno isti pogovor. |
| **Izvozite…** (disketa) | Zapiše oba stolpca s časi v datoteko: kot besedilo (`.txt`) ali preglednico (`.csv`), z imenom, ki ga date datoteki. |
| **Vaja…** (knjižnica) | [Preizkusi pomočnika na posnetku](#rehearsing-on-a-recording) namesto na klicu. |

Spustni seznam prikazuje [pomočnike](/ai-processing/prompter#assistants) v vrstnem redu, nastavljenem v **Nastavitve → Šepetalec**. Med delovanjem šepetalca ga ni mogoče spremeniti, a ostane viden, da vidite, kateri pomočnik dela. Med poslušanjem na kartici klica piše **Poslušamo**.

Pod gumbi je pas z najnovejšo vrstico, pod njim pa dva stolpca:

- **Prepis** — vsaka vrstica s svojim časom in stranjo;
- **Predlogi** — vsak predlog s časom odgovora, na katerega se nanaša. Pri pomočniku, ki ne sprašuje nobenega modela, tega stolpca ni in prepis zavzame vso širino.

V ozkem oknu sta stolpca drug pod drugim. Stolpec sledi temu, kar prihaja, dokler se v njem ne pomaknete nazaj, in znova sledi, ko se vrnete na dno. Kliknite katero koli vrstico, da jo zadržite v pasu; kliknite najnovejšo ali buciko v pasu, da znova sledite. Desni gumb miške kopira vrstico, predlog, celoten prepis ali vse predloge. Povlecite ločilnik pod pasom, da ga povečate; velikosti besedila se nastavijo v [Nastavitve → Šepetalec](/ai-processing/prompter#settings--prompter).

## Vaja na posnetku {#rehearsing-on-a-recording}
Pomočnika je mogoče preizkusiti, ne da bi bil kdo na telefonu. **Vaja…** prikaže pogovore iz [knjižnice](/interface/recordings), najnovejše najprej, in **Datoteka v tem računalniku…** za datoteko `.mp3` ali `.wav`.

<Shot name="45_prompter_rehearse" alt="Vaja…: pogovori iz knjižnice in datoteka v tem računalniku" />

Izbrani posnetek se pojavi v predvajalniku pod gumbi: predvajanje in premor, oba kanala, narisana kot valovna oblika, v katero lahko kliknete, in čas. Pritisnite **Zaženi**: posnetek se predvaja v šepetalca po isti poti kot klic, v lastnem tempu — hitrejšega predvajanja namenoma ni, saj bi šepetalec, hranjen z enkratno in pol hitrostjo, delal premore, odgovarjal in zaračunaval pogovor, ki ga ni nihče vodil. Križec desno je **Končaj vajo**, nazaj k poslušanju klicev.

Posnetek z enim kanalom, na primer uvožena datoteka, se sliši kot en prostor: *šepetalec vse to sliši kot sogovornika*.

## Koliko stane in kam gredo besede {#what-it-costs-and-where-the-words-go}
- Razpoznavalnik se zaračuna po minutah zvoka v živo, **Razpoznavaj tudi mojo stran** pa to podvoji. Model se zaračuna za vsak predlog. Oboje se šteje v [mesečne omejitve](/ai-processing/prompter#spending) šepetalca, ne v omejitve Obdelave.
- Glas druge strani zapusti računalnik med govorjenjem in gre k razpoznavalniku, ki ste ga izbrali. Razpoznavalnik na vašem lastnem računalniku — **Vosk**, **WhisperLive** ali **NVIDIA Riva** — ga obdrži doma.
- Kar kaže šepetalec, ni posnetek. Če ga želite obdržati, pritisnite **Izvozite…**; če želite sam pogovor, [posnemite klic](/recordings) še posebej.

## Ko se ne zažene {#when-it-does-not-start}
Okno v vrstici pod gumbi pove, kaj manjka.

| Okno pravi | Kaj storiti |
| --- | --- |
| *Šepetanje je izklopljeno. Nastavitve → Šepetalec.* | Označite **Dovoli uporabo šepetalca**. |
| *Noben razpoznavalnik tu ne zna poslušati, medtem ko kdo govori. Nastavitve → Prepis.* | Dodajte razpoznavalnik z **Naslov za šepetalca** in pritisnite **Preveri**. |
| *Ni česa zagnati. Nastavitve → Šepetalec, in dodajte pomočnika.* | Vsi pomočniki so izbrisani ali izklopljeni: dodajte enega ali pritisnite **Obnovi privzeto**. |
| *Drugo stran je treba najprej obvestiti. Začnite snemati ta pogovor ali spremenite, kaj o soglasju pravi Nastavitve → Snemanje.* | Začnite snemanje, ki predvaja obvestilo, ali spremenite nastavitev soglasja. |
| *Razpoznavalnik ni začel poslušati. Preverite njegov živi naslov in model v Nastavitve → Prepis.* | Naslov za šepetalca, model ali ključ je napačen. **Preveri** na kartici razpoznavalnika pove, kaj točno. |
| *Mesečni znesek za razpoznavalnike je porabljen.* | Povečajte **Razpoznavalniki, na mesec** ali počakajte na nov mesec. |
| *Mesečni znesek za modele je porabljen. Besede gredo naprej; šepetanje se je ustavilo.* | Povečajte **Modeli, na mesec**. |
