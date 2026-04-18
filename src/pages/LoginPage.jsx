import { useForm } from "react-hook-form";

const inputClassName =
  'mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10';

/**
 * Kurumsal giriş sayfası (yalnızca arayüz).
 */
function LoginPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  console.log(errors);


  function onSubmit(data) {
    console.log(data);
  }


  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Hesabınıza giriş yapın
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Kurumsal hesabınızla devam edin.
            </p>
          </header>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-slate-700"
              >
                Kurumsal e-posta
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ornek@sirket.com"
                {...register('email', { required: true })}
                className={inputClassName}
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Şifre
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Şifremi unuttum
                </button>
              </div>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                {...register('password')}
                className={inputClassName}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Giriş yap
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Hesabınız yok mu?{' '}
          <a
            href="/register"
            className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2 hover:decoration-slate-900"
          >
            Kayıt olun
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
