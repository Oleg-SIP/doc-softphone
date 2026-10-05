---
title: Kontakty a história
sidebar_position: 2
description: Adresár a záznam hovorov vedľa telefónu.
---

**Kontakty** a **História** sa otvárajú ako dve karty napravo od telefónu, takže si môžete vyhľadať číslo, kým hovoríte.

## Kontakty {#contacts}

<Shot name="03_contacts" alt="Karta Kontakty" />

- **Hľadať** filtruje zoznam počas písania.
- **Pridať** vytvorí kontakt.
- Každý kontakt je uvedený s menom a pod ním s číslom a účtom, cez ktorý sa kontaktu volá, napríklad *231 · 201 Kancelária*.

Prichádzajúci hovor zo známeho čísla ukáže meno kontaktu, rovnako ako zoznamy nedávnych hovorov a záznam hovorov — tak funguje priraďovanie identifikácie volajúceho.

### Úprava kontaktu {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Kontakt otvorený na úpravu" />

Vyberte kontakt a napravo v jeho riadku sa ukáže ceruzka a slúchadlo. Slúchadlo kontaktu zavolá; ceruzka otvorí formulár pod riadkom:

| Pole | Čo zadať |
| --- | --- |
| **Názov** | Ako sa kontakt zobrazuje. |
| **Číslo** | Číslo, ktoré sa vytočí. |
| Rozbaľovací zoznam pod **Číslo** | Účet, cez ktorý sa kontaktu volá. |

**Uložiť** zmeny ponechá, **Zrušiť** ich zahodí a **Zmazať** kontakt odstráni.

## História {#history}

<Shot name="21_history" alt="Karta História" />

Záznam hovorov, od najnovších. Navrchu:

- rozbaľovací zoznam, predvolene **Všetky hovory**, zúži zoznam na jeden druh hovoru;
- **Hľadať** filtruje podľa toho, čo napíšete.

Každá položka má ikonu druhu hovoru — odchádzajúce slúchadlo alebo červené slúchadlo s hodinami pre zmeškaný hovor —, meno druhej strany (alebo číslo) a pod ním dátum, výsledok hovoru, jeho dĺžku, číslo a účet. Nedávne hovory sa zobrazujú ako *Včera, 22:33* alebo s dňom v týždni, staršie s dátumom.

| Výsledok hovoru | Zobrazené ako |
| --- | --- |
| Hovorili ste | **odchádzajúci** alebo prichádzajúci a dĺžka, napríklad *48 s* |
| Prichádzajúci hovor nebol prijatý | **Zmeškaný** |
| Hovor, ktorý ste uskutočnili, sa nespojil | **Neprešlo** |

Vyberte položku a napravo sa ukážu štyri tlačidlá:

| Tlačidlo | Čo robí |
| --- | --- |
| Osoba s plusom | Pridá číslo do [Kontaktov](#contacts). |
| ▶ | Prehrá nahrávku hovoru, ak bol nahraný. |
| Kôš | Zmaže položku. |
| Slúchadlo | Zavolá na číslo späť. |

### Ako dlho sa záznam uchováva {#how-long-the-log-is-kept}

Záznam hovorov je dôkaz, takže sa z neho nič neodstráni, kým to nepoviete: predvolene sa uchováva každý hovor. Doba uchovávania a tlačidlo **Vymazať históriu hovorov** sú v [Nastaveniach hovorov](../sip-accounts/calls.md#history).

Zmeškané a odmietnuté hovory sa dajú prečítať aj cez [miestne REST API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
