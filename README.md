<h1>🧾 Job Tracker</h1>

Job Tracker App, kullanıcıların iş başvurularını ekleyip, takip edebildiği bir React + Redux Toolkit tabanlı uygulamadır. Uygulama içerisinde filtreleme, sıralama, arama, başvuru durumu seçimi gibi özellikler bulunmaktadır. Geliştirme ortamında JSON Server ile sahte API kullanılmıştır.

<h1>🚀 Özellikler</h1>

- Yeni iş başvurusu ekleme
- Kelimeye göre iş arama (debounce ile optimize)
-  Başvuru durumuna göre filtreleme (Mülakat, Reddedildi, Beklemede)
-  İş türüne göre filtreleme (Full-time, Part-time, Remote)
-  Tarihe veya alfabetik sıraya göre sıralama
-  Başvuruları düzenleme ve silme (opsiyonel)
-  API'den veri çekme (axios ile)
-  Yükleniyor ve hata durumlarının kullanıcıya gösterilmesi
-  URL parametreleri ile filtre ve arama senkronizasyonu
-  State yönetimi için Redux Toolkit kullanımı
-  Kullanıcıya geri bildirim için react-toastify kullanımı

<h1>🛠️ Kullanılan Teknolojiler</h1>

- React
- Redux Toolkit
- React Router
- TailwindCSS
- Axios
- JSON Server (Mock API)
- React Toastify

<h1>📝 Bilgilendirme</h1>

** API hataları Error bileşeni ile yakalanıyor.

** Veriler jobs endpoint'inden axios ile çekiliyor.

** Kullanıcı etkileşimleri için Toastify ile bildirimler gösteriliyor.

** Arama kutusunda debounce tekniği kullanılarak performans artırılıyor.