---
sidebar_position: 11
---

# Tugas 11: Implementasi Minimum Spanning Tree dan Shortest Path

Berikut adalah tugas praktikum untuk memahami cara kerja algoritma pencarian lintasan terpendek (**Dijkstra**) dan pohon rentang minimum (**Kruskal**) melalui implementasi menggunakan bahasa Java.

## 1. Deskripsi Tugas

Pada praktikum ini, mahasiswa diminta memahami cara kerja algoritma pencarian lintasan terpendek (Dijkstra) dan pohon rentang minimum (Kruskal) melalui implementasi menggunakan bahasa Java.

Fokus utama praktikum:
- Memahami implementasi Algoritma Kruskal untuk menentukan Minimum Spanning Tree (MST).
- Memahami struktur data Disjoint Set Union (DSU) dengan optimasi Path Compression dalam mendeteksi siklus.
- Memahami implementasi Algoritma Dijkstra menggunakan Adjacency Matrix untuk menentukan jalur terpendek.
- Memahami proses Relaksasi (Relaxation) nilai jarak pada graf berbobot.

Program dasar telah disediakan dan praktikan diminta melengkapi bagian pemanggilan metode serta skenario simulasi yang diperlukan.

## 2. Studi Kasus

**Sistem Distribusi Jaringan Logistik**

Dalam sistem ini:
- Lokasi gudang/kota direpresentasikan sebagai vertex/node.
- Jalur distribusi penghubung direpresentasikan sebagai edge yang memiliki bobot (jarak/biaya).
- **Algoritma Kruskal** digunakan untuk mendesain jaringan kabel utama yang menghubungkan seluruh kota dengan total biaya paling minimum tanpa membentuk siklus.
- **Algoritma Dijkstra** digunakan untuk mencari rute pengiriman paket tercepat dari satu kota pusat ke kota-kota tujuan.

## 3. Ketentuan Pengerjaan

1. Gunakan kode dasar yang telah diberikan di bawah ini.
2. Praktikan diminta melengkapi bagian `main` untuk melakukan instansiasi objek, memasukkan data sisi graf sesuai instruksi langkah kerja, dan mengaktifkan proses pencarian.
3. Setiap baris proses pengisian data **wajib diberi komentar** singkat.
4. Program harus dapat dicompile dan dijalankan tanpa error.

## 4. Kode Dasar (Template)

Salin kode berikut sebagai titik awal pengerjaan:

```java
import java.util.*;

// ==========================================
// BAGIAN 1: ALGORITMA KRUSKAL & DISJOINT SET
// ==========================================
class KruskalMST {
    static class Edge implements Comparable<Edge> {
        int src, dest, weight;
        public Edge(int src, int dest, int weight) {
            this.src = src;
            this.dest = dest;
            this.weight = weight;
        }
        @Override
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }

    static class DisjointSet {
        int[] parent, rank;
        public DisjointSet(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }

        public int find(int i) {
            if (parent[i] == i) return i;
            return parent[i] = find(parent[i]); // Path compression
        }

        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX != rootY) {
                if (rank[rootX] < rank[rootY]) parent[rootX] = rootY;
                else if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;
                else {
                    parent[rootY] = rootX;
                    rank[rootX]++;
                }
            }
        }
    }

    public static void findMST(List<Edge> edges, int V) {
        Collections.sort(edges); // Urutkan secara ascending (Greedy)
        DisjointSet ds = new DisjointSet(V);
        List<Edge> mst = new ArrayList<>();
        int totalWeight = 0;

        for (Edge edge : edges) {
            int rootSrc = ds.find(edge.src);
            int rootDest = ds.find(edge.dest);

            // Jika tidak membentuk siklus, masukkan ke dalam MST
            if (rootSrc != rootDest) {
                ds.union(rootSrc, rootDest);
                mst.add(edge);
                totalWeight += edge.weight;
            }
        }

        System.out.println("=== HASIL PERHITUNGAN MST (KRUSKAL) ===");
        System.out.println("Sisi yang terpilih dalam MST:");
        for (Edge e : mst) {
            System.out.println("Simpul " + e.src + " - " + e.dest + " | Bobot = " + e.weight);
        }
        System.out.println("Total Bobot Jaringan MST = " + totalWeight);
    }
}

// ==========================================
// BAGIAN 2: ALGORITMA DIJKSTRA (SHORTEST PATH)
// ==========================================
class DijkstraMatrix {
    public static void dijkstra(int[][] graph, int startNode) {
        int v = graph.length;
        int[] distances = new int[v];
        boolean[] visited = new boolean[v];
        int[] previousNodes = new int[v];

        for (int i = 0; i < v; i++) {
            distances[i] = Integer.MAX_VALUE;
            visited[i] = false;
            previousNodes[i] = -1;
        }
        distances[startNode] = 0;

        for (int count = 0; count < v - 1; count++) {
            int currentNode = findMinimumDistance(distances, visited);
            if (currentNode == -1) break;

            visited[currentNode] = true;

            for (int neighbor = 0; neighbor < v; neighbor++) {
                if (!visited[neighbor] && graph[currentNode][neighbor] != 0 && distances[currentNode] != Integer.MAX_VALUE) {
                    int distance = distances[currentNode] + graph[currentNode][neighbor];
                    if (distance < distances[neighbor]) { // Proses Relaxation
                        distances[neighbor] = distance;
                        previousNodes[neighbor] = currentNode;
                    }
                }
            }
        }
        printResult(startNode, distances, previousNodes);
    }

    private static int findMinimumDistance(int[] distances, boolean[] visited) {
        int min = Integer.MAX_VALUE;
        int minIndex = -1;
        for (int i = 0; i < distances.length; i++) {
            if (!visited[i] && distances[i] < min) {
                min = distances[i];
                minIndex = i;
            }
        }
        return minIndex;
    }

    private static void printResult(int startNode, int[] distances, int[] previousNodes) {
        System.out.println("\n=== HASIL PERHITUNGAN DIJKSTRA ===");
        System.out.println("Jarak terpendek dari Simpul Pusat [" + startNode + "] ke semua simpul:");
        for (int i = 0; i < distances.length; i++) {
            String jarakStr = (distances[i] == Integer.MAX_VALUE) ? "Infinity" : String.valueOf(distances[i]);
            List<Integer> path = new ArrayList<>();
            int current = i;
            while (current != -1) {
                path.add(current);
                current = previousNodes[current];
            }
            Collections.reverse(path);
            System.out.print("Ke Simpul " + i + " : Jarak = " + jarakStr + " | Rute = ");
            if (distances[i] == Integer.MAX_VALUE) {
                System.out.println("Tidak Terhubung");
            } else {
                for (int j = 0; j < path.size(); j++) {
                    System.out.print(path.get(j) + (j < path.size() - 1 ? " -> " : ""));
                }
                System.out.println();
            }
        }
    }
}

// ==========================================
// BAGIAN 3: EKSEKUSI UTAMA UTK PRAKTIKAN
// ==========================================
public class KELAS_SDA_NO_PRAKTIKUM_NIM_NAMA {
    public static void main(String[] args) {
        
        // 1. INISIALISASI UNTUK KRUSKAL MST
        int V_Kruskal = 4; // Berisi jumlah simpul (0 sampai 3)
        List<KruskalMST.Edge> edges = new ArrayList<>();

        // TUGAS A: Kerjakan pengisian edges untuk Kruskal di sini berdasarkan instruksi soal!
        // Gunakan format: edges.add(new KruskalMST.Edge(source, destination, weight));
        // Tuliskan juga komentar penjelasan di setiap baris penambahan data.
        


        // Jalankan pencarian MST Kruskal
        KruskalMST.findMST(edges, V_Kruskal);


        // 2. INISIALISASI UNTUK DIJKSTRA LINTASAN TERPENDEK
        int V_Dijkstra = 4; // Matriks berukuran 4x4 (Simpul 0 sampai 3)
        int[][] graph = new int[V_Dijkstra][V_Dijkstra];

        // TUGAS B: Kerjakan pengisian matriks ketetanggaan berbobot untuk Dijkstra di sini!
        // Gunakan format: graph[source][destination] = weight;
        // Ingat, isikan bobot 0 jika tidak ada hubungan langsung antar simpul.
        // Tuliskan juga komentar penjelasan di setiap baris penambahan data.
        


        // Jalankan pencarian rute terpendek Dijkstra dengan simpul awal = 0
        DijkstraMatrix.dijkstra(graph, 0);
    }
}
```

## 5. Langkah Pengerjaan

### 1. Pengisian Data Graf Algoritma Kruskal (Tugas A)

Buatlah data hubungan ketetanggaan berbobot tidak berarah (*undirected graph*) pada daftar `edges` dengan ketentuan skenario berikut:
- Hubungkan Simpul 0 dengan Simpul 1 (Bobot biaya = 10).
- Hubungkan Simpul 0 dengan Simpul 2 (Bobot biaya = 6).
- Hubungkan Simpul 0 dengan Simpul 3 (Bobot biaya = 5).
- Hubungkan Simpul 1 dengan Simpul 3 (Bobot biaya = 15).
- Hubungkan Simpul 2 dengan Simpul 3 (Bobot biaya = 4).

**Contoh Penulisan:**
```java
edges.add(new KruskalMST.Edge(0, 1, 10)); // Menghubungkan simpul 0 dan 1 dengan bobot biaya 10
```

### 2. Pengisian Matriks Ketetanggaan Algoritma Dijkstra (Tugas B)

Isilah nilai elemen `graph[][]` dua dimensi berukuran 4x4 untuk merepresentasikan graf berarah (*directed graph*) dengan skenario bobot jarak berikut:
- Jalur dari Simpul 0 menuju Simpul 1 (Bobot jarak = 4).
- Jalur dari Simpul 0 menuju Simpul 2 (Bobot jarak = 2).
- Jalur dari Simpul 1 menuju Simpul 2 (Bobot jarak = 1).
- Jalur dari Simpul 1 menuju Simpul 3 (Bobot jarak = 5).
- Jalur dari Simpul 2 menuju Simpul 3 (Bobot jarak = 8).

**Contoh Penulisan:**
```java
graph[0][1] = 4; // Jalur satu arah dari simpul 0 ke simpul 1 berbobot jarak 4
```

## 6. Output Target yang Diharapkan

Program harus menampilkan data tekstual berupa:
1. Daftar sisi (*edges*) yang berhasil terpilih masuk ke struktur pohon utama MST beserta hitungan agregat total bobotnya.
2. Rekonstruksi rute navigasi terbaik beserta rincian akumulasi bobot jarak antara simpul asal (0) ke simpul tujuan lainnya (1, 2, 3).

## 7. Ketentuan Pengumpulan

- **Berkas yang dikumpulkan:**
  - Source code murni berupa ekstensi `.java`.
  - Tangkapan layar (*screenshot*) konsol CLI saat program berhasil dijalankan tanpa error, disatukan ke dalam satu file berkas ekstensi `.pdf` atau `.png`.
- Tidak perlu membuat dokumen laporan resmi tambahan.
- Struktur penamaan kelas dan pustaka bawaan di dalam source code dilarang keras untuk diubah.

**Format nama file:**
```
Source code  : KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA.java
Dokumentasi  : KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA.pdf  /  .png
```
