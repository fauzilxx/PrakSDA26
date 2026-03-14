---
sidebar_position: 1
---

# Setup Java 21 di Windows

 Link Referensi: **[How To Setup Java](https://www.geeksforgeeks.org/linux-unix/download-install-java-windows-linux-macos/)**
 
### Kenapa harus Java 21?

Java 21 adalah versi **LTS (Long-Term Support)** terbaru yang menawarkan berbagai fitur modern dan peningkatan performa. Dengan menggunakan Java 21, Anda akan mendapatkan pengalaman belajar yang lebih baik dan dapat memanfaatkan sintaks terbaru dalam pengembangan aplikasi.

#### Perbandingan Versi:

- **Java 8**: Masih dipakai untuk project legacy, tapi:
  - Sintaks sudah sangat tua
  - Fitur modern tidak tersedia
  - Kurang relevan untuk pembelajaran baru

- **Java 17**: Sudah cukup modern, tapi:
  - Sudah bukan versi LTS terbaru
  - Beberapa fitur terbaru di Java 21 belum ada

- **Versi Non-LTS (Contoh: Java 22–25)**:
  - Masih dalam tahap pengembangan (_preview_)
  - Fitur baru terkadang belum stabil
  - Belum banyak didukung oleh tools dan library

:::tip Rekomendasi
Gunakan **Java 21** untuk keseimbangan terbaik antara fitur modern, stabilitas, dan dukungan jangka panjang.
:::

## Tutorial Setup Java 21

### 1. Download & Install JDK

Unduh installer Java 21 dari salah satu situs berikut:
- **[Oracle JDK 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)** (Pilih tab *Windows* -> *x64 Installer*)
- **[Eclipse Adoptium (Temurin)](https://adoptium.net/temurin/releases?version=21&os=any&arch=any)**

Lakukan instalasi seperti biasa. Secara default, Java akan terinstall di:
`C:\Program Files\Java\jdk-21` (atau versi spesifik seperti `jdk-21.0.9`).

### 2. Konfigurasi Environment Variable

Agar perintah `java` bisa dikenali di terminal mana saja, kita perlu mendaftarkannya ke sistem Windows.

1. Buka folder instalasi Java Anda, lalu masuk ke folder `bin`.
   - Contoh: `C:\Program Files\Java\jdk-21\bin`
   - **Copy** alamat path tersebut dari address bar file explorer.

2. Buka **Environment Variables**:
   - Tekan tombol `Windows`, ketik "env", lalu pilih **Edit the system environment variables**.
   - Klik tombol **Environment Variables...** di bagian bawah.

3. Edit **Path** di bagian *System Variables* (kotak bawah):
   - Cari baris bernama `Path`, klik, lalu klik tombol **Edit**.
   - Klik **New**, lalu **Paste** alamat path bin yang tadi dicopy.
   - Klik **OK** di semua jendela untuk menyimpan.

### 3. Verifikasi Instalasi

Buka terminal baru (**Command Prompt** atau **PowerShell**), lalu ketik:

```bash
java -version
```

Jika berhasil, akan muncul output seperti ini:
```text
java version "21.0.2" 2024-01-16 LTS
Java(TM) SE Runtime Environment (build 21.0.2+13-LTS-58)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.2+13-LTS-58, mixed mode, sharing)
```

---

## Mencoba Program Pertama (Hello World)

Mari kita pastikan compiler Java (`javac`) juga berfungsi dengan baik.

1. Buat folder kerja baru, misalnya `C:\PrakSDA26`.
2. Buat file baru bernama `Main.java` dan isi dengan kode berikut:

![Contoh Kode Java](/img/hello-world-java.png)

```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java 21!");
    }
}
```

3. Buka terminal, arahkan ke folder tersebut:
```bash
cd C:\PrakSDA26
```

4. **Compile** kode program:
```bash
javac Main.java
```
_Jika tidak ada pesan error, berarti kompilasi sukses dan file `Main.class` telah terbentuk._

5. **Jalankan** program:
```bash
java Main
```

**Output:**
```text
Hello Java 21!
```

## Java Compilation Process
![Java Compilation Process](/img/How-java-code-Executes.webp)