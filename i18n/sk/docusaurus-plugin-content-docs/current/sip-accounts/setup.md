---
title: Nastavenie SIP účtu
sidebar_position: 1
description: Pripojte AI Softphone k svojej IP ústredni alebo SIP operátorovi v Nastavenia → Účty.
---

AI Softphone funguje s akoukoľvek IP ústredňou alebo SIP operátorom. Môžete byť prihlásení na toľkých účtoch (linkách), koľko ich máte, a každý účet má vlastné nastavenia.

Otvorte **Nastavenia → Účty**.

<Shot name="05_settings_accounts" alt="Nastavenia → Účty: dva účty, oba zaregistrované" />

## Zoznam účtov {#the-list-of-accounts}

Každý účet je riadok s:

- **začiarkavacím políčkom**, ktoré účet zapína alebo vypína;
- **bodkou**, ktorá je zelená, keď je účet zaregistrovaný na ústredni;
- názvom a pod ním `username@server`;
- tlačidlom **Odpojiť**, ktoré účet odhlási z ústredne;
- tlačidlami **▲** a **▼**, ktoré účet posúvajú v zozname nahor alebo nadol. Štítky účtov v [hlavnom okne](../interface/main-window.md) idú v rovnakom poradí.

Tlačidlo **Pridať** vpravo hore pridá účet. Kliknutím na riadok sa pod ním otvorí jeho formulár.

## Pridanie účtu {#adding-an-account}

<Shot name="05d_account_add" alt="Formulár nového účtu, prázdny" />

Stlačte **Pridať**. Pod zoznamom sa otvorí prázdny formulár s kurzorom v poli **Názov (nepovinné)**. Vyplňte polia nižšie, otvorte **Nastavenia servera**, ak ich ústredňa potrebuje, a stlačte **Uložiť**. Nový účet začína s obvyklými hodnotami: UDP na porte 5060, registrácia obnovovaná každých 300 sekúnd.

## Formulár účtu {#the-account-form}

<Shot name="05b_account_edit" alt="Formulár účtu" />

| Pole | Čo zadať |
| --- | --- |
| **Názov (nepovinné)** | Názov zobrazený na štítku účtu v hlavnom okne a pri jeho hovoroch. Ak je prázdny, účet sa zobrazuje ako `username@server`. |
| **Používateľské meno** | Používateľské meno alebo číslo klapky od vašej ústredne alebo operátora. |
| **Heslo** | Heslo k nemu. Keď sa do formulára vrátite, pole zostane prázdne. Uchováva sa v kľúčenke počítača, nikdy v súbore nastavení. |
| **Adresa servera** | Adresa ústredne alebo SIP servera operátora, napríklad `pbx.example.com`. |
| **Nastavenia servera** | Rozbalí menej bežné nastavenia pripojenia; pozrite nižšie. |
| **Prijímať automaticky** | V časti **Prijímanie**: prijíma prichádzajúce hovory na tomto účte bez toho, aby ste čokoľvek stlačili. Predvolene vypnuté. |

Stlačením **Uložiť** zmeny ponecháte. **Zrušiť** ich zahodí a **Zmazať** účet odstráni.

Keď je bodka pri účte zelená, účet je zaregistrovaný a ukazuje to aj štítok účtu v hlavnom okne. Ak zostane sivá alebo červená, otvorte [Diagnostiku](../troubleshooting/diagnostics.md): karta **SIP** ukazuje požiadavku `REGISTER` a to, čo server odpovedal.

## Nastavenia servera {#server-settings}

Väčšina ústrední tu nič nepotrebuje. Stlačením **Nastavenia servera** ich zobrazíte; to isté tlačidlo sa potom volá **Skryť nastavenia servera**.

<Shot name="05c_account_server_settings" alt="Nastavenia servera účtu, rozbalené" />

| Pole | Predvolene | Čo to je |
| --- | --- | --- |
| **Overovací používateľ** | prázdne | Meno, voči ktorému ústredňa overuje heslo, ak nie je rovnaké ako **Používateľské meno**. Na obrázku je klapka `201` a ústredňa ju overuje ako `kancelaria201`. |
| **Prenos** | UDP | Protokol spojenia so serverom. Rozbaľovací zoznam. |
| **Port** | 5060 | Port servera. |
| **Odchádzajúce proxy** | prázdne | Proxy, cez ktoré musí ísť každá požiadavka, ak ho operátor poskytuje. |
| **Registrar** | prázdne | Adresa, na ktorej sa registrovať, ak to nie je **Adresa servera**. |
| **Znova registrovať, sekundy** | 300 | Ako často telefón obnovuje registráciu. |
| **Tóny klávesnice** | Zvukový tok | Ako sa tóny klávesnice posielajú ústredni. Rozbaľovací zoznam. Zmeňte to, iba ak ústredňa tóny nepočuje. |

Kodeky, ktoré telefón ponúka, sa nenastavujú pre každý účet zvlášť; sú v [Nastaveniach hovorov](calls.md#audio-formats).
