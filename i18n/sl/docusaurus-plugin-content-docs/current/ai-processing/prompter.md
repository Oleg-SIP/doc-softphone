---
title: Nastavitve šepetalca
sidebar_label: Šepetalec
sidebar_position: 5
description: "Nastavitve → Šepetalec: kaj potrebuje šepetalec v živo, stikalo, ki ga dovoli, velikost besedila, pomočniki in njihove kartice ter mesečne omejitve tega, kar sme porabiti."
---

V **Nastavitve → Šepetalec** se šepetalec v živo dovoli, se mu nastavi velikost in dobi svoje pomočnike. Sam šepetalec — okno, ki zapisuje klic v trenutku, ko je izrečen, in predlaga, kaj odgovoriti, ter vaja na posnetku — je opisan na strani [Okno šepetalca](/interface/prompter).

[Pregled](/interface/settings-overview) nastavitev navaja šepetalca v razdelku **Šepetalec** v dveh korakih: **Dovoli šepetalca** in **Zaženi šepetalca**.

## Kaj potrebuje {#what-it-needs}
- **Razpoznavalnik, ki zna poslušati med pogovorom.** Doda se v [Nastavitve → Prepis](/ai-processing/transcription#live-recognition-for-the-prompter) kot vsak drug razpoznavalnik in potrebuje **Naslov za šepetalca** ter uspešen **Preveri**.
- **Jezikovni model** za pomočnike, ki kaj predlagajo. To je model, nastavljen pri pomočniku, ali privzeti model v [Nastavitve → Obdelava](/ai-processing/processing#language-models). Podnapisi modela sploh ne potrebujejo.
- **Kljukico Dovoli uporabo šepetalca** v **Nastavitve → Šepetalec**.

Ko so izpolnjene vse tri, se **Šepetalec** pojavi na seznamu na dnu telefona med **Zgodovina** in **Nastavitve** in odpre [okno šepetalca](/interface/prompter). Del programa, ki za to skrbi, je modul **Šepetalec**, *Posluša pogovor med potekom in predlaga*; izklopiti ga je mogoče v [Moduli](/application/modules).

## Nastavitve → Šepetalec {#settings--prompter}
<Shot name="41_settings_prompter" alt="Nastavitve → Šepetalec: stikalo, ki dovoli šepetalca, in velikost besedila" />

*Razpoznavanje govora med pogovorom in predlogi, napisani po vaših lastnih navodilih. Oboje se zaračuna po minutah.*

| Nastavitev | Privzeto | Kaj naredi |
| --- | --- | --- |
| **Dovoli uporabo šepetalca** | izklopljeno | Edino stikalo, ki sploh dovoli zagon šepetalca. Nič drugega na strani ne deluje, dokler je izklopljeno. |
| **Prepis in predlogi** | 13 slikovnih pik | Kako velika sta narisana oba stolpca okna. |
| **Ponavljaj najnovejšo vrstico nad stolpcema** | vklopljeno | Prikazuje najnovejši predlog — ali najnovejšo vrstico pri pomočniku, ki ničesar ne predlaga — v lastnem pasu nad stolpcema. |
| **Ponovljena vrstica** | 20 slikovnih pik | Kako veliko je besedilo pasu. Prikazano, dokler je pas vklopljen. |

:::caution
Glas druge strani se med govorjenjem pošilja razpoznavalniku, kar ni nič manj kot snemanje. Kjer [Nastavitve → Snemanje](/recordings) zahteva, da drugo stran najprej obvestite, se šepetalec zažene šele potem.
:::

Šepetalca berete med govorjenjem, pogosto z večje razdalje kot preostali telefon, zato obe velikosti izberete sami: izberite takšni, ki ju zajamete, ne da bi se sklanjali k zaslonu. Povlecite ločilnik pod pasom v [oknu šepetalca](/interface/prompter#the-window), da ga povečate.

### Pomočniki {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Nastavitve → Šepetalec: pomočniki in mesečne omejitve" />

Pomočnik je tisto, kar naj bo šepetalec. *Vsak od njih posluša pogovor v teku in piše nekaj v okno šepetalca: besede tako, kot so izgovorjene, njihov prevod, ali predlog, kaj reči naprej.* Katerega zagnati, izberete v oknu šepetalca. Program jih prinaša štiri:

| Pomočnik | Kaj piše | Vpraša model |
| --- | --- | --- |
| **Podnapisi** | Besede obeh strani, ko so izrečene. | ne |
| **Prevod** | Besede druge strani, prevedene v jezik programa. | da |
| **Ugovori v klicu** | Za tistega, ki prodaja po telefonu: ko stranka izrazi ugovor, ugovor v eni vrstici in eno vrstico, ki nanj odgovori. | da |
| **Pomoč na razgovoru** | Za tistega, s katerim poteka razgovor: odgovor na pravkar zastavljeno vprašanje v nekaj kratkih vrsticah ali to, kar zajeti v naslednjem odgovoru. | da |

**▲** in **▼** spreminjata vrstni red, in to je vrstni red spustnega seznama v [oknu šepetalca](/interface/prompter#the-window). **Dodaj** ustvari lastnega pomočnika. **Obnovi privzeto** povrne navodila in pravila v stanje, v katerem so prišla s programom, tu in v [Obdelava](/ai-processing/processing#defaults); vaši jezikovni modeli ostanejo nedotaknjeni.

### Kartica pomočnika {#an-assistants-card}
Klik na pomočnika odpre njegovo kartico. To je ista kartica kot pri [navodilu](/ai-processing/prompt-studio) v Obdelavi, z nekaj lastnimi kontrolniki.

<Shot name="42_prompter_assistant" alt="Kartica pomočnika Ugovori v klicu: razpoznavalnik, kdaj se je odgovor končal, vloga in navodilo" />

| Polje | Kaj naredi |
| --- | --- |
| **Ime** | Ime na seznamu in v oknu šepetalca. |
| **Oblika odgovora** in **Pošlji tudi** | Kot pri vsakem navodilu: oblika odgovora in navodila, poslana zraven. Priloženi pomočniki odgovarjajo v obliki **Proza**. |
| **Razpoznavalnik** | Kateri razpoznavalnik posluša. Ponujeni so le tisti, ki znajo poslušati, medtem ko kdo govori. |
| **Kdaj se je odgovor končal** | Kdo odloči, da je odgovor končan in nanj lahko odgovorimo: **Odloči razpoznavalnik**, **Po premoru** ali **Samo ko vprašam** — takrat se odgovor konča, ko pritisnete **Predlog**. Šest razpoznavalnikov samih pove, kje se odgovor konča, štirje ne; **Odloči razpoznavalnik** se tam, kjer nima odgovora, zanese na premor, zato je to nastavitev, ki jo je vredno pustiti. |
| **Razpoznavaj tudi mojo stran** | Druga seja pri istem razpoznavalniku, za dvojno ceno, da se v prepisu pojavijo tudi vaše lastne besede. Vstopijo v to, kar se pove modelu, a nikoli niso tisto, o čemer ga sprašujejo. |
| **Vloga — kaj je model** | Pošlje se modelu pred navodilom, na primer *Pomagate osebi, ki prodaja po telefonu…* |
| **Navodilo** | Kaj se model vpraša ob vsakem odgovoru. `{{reply}}` je pravkar končani odgovor, `{{conversation}}` pa vse, kar je bilo izrečeno prej. *Pustite prazno in modela ne vprašajo nič: besede se kažejo, kakor prihajajo, plača pa se le razpoznavalnik.* Prav to so **Podnapisi**. |
| **Odgovarjaj v** | Jezik predloga: **Karkoli je bilo govorjeno**, **Jezik tega programa** ali **Vedno en jezik** z njegovo kodo. |
| **Model** | **Privzeto** ali eden od vaših [jezikovnih modelov](/ai-processing/processing#language-models). |

### Poraba {#spending}
*Ločeno od tega, kar smejo pravila porabiti za dokončane pogovore. Mesec povzetkov ne sme biti zmožen utišati šepetalca sredi pogovora.*

| Polje | Ko je dosežena |
| --- | --- |
| **Razpoznavalniki, na mesec** | Šepetalec, ki teče, se ustavi ob koncu odgovora, pri katerem je — nikoli sredi besede. |
| **Modeli, na mesec** | Predlogi se ustavijo, podnapisi pa tečejo naprej. |

Prazno pomeni brez omejitve. Cena minute zvoka v živo je **Cena na minuto** razpoznavalnika, vpisana na njegovi kartici v [Prepis](/ai-processing/transcription#the-recognisers-card); brez nje šepetalec opozori, da je prikazani znesek ocena.
