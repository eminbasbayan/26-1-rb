import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setAuthError, setCredentials } from '../redux/authSlice';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../redux/apiSlice';

const schema = yup.object({
  username: yup
    .string()
    .min(3, 'Şifre en az 3 karakter olmalıdır.')
    .required('Username adresi zorunludur.'),
  password: yup
    .string()
    .min(6, 'Şifre en az 6 karakter olmalıdır.')
    .max(12, 'Şifre en fazla 12 karakter olmalıdır.')
    .required('Şifre zorunludur.'),
});

/**
 * Kurumsal giriş sayfası (yalnızca arayüz).
 */
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  async function onSubmit(data) {
    try {
      const response = await login(data).unwrap();
      dispatch(setCredentials(response));
    } catch {
      dispatch(setAuthError('Giriş işlemi sırasında hata oluştu'));
    }
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
                htmlFor="login-username"
                className="block text-sm font-medium text-slate-700"
              >
                Kurumsal e-posta
              </label>
              <input
                id="login-username"
                name="username"
                type="text"
                placeholder="ornek@sirket.com"
                {...register('username', { required: true })}
                className={
                  'mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10'
                }
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
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
                className={
                  'mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10'
                }
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              {isLoading ? 'Giriş Yapılıyor' : 'Giriş yap'}
            </button>
            {authState.error && (
              <p className="text-center text-sm text-red-500">
                {authState.error}
              </p>
            )}
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
