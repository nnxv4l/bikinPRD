  # Landing Page PRD — bikinPRD
  
  ## 1. Overview
  
  Landing page **bikinPRD** adalah halaman utama yang bertugas memperkenalkan produk, menjelaskan value proposition, dan mendorong user masuk ke flow **membuat PRD baru**.
  
  Landing page ini diturunkan langsung dari `prd.md` utama, sehingga fokus pesannya harus tetap sama, yaitu:
  
  * proses menulis PRD manual itu **lambat**,
  * PRD manual sering **tidak terstruktur**,
  * workflow **AI coding** seperti Cursor, Claude Code, atau tool serupa membutuhkan PRD yang **rapi dan jelas**,
  * **bikinPRD** membantu user mengubah ide aplikasi menjadi **PRD lengkap** melalui **3 fase input**, lalu menghasilkan **output Markdown + ERD Mermaid** yang bisa direvisi lagi di workspace.
  
  Dokumen ini hanya membahas **landing page**, bukan keseluruhan frontend aplikasi.
  
  ---
  
  ## 2. Landing Page Objective
  
  Landing page bikinPRD harus mencapai 5 tujuan utama:
  
  1. **Menjelaskan masalah utama produk**
     User harus langsung memahami bahwa bikinPRD dibuat untuk mengatasi penulisan PRD yang lambat, tidak terstruktur, dan kurang optimal untuk workflow AI coding.
  
  2. **Menjelaskan apa yang dilakukan bikinPRD**
     Landing page harus menjelaskan bahwa bikinPRD mengubah ide produk menjadi PRD lengkap melalui alur input yang terstruktur.
  
  3. **Menunjukkan diferensiasi produk**
     Diferensiasi utama bikinPRD bukan hanya “AI untuk bikin PRD”, tetapi **guided flow 3 fase**:
  
     * input ide,
     * preferensi teknologi,
     * pertanyaan dinamis.
  
  4. **Menunjukkan output yang dihasilkan**
     User harus bisa melihat bahwa hasil akhir produk adalah **PRD Markdown lengkap + ERD Mermaid**, bukan sekadar jawaban chat biasa.
  
  5. **Mendorong user ke CTA utama**
     Landing page harus mengarahkan user ke aksi utama: **Mulai bikin PRD**.
  
  ---
  
  ## 3. Product Message
  
  Pesan utama landing page harus konsisten dengan `prd.md`:
  
  > **bikinPRD membantu Anda mengubah ide aplikasi menjadi PRD yang rapi, terstruktur, dan siap dipakai untuk workflow AI coding.**
  
  Pesan ini harus terlihat jelas terutama di:
  
  * hero section,
  * problem section,
  * how it works,
  * final CTA.
  
  ---
  
  ## 4. Target User
  
  Landing page ditujukan untuk user yang memiliki kebutuhan berikut:
  
  * developer atau builder yang ingin menulis PRD lebih cepat,
  * mahasiswa atau individu yang sedang merancang aplikasi dan butuh dokumen requirement yang rapi,
  * pengguna AI coding tools seperti Cursor, Claude Code, atau LLM lain yang membutuhkan PRD sebagai konteks kerja.
  
  ---
  
  ## 5. Tech Stack Landing Page
  
  Landing page harus tetap mengikuti arah stack pada `prd.md`, tetapi dibatasi hanya pada kebutuhan frontend landing page.
  
  | Area          | Teknologi                  | Catatan                                                                            |
  | ------------- | -------------------------- | ---------------------------------------------------------------------------------- |
  | Framework     | **Next.js (App Router)**   | Mengikuti rekomendasi utama di `prd.md` agar landing page menyatu dengan app utama |
  | Language      | **TypeScript**             | Konsisten dengan stack utama aplikasi                                              |
  | Styling       | **Tailwind CSS**           | Untuk implementasi cepat design system dari `DESIGN.md`                            |
  | UI Primitives | **shadcn/ui**              | Untuk komponen dasar seperti button, tabs, sheet, dialog jika diperlukan           |
  | Icons         | **Lucide React**           | Ikon ringan dan konsisten                                                          |
  | Animation     | **Framer Motion** opsional | Hanya untuk animasi ringan pada hero atau reveal section                           |
  | Font Loading  | **next/font**              | Untuk setup heading dan body font dengan performa lebih baik                       |
  
  ### Catatan
  
  Landing page **tidak perlu** membahas atau mengimplementasikan:
  
  * Supabase
  * Gemini
  * database
  * auth flow detail
  * versioning logic
  * backend API
  
  Semua itu tetap berada di scope `prd.md` utama, bukan di dokumen landing page.
  
  ---
  
  ## 6. Design Direction
  
  Landing page wajib mengikuti `DESIGN.md` dengan gaya **Warm Parchment Editorial**.
  
  ### Prinsip visual utama
  
  * latar halaman hangat seperti kertas, bukan putih dingin,
  * tipografi menjadi identitas utama,
  * CTA utama berbentuk pill,
  * card memakai radius lembut dan shadow halus,
  * halaman terasa editorial, tenang, dan tidak seperti template AI SaaS generik.
  
  ### Token utama yang wajib dipakai
  
  | Token       | Hex       | Fungsi                   |
  | ----------- | --------- | ------------------------ |
  | Parchment   | `#f9efe4` | background utama halaman |
  | Vellum      | `#fdf9f4` | surface sekunder         |
  | Chalk       | `#fdfdfd` | card / preview surface   |
  | Ink         | `#3f434a` | teks utama               |
  | Slate       | `#656565` | teks sekunder            |
  | Graphite    | `#2d2f34` | tombol utama             |
  | Silver Mist | `#d9dde6` | border dan divider       |
  | Blueprint   | `#2e77e5` | link dan aksen           |
  
  ### Typography
  
  * **Heading / Display:** Garnett, fallback **Fraunces** atau **DM Sans**
  * **Body / UI:** UniversalSans, fallback **Plus Jakarta Sans**
  * **Mono:** Geist Mono, jika diperlukan untuk preview markdown
  
  ---
  
  ## 7. CTA Strategy
  
  ### CTA utama
  
  * **Mulai bikin PRD**
  
  ### CTA sekunder
  
  * **Lihat contoh PRD**
  
  ### Arah route CTA
  
  Untuk landing page v1:
  
  * CTA utama bisa diarahkan ke `/new`, atau
  * jika flow pembuatan PRD mensyaratkan login, arahkan ke `/login`
  
  ---
  
  # 8. Landing Page Structure
  
  Landing page v1 terdiri dari 7 section utama:
  
  1. Navbar
  2. Hero
  3. Problem Section
  4. How It Works, 3 fase + generate
  5. Feature Grid
  6. PRD Output Preview
  7. Final CTA + Footer
  
  ---
  
  # 9. Section Specification
  
  ## 9.1 Navbar
  
  ### Tujuan
  
  Memberi navigasi ringan dan menampilkan CTA utama.
  
  ### Konten
  
  * Logo: **bikinPRD**
  * Nav item:
  
    * Fitur
    * Cara Kerja
    * Contoh PRD
  * Action:
  
    * Masuk
    * **Mulai bikin PRD**
  
  ### Catatan implementasi
  
  * Navbar bisa dibuat sticky ringan
  * Pada mobile, nav berubah menjadi drawer atau sheet
  
  ---
  
  ## 9.2 Hero Section
  
  ### Tujuan
  
  Menjelaskan value proposition produk dalam 1 layar pertama.
  
  ### Headline
  
  **Ubah ide aplikasi menjadi PRD yang rapi, terstruktur, dan siap untuk AI coding**
  
  ### Subheadline
  
  bikinPRD memandu Anda melalui **3 fase input** untuk menyusun PRD lengkap. Mulai dari ide, preferensi teknologi, hingga pertanyaan dinamis, lalu hasilkan **PRD Markdown + ERD Mermaid** yang siap dipakai untuk workflow development modern.
  
  ### CTA
  
  * **Mulai bikin PRD**
  * **Lihat contoh PRD**
  
  ### Supporting points
  
  * 3 fase input yang memandu penulisan PRD
  * output Markdown yang bisa di-copy dan di-download
  * ERD Mermaid dan workspace revisi AI
  
  ### Hero visual
  
  Hero harus menampilkan **mockup produk**, bukan ilustrasi abstrak.
  
  #### Isi mockup yang wajib relevan dengan `prd.md`
  
  Mockup hero sebaiknya memperlihatkan:
  
  * **panel flow 3 fase** di sisi kiri:
  
    * ide produk
    * preferensi teknologi
    * pertanyaan dinamis
  * **preview hasil PRD** di sisi kanan:
  
    * heading section PRD
    * blok markdown
    * cuplikan ERD / diagram
    * tombol copy / preview
  
  Tujuannya agar user langsung memahami bahwa bikinPRD adalah **guided PRD builder**, bukan chatbot biasa.
  
  ---
  
  ## 9.3 Problem Section
  
  ### Tujuan
  
  Menjelaskan masalah yang menjadi dasar lahirnya bikinPRD.
  
  ### Headline
  
  **Menulis PRD dari nol sering lambat, tidak konsisten, dan kurang siap untuk AI coding**
  
  ### Problem points
  
  1. Menulis PRD manual memakan waktu dan sering membuat struktur dokumen tidak konsisten.
  2. Ide aplikasi biasanya masih mentah dan sulit diterjemahkan menjadi requirement yang runtut.
  3. AI coding tools bekerja lebih baik jika diberi konteks yang rapi, bukan prompt acak tanpa struktur.
  
  ### Solution statement
  
  bikinPRD memecah proses ini menjadi flow yang lebih terarah, sehingga user tidak mulai dari dokumen kosong. User cukup memasukkan ide, preferensi teknologi, dan jawaban atas pertanyaan AI, lalu sistem menyusun PRD lengkap secara lebih cepat dan lebih terstruktur.
  
  ---
  
  ## 9.4 How It Works Section
  
  ### Tujuan
  
  Menjelaskan alur utama produk sesuai `prd.md`.
  
  ### Headline
  
  **Bangun PRD dalam 3 fase, lalu revisi sesuai kebutuhan**
  
  ### Langkah 1 — Input Ide
  
  User menuliskan ide aplikasi dan memilih bahasa output.
  
  ### Langkah 2 — Preferensi Teknologi
  
  User memilih apakah ingin membiarkan AI menentukan stack, atau memilih preferensi teknologi sendiri.
  
  ### Langkah 3 — Pertanyaan Dinamis
  
  AI menghasilkan pertanyaan kontekstual berdasarkan ide aplikasi untuk memperjelas kebutuhan produk.
  
  ### Langkah 4 — Generate PRD
  
  Sistem menyusun PRD lengkap dalam format Markdown, lengkap dengan ERD Mermaid.
  
  ### Langkah 5 — Revisi di Workspace
  
  User bisa membuka hasil PRD, meninjau isi dokumen, lalu merevisi melalui chat AI.
  
  ### Catatan
  
  Walaupun `prd.md` menyebut **3 fase utama**, landing page boleh menampilkan **5 langkah visual** agar alur produk lebih mudah dipahami:
  
  * 3 langkah input,
  * 1 langkah generate,
  * 1 langkah revisi.
  
  ---
  
  ## 9.5 Feature Grid Section
  
  ### Tujuan
  
  Menampilkan fitur inti produk yang relevan dengan `prd.md`.
  
  ### Headline
  
  **Dirancang untuk membantu Anda menyusun PRD yang lebih siap dipakai**
  
  ### Feature list
  
  #### 1. Guided 3-Phase Flow
  
  Alur pembuatan PRD dibagi menjadi input ide, preferensi teknologi, dan pertanyaan dinamis agar requirement tidak tercecer.
  
  #### 2. Dynamic AI Questions
  
  AI menghasilkan pertanyaan yang menyesuaikan konteks ide produk Anda, bukan template statis.
  
  #### 3. Full PRD in Markdown
  
  PRD dihasilkan dalam format Markdown yang mudah dibaca, di-copy, dan di-download.
  
  #### 4. Mermaid ERD Output
  
  Struktur database atau entitas dapat divisualisasikan dalam bentuk ERD Mermaid.
  
  #### 5. Revision Workspace
  
  PRD tidak berhenti di hasil pertama. User bisa melanjutkan revisi melalui workspace.
  
  #### 6. Versioned Iteration
  
  Setiap revisi PRD dapat berkembang sebagai versi baru agar perubahan lebih mudah dilacak.
  
  ---
  
  ## 9.6 PRD Output Preview Section
  
  ### Tujuan
  
  Menunjukkan hasil nyata yang akan didapat user.
  
  ### Headline
  
  **Lihat bentuk PRD yang dihasilkan**
  
  ### Isi section
  
  Satu preview card besar yang menampilkan contoh hasil PRD dengan mode:
  
  * Preview
  * Markdown
  * ERD
  
  ### Konten preview yang sebaiknya ditampilkan
  
  * Overview
  * Requirements
  * Core Features
  * User Flow
  * Architecture
  * Database Schema
  * Design & Technical Constraints
  
  ### Catatan
  
  Preview ini penting karena value bikinPRD terletak pada **kualitas output PRD**, bukan hanya pada flow input.
  
  ---
  
  ## 9.7 Final CTA Section
  
  ### Tujuan
  
  Menutup landing page dengan CTA yang tegas.
  
  ### Headline
  
  **Mulai dari ide, lalu ubah menjadi PRD yang lebih rapi dan siap dipakai untuk membangun produk**
  
  ### Subheadline
  
  Gunakan bikinPRD untuk menyusun PRD yang lebih cepat, lebih terstruktur, dan lebih siap dipakai dalam workflow AI coding.
  
  ### CTA
  
  * **Mulai bikin PRD**
  
  ---
  
  ## 9.8 Footer
  
  ### Isi minimum
  
  * Logo bikinPRD
  * Copyright
  * Link kecil:
  
    * Fitur
    * Cara Kerja
    * Masuk
  
  ---
  
  # 10. Component List
  
  Komponen minimum yang dibutuhkan untuk landing page:
  
  * `Navbar`
  * `HeroSection`
  * `HeroMockup`
  * `ProblemSection`
  * `HowItWorksSection`
  * `FeatureGrid`
  * `OutputPreviewSection`
  * `FinalCTASection`
  * `Footer`
  * `PrimaryPillButton`
  * `SecondaryPillButton`
  * `FeatureCard`
  * `SectionHeader`
  
  ---
  
  # 11. Suggested File Structure
  
  ```txt
  components/marketing/
    navbar.tsx
    hero.tsx
    hero-mockup.tsx
    problem-section.tsx
    how-it-works.tsx
    feature-grid.tsx
    output-preview.tsx
    final-cta.tsx
    footer.tsx
  ```
  
  ---
  
  # 12. Acceptance Criteria
  
  Landing page dianggap selesai jika memenuhi poin berikut:
  
  1. User langsung memahami bahwa bikinPRD adalah tool untuk membuat **PRD yang rapi dan siap untuk AI coding**.
  2. Hero menampilkan value proposition yang konsisten dengan `prd.md`.
  3. Landing page menjelaskan **3 fase utama** dari produk.
  4. Ada penjelasan bahwa output utama adalah **PRD Markdown + ERD Mermaid**.
  5. CTA **Mulai bikin PRD** muncul minimal di hero dan final CTA.
  6. Visual konsisten dengan **Warm Parchment Editorial** dari `DESIGN.md`.
  7. Landing page responsif untuk desktop dan mobile.
  
  ---
  
  # 13. Summary
  
  Landing page bikinPRD harus menjadi turunan langsung dari `prd.md`, bukan halaman pemasaran generik. Karena itu, pesan utamanya harus tetap menonjolkan tiga hal:
  
  1. **masalah PRD manual yang lambat dan tidak terstruktur**,
  2. **guided flow 3 fase sebagai cara kerja utama bikinPRD**,
  3. **output PRD Markdown + ERD Mermaid yang siap dipakai untuk workflow AI coding**.
  
  Dengan fokus ini, landing page tidak hanya terlihat menarik secara visual, tetapi juga benar-benar merepresentasikan produk yang akan dibangun.
