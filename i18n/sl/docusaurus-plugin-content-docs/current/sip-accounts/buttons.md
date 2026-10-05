---
title: Gumbi
sidebar_position: 4
description: "\"Gumbi BLF: gumbi za en dotik, ki pokličejo interno številko na vaši IP-centrali in pokažejo, ali je prosta, zvoni ali je zasedena.\""
---

Gumbi so tipke **BLF** (Busy Lamp Field) programskega telefona, ista funkcija, kot jo ima namizni telefon na IP-centrali. Gumb pokliče interno številko z enim pritiskom. Gumb, ki spremlja svojo linijo, pokaže tudi lučko: telefon centralo vpraša o tej interni številki in pokaže, ali je prosta, zvoni ali je zasedena, kot to delata konzola recepcije ali programirljive tipke namiznega telefona.

BLF potrebuje podporo na strani centrale: centrala mora telefonu sporočati stanje interne številke. Večina IP-central to počne. Če vaša ne, lučka ostane siva, gumb pa še vedno kliče.

Gumbi stojijo pod značkami računov v [glavnem oknu](/interface/main-window), **Nastavitve → Gumbi** pa je mesto, kjer jih naredite.

<Shot name="08_settings_buttons" alt="Nastavitve → Gumbi: dva gumba" />

Vsaka vrstica je gumb: lučka, njegov napis, na desni pa njegova številka in račun, ki mu pripada — na primer *212 · 201 Pisarna*. **▲** in **▼** premakneta gumb navzgor ali navzdol; gumbi v glavnem oknu sledijo temu vrstnemu redu. **Dodaj** naredi novega.

## Lučka {#the-lamp}

Gumb, ki spremlja svojo linijo, pokaže lučko:

| Lučka | Linija je |
| --- | --- |
| Zelena | prosta |
| Oranžna | zvoni |
| Rdeča | v pogovoru |
| Siva | neznano: centrala tega ne pove |

## Dodajanje gumba {#adding-a-button}

<Shot name="08b_button_add" alt="Obrazec novega gumba" />

Pritisnite **Dodaj**; pod seznamom se odpre obrazec.

| Polje | Kaj vpisati |
| --- | --- |
| **Številka** | Številka, ki se pokliče. |
| **Linija** | Račun, na katerem se opravi klic. Izberite ga najprej: za prikaz lučke telefon o tej številki vpraša centralo te linije, zato mora vedeti, katere. |
| **Napis** | Besedilo na gumbu, na primer ime osebe. Na gumbu je prostor le za kratek napis; daljši se odreže. |
| **Kaži, ali je ta linija zasedena** | Stikalo. Vklopljeno — gumb ima lučko. Izklopljeno — samo kliče. |

**Shrani** ostane siv, dokler obrazec ni izpolnjen. **Prekliči** zavrže obrazec.

Del programa, ki prikazuje gumbe, je mogoče izklopiti v [Modulih](/application/modules).
