import { Link } from "react-router";

const ProductDetailPage = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2">
                <div className="flex items-center justify-center rounded-xl bg-slate-50 p-6">
                    <img
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
                        alt="Ürün görseli"
                        className="h-80 w-full max-w-sm object-contain"
                    />
                </div>

                <div className="flex flex-col">
                    <span className="w-fit rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-700">
                        Ürün Detayı
                    </span>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Örnek Ürün Adı
                    </h1>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        Bu alan ürün açıklaması için hazırlandı. Ürünün özellikleri, kullanım
                        bilgileri ve kullanıcıya yardımcı olacak detaylar burada
                        gösterilebilir.
                    </p>

                    <div className="mt-6">
                        <strong className="text-3xl font-bold text-fuchsia-700">999.90 TL</strong>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                            Sepete Ekle
                        </button>
                        <Link
                            to="/products"
                            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            Ürünlere Dön
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailPage;
