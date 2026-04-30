import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Ad soyad zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("E-posta adresi zorunludur."),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır.")
    .max(12, "Şifre en fazla 12 karakter olmalıdır.")
    .required("Şifre zorunludur."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor.")
    .required("Şifre tekrarı zorunludur."),
});

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10";

/**
 * Kurumsal kayıt sayfası (react-hook-form + yup).
 */
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

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

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="register-name"
                className="block text-sm font-medium text-slate-700"
              >
                Ad soyad
              </label>
              <input
                id="register-name"
                type="text"
                autoComplete="name"
                placeholder="Adınız Soyadınız"
                {...register("fullName")}
                className={inputClassName}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
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
                type="email"
                autoComplete="email"
                placeholder="ornek@sirket.com"
                {...register("email")}
                className={inputClassName}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
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
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                {...register("password")}
                className={inputClassName}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
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
                type="password"
                autoComplete="new-password"
                placeholder="Şifrenizi tekrar girin"
                {...register("confirmPassword")}
                className={inputClassName}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
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
          Zaten hesabınız var mı?{" "}
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
