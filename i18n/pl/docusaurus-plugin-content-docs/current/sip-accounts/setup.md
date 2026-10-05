---
title: Konfigurowanie konta SIP
sidebar_position: 1
description: Połącz AI Softphone z centralą IP lub operatorem SIP w zakładce Ustawienia → Konta.
---

AI Softphone działa z każdą centralą IP i każdym operatorem SIP. Możesz być zalogowany na tylu kontach (liniach), ile masz, a każde konto ma własne ustawienia.

Otwórz **Ustawienia → Konta**.

<Shot name="05_settings_accounts" alt="Ustawienia → Konta: dwa konta, oba zarejestrowane" />

## Lista kont {#the-list-of-accounts}

Każde konto to wiersz z:

- **polem wyboru**, które włącza lub wyłącza konto;
- **kropką**, która jest zielona, gdy konto jest zarejestrowane w centrali;
- nazwą, a pod nią `użytkownik@serwer`;
- przyciskiem **Rozłącz**, który wylogowuje konto z centrali;
- przyciskami **▲** i **▼**, które przesuwają konto w górę lub w dół listy. Plakietki kont w [oknie głównym](../interface/main-window.md) mają tę samą kolejność.

Przycisk **Dodaj** w prawym górnym rogu dodaje konto. Kliknij wiersz, aby otworzyć pod nim formularz.

## Dodawanie konta {#adding-an-account}

<Shot name="05d_account_add" alt="Pusty formularz nowego konta" />

Naciśnij **Dodaj**. Pod listą otwiera się pusty formularz z kursorem w polu **Nazwa (opcjonalnie)**. Wypełnij poniższe pola, otwórz **Ustawienia serwera**, jeśli centrala ich wymaga, i naciśnij **Zapisz**. Nowe konto zaczyna od zwykłych wartości: UDP na porcie 5060, rejestracja odnawiana co 300 sekund.

## Formularz konta {#the-account-form}

<Shot name="05b_account_edit" alt="Formularz konta" />

| Pole | Co wpisać |
| --- | --- |
| **Nazwa (opcjonalnie)** | Nazwa pokazywana na plakietce konta w oknie głównym i przy jego połączeniach. Jeśli jest pusta, konto pokazuje się jako `użytkownik@serwer`. |
| **Nazwa użytkownika** | Nazwa użytkownika lub numer wewnętrzny nadany przez centralę lub operatora. |
| **Hasło** | Hasło do niej. Po powrocie do formularza pole jest puste. Hasło jest przechowywane w pęku kluczy komputera, nigdy w pliku ustawień. |
| **Adres serwera** | Adres centrali lub serwera SIP operatora, na przykład `pbx.example.com`. |
| **Ustawienia serwera** | Rozwija rzadziej używane ustawienia połączenia; zobacz niżej. |
| **Odbieraj automatycznie** | W sekcji **Odbieranie**: odbiera połączenia przychodzące na tym koncie bez naciskania czegokolwiek. Domyślnie wyłączone. |

Naciśnij **Zapisz**, aby zachować zmiany. **Anuluj** je odrzuca, a **Usuń** usuwa konto.

Gdy kropka przy koncie jest zielona, konto jest zarejestrowane i pokazuje to też jego plakietka w oknie głównym. Jeśli pozostaje szara lub czerwona, otwórz [Diagnostykę](../troubleshooting/diagnostics.md): zakładka **SIP** pokazuje żądanie `REGISTER` i odpowiedź serwera.

## Ustawienia serwera {#server-settings}

Większość central niczego tu nie potrzebuje. Naciśnij **Ustawienia serwera**, aby je pokazać; ten sam przycisk zmienia się wtedy w **Ukryj ustawienia serwera**.

<Shot name="05c_account_server_settings" alt="Ustawienia serwera konta, rozwinięte" />

| Pole | Domyślnie | Co to jest |
| --- | --- | --- |
| **Użytkownik uwierzytelniania** | puste | Nazwa, pod którą centrala sprawdza hasło, jeśli różni się od **Nazwa użytkownika**. Na obrazku numer wewnętrzny to `201`, a centrala uwierzytelnia go jako `biuro201`. |
| **Transport** | UDP | Protokół połączenia z serwerem. Lista rozwijana. |
| **Port** | 5060 | Port serwera. |
| **Proxy wychodzące** | puste | Proxy, przez które musi przejść każde żądanie, jeśli operator je podaje. |
| **Registrar** | puste | Adres, pod którym należy się rejestrować, jeśli nie jest to **Adres serwera**. |
| **Ponowna rejestracja, sekundy** | 300 | Jak często telefon odnawia rejestrację. |
| **Tony klawiatury** | Strumień dźwięku | Jak tony klawiatury są wysyłane do centrali. Lista rozwijana. Zmieniaj ją tylko wtedy, gdy centrala nie słyszy tonów. |

Kodeków oferowanych przez telefon nie ustawia się dla każdego konta osobno; są w [Ustawieniach połączeń](calls.md#audio-formats).
