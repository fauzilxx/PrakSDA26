---
sidebar_position: 1
---

# Graph

![Graph](/img/graph1.png)

Graph (graf) adalah struktur data non-linear yang digunakan untuk merepresentasikan hubungan antar data. Graf terdiri dari:
- **Vertex / Node / Simpul**: titik yang mewakili objek
- **Edge / Sisi**: penghubung antar simpul

Contoh sederhana:
- Kota yang saling terhubung jalan
- Pertemanan media sosial
- Jalur transportasi
- Pertandingan antar klub sepak bola

Graph dapat dibedakan menjadi beberapa jenis berdasarkan karakteristik tertentu, seperti ada atau tidaknya bobot, arah sisi, keterhubungan, dan struktur hubungan antar simpul. Pada materi dasar ini, graph akan dibagi berdasarkan:
- Bobot (Weight)
- Arah Sisi (Edge Direction)

## Jenis Graph Berdasarkan Bobot

- **Weighted Graph (Graf Berbobot)** 

![Weighted Graph](/img/graph2.jpg)

Weighted graph adalah graph yang setiap sisinya (edge) memiliki nilai tertentu yang disebut weight (bobot). Bobot ini biasanya digunakan untuk merepresentasikan jarak, biaya, waktu, kapasitas, atau nilai lainnya.

- **Unweighted Graph (Graf Tidak Berbobot)** 

![Unweighted Graph](/img/graph3.jpg)

Unweighted graph adalah graph yang setiap sisinya dianggap memiliki nilai yang sama. Di sini tidak ada jarak, tidak ada biaya, dan tidak ada nilai tambahan pada edge. Graph hanya menunjukkan apakah dua simpul terhubung atau tidak.

## Jenis Graph Berdasarkan Arah

- **Undirected Graph (Graf Tidak Berarah)** adalah graph yang sisi-sisinya tidak memiliki arah. Jika simpul A terhubung ke B, maka otomatis B juga terhubung ke A.

- **Directed Graph (Graf Berarah)** adalah graph yang setiap sisinya memiliki arah tertentu. Hubungan hanya berlaku sesuai arah edge.

![Direct Graph](/img/graph4.png)

## Representasi Graf

Agar Graph dapat diolah oleh program, kita perlu menerjemahkannya ke dalam bentuk struktur data. Ada dua cara paling umum yang digunakan:

### Adjacency Matrix

![Adjacency Matrix](/img/graph5.png)

Adjacency Matrix merepresentasikan graph menggunakan array 2 dimensi (matriks) berukuran V × V, di mana V adalah jumlah vertex. Intinya:
- Jika ada edge dari vertex i ke vertex j, maka nilai `matrix[i][j] = 1`.
- Jika tidak ada edge, maka nilainya `0`.

**Kelebihan:** Sangat cepat untuk mengecek apakah dua vertex saling terhubung, yaitu O(1).

**Kekurangan:** Memakan banyak memori, yaitu O(V²), terutama jika graph-nya "renggang" (*sparse graph* / sedikit edge).

Terdapat 2 operasi dalam Adjacency Matrix yaitu `add` dan `remove`. Berikut implementasi Adjacency Matrix di Java:

```java
// Java program to add and remove edge
// in the adjacency matrix of a graph
class GraphMatrix {

    // Number of vertices
    private int n;

    // Adjacency matrix
    private int[][] g;

    // Constructor
    GraphMatrix(int x) {
        this.n = x;
        g = new int[n][n];
    }

    // Function to display adjacency matrix
    public void displayAdjacencyMatrix() {
        for (int i = 0; i < n; ++i) {
            System.out.println();
            for (int j = 0; j < n; ++j) {
                System.out.print(" " + g[i][j]);
            }
        }
        System.out.println();
    }

    // Function to update adjacency matrix for edge insertion
    public void addEdge(int x, int y) {
        if ((x < 0) || (x >= n)) {
            System.out.println("Vertex " + x + " does not exist!");
            return;
        }
        if ((y < 0) || (y >= n)) {
            System.out.println("Vertex " + y + " does not exist!");
            return;
        }
        if (x == y) {
            System.out.println("Same Vertex!");
        } else {
            // Insert edge (Directed Graph)
            g[y][x] = 1;
            // Delete comment below for Undirected Graph
            // g[x][y] = 1;
        }
    }

    // Function to update adjacency matrix for edge removal
    public void removeEdge(int x, int y) {
        if ((x < 0) || (x >= n)) {
            System.out.println("Vertex " + x + " does not exist!");
            return;
        }
        if ((y < 0) || (y >= n)) {
            System.out.println("Vertex " + y + " does not exist!");
            return;
        }
        if (x == y) {
            System.out.println("Same Vertex!");
        } else {
            // Remove edge
            g[y][x] = 0;
            // Delete comment below for Undirected Graph
            // g[x][y] = 0;
        }
    }
}

// Driver Code
public class Main {
    public static void main(String[] args) {
        int N = 6;
        GraphMatrix obj = new GraphMatrix(N);

        obj.addEdge(0, 1);
        obj.addEdge(0, 2);
        obj.addEdge(0, 3);
        obj.addEdge(0, 4);
        obj.addEdge(1, 3);
        obj.addEdge(2, 3);
        obj.addEdge(2, 4);
        obj.addEdge(2, 5);
        obj.addEdge(3, 5);

        System.out.println("Adjacency matrix after edge insertions:");
        obj.displayAdjacencyMatrix();

        obj.removeEdge(2, 3);
        System.out.println("\nAdjacency matrix after edge removal:");
        obj.displayAdjacencyMatrix();
    }
}
```

> **Perhatikan kembali jika ingin menggunakan directed dan undirected.**

### Adjacency List

![Adjacency List](/img/graph6.png)

Adjacency List merepresentasikan graph sebagai Array yang berisi List (atau LinkedList). Indeks dari array mewakili vertex, dan List pada indeks tersebut berisi semua vertex tetangga yang terhubung langsung dengannya.

**Kelebihan:** Sangat hemat memori untuk graph yang renggang karena hanya menyimpan edge yang benar-benar ada. Kompleksitas ruangnya O(V+E).

**Kekurangan:** Butuh waktu lebih lama untuk mengecek keberadaan edge spesifik dibanding matriks.

Terdapat 2 operasi dalam Adjacency List yaitu `add` dan `remove`. Berikut implementasi Adjacency List di Java:

```java
import java.util.LinkedList;

class GraphList {

    // Jumlah vertex (node)
    private int V;

    // Array dari LinkedList untuk menyimpan daftar ketetanggaan
    private LinkedList<Integer>[] adjList;

    // Constructor
    public GraphList(int vertices) {
        this.V = vertices;
        adjList = new LinkedList[V];
        for (int i = 0; i < V; i++) {
            adjList[i] = new LinkedList<>();
        }
    }

    // Method untuk menambahkan Edge
    public void addEdge(int source, int destination) {
        if (source < 0 || source >= V || destination < 0 || destination >= V) {
            System.out.println("Vertex tidak valid!");
            return;
        }
        // Tambahkan destination ke list milik source
        adjList[source].add(destination);
        // Gunakan dibawah jika Undirected
        // adjList[destination].add(source);
    }

    // Method untuk menghapus Edge
    public void removeEdge(int source, int destination) {
        if (source < 0 || source >= V || destination < 0 || destination >= V) {
            System.out.println("Vertex tidak valid!");
            return;
        }
        adjList[source].remove((Integer) destination);
        // Gunakan dibawah jika Undirected
        // adjList[destination].remove((Integer) source);
    }

    // Method untuk menampilkan Graph
    public void displayGraph() {
        System.out.println("Representasi Adjacency List:");
        for (int i = 0; i < V; i++) {
            System.out.print("Vertex " + i + " terhubung ke: ");
            for (Integer node : adjList[i]) {
                System.out.print(node + " ");
            }
            System.out.println();
        }
    }
}

// Driver Code
public class Graph {
    public static void main(String[] args) {
        int V = 5;
        GraphList graph = new GraphList(V);

        graph.addEdge(0, 1);
        graph.addEdge(0, 4);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(1, 4);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);

        graph.displayGraph();

        System.out.println("\nMenghapus edge antara 1 dan 4:");
        graph.removeEdge(1, 4);
        graph.displayGraph();
    }
}
```

> **Perhatikan kembali jika ingin menggunakan directed dan undirected.**

## Perbandingan Kompleksitas

| **Operasi** | **Adjacency Matrix** | **Adjacency List** | **Edge List** |
|---|---|---|---|
| Menambahkan sisi | O(1) | O(1) | O(1) |
| Menghapus sisi | O(1) | O(K) | O(E) |
| Memeriksa keterhubungan | O(1) | O(K) | O(E) |
| Melakukan iterasi tetangga | O(V) | O(K) | O(E) |
| Penggunaan memori | O(V²) | O(E) | O(E) |
