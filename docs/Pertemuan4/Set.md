# JAVA SET INTERFACE

## 1. Konsep Set

Set merupakan bagian dari Java Collections Framework dan digunakan untuk menyimpan kumpulan elemen yang unik.
Berbeda dengan List, Set tidak memperbolehkan adanya duplikat, dan tidak mempertahankan urutan elemen
(kecuali jika menggunakan TreeSet atau LinkedHashSet).

Common classes yang mengimplementasikan Set:

- HashSet: cepat dan tidak terurut
- TreeSet: himpunan terurut
- LinkedHashSet: diurutkan berdasarkan urutan penyisipan

## 2. Deklarasi Set

Karena Set adalah sebuah interface, Anda tidak bisa menginstansiasinya secara langsung.
Anda harus memilih salah satu kelas implementasinya.

Format: `Set<TipeData> namaSet = new ImplementasiSet<>();`

Contoh kode:

```java
Set<String> namaSet = new HashSet<>();
```

## 3. Operasi Dasar Set

### a. Penambahan Elemen (Insertion)

```java
Set<String> namaSet = new HashSet<>();
namaSet.add("Fauzil");
namaSet.add("Rizky");
namaSet.add("Dewi");
```

### b. Pemeriksaan Elemen (Access/Contains)

```java
if (namaSet.contains("Java")) {
		System.out.println("Elemen ditemukan!");
}
```

### c. Penghapusan Elemen (Removal)

```java
namaSet.remove("Rizky");
namaSet.clear();
```


### d. Iterasi dan Cek Jumlah Elemen

```java
for (String nama : namaSet) {
		System.out.println(nama);
}

namaSet.size();
```

## 4. Jenis Implementasi Set

### A. HashSet

Menggunakan mekanisme hashing untuk menyimpan elemen.

- Karakteristik: Urutan elemen tidak terjamin (acak).
- Kegunaan: Pilihan terbaik jika performa adalah prioritas utama dan urutan tidak dipermasalahkan.
- Kompleksitas: O(1) untuk operasi dasar (add, remove, contains).

### B. LinkedHashSet

Turunan dari HashSet dengan kombinasi antara Hash Table dan Linked List.

- Karakteristik: Menjaga elemen sesuai dengan urutan saat dimasukkan (insertion order).
- Kegunaan: Digunakan jika Anda ingin kecepatan akses namun tetap butuh urutan yang konsisten.
- Kompleksitas: O(1).

### C. TreeSet

Implementasi yang didukung oleh struktur data Red-Black Tree (self-balancing binary search tree).

- Karakteristik: Elemen akan disimpan secara terurut (sorted order), misalnya angka dari kecil ke besar atau teks sesuai abjad.
- Kegunaan: Digunakan jika data harus selalu dalam keadaan rapi dan terurut.
- Kompleksitas: O(log n).

## 5. Keunggulan Set

Salah satu kekuatan Set adalah kemampuannya melakukan operasi himpunan dengan sangat mudah:

- Union (Gabungan): Menggabungkan dua Set menjadi satu (tanpa duplikat).
	- setA.addAll(setB);
- Intersection (Irisan): Mengambil elemen yang hanya ada di kedua Set.
	- setA.retainAll(setB);
- Difference (Selisih): Menghapus elemen di Set A yang juga ada di Set B.
	- setA.removeAll(setB);
