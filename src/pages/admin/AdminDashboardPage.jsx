import {
  CalendarDays,
  PackageCheck,
  ShoppingCart,
  TrendingUp,
  Users,
  WalletCards,
} from 'lucide-react';

const stats = [
  {
    label: 'Toplam Ürün',
    value: '128',
    change: '+12 yeni',
    icon: PackageCheck,
    tone: 'bg-fuchsia-50 text-fuchsia-700',
  },
  {
    label: 'Aktif Sipariş',
    value: '36',
    change: '+8 bugün',
    icon: ShoppingCart,
    tone: 'bg-emerald-50 text-emerald-700',
  },
  {
    label: 'Kullanıcı',
    value: '2.4K',
    change: '+18%',
    icon: Users,
    tone: 'bg-sky-50 text-sky-700',
  },
  {
    label: 'Gelir',
    value: '₺84.920',
    change: '+24%',
    icon: WalletCards,
    tone: 'bg-amber-50 text-amber-700',
  },
];

const recentOrders = [
  { id: '#SP-1028', customer: 'Ayşe Demir', total: '₺1.249', status: 'Hazırlanıyor' },
  { id: '#SP-1027', customer: 'Mert Kaya', total: '₺799', status: 'Kargoda' },
  { id: '#SP-1026', customer: 'Zeynep Yılmaz', total: '₺2.140', status: 'Tamamlandı' },
  { id: '#SP-1025', customer: 'Can Arslan', total: '₺459', status: 'Yeni' },
];

const categories = [
  { name: 'Elektronik', percent: '42%' },
  { name: 'Giyim', percent: '28%' },
  { name: 'Aksesuar', percent: '18%' },
  { name: 'Ev & Yaşam', percent: '12%' },
];

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-fuchsia-700">Dashboard</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            Genel Bakış
          </h2>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
          <CalendarDays size={17} />
          Mayıs 2026
        </div>
      </div>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                  <strong className="mt-2 block text-2xl font-bold text-slate-950">
                    {stat.value}
                  </strong>
                </div>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.tone}`}
                  aria-hidden
                >
                  <Icon size={20} />
                </span>
              </div>
              <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-emerald-700">
                <TrendingUp size={16} />
                {stat.change}
              </p>
            </article>
          );
        })}
      </section>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <h3 className="text-base font-bold text-slate-950">Son Siparişler</h3>
            <span className="text-sm font-semibold text-fuchsia-700">Tümü</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-bold">Sipariş</th>
                  <th className="px-4 py-3 font-bold">Müşteri</th>
                  <th className="px-4 py-3 font-bold">Tutar</th>
                  <th className="px-4 py-3 font-bold">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{order.customer}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {order.total}
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">
            Kategori Dağılımı
          </h3>
          <div className="mt-4 space-y-4">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">
                    {category.name}
                  </span>
                  <span className="font-bold text-slate-950">
                    {category.percent}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-fuchsia-600"
                    style={{ width: category.percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
