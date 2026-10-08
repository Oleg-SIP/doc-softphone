---
title: Okno posnetkov
sidebar_position: 2
description: "\"Knjižnica vseh pogovorov — klica, uvožene datoteke ali sestanka, zajetega iz Zooma, Teams ali Meeta: filtri, predvajalnik, prepis, ki ga lahko predvajate od katere koli vrstice, in obdelave.\""
---

**Posnetki** so mesto, kjer živi vsak pogovor, ne glede na to, kako je prišel: klic, opravljen ali sprejet v telefonu, uvožena zvočna datoteka ali sestanek, zajet iz Zooma, Teams, Meeta ali katerega koli drugega programa. Vsi so v enem seznamu in vsak se odpre na isti način: predvajalnik, prepis in vse, kar je o njem napisal jezikovni model. Za odpiranje pritisnite **Posnetki** spodaj levo v [glavnem oknu](main-window.md).

<Shot name="01_recordings" alt="Zavihek Posnetki: zajet sestanek v Zoomu, uvožena datoteka in klici v enem seznamu" />

## Tri vrste posnetkov {#three-kinds-of-recording}

Ikona na levi strani vrstice pove, kako je pogovor prišel.

| Ikona | Pogovor | Njegovo ime na seznamu | Kako pride sem |
| --- | --- | --- | --- |
| Slušalka s puščico | Klic, opravljen ali sprejet v tem telefonu. Puščica kaže noter pri dohodnem klicu in ven pri odhodnem. | Ime stika ali številka | Posname se, kot je nastavljeno v [Posnetkih](../recordings.md) |
| Puščica v črto | Datoteka, uvožena od drugod: z mobilnega telefona, diktafona ali iz drugega sistema | Ime datoteke | **⋮ → Uvozi iz datotek**; glejte [spodaj](#a-recording-you-already-have) |
| Okno | Sestanek v drugem programu | Ime, ki ste mu ga dali, ali **Drug program** | [Zajemanje](../capture/capture.md) |

Na sliki so zgornje tri vrstice po ena od vsake vrste: sestanek v Zoomu, uvožena datoteka klica na bančno podporo in klic, sprejet na liniji **305 Podpora**. Ne glede na vir se vsi enako prepišejo, obdelajo in iščejo.

## Iskanje pogovora {#finding-a-conversation}

Vrstica na vrhu ima pet filtrov, iskalno polje in meni:

| Kontrolnik | Zoži seznam po |
| --- | --- |
| **Vrsta** | načinu, kako je pogovor prišel: dohodni ali odhodni klici, **Uvoženi**, **Zajeti** |
| **Obdobje** | datumu: **Danes**, **Včeraj**, **Zadnjih 7 dni** ali **Izberi datume…** |
| **Kategorija** | kategoriji, v katero je bil uvrščen — glejte [Slovarji](../ai-processing/dictionaries.md) |
| **Znamka** | oznakah in opozorilnih znakih, ki jih nosi |
| **Razpoznavalnik** | [razpoznavalniku](../ai-processing/transcription.md), ki je naredil njegov prepis |
| **Išči** | tem, kar je bilo v njem rečeno — iskanje gre skozi prepise vsega, kar ste posneli |

<Shot name="39_more_menu" alt="Meni ⋮ seznama: Uvozi iz datotek, Izvozi v CSV, Odpri v brskalniku" />

Gumb **⋮** desno v vrstici odpre več dejanj za seznam:

| Element | Kaj naredi |
| --- | --- |
| **Uvozi iz datotek** | Prinese posnetke, ki jih že imate. Glejte [Posnetek, ki ga že imate](#a-recording-you-already-have). |
| **Izvozi v CSV** | Shrani seznam kot preglednico: čas, stran in številko, smer, trajanje, kategorijo, oznake, opozorilne znake in povzetek v eni vrstici vsakega pogovora. |
| **Odpri v brskalniku** | Odpre seznam v brskalniku, kot stran, ki jo [krajevni REST API](../integration/rest-api.md) streže na naslovu `/ui`. |

## Seznam {#the-list}

Vsaka vrstica prikazuje:

- ikono vrste pogovora;
- ime — druga stran, številka, datoteka ali sestanek — in pod njim datum ter povzetek v eni vrstici;
- na desni kategorijo z njeno oceno (število, na primer *Podpora · 4*), nato opozorilne znake in oznake ter na koncu trajanje.

Opozorilni znaki so narisani rdeče (na sliki *Občutljivi podatki*, *Dana obljuba*, *Jezna stranka*); oznake so navadne (*Obljubljen povratni klic*). Pogovor brez povzetka in kategorije še ni bil obdelan — vrstica **Ana Kovač** na sliki.

<Shot name="40_row_actions" alt="Vrstica s kazalcem nad njo: gumbi z buciko, svinčnikom in košem" />

Ko s kazalcem pokažete na vrstico, se na njeni desni prikažejo trije gumbi:

| Gumb | Kaj naredi |
| --- | --- |
| Bucika | **Ohrani tega**: ohranjenega posnetka meje [Hrambe](../recordings.md#retention) nikoli ne izbrišejo. Ponoven pritisk ga neha ohranjati. |
| Svinčnik | **Preimenuj**: pogovoru da vaše lastno ime. Klic ob sebi obdrži ime druge strani; sestanek ali datoteka sta sicer poimenovana po programu ali datoteki, iz katere sta prišla. |
| Koš | **Izbriši ta posnetek**, po vprašanju. Izgine tudi zvok in tega ni mogoče razveljaviti. |

## Predvajalnik {#the-player}

Izberite vrstico, da se pod seznamom odpre predvajalnik.

- Obe valovni obliki sta kanala posnetka: zgornja ste vi, spodnja je druga stran. Uvožena datoteka običajno vsebuje eno zmešano sled, zato obe črti kažeta isti zvok.
- **▶** predvaja in zaustavi; časa na levi sta položaj in skupno trajanje. Vrstica pod valovnima oblikama pomika dolg posnetek.
- **1×** spremeni hitrost; **Oba** izbere, kateri glas slišite: oba, samo vas (**Jaz**) ali samo drugo stran (**Oni**).
- Gumb z diskom shrani kopijo posnetka, **×** zapre pogovor.

Črto med seznamom in predvajalnikom lahko povlečete navzgor, da ima prepis več prostora, kot na spodnjih slikah.

## Prepis {#the-transcript}

Pod predvajalnikom je prepis: ena vrstica na repliko, s časom, ko je bila izrečena, in imenom govorca.

<Shot name="26_recording_call" alt="Klic na liniji 305 Podpora: predvajalnik in prepis z označeno vrstico pri 0:12" />

| Vrsta posnetka | Govorci so prikazani kot |
| --- | --- |
| Klic | **Vi** in ime druge strani ali številka |
| Zajet sestanek | **Vi** in ime posnetka za vse druge |
| Uvožena datoteka | **Vsi · speaker 1**, **Vsi · speaker 2** … — glasove loči razpoznavalnik |

**Kliknite vrstico, da skočite na tisti trenutek**: predvajalnik se premakne tja, vrstica je poudarjena, izgovarjana beseda pa je v njej označena — na sliki vrstica pri **0:12** z besedo *Da*. Za poslušanje od tam pritisnite **▶**. Med predvajanjem poudarek sledi govoru, tako da lahko berete in poslušate hkrati ter se vrnete na katero koli poved.

Čas na levi strani vsake vrstice je tudi to, na kar kaže obdelava: opozorilni znak, odgovor ali citat nosi čas besed, na katerih temelji.

## Prepis ali obdelava: spustni seznam {#transcript-or-write-up-the-drop-down}

Spustni seznam nad prepisom izbere, kaj prikazati na tistem mestu: prepis ali eno od obdelav, ki jih je naredil jezikovni model.

<Shot name="27_writeup_menu" alt="Odprt spustni seznam: prepis OpenAI in obdelave klica" />

- Vrstice z **mikrofonom** so prepisi, po eden za vsak [razpoznavalnik](../ai-processing/transcription.md), ki je posnetek prepisal. Zvezdica označuje glavnega. Pokažite na enega, da vidite razpoznavalnik, njegov model in jezik.
- Vrstice z **iskricami** so obdelave, ki jih naredijo [navodila](/ai-processing/prompt-studio) v [Obdelavi](../ai-processing/processing.md).

Posnetek ima lahko prepise več razpoznavalnikov, da jih primerjate: sestanek v Zoomu spodaj sta prepisala X.ai in Deepgram.

<Shot name="36_zoom_menu" alt="Zajet sestanek z dvema prepisoma, Deepgram in X.ai, ter njegovimi obdelavami" />

Obdelave so navedene pod kratkimi imeni:

| V spustnem seznamu | Naredi navodilo | Kaj prikazuje |
| --- | --- | --- |
| **Povzetek** | Povzetek | Glavne točke, odločitve in naslednje korake v kratkem odstavku. |
| **Na kratko** | Povzetek v eni vrstici | En stavek; ista vrstica je prikazana pod imenom na seznamu. |
| **Dejanja** | Naloge | Kdo se je strinjal, da bo kaj naredil, in do kdaj. |
| **Teme** | Teme | Predmeti, ki so prišli na vrsto. |
| **Omenjeni** | Imena in številke | Ljudje, podjetja, datumi, zneski in sklici. |
| samo vprašanje | Vprašanje o tem klicu | Odgovor na vprašanje, ki ste ga zastavili, z besedami, na katerih temelji. |
| **Kakovost** | Kakovost prodaje, Kakovost podpore | Skupna ocena in presoja po vsakem merilu. |
| **Opozorilni znaki** | Opozorilni znaki | Kaj zahteva pozornost, z dokazom in časom. |
| **Oznake**, **Kategorija** | Oznake, Kategorija | Oznake, pod katere je bil pogovor uvrščen. |

## Obdelave ena za drugo {#the-write-ups-one-by-one}

Spodnje slike so vse od istega klica na liniji **305 Podpora**, v katerem stranka sprašuje, kdaj se ji obnavljata polici.

**Povzetek** — pogovor v nekaj stavkih.

<Shot name="28_summary" alt="Povzetek klica" />

**Na kratko** — ena vrstica, dovolj kratka, da pogovor prepoznate na seznamu.

<Shot name="29_nutshell" alt="Na kratko: povzetek klica v eni vrstici" />

**Dejanja** — vsaka naloga s tem, kdo jo mora opraviti in kdaj, na desni.

<Shot name="30_actions" alt="Dejanja: dve nalogi za Vi, ena z rokom jutri zjutraj" />

**Vprašanje** — pogovoru lahko zastavite karkoli: vprašanje postane ime elementa, pod odgovorom pa so besede, na katerih temelji, z njihovim časom v posnetku.

<Shot name="31_question" alt="Odgovor na vprašanje o klicu z dvema citatoma pri 0:15 in 0:27" />

**Kakovost** — ocena od 1 do 5 z razlogom zanjo, vsako merilo pa je označeno kot **izpolnjeno**, **šibko** ali **neizpolnjeno** s pripombo.

<Shot name="32_quality" alt="Kakovost: ocena 4, dve merili izpolnjeni in dve šibki" />

**Opozorilni znaki** — vsak znak z besedami, na katerih je bil sprožen, resnostjo in časom.

<Shot name="33_red_flags" alt="Opozorilni znaki: Dana obljuba, nizka, pri 0:27" />

**Teme** — predmeti sestanka, tu sestanka v Zoomu.

<Shot name="38_topics" alt="Teme sestanka v Zoomu" />

## Gumbi ob spustnem seznamu {#the-buttons-beside-the-drop-down}

| Gumb | Kaj naredi |
| --- | --- |
| Iskrice | **Prepiši ali vprašaj model…**: odpre meni, glejte spodaj. |
| Dva lista | Kopira prikazano. |
| Disk | Shrani prikazano v datoteko. Prepis lahko shranite kot navadno besedilo ali kot podnapise. |
| Koš | Izbriše prikazano. |

<Shot name="34_run_menu" alt="Meni z iskricami: Prepis s štirimi razpoznavalniki, Obdelava z navodili" />

Meni z iskricami opravi delo na zahtevo. Pod **Prepis** izberite razpoznavalnik, da posnetek znova prepišete z njim; pod **Obdelava** izberite navodilo, da ga zaženete zdaj — **Vprašanje o tem klicu** najprej vpraša po vprašanju. Rezultat se pokaže v spustnem seznamu. Tako se pogovor obdela, kadar je v [Obdelavi](../ai-processing/processing.md) izklopljeno **Obdeluj pogovore samodejno**, in tako pogovoru, ki ima že nekaj obdelav, dodate še eno.

## Trije primeri {#three-examples}

### Klic, opravljen v telefonu {#a-call-made-in-the-phone}

Zgornji klic: govorca sta **Vi** in **Katja Mlakar**, ime stika, na dveh ločenih kanalih.

### Uvožena datoteka {#a-file-you-imported}

<Shot name="35_recording_import" alt="Uvožena datoteka klica na bančno podporo: ena zmešana sled ter govorca 1 in 2" />

`riverside_bank_support_call` je datoteka mp3, prinesena z **⋮ → Uvozi iz datotek**. Njeno ime je ime datoteke, ikona puščica v črto, njena dva govorca pa je razločil razpoznavalnik. Obdelave so našle na glas izgovorjeno številko kartice in sprožile **Občutljivi podatki**.

### Sestanek, zajet iz drugega programa {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Sestanek v Zoomu, zajet z računalnika: prepis X.ai z govorcema Vi in imenom sestanka" />

**Načrtovanje lansiranja v 4. četrtletju (Zoom)** je bilo zajeto, medtem ko je sestanek potekal v Zoomu, in poimenovano s svinčnikom. Vsi na drugi strani sestanka so prikazani pod imenom posnetka; vi ste **Vi**. Glejte [Zajemanje](../capture/capture.md).

## Posnetek, ki ga že imate {#a-recording-you-already-have}

Posnetek, narejen drugje — na mobilnem telefonu, diktafonu ali v drugem sistemu —, lahko dodate z **⋮ → Uvozi iz datotek**. Izberite eno ali več datotek mp3 ali wav; telefon pove, koliko jih je bilo uvoženih, in našteje tiste, ki jih ni mogel prebrati kot posnetek. Vsak se uvrsti natanko kot poklican klic: prepiše se, obdela po istih [pravilih](../ai-processing/processing.md#rules) in najde z istim iskanjem.

## Brisanje posnetka {#deleting-a-recording}

Ko se posnetek izbriše, gre z njim vse, kar je iz njega nastalo: prepisi in obdelave. Kako dolgo se posnetki hranijo sami od sebe, se nastavi v [Posnetkih](../recordings.md#retention).
