---
sidebar_position: 1
---

# Tugas 1: Instalasi Java dan Intro

## Deskripsi Tugas
Pada praktikum ini, praktikan diminta untuk memastikan Java telah terinstal dengan benar serta menjalankan program Java sederhana.

## Langkah Pengerjaan

### 1. Cek Instalasi Java
Buka Terminal / Command Prompt / PowerShell, lalu jalankan:
```bash
java --version
```
Ambil screenshot hasil output yang menunjukkan versi Java.

### 2. Membuat Program Java
Buat file bernama `Main.java` dengan kode berikut:
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Nama + NIM");
    }
}
```

### 3. Compile dan Jalankan Program
Compile program:
```bash
javac Main.java
```

Jalankan program:
```bash
java Main
```

### 4. Ubah Output Program
Ganti teks `"Nama + NIM"` dengan nama lengkap dan NIM masing-masing.

Contoh:
```java
System.out.println("Kaoruko Wahyudi - L0125000");
```

### 5. Ambil Screenshot
Screenshot yang dikumpulkan:
- Output `java --version`
- Output hasil menjalankan program Java yang menampilkan Nama dan NIM

## Ketentuan Pengumpulan
- Dikumpulkan dalam 1 file PDF
- Berisi screenshot yang diminta
- Format nama file: `KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA`
  - Contoh: `A_SDA_01_L0125000_KaorukoWahyudi`

## Pengumpulan
Tugas dikumpulkan melalui Google Classroom.
