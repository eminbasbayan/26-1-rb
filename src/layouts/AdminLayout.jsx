import { Link, NavLink, Outlet } from 'react-router';
import {
  Bell,
  Boxes,
  ClipboardList,
  Grid2X2,
  LayoutDashboard,
  Search,
  ShieldCheck,
  ShoppingBag,
  Tags,
  Users,
} from 'lucide-react';

const adminNavItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/products', label: 'Ürünler', icon: ShoppingBag },
  { to: '/admin/categories', label: 'Kategoriler', icon: Tags },
  { to: '/admin/users', label: 'Kullanıcılar', icon: Users },
  { to: '/admin/orders', label: 'Siparişler', icon: ClipboardList },
];

const navClassName = ({ isActive }) =>
  [
    'flex min-h-11 shrink-0 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition',
    isActive
      ? 'bg-white text-slate-950 shadow-sm'
      : 'text-slate-300 hover:bg-white/10 hover:text-white',
  ].join(' ');

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-3 text-slate-900 sm:p-4 lg:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-1.5rem)] w-full max-w-7xl gap-3 lg:min-h-[calc(100vh-3rem)] lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="flex rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white shadow-sm lg:flex-col">
          <div className="flex min-w-44 items-center gap-3 lg:min-w-0">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-600 text-white"
              aria-hidden
            >
              <ShieldCheck size={22} />
            </span>
            <Link to="/admin" className="min-w-0 no-underline">
              <span className="block text-sm font-bold tracking-tight text-white">
                Admin Logo
              </span>
              <span className="block truncate text-xs font-medium text-slate-400">
                Kurumsal Portal
              </span>
            </Link>
          </div>

          <nav
            className="ml-3 flex flex-1 gap-2 overflow-x-auto lg:ml-0 lg:mt-8 lg:flex-col lg:overflow-visible"
            aria-label="Admin menüsü"
          >
            {adminNavItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={navClassName}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <Link
            to="/"
            className="mt-auto hidden items-center gap-2 rounded-xl border border-white/10 px-3 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white lg:flex"
          >
            <Grid2X2 size={18} />
            Siteye Dön
          </Link>
        </aside>

        <div className="flex min-w-0 flex-col gap-3">
          <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 shadow-sm sm:px-5">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700"
                aria-hidden
              >
                <Boxes size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-400">
                  Yönetim Paneli
                </p>
                <h1 className="text-base font-bold text-slate-950">
                  Mağaza Kontrol Merkezi
                </h1>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              <label className="hidden min-w-56 max-w-xs flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
                <Search size={17} />
                <input
                  type="search"
                  placeholder="Ürün, sipariş, kullanıcı ara"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </label>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                aria-label="Bildirimler"
              >
                <Bell size={18} />
              </button>

              <div className="flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-2 text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-fuchsia-600 text-xs font-bold">
                  A
                </span>
                <span className="hidden text-sm font-semibold sm:inline">
                  Admin
                </span>
              </div>
            </div>
          </header>

          <main className="min-h-[560px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
