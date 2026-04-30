import { Link, NavLink } from "react-router";

const navClassName =
    "rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900";

function Header({ cartItems }) {
    console.log(cartItems);



    /*  const cartItemCount = 2; */

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm supports-backdrop-filter:bg-white/90">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
                <Link
                    to="/"
                    className="flex shrink-0 items-center gap-2.5 text-slate-900 no-underline"
                >
                    <span
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold tracking-tight text-white"
                        aria-hidden
                    >
                        KP
                    </span>
                    <span className="hidden text-base font-semibold tracking-tight sm:inline">
                        Kurumsal Portal
                    </span>
                </Link>

                <nav
                    className="flex flex-1 items-center justify-end gap-1 sm:justify-center sm:gap-2"
                    aria-label="Ana menü"
                >
                    <NavLink to="/" className={({ isActive }) => isActive ? `${navClassName} text-fuchsia-700!` : navClassName} >
                        Ana Sayfa
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? `${navClassName} text-fuchsia-700!` : navClassName} >
                        Ürünler
                    </NavLink>
                </nav>

                <div className="flex shrink-0 items-center gap-2">
                    <Link
                        to="/cart"
                        className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                        Sepet
                        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-fuchsia-600 px-1 text-xs font-semibold leading-none text-white">
                            {cartItems.length}
                        </span>
                    </Link>
                    <Link
                        to="/login"
                        className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                        Giriş
                    </Link>
                    <Link
                        to="/register"
                        className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                    >
                        Kayıt ol
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
