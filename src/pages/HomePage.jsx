import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Package, ShieldCheck, ShoppingCart, Sparkles } from 'lucide-react';

const categoryLinks = [
  'Elektronik',
  'Aksesuar',
  'Erkek Giyim',
  'Kadın Giyim',
];

const serviceHighlights = [
  {
    title: 'Hızlı katalog',
    description: 'Ürünleri tek ekrandan inceleyip detay sayfasına geç.',
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: 'Kolay sepet',
    description: 'Beğendiğin ürünleri sepete ekle ve toplamı anında gör.',
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: 'Güvenli deneyim',
    description: 'Sade, anlaşılır ve responsive alışveriş akışı.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-700">
            <Sparkles className="h-3.5 w-3.5" />
            Yeni sezon ürünleri
          </span>

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_220px] md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ürün kataloğu
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                İhtiyacın olan ürünleri hızlıca keşfet, detaylarını incele ve
                beğendiklerini sepete ekleyerek alışveriş akışını tamamla.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Ürünleri İncele
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/cart"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Sepete Git
                  <ShoppingCart className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Öne çıkan ürün"
                className="mx-auto h-56 w-full object-contain"
              />
            </div>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Alışveriş adımları
          </h2>
          <div className="mt-5 space-y-4">
            {['Ürünü seç', 'Detayları incele', 'Sepete ekle'].map((step) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-fuchsia-700">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-slate-700">{step}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryLinks.map((category) => (
          <Link
            key={category}
            to="/products"
            className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-fuchsia-200 hover:text-fuchsia-700 hover:shadow-md"
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Neden Kurumsal Portal?
          </h2>
          <div className="mt-5 space-y-4">
            {serviceHighlights.map(({ title, description, icon }) => (
              <article key={title} className="flex gap-4 rounded-xl bg-slate-50 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-fuchsia-700 shadow-sm">
                  {icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Öne çıkan ürünler
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Katalogdan seçilen popüler ürünlere hızlı erişim.
              </p>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-800"
            >
              Tümünü gör
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {(featuredProducts.length ? featuredProducts : Array.from({ length: 3 })).map(
              (product, index) => (
                <Link
                  key={product?.id || index}
                  to={product?.id ? `/product-detail/${product.id}` : '/products'}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-fuchsia-200 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-32 items-center justify-center rounded-lg bg-white p-3">
                    {product ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div className="h-full w-full animate-pulse rounded-lg bg-slate-200" />
                    )}
                  </div>
                  <h3 className="mt-3 line-clamp-2 min-h-10 text-sm font-semibold text-slate-900">
                    {product?.title || 'Ürün yükleniyor'}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-fuchsia-700">
                    {product ? `${product.price} TL` : '...'}
                  </p>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
