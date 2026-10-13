---
title: Časté problémy
sidebar_position: 2
description: "Co zkontrolovat, když se účet nezaregistruje, není slyšet zvuk, hovor nebo schůzka se nenahrají, chybí přepis, nespustí se našeptávač nebo když odkaz, zkratka či API nic nedělají a co znamenají hlášení samotného telefonu."
---

Každá položka ukazuje na nastavení, které o tom rozhoduje. Pokud tu odpověď není, otevřete [Diagnostiku](/troubleshooting/diagnostics): ukazuje, co si telefon a ústředna říkají.

## Účet se nezaregistruje {#the-account-will-not-register}

Tečka u účtu v **Nastavení → Účty** zůstává šedá nebo červená.

1. Zkontrolujte **Uživatelské jméno**, **Heslo** a **Adresu serveru** ve [formuláři účtu](/sip-accounts/setup).
2. Pokud vaše ústředna ověřuje heslo pod jiným jménem než číslem linky, vyplňte **Ověřovacího uživatele** v **Nastavení serveru**.
3. Zkontrolujte **Přenos** a **Port** podle toho, co ústředna očekává.
4. Otevřete kartu **SIP** v [okně diagnostiky](/troubleshooting/diagnostics) a podívejte se na požadavek `REGISTER` a na to, co server odpověděl.

## Neslyším, nebo mě není slyšet {#i-cannot-hear-or-i-cannot-be-heard}

Otevřete [Nastavení → Zařízení](/sip-accounts/devices).

- Řekněte něco: pruh pod **Mikrofonem** se musí hýbat. Pokud ne, vyberte jiný mikrofon.
- Stiskněte **Vyzkoušet** u **Reproduktorů** a uslyšíte zvuk na zařízení, které jste vybrali.
- Zkontrolujte posuvníky **Hlasitost**. Ztlumení na kartě hovoru a [zkratka](/program/shortcuts) **Ztlumit mikrofon** během hovoru mikrofon vypínají.
- Vyzvánění může být nastaveno tak, aby zvonilo na jiném zařízení, než na kterém mluvíte — **Vyzvánění**, druhý rozbalovací seznam.

## Hovor zní špatně nebo se nespojí {#the-call-sounds-bad-or-does-not-start}

Kodeky se nabízejí v pořadí seznamu v [Nastavení → Hovory](/sip-accounts/calls#audio-formats). Nechte zapnuté kodeky, které vaše ústředna používá, a nejlepší z nich dejte na první místo. Změna platí od příštího hovoru.

## Druhý hovor nezvoní {#a-second-call-does-not-ring}

Co se stane, když vám někdo volá, zatímco telefonujete, se nastavuje v [Čekání hovoru](/sip-accounts/calls#call-waiting).

## Hovor se nenahrál {#a-call-was-not-recorded}

- **Nastavení → Nahrávání**, první rozbalovací seznam, rozhoduje, které hovory se nahrávají; výchozí **Ručně** nahrává jen tehdy, když stisknete nahrávání na kartě hovoru. Viz [Nahrávky](/recordings).
- Nahrávání začíná, když je hovor přijat, takže nepřijatý hovor nemá soubor.
- Modul **Nahrávání** musí být zapnutý v [Modulech](/application/modules).
- Nahrávky odstraňují limity v části **Uchovávání**; připnutá nahrávka se nikdy neodstraní.

## Schůzka v jiné aplikaci se nezachytila {#a-meeting-in-another-application-was-not-captured}

Viz [Zachytávání](/capture/).

- **Povolit zachytávání zvuku** v **Nastavení → Zachytávání** musí být zapnuté.
- Když je **Automatické spuštění** nastaveno na **Zeptat se mě** (výchozí), odpovězte na otázku, když se objeví; s volbou **Nikdy** stiskněte tlačítko nahrávání sami.
- Použijte **Kontrolu** na stejné kartě: horní pruh se musí hýbat, když mluvíte, dolní, když něco hraje.
- Modul **Zachytávání** musí být zapnutý v [Modulech](/application/modules).

## Je nahrávka, ale chybí přepis nebo shrnutí {#there-is-a-recording-but-no-transcript-or-summary}

- Rozhovor se sám přepíše a zpracuje, jen pokud je v [Nastavení → Zpracování](/ai-processing/processing) zapnuto **Zpracovávat hovory automaticky**. Jinak o to požádejte v [okně nahrávek](/interface/recordings).
- Musí existovat [rozpoznávač](/ai-processing/transcription) a [jazykový model](/ai-processing/processing#language-models) a každý musí na své adrese odpovídat.
- Když se dosáhne měsíční **Mez peněz** nebo **Mez tokenů**, automatická pravidla se zastaví až do začátku dalšího měsíce. Když o něco požádáte sami, nezastaví se to nikdy.
- Kroky v [Nastavení → Přehled](/interface/settings-overview) ukazují, co ještě zbývá nastavit.

## Našeptávač se neobjeví nebo se nespustí {#the-prompter-does-not-appear-or-does-not-start}

**Našeptávač** se v seznamu ve spodní části telefonu objeví, jen když jsou splněny tři věci: rozpoznávač s vyplněnou **Adresa pro našeptávače**, který prošel **Vyzkoušet** v [Nastavení → Přepis](/ai-processing/transcription#live-recognition-for-the-prompter), jazykový model a zaškrtnuté **Povolit používání našeptávače** v [Nastavení → Našeptávač](/ai-processing/prompter). Modul **Našeptávač** musí být zapnutý v [Moduly](/application/modules).

Když se okno otevře, ale našeptávač se nespustí, řádek pod jeho tlačítky řekne, co chybí. [Když se nespustí](/interface/prompter#when-it-does-not-start) uvádí všechna hlášení a co s nimi dělat.

## Po zavření okna telefon zmizel {#the-phone-disappeared-when-i-closed-the-window}

Se zapnutým **Nechat telefon běžet, když se zavře okno** telefon stále běží a hovory stále přicházejí. Ikona v oznamovací oblasti (na macOS v řádku nabídek) okno vrátí. Na ploše bez oznamovací oblasti je telefon minimalizovaný na hlavním panelu. Viz [Spuštění](/program/startup).

## Telefonní číslo v prohlížeči nebo CRM nevolá {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Stiskněte **Otevírat odkazy pro volání tímto telefonem** v [Nastavení → Spuštění](/program/startup#call-links). Kliknuté číslo přijde do vytáčení a čeká tam, pokud není zapnuto **Volat ihned, bez stisknutí tlačítka Zavolat**.

## Kontrolka tlačítka zůstává šedá {#a-buttons-lamp-stays-grey}

Ústředna neříká, zda je linka volná. Tlačítko stále vytáčí. Viz [Tlačítka](/sip-accounts/buttons).

## REST API neodpovídá {#the-rest-api-does-not-answer}

- **Nechat jiné programy v tomto počítači ovládat telefon** musí být zapnuto v [Nastavení → Integrace](/integration/rest-api) a modul **Integrace** v [Modulech](/application/modules).
- Adresa je `http://127.0.0.1:8377`, pokud jste nezměnili **Port**.
- Skupina, kterou jste neotevřeli v části **Přístup**, odpovídá na každý požadavek `404`.
- Pokud jste nastavili **Token**, požadavky, které mění uložená data, ho musí nést v hlavičce `Authorization`.
- Další příznaky jsou v části [Když to nefunguje](/integration/rest-api#when-it-does-not-work).

## Webhooky nepřicházejí {#webhooks-do-not-arrive}

Stiskněte **Poslat zkušební událost** v [Nastavení → Integrace](/integration/webhooks). Čítače `webhooks_failed_total` a `webhooks_dropped_total` v REST API ukazují, jak doručování probíhá; [Když nic nepřichází](/integration/webhooks#when-nothing-arrives) uvádí, co který znamená.

## Klávesová zkratka nic nedělá {#a-hotkey-does-nothing}

Otevřete [Zkratky](/program/shortcuts). Zkratka funguje, když je telefon program, který právě používáte; chcete-li ji používat z jakéhokoli programu, zaškrtněte **Všude**. Pokud kombinaci zabral jiný program, klikněte na zkratku a stiskněte kombinaci znovu.

## Hlášení telefonu {#messages-the-phone-shows}

Když se něco nestane, telefon napíše proč na samostatném řádku. Řádek pod seznamem po několika sekundách sám zmizí.

### Hovor se nevytočí {#when-a-call-is-not-placed}

| Hlášení | Co dělat |
| --- | --- |
| *Není nastaven žádný účet* | Přidejte účet v [Nastavení → Účty](/sip-accounts/setup). |
| *Není zapnutý žádný účet, takže není linka, ze které volat.* | Zaškrtněte políčko účtu v **Nastavení → Účty**. |
| *Zatím není zaregistrovaná žádná linka.* | Účet je zapnutý, ale na ústředně ještě není registrován. Počkejte, až jeho tečka zezelená; pokud ne, viz [Účet se nezaregistruje](#the-account-will-not-register). |
| *Probíhá už tolik hovorů, kolik tento telefon unese.* | Zavěste jeden z hovorů a zavolejte znovu. |
| *Účet, ze kterého by se to volalo, už neexistuje.* | Řádek patří k účtu, který byl mezitím smazán. Vytočte číslo v číselníku. |
| *Tento řádek nemá číslo, na které zavolat zpět.* | Volající skryl číslo, takže není komu zavolat zpět. |

### Účet se nepřipojí {#when-an-account-does-not-connect}

| Hlášení | Co dělat |
| --- | --- |
| *Tuto adresu serveru se nepodařilo najít. Zkontrolujte, zda v ní není překlep.* | Zkontrolujte **Adresa serveru** ve [formuláři účtu](/sip-accounts/setup). |
| *Nepodařilo se dosáhnout serveru. Zkontrolujte adresu, port a svou síť.* | Zkontrolujte **Adresa serveru** a také **Přenos** a **Port** v části **Nastavení serveru**. SIP může blokovat i firewall. |
| *Server odmítl toto uživatelské jméno nebo heslo.* | Zkontrolujte **Uživatelské jméno** a **Heslo**. Pokud ústředna ověřuje heslo pod jiným jménem, vyplňte **Ověřovací uživatel**. |
| *Certifikát serveru se nepodařilo ověřit. Pokud ho správce serveru vydal sám, zrušte zaškrtnutí „Ověřovat certifikát“ v části „Nastavení serveru“.* | Objeví se u spojení TLS. Pokud ústředna používá certifikát, který si sama vytvořila, zrušte zaškrtnutí **Ověřovat certifikát** v části **Nastavení serveru**. |
| *Heslo k tomuto účtu se nepodařilo přečíst z klíčenky. Odemkněte ji a připojte se znovu.* | Odemkněte úložiště hesel počítače (v macOS Klíčenku) a pak u účtu stiskněte **Připojit**. |

### Během hovoru {#during-a-call}

| Hlášení | Co dělat |
| --- | --- |
| *Žádný společný zvukový formát* | Ústředna a telefon nemají společný kodek. Zapněte některý, který ústředna používá, v části [Zvukové formáty](/sip-accounts/calls#audio-formats). |
| *Žádný mikrofon ani reproduktory* | Vyberte zařízení v [Nastavení → Zařízení](/sip-accounts/devices). |
| *Nenahrává se: na disku zbývá jen tolik, kolik činí mez. Uvolněte místo nebo změňte mez v nastavení.* | Volné místo na disku kleslo na **Práh místa na disku** — viz [Nahrávky](/recordings). Uvolněte místo nebo práh snižte. |

### Při spuštění telefonu {#when-the-phone-starts}

*Databázi nelze přečíst* znamená, že databázi vytvořila jiná verze programu a tato ji neumí přečíst. Obvykle byla starší verze spuštěna nad daty novější: když znovu nainstalujete novější verzi, otevře ji tak, jak byla. **Začít znovu** naopak vytvoří prázdnou databázi — všechny kontakty a všechny hovory v historii se ztratí a nelze to vrátit. Než ho stisknete, můžete si uložit kopii souboru databáze; kde je, říká [Diagnostika](/troubleshooting/diagnostics#files).
