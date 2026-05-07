import { CartContext } from '../context/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, resetCart } from '../redux/cartSlice';
import Button from '../components/UI/Button';

const CartPage = () => {

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);

  // Sepetteki ürünlerin toplam fiyatını güvenli şekilde hesaplar.
  const totalPrice = cartItems.reduce((accumulator, item) => {
    const itemPrice = Number(item.price) || 0;
    return accumulator + itemPrice;
  }, 0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Sepetim
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Sepetinde <strong>{cartItems.length}</strong> ürün var.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h2 className="text-lg font-semibold text-slate-800">
            Sepetin şu an boş
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Ürünler sayfasından beğendiğin ürünleri sepete ekleyebilirsin.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 p-2">
                  <img
                    src={item.myImage}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                  <strong className="mt-3 text-lg text-fuchsia-700">
                    {Number(item.price).toFixed(2)} TL x {item.quantity}
                  </strong>
                  <button
                    type="button"
                    className="mt-3 w-fit rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Sil
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Sipariş Özeti
            </h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between text-slate-600">
                <span>Ürün adedi</span>
                <strong className="text-slate-900">{cartItems.length}</strong>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Ara toplam</span>
                <strong className="text-slate-900">
                  {totalPrice.toFixed(2)} TL
                </strong>
              </div>
              <div className="border-t border-slate-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">
                    Genel toplam
                  </span>
                  <strong className="text-xl text-fuchsia-700">
                    {totalPrice.toFixed(2)} TL
                  </strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {cartItems.length > 0 && (
        <Button
          variant="success"
          addClass="mt-2"
          onClick={() => dispatch(resetCart())}
        >
          Sepeti Temizle
        </Button>
      )}
    </section>
  );
};

export default CartPage;
