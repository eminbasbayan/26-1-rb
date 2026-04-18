/**
 * 404 sayfası — login/register ile aynı kurumsal Tailwind düzeni.
 */
function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm shadow-slate-200/60">
          <p
            className="text-6xl font-bold tabular-nums tracking-tight text-slate-200 select-none"
            aria-hidden
          >
            404
          </p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
            Sayfa bulunamadı
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Ana sayfaya dön
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
