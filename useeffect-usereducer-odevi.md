## Proje Konusu

Bu ödevde öğrencilerden bir **Doğal Olay Takip Paneli** geliştirmeleri beklenmektedir.

Uygulama; bir API'den doğal olay verilerini çekebilen, olayları listeleyebilen, arayabilen, kategoriye göre filtreleyebilen, kullanıcı tarafından yeni kayıt eklenmesine izin verebilen ve tüm bu akışı düzenli bir state yapısıyla yönetebilen bir panel olmalıdır.

Bu proje içinde hem `useEffect` hem de `useReducer` birlikte kullanılmalıdır.

## Kullanılacak Açık Kaynak API

Bu proje için önerilen açık kaynak API: **NASA EONET API**

EONET, NASA'nın doğal olayları takip etmek için sunduğu açık kaynak bir API servisidir.

Bu API; yangın, fırtına, sel, volkan, kuraklık gibi doğal olayları getirir. Bu yüzden proje teması klasik etkinlik paneli yerine doğal olay takip paneli olarak düşünülmelidir.

## API Linkleri

- Ana sayfa: https://eonet.gsfc.nasa.gov/
- Dokümantasyon: https://eonet.gsfc.nasa.gov/docs/v3
- Olaylar endpoint'i: https://eonet.gsfc.nasa.gov/api/v3/events
- Kategoriler endpoint'i: https://eonet.gsfc.nasa.gov/api/v3/categories

## Öğrenciler API'yi Nasıl Kullanabilir?

### 1. İlk veri çekme

Uygulama açıldığında `useEffect` içinde aşağıdaki endpoint'e istek atılabilir:

`https://eonet.gsfc.nasa.gov/api/v3/events?status=open&days=30&limit=20`

Bu istek:

- açık durumdaki olayları getirir
- son 30 gün içindeki kayıtları listeler
- en fazla 20 kayıt döndürür

### 2. Gelen veriyi projeye uygun hale getirme

NASA EONET verisi doğrudan sizin arayüz yapınıza uymayabilir. Bu yüzden veriyi dönüştürmeniz beklenir.

Örneğin API'den gelen bir kayıt şu alanlara dönüştürülebilir:

- `id` → `event.id`
- `title` → `event.title`
- `category` → `event.categories[0]?.title`
- `date` → `event.geometry[0]?.date`
- `description` → `event.description`

Örnek dönüştürme:

```js
const formattedEvents = data.events.map((event) => ({
  id: event.id,
  title: event.title,
  category: event.categories[0]?.title || "Bilinmiyor",
  date: event.geometry[0]?.date || "Tarih bilgisi yok",
  description: event.description || "Açıklama bulunmuyor",
}));
```

### 3. useEffect içinde örnek kullanım

Öğrenciler veriyi aşağıdaki mantıkla çekebilir:

```jsx
useEffect(() => {
  const controller = new AbortController();

  dispatch({ type: "FETCH_START" });

  fetch("https://eonet.gsfc.nasa.gov/api/v3/events?status=open&days=30&limit=20", {
    signal: controller.signal,
  })
    .then((res) => res.json())
    .then((data) => {
      const formattedEvents = data.events.map((event) => ({
        id: event.id,
        title: event.title,
        category: event.categories[0]?.title || "Bilinmiyor",
        date: event.geometry[0]?.date || "Tarih bilgisi yok",
        description: event.description || "Açıklama bulunmuyor",
      }));

      dispatch({ type: "FETCH_SUCCESS", payload: formattedEvents });
    })
    .catch((error) => {
      if (error.name !== "AbortError") {
        dispatch({ type: "FETCH_ERROR", payload: "Veriler alınamadı." });
      }
    });

  return () => {
    controller.abort();
  };
}, []);
```

### 4. Kategori listesini oluşturma

Öğrenciler kategori seçimi için iki farklı yol izleyebilir:

- doğrudan `events` verisi içinden benzersiz kategorileri üretmek
- ayrı olarak `https://eonet.gsfc.nasa.gov/api/v3/categories` endpoint'inden kategori listesini çekmek

Daha pratik olan yöntem, ilk aşamada `events` içinden kategori üretmektir.

### 5. Arama ve filtreleme

Arama ve filtreleme reducer state'i ile birlikte çalışmalıdır.

Örneğin:

- kullanıcı bir kelime yazdığında `SET_SEARCH_TERM`
- kategori seçtiğinde `SET_CATEGORY`
- ekranda gösterilecek liste ise `events` üzerinden filtrelenmiş şekilde hesaplanabilir

### 6. Yeni kayıt ekleme

NASA API sadece veri kaynağı olarak kullanılabilir. Öğrenciler kullanıcı tarafından eklenen kayıtları kendi uygulama state'ine eklemelidir.

Yani:

- API'den gelen kayıtlar başlangıç verisi olur
- form ile eklenen kayıtlar `ADD_EVENT` action'ı ile reducer içine eklenir
- istenirse bu kullanıcı kayıtları `localStorage` içinde saklanabilir

## Proje Senaryosu

Bir gözlem merkezi için basit bir doğal olay takip paneli hazırlıyorsunuz. Panelde kullanıcı:

- güncel doğal olayları görebilmeli
- olayları isim bazlı arayabilmeli
- olayları kategoriye göre filtreleyebilmeli
- kendi not niteliğinde yeni olay kaydı ekleyebilmeli
- bir kaydı silebilmeli
- veriler yüklenirken loading bilgisi görebilmeli
- hata durumunda bilgilendirilebilmeli

## Amaç

Bu ödevin amacı, öğrencinin şu konuları birlikte kullanabilmesini sağlamaktır:

- `useEffect` ile veri çekme ve yan etki yönetimi
- cleanup mantığını doğru kullanma
- `useReducer` ile birbiriyle ilişkili state'leri tek merkezden yönetme
- form, filtreleme, modal ve listeleme gibi birden fazla özelliği aynı projede birleştirme

## Görev Tanımı

Aşağıdaki özelliklere sahip bir React uygulaması geliştirin:

1. Uygulama ilk açıldığında NASA EONET API'den veri çekin.
2. Veri çekme işlemi `useEffect` ile yapılsın.
3. Veri çekilirken ekranda bir loading mesajı gösterilsin.
4. Veri çekme başarısız olursa kullanıcıya bir hata mesajı gösterilsin.
5. Tüm ana state yapısı `useReducer` ile yönetilsin.
6. Kullanıcı yeni bir kayıt ekleyebilsin.
7. Kullanıcı bir kaydı silebilsin.
8. Silme işlemi doğrudan yapılmasın; önce bir onay kutusu veya modal açılsın.
9. Kullanıcı olayları isim bazlı arayabilsin.
10. Kullanıcı olayları kategoriye göre filtreleyebilsin.
11. Arama ve kategori filtresi aynı anda çalışabilsin.
12. İstenirse kullanıcı tarafından eklenen kayıtlar `localStorage` ile saklanabilsin.

## Teknik Şartlar

Projede aşağıdaki kullanımlar zorunludur:

### 1. useEffect Kullanımı

`useEffect` en az iki farklı amaç için kullanılmalıdır:

- ilk render anında API isteği atmak
- bir yan etkiyi temizlemek veya senkronize etmek

Bu projede en uygun örneklerden biri `AbortController` ile API isteğini temizlemektir.

İkinci kullanım için öğrenciler isterse:

- arama işlemini `setTimeout` ile geciktirebilir
- cleanup ile timeout temizleyebilir
- ya da modal açıkken interval kurup kapandığında interval'i temizleyebilir

### 2. useReducer Kullanımı

Aşağıdaki state'lerin reducer içinde yönetilmesi beklenir:

- `events`
- `isLoading`
- `error`
- `searchTerm`
- `selectedCategory`
- `isDeleteModalOpen`
- `selectedEvent`

Reducer içinde en az şu action tipleri yer almalıdır:

- `FETCH_START`
- `FETCH_SUCCESS`
- `FETCH_ERROR`
- `ADD_EVENT`
- `OPEN_DELETE_MODAL`
- `CLOSE_DELETE_MODAL`
- `DELETE_EVENT`
- `SET_SEARCH_TERM`
- `SET_CATEGORY`

## Arayüzde Olması Gerekenler

Uygulama ekranında en az şu bölümler bulunmalıdır:

- sayfa başlığı
- kayıt ekleme formu
- arama input'u
- kategori seçme alanı
- olay listesi
- loading mesajı
- hata mesajı
- silme onay modal'i veya popup'ı

## Beklenen Davranışlar

- Uygulama ilk açıldığında veriler otomatik gelmelidir.
- Loading bitmeden liste gösterilmemelidir.
- Hata varsa kullanıcı ne olduğunu anlayabilmelidir.
- Boş alanlarla kayıt eklenememelidir.
- Silme onayı alınmadan kayıt silinmemelidir.
- Filtre sonucunda uygun kayıt yoksa bilgilendirme mesajı gösterilmelidir.

## Dosyalama Önerisi

Öğrenciler isterlerse projeyi aşağıdaki gibi parçalayabilir:

- `EventPage.jsx`
- `EventForm.jsx`
- `EventList.jsx`
- `EventCard.jsx`
- `DeleteModal.jsx`
- `eventReducer.js`

Bu yapı zorunlu değildir, ancak proje okunabilirliğini artırır.

## Değerlendirme Kriterleri

Çalışmalar şu başlıklara göre değerlendirilecektir:

- `useEffect` doğru yerde kullanılmış mı?
- dependency mantığı doğru kurulmuş mu?
- cleanup function gerçek bir ihtiyacı çözüyor mu?
- `useReducer` seçimi mantıklı ve düzenli mi?
- action isimleri ve reducer yapısı okunabilir mi?
- UI akışında loading, hata, ekleme, silme ve filtreleme düzgün çalışıyor mu?
- component yapısı temiz ve parçalı mı?

## Bonus İstekler

Aşağıdaki özelliklerden en az birini yapan öğrencilere bonus verilebilir:

- olayları tarihe göre sıralama
- sadece belirli kategorileri öne çıkarma
- `localStorage` ile veriyi koruma
- "Tüm filtreleri temizle" butonu
- hata durumunda "Tekrar Dene" butonu

## Teslimde Sorulacak Kısa Sorular

Öğrenciler kod tesliminin yanında şu soruları da kısaca cevaplamalıdır:

1. Bu projede neden birden fazla `useState` yerine `useReducer` kullandınız?
2. `useEffect` hangi iş için kullanıldı?
3. Yazdığınız cleanup function hangi problemi önledi?
4. Arama ve filtreleme reducer içinde mi yoksa türetilmiş veri olarak mı çözüldü? Neden?

## Özet

Bu ödev, tek bir component içinde dağınık state kullanmak yerine daha planlı bir state yönetimi kurmayı; aynı zamanda `useEffect` ile veri çekme ve cleanup mantığını gerçek bir proje senaryosu içinde uygulamayı hedeflemektedir.
