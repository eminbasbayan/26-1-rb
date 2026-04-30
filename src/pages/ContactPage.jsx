const ContactPage = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    İletişim
                </h1>
                <p className="mt-4 text-sm text-slate-600 sm:text-base">
                    Bizimle aşağıdaki kanallardan iletişime geçebilirsin.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <h2 className="text-sm font-semibold text-slate-900">E-posta</h2>
                        <p className="mt-2 text-sm text-slate-600">destek@kurumsalportal.com</p>
                    </article>
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <h2 className="text-sm font-semibold text-slate-900">Telefon</h2>
                        <p className="mt-2 text-sm text-slate-600">+90 (212) 000 00 00</p>
                    </article>
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                        <h2 className="text-sm font-semibold text-slate-900">Adres</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Maslak Mahallesi, Teknoloji Caddesi No:10, Sarıyer / İstanbul
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
