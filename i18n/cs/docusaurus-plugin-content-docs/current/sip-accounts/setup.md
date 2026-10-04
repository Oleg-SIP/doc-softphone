---
title: Nastavení SIP účtu
sidebar_position: 1
description: Připojte AI Softphone k IP ústředně nebo SIP operátorovi v Nastavení → Účty.
---

AI Softphone funguje s libovolnou IP ústřednou nebo SIP operátorem. Můžete být přihlášeni k tolika účtům (linkám), kolik jich máte, a každý účet má vlastní nastavení.

Otevřete **Nastavení → Účty**.

<Shot name="05_settings_accounts" alt="Nastavení → Účty: dva účty, oba registrované" />

## Seznam účtů {#the-list-of-accounts}

Každý účet je řádek s:

- **zaškrtávacím políčkem**, které účet zapíná a vypíná;
- **tečkou**, která je zelená, když je účet registrován na ústředně;
- názvem a pod ním `uživatel@server`;
- tlačítkem **Odpojit**, které účet z ústředny odhlásí;
- tlačítky **▲** a **▼**, která účet posouvají v seznamu nahoru nebo dolů. Štítky účtů v [hlavním okně](../interface/main-window.md) mají stejné pořadí.

Tlačítko **Přidat** vpravo nahoře přidá účet. Kliknutím na řádek otevřete formulář účtu pod ním.

## Přidání účtu {#adding-an-account}

<Shot name="05d_account_add" alt="Prázdný formulář nového účtu" />

Stiskněte **Přidat**. Pod seznamem se otevře prázdný formulář s kurzorem v poli **Název (nepovinné)**. Vyplňte pole níže, pokud to ústředna vyžaduje, otevřete **Nastavení serveru**, a stiskněte **Uložit**. Nový účet začíná s obvyklými hodnotami: UDP na portu 5060, registrace se obnovuje každých 300 sekund.

## Formulář účtu {#the-account-form}

<Shot name="05b_account_edit" alt="Formulář účtu" />

| Pole | Co zadat |
| --- | --- |
| **Název (nepovinné)** | Název zobrazený na štítku účtu v hlavním okně a u jeho hovorů. Pokud je prázdný, účet se zobrazuje jako `uživatel@server`. |
| **Uživatelské jméno** | Uživatelské jméno nebo číslo linky od vaší ústředny či operátora. |
| **Heslo** | Heslo k němu. Když se k formuláři vrátíte, pole zůstane prázdné. Ukládá se do klíčenky počítače, nikdy do souboru s nastavením. |
| **Adresa serveru** | Adresa ústředny nebo SIP serveru operátora, například `pbx.example.com`. |
| **Nastavení serveru** | Rozbalí méně obvyklá nastavení spojení; viz níže. |
| **Přijímat automaticky** | V části **Přijímání**: přijímá příchozí hovory na tomto účtu, aniž byste cokoli stiskli. Ve výchozím stavu vypnuto. |

Stiskem **Uložit** změny uložíte. **Zrušit** je zahodí a **Smazat** účet odstraní.

Když je tečka u účtu zelená, účet je registrován a ukazuje to i jeho štítek v hlavním okně. Pokud zůstane šedá nebo červená, otevřete [Diagnostiku](../troubleshooting/diagnostics.md): karta **SIP** ukazuje požadavek `REGISTER` a co na něj server odpověděl.

## Nastavení serveru {#server-settings}

Většina ústředen tu nic nepotřebuje. Stiskem **Nastavení serveru** je zobrazíte; stejné tlačítko pak zní **Skrýt nastavení serveru**.

<Shot name="05c_account_server_settings" alt="Rozbalené nastavení serveru účtu" />

| Pole | Výchozí | Co to je |
| --- | --- | --- |
| **Ověřovací uživatel** | prázdné | Jméno, ke kterému ústředna ověřuje heslo, pokud není stejné jako **Uživatelské jméno**. Na obrázku je linka `201` a ústředna ji ověřuje jako `obchod201`. |
| **Přenos** | UDP | Protokol spojení se serverem. Rozbalovací seznam. |
| **Port** | 5060 | Port serveru. |
| **Odchozí proxy** | prázdné | Proxy, přes kterou musí jít každý požadavek, pokud ji operátor uvádí. |
| **Registrar** | prázdné | Adresa, na které se registrovat, pokud to není **Adresa serveru**. |
| **Znovu registrovat, sekundy** | 300 | Jak často telefon obnovuje registraci. |
| **Tóny klávesnice** | Zvukový tok | Jak se tóny klávesnice posílají ústředně. Rozbalovací seznam. Měňte jen tehdy, když ústředna tóny neslyší. |

Kodeky, které telefon nabízí, se nenastavují pro každý účet zvlášť; jsou v [Nastavení hovorů](calls.md#audio-formats).
