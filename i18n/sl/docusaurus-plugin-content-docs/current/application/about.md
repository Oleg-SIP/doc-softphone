---
title: O programu
sidebar_position: 2
description: Različica, posodobitve, vaša država, licenca, kaj vsebuje poročilo o uporabi, obrazec za odziv in iz česa je program zgrajen.
---

**Nastavitve → O programu** vsebuje vse o samem programu.

<Shot name="20_settings_about" alt="Nastavitve → O programu" />

## Različica in država {#version-and-country}

Na vrhu so ime, **Različica** (na sliki 1.1.5), povezava na spletno stran [ai-softphone.com](https://ai-softphone.com/) in povezava na to dokumentacijo.

**Država** programu pove, kje ste. Pomaga izbrati najboljši strežnik za posodobitve in odpre pot do jezikovnih in govornih storitev, gostovanih v vaši državi. **Zaznaj samodejno** jo izpolni.

## Posodobitve {#updates}

Zavihek pove, ali imate najnovejšo različico in kdaj je bilo nazadnje preverjeno. **Preveri posodobitve** preveri zdaj.

**Samodejno preverjaj posodobitve**, privzeto vklopljeno, preveri enkrat na dan in kmalu po zagonu telefona. Strežnik prosi za eno majhno datoteko, nič pa se ne prenese ali namesti brez vašega soglasja.

Ko je na voljo nova različica, zavihek napiše *Različica … je na voljo. Nič se ne prenese, dokler ne zahtevate.* **Kaj se je spremenilo** pokaže, kaj je v njej novega, **Prenesi** pa jo prenese.

Ko je prenesena, **Namesti in znova zaženi** zapre telefon in ga znova zažene že v novi različici. Telefon tega nikoli ne naredi sam, da ne bi prekinil ničesar, kar poteka: pritisnite gumb, ko niste v klicu. To pove tudi obvestilo *Na voljo je nova različica* z gumbom **Posodobi zdaj**.

| Ko zavihek napiše | |
| --- | --- |
| *Različica … je na voljo. Ta izvod je bil nameščen s paketom, zato se novi namesti enako.* | Program je nameščen iz paketa, na primer iz vaše distribucije Linuxa. Pritisnite **Vzemi paket** in namestite novo različico tako, kot ste namestili to. |
| *Ta izgradnja nima posodobitvenega naslova, zato nikoli ne vpraša. Tiste, objavljene na spletišču, ga imajo.* | Program je preveden iz izvorne kode in ne prenesen s spletnega mesta, zato posodobitev ne išče. |
| *Noben posodobitveni strežnik ni odgovoril.* | Strežniki niso bili dosegljivi. Če je računalnik povezan, lahko pomaga izbira polja **Država** zgoraj: morda je kakšen strežnik bližje vam. |

## Licenca {#licence}

Program je prosto programje pod licenco GPL-2.0-or-later. Na voljo je brez kakršne koli garancije, razširjate pa ga lahko pod pogoji te licence; celotno besedilo je priloženo v datoteki z imenom `LICENSE`.

## Telemetrija {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Nastavitve → O programu: kaj vsebuje poročilo o uporabi" />

Program pošlje eno majhno poročilo o uporabi na dan. Preden gre prvo, vam pokaže, kaj vsebuje, zavihek pa to navaja:

| | Kaj se pošlje |
| --- | --- |
| **Vedno poslano** | Da je bila aplikacija zagnana, njena različica in jezik vmesnika; različica operacijskega sistema, področne nastavitve, država in časovni pas. |
| **Poslano dodatno, v načinu Razširjeno** | Števci klicev in zajetih pogovorov; proizvajalec in različica povezane centrale, nikoli njen naslov; koliko korakov [Pregleda](/interface/settings-overview) je opravljenih in izbrana postavitev. |
| **Nikoli poslano, v nobenem načinu** | Številke, ki ste jih klicali ali s katerih so vas klicali; računi, gesla ali kar koli iz shrambe ključev; stiki, pogovori, prepisi ali posnetki; kar koli ste vpisali in nobeni zasebni podatki na računalniku. |

Vsaka namestitev si ustvari en naključni identifikator, da je poročila iz iste kopije programa mogoče prepoznati kot eno. Ne izhaja iz ničesar, kar zadeva vas ali vaš računalnik, in nikogar ne imenuje — ker pa traja, je poročila, ki ga nosijo, mogoče povezati med seboj. Zato so psevdonimna, ne anonimna.

Podlaga osnovnega poročila je zakoniti interes: vedeti, katere različice so v uporabi, omogoča, da popravek doseže tiste, ki ga potrebujejo. Vse, kar doda razširjeno poročilo, je tam, ker ste to izbrali, in to lahko tukaj kadar koli spremenite.

### Poročanje {#reporting}

| Izbira | |
| --- | --- |
| **Razširjeno** | Osnovno poročilo in to, kar navaja *Poslano dodatno*. Izbrano na sliki. |
| **Osnovno** | Samo to, kar je *Vedno poslano*. |
| **Izklopljeno** | Nobenega poročila. Na voljo le v izdaji Enterprise; drugače je ta možnost siva. |

## Odziv {#feedback}

<Shot name="20c_settings_about_bottom" alt="Nastavitve → O programu: obrazec za odziv in komponente, iz katerih je program zgrajen" />

Obrazec, ki piše razvijalcem, ne da bi zapustili program.

| Polje | |
| --- | --- |
| **Zadeva** in **Sporočilo** | Kar želite povedati. |
| **Vaše ime** in **Naslov za odgovor** | Oboje je neobvezno. Brez naslova ni mogoče odgovoriti. |
| **Priloži dnevnik** | Doda konec dnevnika, največ približno 512 kB; vrstica pod potrditvenim poljem pove, koliko ga je zdaj (na sliki 111 kB). Glejte [Diagnostika](/troubleshooting/diagnostics). |

**Pošlji** ostane siv, dokler ni česa poslati.

## Zgrajeno z {#built-with}

Komponente, na katerih je program zgrajen, vsaka s svojo licenco: Qt 6 (GPL-2.0 ali GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), Opus (BSD-3-Clause), SQLite (javna domena), nlohmann/json (MIT), cpp-httplib (MIT), IXWebSocket (BSD-3-Clause), nghttp2 (MIT), LAME (LGPL-2.0-or-later), minimp3 (CC0-1.0), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) in odjemalec PulseAudio (LGPL-2.1-or-later). Vsaka se uporablja pod licenco, navedeno poleg nje; kjer komponenta ponuja več, je uporabljena navedena.
