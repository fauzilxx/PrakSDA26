---
sidebar_position: 2
---

# Disjoint Set

![Disjoint Set](/img/disjoint.png)

Disjoint Set adalah struktur data yang digunakan untuk mengelompokkan data ke dalam beberapa kelompok terpisah berdasarkan hubungan tertentu. Struktur data ini sering disebut juga sebagai **Union Find** atau **Disjoint Set Union (DSU)**.

Konsep utamanya adalah:
- Setiap data berada dalam suatu kelompok.
- Setiap kelompok memiliki satu perwakilan (*representative/root*).
- Dua data dianggap berada dalam kelompok yang sama jika memiliki representative yang sama.

Contohnya:

```
A berteman dengan B
B berteman dengan C
D berteman dengan E
```

Dari data ini akan memberikan informasi bahwa A berada dalam satu jaringan yang sama dengan C melalui B, dan A tidak berada dalam jaringan dengan D (D hanya berteman dengan E).

## Konsep Representative

Setiap kelompok memiliki satu wakil yang disebut *representative/root/parent utama*. Contohnya, ada jaringan pertemanan antara A, B, dan C. Kita misalkan representative akhirnya adalah C, sehingga kita dapat menuliskan:

| Nama | Representative |
|------|----------------|
| A | C |
| B | C |
| C | C |

## Operasi Dasar Disjoint Set

Secara umum, struktur data ini mendukung tiga operasi utama:

### 1. MakeSet
Membuat kelompok baru untuk suatu elemen. Pada tahap awal, setiap elemen merupakan *representative* dari kelompoknya sendiri.

### 2. Find
Operasi ini digunakan untuk mencari *representative* atau *root* dari suatu grup tempat elemen tersebut berada. Operasi `Find` sangat penting untuk mengecek apakah dua elemen berada di kelompok yang sama (jika mereka memiliki *representative* yang sama).

**Optimasi: Path Compression**
Untuk mempercepat pencarian di masa mendatang, kita dapat menggunakan teknik *Path Compression* pada operasi `Find`. Idenya adalah saat kita menelusuri ke atas menuju root, kita membuat semua node yang dilewati langsung menunjuk ke root. Ini membuat kedalaman struktur lebih dangkal dan menekan waktu pencarian menjadi $O(\alpha(N) \approx O(1))$.

### 3. Union (Penggabungan)
Digunakan untuk menggabungkan dua himpunan (kelompok) terpisah menjadi satu kelompok. Jika kedua elemen sudah berada di kelompok yang sama, tidak perlu dilakukan penggabungan. Proses ini mengambil root dari setiap anggota, lalu salah satu root menunjuk root lainnya.

**Optimasi: Union by Rank/Size**
Agar pohon tidak menjadi terlalu dalam/panjang setelah gabungan terus-menerus, kita dapat menggunakan *Union by Rank* atau *Union by Size*. Pohon yang lebih dangkal/kecil ditempelkan di bawah akar dari pohon yang lebih dalam/besar. Hal ini menyeimbangkan kedalaman dari pohon reprentatif yang terbentuk.

## Penentuan Root (Pemimpin) dalam DSU

Penentuan root (pemimpin) dalam Disjoint Set Union (DSU) bergantung pada dua kondisi: saat inisialisasi awal dan saat proses penggabungan (union). Berikut adalah penjelasan teknis mengenai bagaimana root ditentukan:

### 1. Saat Inisialisasi (MakeSet)
Pada awal struktur data dibuat, setiap elemen adalah root bagi dirinya sendiri. Secara teknis, dalam array `parent[]` (atau struktur penyimpan lainnya), nilainya diisi dengan identitasnya sendiri.

- Elemen 0 root-nya adalah 0
- Elemen 1 root-nya adalah 1
- Elemen 2 root-nya adalah 2

### 2. Saat Operasi Union (Penggabungan)
Ketika kita menggabungkan dua elemen (misal x dan y), kita sebenarnya menggabungkan dua pohon. Penentuan siapa yang menjadi root baru ditentukan oleh strategi yang digunakan:

**A. Strategi Naif (Sembarang)**

Dalam implementasi paling sederhana tanpa optimasi, kita bisa menetapkan secara bebas bahwa root dari x akan selalu menjadi anak dari root y.
- **Kekurangan**: Pohon bisa menjadi sangat tinggi (seperti *linked list*), sehingga pencarian menjadi lambat.

**B. Union by Rank (Berdasarkan Tinggi Pohon)**

Ini adalah cara yang paling umum. Kita membandingkan "rank" (perkiraan tinggi pohon) dari masing-masing root.
- **Aturan**: Pohon dengan rank lebih kecil harus menempel di bawah pohon dengan rank lebih besar.
- **Alasan**: Ini menjaga agar pohon tetap seimbang dan tidak terlalu dalam.
- *Catatan*: Jika rank kedua pohon sama, pilih salah satu menjadi root dan tingkatkan rank-nya sebesar 1.

**C. Union by Size (Berdasarkan Jumlah Elemen)**

Mirip dengan rank, namun yang dibandingkan adalah jumlah anggota dalam grup tersebut.
- **Aturan**: Pohon dengan jumlah anggota lebih sedikit bergabung ke pohon dengan jumlah anggota lebih banyak.
- **Tujuan**: Memastikan sebagian besar elemen memiliki jarak yang pendek menuju root.

### 3. Peran Path Compression
Meskipun kita sudah menentukan root melalui *Union by Rank/Size*, ada proses "pembersihan" yang terjadi saat kita memanggil fungsi `Find(x)`.
Setiap kali mencari root dari suatu elemen, semua elemen yang dilewati dalam jalur tersebut akan langsung dihubungkan ke root utama.
- **Hasilnya**: Struktur pohon menjadi sangat datar.
- **Dampaknya**: Root tidak berubah, tetapi "jarak" anggota ke root menjadi sangat dekat (hanya satu langkah).

## Opsi Implementasi dalam Java

Pernyataan bahwa **Disjoint Set dapat diimplementasikan menggunakan Array, HashMap, maupun Tree (Node-based)** adalah **BENAR**. Masing-masing strategi penyimpanan memiliki kegunaan yang paling optimal di situasi yang berbeda-beda.

Berikut adalah penjelasan kapan suatu implementasi cocok untuk digunakan beserta contoh kodenya:

### 1. Implementasi Menggunakan Array
**Kondisi Cocok:**
Sangat cocok digunakan apabila kumpulan data/elemen dapat direpresentasikan sebagai bilangan bulat (integer) yang berurutan, misal dari `0` hingga `N-1`. Ini adalah implementasi standar yang **paling cepat dan hemat memori**. Sangat sering dipakai dalam Kompetisi Pemrograman (Competitive Programming) dan algoritma graf tingkat lanjut (seperti Kruskal's MST algorithm).

**Contoh Kode:**
```java
public class DSUArray {
    int[] parent;
    int[] rank; // Dipakai untuk Union by Rank

    public DSUArray(int n) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            makeSet(i);
        }
    }

    public void makeSet(int i) {
        parent[i] = i; // Setiap bilangan root bagi dirinya sendiri
        rank[i] = 0;
    }

    public int find(int i) {
        if (parent[i] == i) {
            return i;
        }
        // Path Compression
        return parent[i] = find(parent[i]);
    }

    public void union(int i, int j) {
        int rootI = find(i);
        int rootJ = find(j);

        if (rootI != rootJ) {
            // Union by Rank
            if (rank[rootI] < rank[rootJ]) {
                parent[rootI] = rootJ;
            } else if (rank[rootI] > rank[rootJ]) {
                parent[rootJ] = rootI;
            } else {
                parent[rootJ] = rootI;
                rank[rootI]++;
            }
        }
    }
}
```

### 2. Implementasi Menggunakan HashMap
**Kondisi Cocok:**
Paling cocok digunakan ketika identitas elemen **bukan berupa integer yang menerus**, misalnya berupa tipe referensi seperti `String` (seperti nama orang atau ID unik/UUID). Kita tidak perlu memetakan kata menjadi angka (index) array terlebih dahulu, sehingga penggunaannya lebih praktis meskipun ada sedikit overhead waktu pada struktur HashMap.

**Contoh Kode:**
```java
import java.util.HashMap;
import java.util.Map;

public class DSUHashMap {
    // Memetakan nilai elemen ke root/parent-nya
    private Map<String, String> perwakilan = new HashMap<>();

    public void makeSet(String nama) {
        perwakilan.put(nama, nama);
    }

    // Fungsi "find" dengan Path compression
    public String find(String nama) {
        if (!perwakilan.get(nama).equals(nama)) {
            perwakilan.put(nama, find(perwakilan.get(nama)));
        }
        return perwakilan.get(nama);
    }

    // Fungsi "union"
    public void union(String a, String b) {
        String repA = find(a);
        String repB = find(b);
        if (!repA.equals(repB)) {
            perwakilan.put(repA, repB);
        }
    }

    public boolean isSameGroup(String a, String b) {
        return find(a).equals(find(b));
    }
}
```

### 3. Implementasi Menggunakan Tree (Object-Oriented Node)
**Kondisi Cocok:**
Cocok diterapkan dalam desain arsitektur *software* yang mengutamakan *Object-Oriented Programming (OOP)*. Daripada hanya memanipulasi pemetaan value-to-value sederhana, setiap data dibungkus ke dalam objek `Node` *(Tree Node)* di mana ia memiliki referensi pointer yang menunjuk ke objek Parent-nya. Pendekatan ini bersih dan memudahkan manipulasi jika elemen punya atribut data tambahan yang panjang.

**Contoh Kode:**
```java
import java.util.HashMap;
import java.util.Map;

public class DSUTreeNode<T> {
    
    // Representasi dari simpul/node Tree
    class Node {
        T data;
        Node parent;
        int rank;

        Node(T data) {
            this.data = data;
            this.parent = this;
            this.rank = 0;
        }
    }

    private Map<T, Node> map = new HashMap<>();

    public void makeSet(T data) {
        Node node = new Node(data);
        map.put(data, node);
    }

    public T find(T data) {
        return findNode(map.get(data)).data;
    }

    private Node findNode(Node node) {
        if (node.parent == node) return node;
        // Path compression
        node.parent = findNode(node.parent);
        return node.parent;
    }

    public void union(T data1, T data2) {
        Node node1 = map.get(data1);
        Node node2 = map.get(data2);

        Node root1 = findNode(node1);
        Node root2 = findNode(node2);

        if (root1 != root2) {
            // Union by Rank
            if (root1.rank >= root2.rank) {
                root1.rank = (root1.rank == root2.rank) ? root1.rank + 1 : root1.rank;
                root2.parent = root1;
            } else {
                root1.parent = root2;
            }
        }
    }
}
```
