# JAVA MAP INTERFACE

## 1. Konsep Map

Map adalah sebuah objek yang memetakan Key (kunci) ke Value (nilai).
Berbeda dengan Set atau List, Map tidak menyimpan elemen tunggal, melainkan pasangan nilai yang disebut sebagai Entry.

Karakteristik utama:

- Unique Keys: Setiap key harus unik. Jika Anda memasukkan key yang sama dengan nilai berbeda, nilai lama akan ditimpa (overwrite).
- Value Duplicates: Berbeda dengan key, satu value boleh dimiliki oleh banyak key.
- One-to-One Mapping: Setiap satu key hanya bisa terhubung ke maksimal satu value.

Common classes yang mengimplementasikan Map:

- HashMap: cepat dan tidak terurut
- TreeMap: terurut berdasarkan key
- LinkedHashMap: terurut sesuai insertion order

## 2. Deklarasi Map

Format: `Map<TipeKey, TipeValue> namaMap = new ImplementasiMap<>();`

Contoh kode:

```java
Map<String, Integer> stokBarang = new HashMap<>();
```

## 3. Operasi Dasar pada Map

### a. Memasukkan Data (Put)

```java
Map<String, Integer> stokBarang = new HashMap<>();
stokBarang.put("Buku", 10);
stokBarang.put("Pensil", 20);
stokBarang.put("Penghapus", 15);
```

### b. Mengambil Data (Get)

```java
stokBarang.get("Buku");
```

### c. Menghapus Data (Remove)

```java
stokBarang.remove("Pensil");
```

### d. Pengecekan Data (Contains)

```java
if (stokBarang.containsKey("Penghapus")) {
	System.out.println("Penghapus tersedia!");
}
```

### e. Perulangan (Iterasi)

```java
for (String barang : stokBarang.keySet()) {
	System.out.println(barang);
}
```

## 4. Jenis Implementasi Map

### A. HashMap

Implementasi yang paling umum, menggunakan Hash Table.

- Ciri: Urutan data tidak terjamin (acak).
- Performa: Paling cepat untuk operasi standar.
- Kompleksitas: O(1) untuk put dan get.

### B. LinkedHashMap

Mirip dengan HashMap, namun menggunakan Double Linked List untuk mencatat urutan data.

- Ciri: Menjaga urutan data sesuai urutan saat dimasukkan (insertion order).
- Performa: Sedikit lebih lambat dari HashMap karena manajemen list tambahan.
- Kompleksitas: O(1).

### C. TreeMap

Implementasi berbasis Red-Black Tree.

- Ciri: Data otomatis terurut berdasarkan key secara alami (misal: A-Z atau 1-10).
- Performa: Lebih lambat karena ada proses pengurutan setiap kali data masuk.
- Kompleksitas: O(log n).

Catatan:
Tidak ada LinkedTreeMap dalam library standar Java.
Yang ada adalah LinkedHashMap (urutan input) atau TreeMap (urutan natural).
