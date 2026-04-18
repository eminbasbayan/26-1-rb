const inputClassName =
  'mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10';

/**
 * Kurumsal kayıt sayfası (yalnızca arayüz).
 */
function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Kurumsal hesap oluşturun
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Bilgilerinizi girerek kayıt olun.
            </p>
          </header>

          <form className="space-y-5" method="post" action="#">
            <div>
              <label
                htmlFor="register-name"
                className="block text-sm font-medium text-slate-700"
              >
                Ad soyad
              </label>
              <input
                id="register-name"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Adınız Soyadınız"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="block text-sm font-medium text-slate-700"
              >
                Kurumsal e-posta
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ornek@sirket.com"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="register-password"
                className="block text-sm font-medium text-slate-700"
              >
                Şifre
              </label>
              <input
                id="register-password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="En az 8 karakter"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="register-confirm"
                className="block text-sm font-medium text-slate-700"
              >
                Şifre tekrar
              </label>
              <input
                id="register-confirm"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Şifrenizi tekrar girin"
                className={inputClassName}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Hesap oluştur
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Zaten hesabınız var mı?{' '}
          <a
            href="/login"
            className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2 hover:decoration-slate-900"
          >
            Giriş yapın
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
