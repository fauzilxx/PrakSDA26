---
sidebar_position: 1
---

# MINIMUM SPANNING TREE (MST)

**Spanning Tree** adalah *subgraph* dari graf terhubung berbobot yang menghubungkan semua simpul (*vertex*) bersama-sama tanpa membentuk *cycle* (siklus).

**Minimum Spanning Tree (MST)** adalah *spanning tree* dengan total bobot sisi (*edge*) yang paling minimum. 

Sebelum lebih jauh mengenal jenis algoritma untuk menentukan MST, kita perlu mengetahui tentang algoritma *greedy*.

## Algoritma Greedy

Dalam ilmu komputer, **Algoritma Greedy** adalah paradigma pemecahan masalah yang menyusun solusi langkah demi langkah. Pada setiap langkahnya, algoritma ini selalu mengambil keputusan yang paling menguntungkan saat itu juga (*lokal optimal*), dengan harapan bahwa rangkaian keputusan lokal ini akan membawa ke solusi terbaik di akhir (*global optimal*). 

> "Ambil apa yang terbaik sekarang, urusan belakang jangan dipikirkan dulu."

---

## Algoritma Kruskal

Algoritma Kruskal adalah algoritma *greedy* yang mencari MST dengan cara mengurutkan semua sisi dari bobot terkecil ke terbesar, lalu memasukkannya ke dalam pohon satu per satu selama sisi tersebut tidak membentuk siklus. 

### Cara Kerja:
1. Urutkan semua sisi berdasarkan bobotnya secara *ascending*.
2. Ambil sisi dengan bobot terkecil. Check apakah sisi tersebut membentuk siklus menggunakan struktur data *Disjoint Set Union* (DSU) atau *Find-Union*.
3. Jika tidak membentuk siklus, masukkan sisi tersebut ke dalam MST.
4. Ulangi sampai ada V - 1 sisi di dalam MST (di mana V adalah jumlah simpul).

### Contoh Pemilihan Sisi:

| Sisi (Edge) | Bobot |
| :--- | :--- |
| (7, 6) | 1 |
| (6, 5) | 2 |
| (2, 8) | 2 |
| (0, 1) | 4 |
| (2, 5) | 4 |
| (8, 6) | 6 |
| (2, 3) | 7 |
| (7, 8) | 7 |
| dst... | |

---

## Algoritma Prim

Algoritma Prim juga menggunakan pendekatan *greedy*, tetapi alih-alih mengambil sisi acak terkecil, Prim tumbuh dari satu simpul asal (*root*) dan melebar ke simpul tetangga terdekat yang belum dikunjungi. 

### Cara Kerja:
1. Buat himpunan `inMST` untuk melacak simpul yang sudah masuk MST.
2. Set nilai kunci (*key*) semua simpul menjadi tak hingga ($\infty$), kecuali simpul pertama yang diset 0.
3. Gunakan *Min-Priority Queue* untuk mengambil simpul dengan kunci terkecil yang belum masuk MST.
4. Evaluasi semua tetangga dari simpul tersebut. Jika bobot sisi lebih kecil dari kunci saat ini, perbarui kuncinya.
5. Ulangi sampai semua simpul masuk ke dalam `inMST`.

---

## Perbedaan Kruskal dan Prim

| Sifat Greedy | Algoritma Kruskal | Algoritma Prim |
| :--- | :--- | :--- |
| **Fokus Utama** | Sisi (*Edge*) terkecil di seluruh graf. | Simpul (*Vertex*) terdekat dari wilayah aktif. |
| **Kondisi Awal** | Graf kosong, langsung melompat ke sisi terkecil di mana saja. | Dimulai dari satu simpul asal, lalu melebar. |
| **Struktur** | Bisa membentuk potongan-potongan hutan (*forest*) terpisah sebelum akhirnya menyatu. | Selalu membentuk satu pohon tunggal yang terus tumbuh besar. |

### Mengapa Pendekatan Greedy Berhasil pada MST? 

Tidak semua masalah bisa diselesaikan dengan algoritma Greedy. Seringkali pilihan yang terlihat bagus di awal justru menjebak kita di akhir (disebut *Local Optimum Trap*).

Namun, untuk kasus Minimum Spanning Tree, pendekatan *greedy* dijamin **100% selalu menghasilkan solusi yang benar dan paling minimum** (*Global Optimum*). Hal ini dibuktikan secara matematis melalui struktur graf yang disebut *Matroid Theory* dan properti pemotongan graf (*Cut Property*).

---

## Implementasi Kode MST

### Contoh Kode Kruskal (Java)
```java
import java.util.*;

class KruskalMST {
    // Representasi Sisi (Edge)
    static class Edge implements Comparable<Edge> {
        int src, dest, weight;

        public Edge(int src, int dest, int weight) {
            this.src = src;
            this.dest = dest;
            this.weight = weight;
        }

        // Diurutkan berdasarkan bobot terkecil (Greedy)
        @Override
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }

    // Struktur Data Disjoint Set (Union-Find)
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
        // Langkah 1: Urutkan semua sisi (Greedy Selection)
        Collections.sort(edges);

        DisjointSet ds = new DisjointSet(V);
        List<Edge> mst = new ArrayList<>();
        int totalWeight = 0;

        // Langkah 2 & 3: Ambil sisi terkecil dan cek kelayakan (Feasibility Check)
        for (Edge edge : edges) {
            int rootSrc = ds.find(edge.src);
            int rootDest = ds.find(edge.dest);

            // Jika tidak membentuk siklus
            if (rootSrc != rootDest) {
                ds.union(rootSrc, rootDest);
                mst.add(edge);
                totalWeight += edge.weight;
            }
        }

        // Cetak Hasil
        System.out.println("Edges di dalam MST (Kruskal):");
        for (Edge e : mst) {
            System.out.println(e.src + " - " + e.dest + " : " + e.weight);
        }
        System.out.println("Total Bobot MST: " + totalWeight);
    }

    public static void main(String[] args) {
        int V = 4; // Jumlah simpul (0 sampai 3)
        List<Edge> edges = new ArrayList<>();

        // Menambahkan sisi: (src, dest, weight)
        edges.add(new Edge(0, 1, 10));
        edges.add(new Edge(0, 2, 6));
        edges.add(new Edge(0, 3, 5));
        edges.add(new Edge(1, 3, 15));
        edges.add(new Edge(2, 3, 4));

        findMST(edges, V);
    }
}
```

### Contoh Kode Prim (Java)

```java
import java.util.*;

class PrimMST {
    // Representasi Pasangan (Simpul_Tujuan, Bobot)
    static class Pair implements Comparable<Pair> {
        int vertex, weight;

        public Pair(int vertex, int weight) {
            this.vertex = vertex;
            this.weight = weight;
        }

        @Override
        public int compareTo(Pair other) {
            return Integer.compare(this.weight, other.weight);
        }
    }

    public static void findMST(List<List<Pair>> adj, int V) {
        PriorityQueue<Pair> pq = new PriorityQueue<>();
        int src = 0; // Mulai dari simpul 0

        int[] key = new int[V];
        int[] parent = new int[V];
        boolean[] inMST = new boolean[V];

        Arrays.fill(key, Integer.MAX_VALUE);
        Arrays.fill(parent, -1);

        // Langkah awal greedy
        pq.add(new Pair(src, 0));
        key[src] = 0;

        while (!pq.empty()) {
            // Ambil simpul dengan bobot sisi terkecil dari area aktif
            int u = pq.peek().vertex;
            pq.poll();

            if (inMST[u]) continue;
            inMST[u] = true; // Masukkan ke dalam daerah MST

            // Evaluasi tetangga simpul u
            for (Pair neighbor : adj[u]) {
                int v = neighbor.vertex;
                int weight = neighbor.weight;

                // Jika v belum masuk MST dan bobot baru lebih kecil dari key saat ini
                if (!inMST[v] && key[v] > weight) {
                    key[v] = weight;
                    pq.add(new Pair(v, key[v]));
                    parent[v] = u;
                }
            }
        }

        // Cetak Hasil
        System.out.println("Edges di dalam MST (Prim):");
        int totalWeight = 0;
        for (int i = 1; i < V; i++) {
            System.out.println(parent[i] + " - " + i + " : " + key[i]);
            totalWeight += key[i];
        }
        System.out.println("Total Bobot MST: " + totalWeight);
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Pair>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Graf Tidak Berarah (Undirected Graph)
        // Hubungkan u ke v dan v ke u dengan bobot yang sama
        adj.get(0).add(new Pair(1, 2)); adj.get(1).add(new Pair(0, 2));
        adj.get(0).add(new Pair(3, 6)); adj.get(3).add(new Pair(0, 6));
        adj.get(1).add(new Pair(2, 3)); adj.get(2).add(new Pair(1, 3));
        adj.get(1).add(new Pair(3, 8)); adj.get(3).add(new Pair(1, 8));
        adj.get(1).add(new Pair(4, 5)); adj.get(4).add(new Pair(1, 5));
        adj.get(2).add(new Pair(4, 7)); adj.get(4).add(new Pair(2, 7));

        findMST(adj, V);
    }
}
```