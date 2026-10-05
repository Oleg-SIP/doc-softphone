---
title: Przetwarzanie
sidebar_position: 2
description: Automatyczne przetwarzanie rozmów, miesięczne granice wydatków, modele językowe, polecenia i reguły, które je uruchamiają.
---

**Ustawienia → Przetwarzanie** decyduje, co dzieje się z rozmową po jej nagraniu, który model wykonuje pracę i ile może to kosztować.

<Shot name="12_settings_processing" alt="Ustawienia → Przetwarzanie" />

## Przetwarzaj rozmowy automatycznie {#process-conversations-automatically}

- **Wyłączone:** nic się nie dzieje, dopóki nie poprosisz o to w [oknie nagrań](../recordings/recordings-window.md).
- **Włączone:** poniższe [reguły](#rules) działają same. To właśnie zamienia rozmowę w podsumowanie, kategorię i całą resztę bez naciskania czegokolwiek. Model w chmurze nalicza opłatę za każdy z tych kroków.

Pod polem wyboru program pokazuje, ile wydano w tym miesiącu i w ilu żądaniach, na przykład *W tym miesiącu: 40.492 tokenów, w 84 żądaniach, bez opłat.*

## Granice {#limits}

| Pole | Znaczenie |
| --- | --- |
| **Granica pieniędzy, miesięcznie** | Najwięcej, ile modele mogą kosztować w miesiącu. |
| **Granica tokenów, miesięcznie** | Najwięcej tokenów, ile mogą zużyć w miesiącu. |

Granice są dwie, bo miesiąc można liczyć w dwóch jednostkach. Obie są puste, dopóki ich nie wypełnisz. Gdy któraś zostanie osiągnięta, reguły automatyczne zatrzymują się do końca miesiąca. **To, o co prosisz sam, nigdy nie jest zatrzymywane.**

## Modele językowe {#language-models}

Modele, które czytają transkrypcję i piszą o niej. Naciśnij **Dodaj**, aby dodać model. Każdy jest na liście z nazwą, a pod nią z identyfikatorem modelu i adresem usługi, na przykład `qwen3-32b · http://llm.local:8000/v1`. Ten oznaczony jako **domyślny** jest używany domyślnie. Przycisk w formularzu modelu sprawdza, czy usługa naprawdę odpowiada, zanim zaczniesz na niej polegać.

- Model **na twoim komputerze** trzyma każdą rozmowę w budynku i nic nie kosztuje.
- Model w chmurze — OpenAI, Claude, Mistral, DeepSeek, Groq i inne — jest płatny za użycie. Program pokazuje cenę każdego wywołania w tokenach i w pieniądzach.

## Polecenia {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Ustawienia → Przetwarzanie: polecenia" />

*To, o co pytane są modele.* Każde polecenie przyszło z programem i każde jest twoje do zmiany — i do przywrócenia. Każde jest na liście z nazwą, a pod nią z tym, co pisze i w jakiej formie. Forma — **Odpowiedź**, **Pozycje**, **Etykiety**, **JSON**, **Proza**, **Sygnały** lub **Kryteria** — decyduje, jak odpowiedź jest przechowywana i pokazywana. Polecenia są opisane w [Personal Prompt Studio](prompt-studio.md). **Dodaj** tworzy twoje własne polecenie.

## Reguły {#rules}

<Shot name="12c_settings_processing_rules" alt="Ustawienia → Przetwarzanie: reguły" />

*To, co działa samo, w tej kolejności. Każda uruchamia się najwyżej raz na rozmowę.* Reguła to wiersz z polem wyboru, które ją włącza lub wyłącza, jej nazwą, a pod nią tym, co robi. **▲** i **▼** zmieniają kolejność. Program ma ich osiem:

| Reguła | Co robi | Kiedy |
| --- | --- | --- |
| **Zapisz każdą rozmowę** | Spisuje ją. | zawsze |
| **Podsumuj ją** | Prosi model o: **Podsumowanie**. | zawsze |
| **Sprowadź ją do jednego zdania** | Prosi model o: **Podsumowanie w jednym zdaniu**. | zawsze |
| **Przypisz ją do kategorii** | Prosi model o: **Kategoria**. | zawsze |
| **Oznacz ją** | Prosi model o: **Etykiety**. | zawsze |
| **Podnieś, co warte uwagi** | Prosi model o: **Sygnały ostrzegawcze**. | zawsze |
| **Oceń ją, jeśli to była sprzedaż** | Prosi model o: **Jakość sprzedaży**. | tylko jeśli kategoria to **Sprzedaż** |
| **Oceń ją, jeśli to było wsparcie** | Prosi model o: **Jakość wsparcia**. | tylko jeśli kategoria to **Wsparcie** |

Kolejność ma znaczenie: dwie ostatnie reguły potrzebują kategorii, którą ustawiła reguła przed nimi. **Dodaj** tworzy twoją własną regułę.

## Domyślne {#defaults}

**Przywróć domyślne** przywraca polecenia i reguły do postaci, w jakiej przyszły z programem, w bieżącym języku interfejsu. Twoje modele językowe pozostają nietknięte.

Polecenia i reguły dostarczone z programem zostają w języku, w którym były, gdy zmieniasz język interfejsu; **Przywróć domyślne** przenosi je do nowego. Każde polecenie jest wtedy oznaczone po prawej jako *zmienione*.
