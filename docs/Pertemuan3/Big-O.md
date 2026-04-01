---
sidebar_position: 1
---

# Analisis Kompleksitas Algoritma

## 1. Pengantar Analisis Algoritma

Pada pertemuan sebelumnya kita sudah belajar:
* Java dasar
* Struktur data: Array, List, Stack, Queue

Namun, mengetahui cara menggunakan struktur data saja belum cukup.
Kita juga harus tahu seberapa cepat dan efisien operasi yang kita lakukan?

## 2. Tujuan Analisis Algoritma

Algoritma yang baik harus:
* Benar (Correct)
* Efisien (Efficient)

Efisiensi diukur dari:
* Waktu eksekusi (Time Complexity)
* Penggunaan memori (Space Complexity)

## 3. Konsep Kompleksitas

### 3.1 Kompleksitas Waktu

Mengukur jumlah operasi terhadap ukuran input (n)

**Contoh:**
```java
for (int i = 0; i < n; i++) {
    System.out.println(i);
}
```
Dieksekusi sebanyak n kali → O(n)

### 3.2 Kompleksitas Ruang

Mengukur penggunaan memori

**Contoh:**
```java
int[] arr = new int[n];
```
Membutuhkan memori → O(n)

## 4. Notasi Big-O

Kita hanya fokus pada Big-O Notation karena:
* Paling sering digunakan
* Standar di dunia komputer

Big-O menggambarkan seberapa cepat algoritma bertambah lambat saat input membesar

### Klasifikasi Kompleksitas Waktu (Big-O)

![Visualisasi Big-O](/img/big-O.jpg)

| Fungsi Big-O | Nama | Keterangan |
|---|---|---|
| O(1) | Konstan | Sangat cepat, tidak terpengaruh ukuran input |
| O(log n) | Logaritmik | Sangat efisien, membagi masalah jadi lebih kecil |
| O(n) | Linear | Bertambah seiring ukuran input |
| O(n log n) | Linearitmik | Efisien untuk data besar, sering digunakan pada algoritma optimal |
| O(n²) | Kuadratik | Mulai lambat, terutama untuk data besar |
| O(n<sup>m</sup>)| Polinomial | Lambat, tidak efisien untuk input besar |
| O(n!) | Faktorial | Sangat lambat |

## 5. Contoh dalam Java

### 5.1 O(1) – Konstan
```java
System.out.println("Hello");
```
Selalu 1 langkah

### 5.2 O(n) – Linear
```java
for (int i = 0; i < n; i++) {
    System.out.println("Hello");
}
```
Loop sebanyak n kali

### 5.3 O(n²) – Kuadratik
```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + j);
    }
}
```
Loop bersarang → n × n

### 5.4 O(log n) – Logaritmik
```java
int i = n;
while (i > 1) {
    i = i / 2;
}
```
Dibagi 2 terus → sangat cepat

## 6. Aturan Dasar Menghitung Kompleksitas

**Abaikan konstanta**
* O(2n) → O(n)

**Ambil yang dominan**
* O(n² + n) → O(n²)

**Loop bersarang → dikali**
* O(n × n) = O(n²)

**Loop berurutan → dijumlah**
* O(n + n) = O(n)

## 7. Hubungan dengan Struktur Data (Yang Sudah Dipelajari)

Sekarang kita kaitkan dengan: Array, List, Stack, Queue

**ArrayList**

| Operasi | Kompleksitas |
|---|---|
| get(index) | O(1) |
| add(akhir) | O(1) |
| add(tengah) | O(n) |
| remove | O(n) |

**LinkedList**

| Operasi | Kompleksitas |
|---|---|
| get(index) | O(n) |
| add(awal) | O(1) |
| add(akhir) | O(1)* |
| remove | O(n) |

**Stack**

| Operasi | Kompleksitas |
|---|---|
| push | O(1) |
| pop | O(1) |
| peek | O(1) |

**Queue**

| Operasi | Kompleksitas |
|---|---|
| enqueue | O(1) |
| dequeue | O(1) |

## 8. Studi Kasus Sederhana

**Contoh 1: Cari data di List**
```java
for (int i = 0; i < list.size(); i++) {
    if (list.get(i) == target) {
        return i;
    }
}
```
➡️ Harus cek satu per satu ➡️ Kompleksitas: O(n)

**Contoh 2: Stack (Push & Pop)**
```java
stack.push(10);
stack.pop();
```
➡️ Selalu cepat ➡️ Kompleksitas: O(1)

## 9. Perbandingan Kompleksitas

Urutan dari paling cepat:

**O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n<sup>m</sup>) < O(n!)**

Artinya:
* Stack/Queue → sangat efisien
* Nested loop → harus hati-hati

## 10. Kesalahan Umum

* Mengira semua loop = O(n²)
* Tidak melihat nested loop
* Salah memahami log n
* Mengabaikan struktur data

## 11. Latihan

**Latihan 1**
```java
for (int i = 0; i < n; i++) {
    System.out.println(i);
}
```

**Latihan 2**
```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i);
    }
}
```

**Latihan 3**
* Mana lebih cepat?
   * Stack push/pop
   * ArrayList insert tengah

## 12. Kesimpulan

* Algoritma harus:
   * benar
   * efisien
* Big-O digunakan untuk:
   * mengukur performa
* Struktur data mempengaruhi kompleksitas
