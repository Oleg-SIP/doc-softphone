---
title: Časté problémy
sidebar_position: 2
description: "Co zkontrolovat, když se účet nezaregistruje, není slyšet zvuk, hovor nebo schůzka se nenahrají, chybí přepis nebo když odkaz, zkratka či API nic nedělají."
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

- **Nastavení → Nahrávání**, první rozbalovací seznam, rozhoduje, které hovory se nahrávají; výchozí **Ručně** nahrává jen tehdy, když stisknete nahrávání na kartě hovoru. Viz [Nahrávání hovorů](/recordings/call-recording).
- Nahrávání začíná, když je hovor přijat, takže nepřijatý hovor nemá soubor.
- Modul **Nahrávání** musí být zapnutý v [Modulech](/application/modules).
- Nahrávky odstraňují limity v části **Uchovávání**; připnutá nahrávka se nikdy neodstraní.

## Schůzka v jiné aplikaci se nezachytila {#a-meeting-in-another-application-was-not-captured}

Viz [Zachytávání](/capture/).

- **Povolit zachytávání zvuku** v **Nastavení → Zachytávání** musí být zapnuté.
- Když je **Automatické spuštění** nastaveno na **Zeptat se mě** (výchozí), odpovězte na otázku, když se objeví; s volbou **Nikdy** stiskněte **Nahrát** sami.
- Použijte **Kontrolu** na stejné kartě: horní pruh se musí hýbat, když mluvíte, dolní, když něco hraje.
- Modul **Zachytávání** musí být zapnutý v [Modulech](/application/modules).

## Je nahrávka, ale chybí přepis nebo shrnutí {#there-is-a-recording-but-no-transcript-or-summary}

- Rozhovor se sám přepíše a zpracuje, jen pokud je v [Nastavení → Zpracování](/ai-processing/processing) zapnuto **Zpracovávat hovory automaticky**. Jinak o to požádejte v [okně nahrávek](/recordings/recordings-window).
- Musí existovat [rozpoznávač](/ai-processing/transcription) a [jazykový model](/ai-processing/processing#language-models) a každý musí na své adrese odpovídat.
- Když se dosáhne měsíční **Mez peněz** nebo **Mez tokenů**, automatická pravidla se zastaví až do začátku dalšího měsíce. Když o něco požádáte sami, nezastaví se to nikdy.
- Kroky v [Nastavení → Přehled](/interface/settings-overview) ukazují, co ještě zbývá nastavit.

## Po zavření okna telefon zmizel {#the-phone-disappeared-when-i-closed-the-window}

Se zapnutým **Nechat telefon běžet, když se zavře okno** telefon stále běží a hovory stále přicházejí. Ikona v oznamovací oblasti (na macOS v řádku nabídek) okno vrátí. Viz [Spuštění](/program/startup).

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
