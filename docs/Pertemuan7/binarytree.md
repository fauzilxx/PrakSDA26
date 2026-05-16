---
sidebar_position: 1
---

# BINARY TREE

Struktur data hierarkis di mana setiap model memiliki paling banyak dua child yang disebut sebagai left child dan right child.

![Binary Tree Struct](/img/binarytreestruct.png)

Setiap node dalam Binary Tree memiliki tiga bagian:
1. Data
2. Pointer ke left child
3. Pointer ke right child

**Terminologi** Binary Tree:

- **Parent Node**: Sebuah node yang merupakan leluhur langsung (direct ancestor) dari sebuah node (child node-nya).
- **Child Node**: Sebuah node yang merupakan keturunan langsung (direct descendant) dari node lain (parent-nya).
- **Edge**: Garis penghubung atau koneksi antara sebuah parent node dan child node-nya.
- **Path in a binary tree**: Rangkaian node yang saling dihubungkan oleh edge dari satu node ke node lainnya.
- **Leaf Node**: Sebuah node yang tidak memiliki child sama sekali, atau kedua child-nya bernilai null.
- **Internal Node**: Sebuah node yang memiliki setidaknya satu child.
- **Depth/Level of a Node**: Jumlah edge yang terdapat pada path dari root menuju node tersebut. Depth/level dari node root adalah nol.
- **Height of a Binary Tree**: Jumlah edge pada path terpanjang dari root menuju sebuah leaf node.

## Operasi pada Binary Tree

Berikut adalah daftar operasi umum yang dapat dilakukan pada sebuah binary tree:

1. **Traversal**: Depth-First Search (DFS) Traversal dan Breadth-First Search (BFS) Traversal.
2. **Search**: Mencari sebuah node di dalam Binary Tree.
3. **Insertion and Deletion**

Prasyarat: Level Order Traversal, melakukan Insert (penyisipan) pada sebuah Binary Tree dan Delete (penghapusan) dari sebuah Binary Tree.

### a. Insertion

Tujuan utama adalah memasukkan node baru ke dalam binary tree pada posisi kosong pertama yang ditemukan saat menelusuri tree level demi level (dari atas ke bawah, kiri ke kanan).

Langkah-langkah:

- Gunakan Antrean (Queue): Masukkan simpul akar (*root*) ke dalam queue.
- Iterasi: Selama queue tidak kosong, lakukan hal berikut:
  - Ambil simpul dari depan queue.
  - Cek left child: Jika kosong, isi dengan simpul baru dan selesai. Jika tidak, masukkan left child ke queue.
  - Cek right child: Jika kosong, isi dengan simpul baru dan selesai. Jika tidak, masukkan right child ke queue.

![Insertion in Binary Tree](/img/binarytree-insertion.png)


### b. Deletion

Berbeda dengan Linked List, kita tidak bisa sekadar menghapus node dan membiarkan tree terputus. Untuk menjaga tree tetap padat (*compact*), node yang ingin dihapus diganti dengan node paling dalam dan paling kanan (node terakhir).

Langkah-langkah:

- Cari Node Sasaran: Gunakan *Level Order Traversal* (Queue) untuk menemukan node yang ingin dihapus.
- Cari Node Terakhir: Sambil mencari sasaran, temukan juga node yang berada di posisi paling bawah dan paling kanan.
- Tukar Data: Ganti nilai (data) node sasaran dengan nilai dari node terakhir tersebut.
- Hapus Node Terakhir: Hapus fisik node terakhir yang asli (karena datanya sudah "pindah" ke atas).

![Deletion in Binary Tree](/img/binarytree-deletion.png)

## Kelebihan Binary Tree

- **Efficient Search** (Pencarian Efisien): Binary Search Trees (sebuah variasi dari Binary Tree) sangat efisien saat mencari elemen tertentu, karena setiap node memiliki paling banyak dua child node jika dibandingkan dengan linked list dan arrays.
- **Memory Efficient** (Efisien Memori): Binary tree membutuhkan lebih sedikit memori dibandingkan dengan struktur data tree lainnya, sehingga lebih efisien dalam penggunaan memori.
- Binary tree relatif mudah untuk diimplementasikan dan dipahami karena setiap node memiliki paling banyak dua child, yaitu left child dan right child.

## Kekurangan Binary Tree

- **Limited structure** (Struktur Terbatas): Binary tree dibatasi hanya memiliki dua child node per node, yang dapat membatasi kegunaannya pada aplikasi-aplikasi tertentu. Sebagai contoh, jika sebuah tree membutuhkan lebih dari dua child node per node, struktur tree yang berbeda mungkin akan lebih cocok.
- **Space inefficiency** (Tidak efisien secara ruang/kapasitas): Binary tree bisa jadi tidak efisien secara ruang jika dibandingkan dengan struktur data lain seperti arrays dan linked list. Hal ini dikarenakan setiap node membutuhkan dua referensi child atau pointer, yang mana dapat memakan memory overhead yang cukup besar untuk tree yang berukuran raksasa.
