import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ToastContainer } from 'react-toastify';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';

const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminDashboardPage = lazy(
  () => import('./pages/admin/AdminDashboardPage'),
);
const AdminSectionPage = lazy(() => import('./pages/admin/AdminSectionPage'));

const adminSections = {
  products: {
    title: 'Ürünler',
    description: 'Ürün kartlarını, fiyatları ve stok durumlarını yönetin.',
    columns: ['Ürün', 'Kategori', 'Fiyat', 'Stok'],
    rows: [
      ['Fjallraven Sırt Çantası', 'Giyim', '₺1.299', '42 adet'],
      ['Mens Cotton Jacket', 'Giyim', '₺899', '18 adet'],
      ['Solid Gold Petite Micropave', 'Aksesuar', '₺2.499', '7 adet'],
      ['WD 2TB Elements', 'Elektronik', '₺3.199', '25 adet'],
    ],
  },
  categories: {
    title: 'Kategoriler',
    description: 'Mağaza vitrininde görünen ürün kategorilerini düzenleyin.',
    columns: ['Kategori', 'Ürün Sayısı', 'Durum', 'Vitrin'],
    rows: [
      ['Elektronik', '46', 'Aktif', 'Öne çıkan'],
      ['Giyim', '58', 'Aktif', 'Standart'],
      ['Aksesuar', '16', 'Aktif', 'Standart'],
      ['Ev & Yaşam', '8', 'Taslak', 'Kapalı'],
    ],
  },
  users: {
    title: 'Kullanıcılar',
    description:
      'Müşteri hesaplarını, rollerini ve son aktivitelerini takip edin.',
    columns: ['Kullanıcı', 'E-posta', 'Rol', 'Durum'],
    rows: [
      ['Ayşe Demir', 'ayse@example.com', 'Müşteri', 'Aktif'],
      ['Mert Kaya', 'mert@example.com', 'Editör', 'Aktif'],
      ['Zeynep Yılmaz', 'zeynep@example.com', 'Müşteri', 'Aktif'],
      ['Can Arslan', 'can@example.com', 'Müşteri', 'Beklemede'],
    ],
  },
  orders: {
    title: 'Siparişler',
    description:
      'Yeni siparişleri, kargo süreçlerini ve ödeme durumlarını izleyin.',
    columns: ['Sipariş', 'Müşteri', 'Tutar', 'Durum'],
    rows: [
      ['#SP-1028', 'Ayşe Demir', '₺1.249', 'Hazırlanıyor'],
      ['#SP-1027', 'Mert Kaya', '₺799', 'Kargoda'],
      ['#SP-1026', 'Zeynep Yılmaz', '₺2.140', 'Tamamlandı'],
      ['#SP-1025', 'Can Arslan', '₺459', 'Yeni'],
    ],
  },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/product-detail/:urunId',
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute roles={['admin', 'moderator']}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: 'products',
        element: <AdminSectionPage {...adminSections.products} />,
      },
      {
        path: 'categories',
        element: <AdminSectionPage {...adminSections.categories} />,
      },
      {
        path: 'users',
        element: <AdminSectionPage {...adminSections.users} />,
      },
      {
        path: 'orders',
        element: <AdminSectionPage {...adminSections.orders} />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<span>Sayfa Yükleniyor...</span>}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
