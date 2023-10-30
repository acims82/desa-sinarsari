<script setup>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <Header />
  <Banner />

  <main class="flex">
    <Sidebar />

    <div class="flex-1 p-10">
      <p class="text-3xl font-semibold">Visi & Misi Desa</p>
      <p class="text-lg font-semibold">Visi</p>
      <p>
        “Membangun tata Kelola Pemerintahan Desa yang Baik, Bersih, Transparan
        dan Akuntabel guna Mewujudkan Kehidupan Masyarakat Desa yang Adil, Makmur
        dan Lebih Sejahtera”
      </p>
      <p class="text-lg font-semibold">Misi</p>
      <ul>
        <li>
          1. Meningkatkan tingkat kesejehteraan untuk mencapai kehidupan yang 
          lebih baik sehingga menjadi desa yang maju dan mandiri;
        </li>
        <li>
          2. Menyelenggarakan Pemerintah Desa yang bersih, bebas dari korupsi
          dan pungli serta penyelewengan-pengelewengan lainnya;
        </li>
        <li>
          3. Meningkatkan kualitas jalan desa, jalan lingkungan, gang,
          sarana keagamaan dan pendidikan serta infrastruktur lainnya;
        </li>
        <li>
          4. Mewujudkan sistem usaha mandiri melalui program pengambangan
          Badan Usaha Milik Desa (BUMDes);
        </li>
        <li>
          5. Mengadakan pelatihan/penyuluhan kepada pelaku UMKM/kelompok masyarakat
          guna meningkatkan sumberdaya masyarakat;
        </li>
        <li>
          6. Mendorong majunya Pendidikan formal maupun nonformal seperti
          pesantren, LPK, diklat serta penyuluhan pertanian yang mudah diakses
          dan dinikmati seluruh warga masyarakat, guna menghasilkan insan
          intelektual, berakhlak mulia, inovatif dan entrepreneur;
        </li>
        <li>
          7. Menyalurkan segala bentuk bantuan dari Pemerintah Kabupaten,
          Provinsi dan Pusat sesuai dengan peruntukannya dan mencegah terjadinya
          penyimpangan dan kebocoran;
        </li>
        <li>
          8. Menjalin sinergitas dengan instansi atau Lembaga terkait dan pihak
          swasta guna optimalisasi suatu tujuan lebih baik dan lebih maksimal;
        </li>
        <li>
          9. Responsive dan aspiratif atas segala bentuk kebutuhan atau
          keinginan dan permasalahan yang terjadi ditengah masyarakat yang
          majemuk dan dinamis;
        </li>
        <li>
          10. Membina dan memantapkan kehidupan gotong royong sebagai basis dan
          modal dasar pembangunan desa, yang pada hakikatnya juga merupakan
          karakter dasar dari masyarakat desa dan juga bangsa Indonesia.
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
body {
  background: #f1f1f1;
}
</style>
