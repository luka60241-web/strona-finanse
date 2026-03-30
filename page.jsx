export default function FinanceAffiliateLanding() {
  const offers = [
    {
      title: "Konto osobiste",
      subtitle: "Premia za otwarcie konta i aktywność",
      bonus: "Do 500 zł premii",
      features: ["0 zł za prowadzenie przy spełnieniu warunków", "Karta i aplikacja mobilna", "Szybki proces online"],
      cta: "Przejdź do oferty",
      href: "#twoj-link-1",
      badge: "Popularne",
    },
    {
      title: "Konto oszczędnościowe",
      subtitle: "Promocyjne oprocentowanie dla nowych środków",
      bonus: "Wysokie oprocentowanie",
      features: ["Elastyczny dostęp do środków", "Bezpieczne oszczędzanie", "Załóż online w kilka minut"],
      cta: "Sprawdź szczegóły",
      href: "#twoj-link-2",
      badge: "Oszczędzanie",
    },
    {
      title: "Pożyczka gotówkowa",
      subtitle: "Szybka decyzja i wygodny wniosek online",
      bonus: "Minimum formalności",
      features: ["Wniosek bez wychodzenia z domu", "Jasne warunki", "Porównanie najważniejszych korzyści"],
      cta: "Zobacz ofertę",
      href: "#twoj-link-3",
      badge: "Szybka decyzja",
    },
  ];

  const steps = [
    {
      title: "Porównaj oferty",
      text: "Przejrzyj najważniejsze warunki i wybierz rozwiązanie dopasowane do Twoich potrzeb.",
    },
    {
      title: "Kliknij w link",
      text: "Po przejściu do oferty zostaniesz przekierowany na stronę partnera finansowego.",
    },
    {
      title: "Złóż wniosek online",
      text: "Cały proces zwykle odbywa się przez internet, szybko i wygodnie.",
    },
  ];

  const faq = [
    {
      q: "Czy korzystanie z tej strony coś kosztuje?",
      a: "Nie. Korzystanie z zestawienia ofert jest bezpłatne. Możesz samodzielnie przejść do wybranej oferty i zapoznać się z warunkami partnera.",
    },
    {
      q: "Skąd pochodzą linki?",
      a: "Na stronie mogą znajdować się linki afiliacyjne. Oznacza to, że mogę otrzymać prowizję, jeśli skorzystasz z oferty przez jeden z linków — bez dodatkowych kosztów dla Ciebie.",
    },
    {
      q: "Czy to jest doradztwo finansowe?",
      a: "Nie. Strona ma charakter informacyjny i promocyjny. Przed podjęciem decyzji zapoznaj się z dokumentami i warunkami oferty na stronie partnera.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#start" className="text-xl font-semibold tracking-tight">
            Finanse<span className="text-slate-500">Plus</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#oferty" className="hover:text-slate-600">Oferty</a>
            <a href="#jak-to-dziala" className="hover:text-slate-600">Jak to działa</a>
            <a href="#faq" className="hover:text-slate-600">FAQ</a>
            <a href="#kontakt" className="hover:text-slate-600">Kontakt</a>
          </nav>
          <a
            href="#oferty"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
          >
            Zobacz oferty
          </a>
        </div>
      </header>

      <main id="start">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.10),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
                Oferty kont i pożyczek w jednym miejscu
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Profesjonalna strona do promocji <span className="text-slate-600">ofert finansowych</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                Przejrzysta, nowoczesna i gotowa do podpięcia Twoich linków afiliacyjnych. Wystarczy podmienić linki, nazwy ofert i opublikować stronę.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#oferty"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:translate-y-[-1px]"
                >
                  Przejdź do ofert
                </a>
                <a
                  href="#disclaimer"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Zobacz ważne informacje
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <span>✓ Nowoczesny wygląd</span>
                <span>✓ Sekcja afiliacyjna</span>
                <span>✓ Miejsce na Twoje linki</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-900 p-6 text-white">
                  <p className="text-sm text-slate-300">Przykładowa karta</p>
                  <h3 className="mt-2 text-2xl font-semibold">Konto z premią</h3>
                  <p className="mt-3 text-sm text-slate-300">Promocja dla nowych klientów banku</p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Korzyść</p>
                      <p className="text-3xl font-bold">500 zł</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Oferta online</span>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold">Przejrzyste CTA</p>
                    <p className="mt-2 text-sm text-slate-600">Wyraźne przyciski zachęcają do przejścia do oferty.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold">Sekcja zaufania</p>
                    <p className="mt-2 text-sm text-slate-600">Miejsce na wyjaśnienie, jak działa strona i afiliacja.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="oferty" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Polecane oferty</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Najczęściej wybierane propozycje</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Tutaj wstawisz swoje programy partnerskie. Każda karta zawiera miejsce na opis, korzyści i przycisk z linkiem afiliacyjnym.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.title} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {offer.badge}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">{offer.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{offer.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Główna korzyść</p>
                  <p className="mt-2 text-2xl font-bold">{offer.bonus}</p>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={offer.href}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition group-hover:scale-[1.01]"
                >
                  {offer.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="jak-to-dziala" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Jak to działa</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Prosty proces dla odwiedzających</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Dlaczego ta strona działa</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Budzi zaufanie i prowadzi użytkownika do kliknięcia</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-5">
                  <h3 className="font-semibold">Jasny układ</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Najważniejsze informacje są widoczne od razu: korzyść, opis i przycisk działania.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <h3 className="font-semibold">Profesjonalny wygląd</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Nowoczesny layout zwiększa wiarygodność i poprawia odbiór oferty.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <h3 className="font-semibold">Miejsce na treści SEO</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Możesz dodać opisy ofert, poradniki i rankingi, by pozyskiwać ruch z Google.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <h3 className="font-semibold">Transparentność</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Sekcja informacyjna wyjaśnia użytkownikowi, że linki mogą być afiliacyjne.</p>
                </div>
              </div>
            </div>

            <div id="kontakt" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Kontakt / O mnie</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">Dodaj swoją markę</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                W tym miejscu wpiszesz krótko, kim jesteś i dlaczego warto korzystać z Twojej strony. To wzmacnia wiarygodność i pomaga zwiększyć konwersję.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-700">
                <div className="rounded-2xl bg-slate-50 p-4">Twoje imię / nazwa marki</div>
                <div className="rounded-2xl bg-slate-50 p-4">adres@email.pl</div>
                <div className="rounded-2xl bg-slate-50 p-4">Instagram / TikTok / YouTube / Facebook</div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Najczęstsze pytania</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer id="disclaimer" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Ważna informacja</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Ta strona ma charakter informacyjno-promocyjny. Umieszczone na niej treści nie stanowią porady finansowej ani rekomendacji w rozumieniu przepisów prawa. Przed skorzystaniem z oferty zapoznaj się z regulaminem, tabelą opłat i warunkami partnera.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ujawnienie afiliacji</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Niektóre linki na tej stronie mogą być linkami afiliacyjnymi. Oznacza to, że mogę otrzymać wynagrodzenie od partnera, jeśli użytkownik skorzysta z oferty po przejściu przez link. Nie wpływa to na cenę dla użytkownika.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            © 2026 FinansePlus. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
}
