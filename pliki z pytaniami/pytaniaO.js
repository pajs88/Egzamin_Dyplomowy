// Blok 1: Historia powszechna i teorie stosunków międzynarodowych
const bazaO1 = `ID;Pytanie
1;Jaki wpływ na współczesny świat miał europejski kolonializm? Które cechy współczesnego świata zostały ukształtowane w okresie europejskiego kolonializmu?
2;Wyjaśnij pojęcie "państwo upadłe/upadające/dysfunkcjonalne". Podaj przykłady takich państw i wskaż na zagrożenia dla bezpieczeństwa międzynarodowego, które te państwa generują.
3;Wymień rodzaje podmiotów stosunków międzynarodowych. Które z nich uznaje się za pierwotne i wiodące?
4;Wskaż podstawowe różnice między realistyczną i liberalną teorią stosunków międzynarodowych. Które z tych podejść dominuje w nauce o stosunkach międzynarodowych?
5;Wyjaśnij pojęcie "równowaga sił" w odniesieniu do stosunków międzynarodowych. Która z teorii SM uznaje równowagę sił za kluczową zasadę polityki międzynarodowej?
6;Proszę omówić główne założenia teorii systemu światowego Immanuela Wallersteina.
7;Przedstaw, czemu miał służyć i na jakich zasadach opierał się ład wersalski w Europie (1919-1939). Scharakteryzuj trzy problemy, których nierozwiązanie spowodowało, że ład wersalski nie zdołał w tym okresie odegrać roli, którą mu przeznaczono.
8;Scharakteryzuj co najmniej sześć cech reżimu totalitarnego. Wśród nich wskaż trzy cechy, które w ZSRR Stalina były spełnione w większym stopniu niż w III Rzeszy Hitlera.
9;Scharakteryzuj porównawczo trzy motywy popełniania zbrodni masowych przez III Rzeszę pod rządami Hitlera oraz przez Związek Radziecki pod rządami Stalina. Podaj przykłady tych zbrodni.
10;Przedstaw, na jakich traktatach międzynarodowych opierała swoje bezpieczeństwo Polska w okresie 1921-1939. Na czym polegała zmiana w polityce bezpieczeństwa Polski przeprowadzona w pierwszej połowie lat 30.? Wyjaśnij, dlaczego polityka ta w 1939 roku okazała się ostatecznie bezskuteczna.
11;Przedstaw politykę ZSRR wobec Niemiec, Wielkiej Brytanii i USA w czasie II wojny światowej – od współpracy z III Rzeszą w 1939 roku do zwycięstwa nad nią w 1945 roku.
12;Przedstaw, jak zmieniało się położenie Berlina w okresie zimnej wojny (1945-91). Wyjaśnij, dlaczego stał się on symbolem tego konfliktu w opinii publicznej Zachodu.`;

// Blok 2: Ekonomia i międzynarodowe stosunki ekonomiczne
const bazaO2 = `ID;Pytanie
1;Wymień główne formy międzynarodowej współpracy gospodarczej i pokrótce je scharakteryzuj.
2;Czym są zagraniczne inwestycje bezpośrednie i jakie jest ich znaczenie w gospodarce światowej?
3;Wymień co najmniej trzy spośród najważniejszych międzynarodowych organizacji o charakterze gospodarczym lub finansowym i omów działalność jednej z nich.
4;Czym jest i jaka jest rola OPEC na światowych rynkach ropy naftowej?
5;Czym był system z Bretton Woods i kiedy funkcjonował?`;

// Blok 3: Międzynarodowe studia bezpieczeństwa
const bazaO3 = `ID;Pytanie
1;Geopolityka – twórca, definicja, najważniejsze założenia.
2;Czy zgadza się Pani/Pan ze stwierdzeniem, że Traktat Wersalski z 1919 roku stanowi jedną z przyczyn wybuchu II Wojny Światowej – tak czy nie? Proszę uzasadnić swoją opinię.
3;Opisz obecną strategię Chin wobec Azji Centralnej w kontekście bezpieczeństwa i walki z ekstremizmem?
4;Wskaż na obecne problemy związane z zagrożeniami terrorystycznymi i ekstremistycznymi w regionie Azji Centralnej? W których krajach oraz w jakich uwarunkowaniach te zagrożenia powstają?
5;Proszę zdefiniować własnymi słowami pojęcie "cyberbezpieczeństwo". Jakie instytucje państwowe są odpowiedzialne za cyberbezpieczeństwo państwa?`;

// Blok 4: Instytucje i prawo międzynarodowe
const bazaO4 = `ID;Pytanie
1;Wyjaśnij pojęcie państwa prawnego.
2;Wymień i omów postaci winy umyślnej i nieumyślnej.
3;Pod jakimi warunkami państwo może użyć siły w stosunkach międzynarodowych?
4;Kiedy umowa międzynarodowa jest nieważna?
5;Zgodnie z Preambułą Karty Narodów Zjednoczonych Organizacja Narodów Zjednoczonych została powołana do życia, aby "chronić przyszłe pokolenia od klęski wojny (…)". Czy – Twoim zdaniem – cel ten został skutecznie zrealizowany? Uzasadnij swoje stanowisko.
6;Wskaż podstawowe środki pokojowego załatwiania sporów w prawie międzynarodowym. Scharakteryzuj jeden z środków pokojowego załatwiania sporów.
7;Wymień cztery zasady odnoszące się do granic jurysdykcji karnej w międzynarodowym prawie karnym. Scharakteryzuj jedną z zasad.
8;Scharakteryzuj podział obszarów morskich wg międzynarodowego prawa morza. Scharakteryzuj jeden z obszarów.`;

// Blok 5: Studia regionalne i globalne
const bazaO5 = `ID;Pytanie
1;Wskutek jakich procesów w drugiej połowie XX wieku doszło do ogromnego wzrostu liczby państw suwerennych oraz do wzmacniania znaczenia organizacji międzynarodowych?
2;Proszę podać kilka istotnych wyzwań/zagrożeń dla globalnej pozycji Zachodu w XXI wieku.
3;W jakim sensie, według Samuela Huntingtona, najważniejsze linie konfliktowe w świecie po-zimnowojennym mają charakter "cywilizacyjny"?
4;Czym jest determinizm geopolityczny?
5;Jakie argumenty można podać dla tezy, że w naszym czasie powstaje globalny porządek wielobiegunowy?`;

// Blok 6: Cyberbezpieczeństwo (Blok Specjalnościowy)
const bazaO6 = `ID;Pytanie
1;Wyjaśnij różnicę między atakiem DoS a atakiem DDoS. Podaj przykłady ataków DDoS i ich potencjalne konsekwencje.
2;Omów trzy podstawowe zasady bezpieczeństwa informacji (tzw. triada CIA). Wyjaśnij, dlaczego każdy z tych elementów jest ważny dla zapewnienia bezpieczeństwa informacji.
3;Wyjaśnij, czym jest wojna hybrydowa i podaj przykłady jej narzędzi. Jakie są główne cele wojny hybrydowej?
4;Wyjaśnij, czym jest Big Data i jakie są jego trzy główne cechy (model 3V). Podaj przykłady zastosowania Big Data w różnych dziedzinach.
5;Wyjaśnij, czym jest zarządzanie ryzykiem w kontekście bezpieczeństwa informacji. Jak należy podchodzić do kosztów wdrożenia systemów bezpieczeństwa?`;

//XD