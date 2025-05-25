import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>SLAMET – BMW Specialist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <img src="/logo.png" alt="Logo Bengkel Slamet" className={styles.logo} />
        <h1>SLAMET – BMW Specialist</h1>
        <p className={styles.slogan}>Bengkel Rumahan Spesialis BMW – Home Service Panggilan</p>
        <a href="https://wa.me/6281219252290" className={styles.whatsappBtn} target="_blank">Hubungi via WhatsApp</a>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Layanan Kami</h2>
          <ul>
            <li>✅ Servis rutin & berkala (ganti oli, filter, tune-up)</li>
            <li>✅ Perbaikan ringan hingga diagnosa mesin</li>
            <li>✅ Scan & reset error code (OBD)</li>
            <li>✅ Penggantian spare part & pengecekan umum</li>
            <li>✅ Konsultasi kerusakan via WhatsApp/telepon</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Tentang Kami</h2>
          <p><strong>Slamet BMW Specialist</strong> adalah bengkel mobil rumahan khusus BMW yang dikelola langsung oleh mekanik berpengalaman sejak tahun 1991.</p>
          <p>🔧 Spesialis BMW sejak 1991, pernah bergabung dengan Tunas BMW Tebet (1991–1995) dan Tunas BMW Puri Kembangan (1995–2001).</p>
          <p>🏠 Bengkel rumahan, pengerjaan rapi & jujur langsung oleh teknisi profesional.</p>
          <p>📍 Panggilan ke lokasi Anda: rumah/kantor, waktu fleksibel sesuai kebutuhan Anda.</p>
          <p>💬 Konsultasi terbuka via WhatsApp dengan harga bersahabat dan tanpa biaya tersembunyi.</p>
          <p>👍 Rekomendasi tinggi dari pengguna BMW berbagai seri.</p>
        </section>
        <section className={styles.section}>
          <h2>Kontak</h2>
          <p>📍 Lokasi: <a href="https://maps.app.goo.gl/WZUEa9CXodhHBZy77" target="_blank">Lihat di Google Maps</a></p>
          <p>📱 WhatsApp: <a href="https://wa.me/6281219252290" target="_blank">+62 812-1925-2290</a></p>
          <p>🕒 Jam Operasional: Setiap Hari, 24 Jam</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Bengkel Slamet BMW Specialist. Semua Hak Dilindungi.</p>
      </footer>
    </>
  )
}
