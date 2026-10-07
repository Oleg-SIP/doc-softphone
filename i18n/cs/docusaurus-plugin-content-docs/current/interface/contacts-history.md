---
title: Kontakty a historie
sidebar_position: 3
description: Adresář a záznam hovorů vedle telefonu.
---

**Kontakty** a **Historie** se otevírají jako dvě karty vpravo od telefonu, takže si můžete číslo najít během hovoru.

## Kontakty {#contacts}

<Shot name="03_contacts" alt="Karta Kontakty" />

- **Hledat** filtruje seznam během psaní.
- **Přidat** vytvoří kontakt.
- Každý kontakt je uveden jménem a pod ním číslem a účtem, přes který se kontaktu volá, například *231 · 201 Obchod*.

Příchozí hovor ze známého čísla ukáže jméno kontaktu a stejně tak seznamy posledních hovorů a historie — tak funguje rozpoznání volajícího.

### Úprava kontaktu {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Kontakt otevřený k úpravě" />

Když kontakt vyberete, vpravo v jeho řádku se objeví tužka a sluchátko. Sluchátko kontaktu zavolá; tužka otevře formulář pod řádkem:

| Pole | Co zadat |
| --- | --- |
| **Jméno** | Jak se kontakt zobrazuje. |
| **Číslo** | Číslo, které se vytočí. |
| Rozbalovací seznam pod **Číslem** | Účet, přes který se kontaktu volá. |

**Uložit** změny uloží, **Zrušit** je zahodí a **Smazat** kontakt odstraní.

## Historie {#history}

<Shot name="21_history" alt="Karta Historie" />

Záznam hovorů, nejnovější nahoře. Nahoře je:

- rozbalovací seznam, ve výchozím stavu **Všechny hovory**, který zúží seznam na jeden druh hovorů;
- **Hledat**, které filtruje podle toho, co napíšete.

Každá položka má ikonu druhu hovoru — odchozí sluchátko nebo červené sluchátko s hodinami pro zmeškaný hovor — jméno druhé strany (nebo číslo) a pod ním datum, jak hovor dopadl, jeho délku, číslo a účet. Nedávné hovory se zobrazují jako *Včera, 22:33* nebo den v týdnu, starší s datem.

| Jak hovor dopadl | Zobrazí se jako |
| --- | --- |
| Mluvili jste | **Odchozí** nebo příchozí a délka, například *48 s* |
| Příchozí hovor nebyl přijat | **Zmeškaný** |
| Hovor, který jste volali, nebyl spojen | **Obsazeno nebo odmítnuto** |

Když položku vyberete, vpravo se objeví až čtyři tlačítka:

| Tlačítko | Dělá |
| --- | --- |
| Osoba s plusem | Přidá číslo do [Kontaktů](#contacts). |
| ▶ | Přehraje nahrávku hovoru, pokud byl nahrán. |
| Koš | Smaže položku. |
| Sluchátko | Zavolá na číslo zpět. |

### Jak dlouho se historie uchovává {#how-long-the-log-is-kept}

Záznam hovorů je doklad, takže se z něj nic neodstraňuje, dokud to neřeknete: ve výchozím stavu se uchovává každý hovor. Doba uchovávání a tlačítko **Vymazat historii hovorů** jsou v [Nastavení hovorů](../sip-accounts/calls.md#history).

Zmeškané a odmítnuté hovory lze číst i přes [místní REST API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
