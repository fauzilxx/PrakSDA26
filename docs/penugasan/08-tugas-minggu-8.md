---
sidebar_position: 7
---

# Tugas 8: Implementasi Graph dan Disjoint Set

Berikut adalah tugas praktikum untuk memahami cara kerja struktur data **Graph** dan **Disjoint Set**
melalui implementasi menggunakan bahasa Java.

## 1. Deskripsi Tugas

Pada praktikum ini, mahasiswa diminta memahami cara kerja struktur data Graph dan Disjoint Set melalui implementasi menggunakan bahasa Java.

Fokus utama praktikum:
- Memahami hubungan antar data menggunakan graph.
- Memahami representasi graph menggunakan adjacency matrix.
- Memahami operasi penambahan dan penghapusan edge.
- Memahami konsep kelompok/jaringan menggunakan Disjoint Set.

Program dasar telah disediakan dan praktikan diminta melengkapi beberapa operasi yang diperlukan.

## 2. Studi Kasus

**Sistem Pertemanan Mahasiswa**

Dalam sistem ini:
- Mahasiswa direpresentasikan sebagai vertex/node.
- Pertemanan direpresentasikan sebagai edge.
- Kelompok pertemanan direpresentasikan menggunakan Disjoint Set.

## 3. Ketentuan Pengerjaan

1. Gunakan kode dasar yang telah diberikan.
2. Praktikan melengkapi method `addEdge()`, `removeEdge()`, `displayGraph()`, `find()`, `union()`, dan `isSameGroup()`.
3. Gunakan adjacency matrix sebagai representasi graph.
4. Setiap proses **wajib diberi komentar** singkat.
5. Program harus dapat compile dan run tanpa error.

## 4. Kode Dasar (Template)

Salin kode berikut sebagai titik awal pengerjaan:

```java
import java.util.*;

class Graph {

    // Menyimpan pasangan nama mahasiswa dengan index matrix
    private HashMap<String, Integer> studentIndex;

    // Menyimpan daftar nama mahasiswa berdasarkan index
    private ArrayList<String> studentList;

    // Adjacency Matrix
    private int[][] matrix;

    // Jumlah mahasiswa
    private int size;

    Graph(int maxStudents) {
        matrix = new int[maxStudents][maxStudents];
        studentIndex = new HashMap<>();
        studentList = new ArrayList<>();
        size = 0;
    }

    // Menambahkan mahasiswa baru
    public void addStudent(String name) {
        studentIndex.put(name, size);
        studentList.add(name);
        size++;
    }

    // Menambahkan hubungan pertemanan
    public void addEdge(String source, String destination) {
        int src = studentIndex.get(source);
        int dest = studentIndex.get(destination);

        // Graph tidak berarah
        matrix[src][dest] = 1;
        matrix[dest][src] = 1;
    }

    // Menghapus hubungan pertemanan
    public void removeEdge(String source, String destination) {
        int src = studentIndex.get(source);
        int dest = studentIndex.get(destination);

        // Menghapus hubungan dua arah
        matrix[src][dest] = 0;
        matrix[dest][src] = 0;
    }

    // Menampilkan adjacency matrix
    public void displayGraph() {
        System.out.println("Adjacency Matrix:");

        // Header
        System.out.print("\t");
        for (String name : studentList) {
            System.out.print(name + "\t");
        }
        System.out.println();

        // Isi matrix
        for (int i = 0; i < size; i++) {
            System.out.print(studentList.get(i) + "\t");
            for (int j = 0; j < size; j++) {
                System.out.print(matrix[i][j] + "\t");
            }
            System.out.println();
        }
    }
}

class DisjointSet {

    private HashMap<String, String> parent = new HashMap<>();

    // Membuat kelompok baru
    public void makeSet(String name) {
        parent.put(name, name);
    }

    // Mencari representative
    public String find(String name) {
        // Jika parent dirinya sendiri
        if (parent.get(name).equals(name)) {
            return name;
        }
        // Rekursif mencari root
        return find(parent.get(name));
    }

    // Menggabungkan kelompok
    public void union(String a, String b) {
        String rootA = find(a);
        String rootB = find(b);

        // Jika berbeda maka digabung
        if (!rootA.equals(rootB)) {
            parent.put(rootB, rootA);
        }
    }

    // Mengecek apakah satu kelompok
    public boolean isSameGroup(String a, String b) {
        return find(a).equals(find(b));
    }
}

public class KELAS_SDA_NO_PRAKTIKUM_NIM_NAMA {

    public static void main(String[] args) {

        Graph graph = new Graph(10);

        // Menambahkan mahasiswa
        graph.addStudent("Andi");
        graph.addStudent("Budi");
        graph.addStudent("Caca");
        graph.addStudent("Deni");
        graph.addStudent("Eka");
        graph.addStudent("Farah");

        // Kerjakan add edge disini beserta komentar

        System.out.println("Matrix Sebelum Deletion:");
        graph.displayGraph();
        System.out.println();

        // Kerjakan remove edge disini beserta komentar

        System.out.println("Matrix Setelah Deletion:");
        graph.displayGraph();
        System.out.println();

        DisjointSet ds = new DisjointSet();
        ds.makeSet("Andi");
        ds.makeSet("Budi");
        ds.makeSet("Caca");
        ds.makeSet("Deni");
        ds.makeSet("Eka");
        ds.makeSet("Farah");

        // Kerjakan union disini beserta komentar

        // Kerjakan pengecekan grup disini
    }
}
```

## 5. Instruksi Pengerjaan

### Operasi Insertion (Pertemanan)

Buat hubungan pertemanan berikut:

- Andi berteman dengan Budi
- Andi berteman dengan Caca
- Budi berteman dengan Deni
- Caca berteman dengan Eka
- Deni berteman dengan Farah

Gunakan method `addEdge(source, destination)` dan beri komentar pada setiap baris. Contoh:

```java
graph.addEdge("Andi", "Budi"); // Menambahkan hubungan pertemanan antara Andi dan Budi
```

### Operasi Deletion

Hapus hubungan berikut menggunakan method `removeEdge(source, destination)`:

- **Budi dengan Deni**

Contoh:

```java
graph.removeEdge("Budi", "Deni"); // Menghapus hubungan pertemanan antara Budi dan Deni
```

### Operasi Disjoint Set

Lakukan penggabungan kelompok berikut menggunakan method `union(a, b)`:

- Andi dengan Budi
- Budi dengan Caca
- Deni dengan Farah

### Pengecekan Kelompok

Cek apakah pasangan berikut berada dalam kelompok yang sama menggunakan `isSameGroup(a, b)`:

- Andi dan Caca
- Andi dan Farah

### Output yang Diharapkan

- Matrix sebelum deletion
- Matrix setelah deletion
- Hasil pengecekan kelompok Disjoint Set

## 6. Bobot Penilaian

| No | Kriteria Penilaian | Bobot |
|---|---|---|
| 1 | Ketepatan operasi `addEdge` (hubungan sesuai instruksi) | 30% |
| 2 | Ketepatan operasi `removeEdge` (edge yang dihapus sesuai) | 25% |
| 3 | Ketepatan operasi Disjoint Set (`union` & `isSameGroup`) | 25% |
| 4 | Logika program berjalan tanpa error (compile & run) | 10% |
| 5 | Kerapian kode dan kelengkapan komentar penjelasan | 10% |

## 7. Ketentuan Pengumpulan

- **File yang dikumpulkan:**
  - Source code `.java` yang telah dilengkapi.
  - Screenshot hasil program dijalankan (jika lebih dari 1 foto, gabungkan dalam format `.pdf`).
- Tidak perlu membuat laporan.
- Kode **wajib memiliki komentar** yang jelas sesuai ketentuan.
- **Tidak boleh mengubah** struktur class yang telah diberikan.

**Format nama file:**

```
Source code  : KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA.java
Dokumentasi  : KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA.png  /  .pdf
```
