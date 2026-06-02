---
sidebar_position: 2
---

# SHORTEST PATH

Masalah **Shortest Path** adalah masalah pencarian jalur antara dua simpul (*node*/*vertex*) di dalam sebuah graf sedemikian rupa sehingga jumlah bobot (*weight*) pada sisi (*edge*) yang membentuk jalur tersebut adalah yang paling minimum.

## Algoritma Dijkstra

Algoritma Dijkstra adalah algoritma *greedy* yang digunakan untuk mencari jalur dengan bobot paling ringan dari satu simpul asal (*Single-Source*) ke semua simpul lain dalam graf.

* **Karakteristik:** Sangat cepat, namun tidak bisa menangani graf yang memiliki sisi dengan bobot negatif.
* **Kompleksitas Waktu:** O(n²)

### Cara Kerja:
1. Berikan nilai jarak `0` untuk simpul awal, dan nilai tak terhingga (∞) untuk semua simpul lainnya.
2. Tandai semua simpul sebagai "belum dikunjungi" (*unvisited*).
3. Pilih simpul belum dikunjungi dengan jarak terkecil sebagai simpul saat ini (*current node*).
4. Evaluasi semua tetangga dari simpul saat ini. Hitung jaraknya dari simpul awal melalui simpul saat ini.
5. Jika jarak baru yang dihitung lebih kecil dari jarak yang tersimpan sebelumnya, perbarui jarak tetangga tersebut (proses ini disebut **Relaxation**).
6. Setelah semua tetangga dievaluasi, tandai simpul saat ini sebagai "telah dikunjungi" (*visited*). Simpul ini tidak akan dievaluasi lagi.
7. Ulangi langkah 3-6 sampai semua simpul telah dikunjungi atau simpul tujuan telah dicapai.

### Implementasi Kode Dijkstra (Java)

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DijkstraMatrix {

    public static void dijkstra(int[][] graph, int startNode) {
        int v = graph.length; // Jumlah total simpul (n)

        int[] distances = new int[v];     // Menyimpan jarak terpendek dari startNode
        boolean[] visited = new boolean[v]; // Menandai simpul yang sudah dikunci/dikunjungi
        int[] previousNodes = new int[v];   // Menyimpan jejak simpul untuk rekonstruksi rute

        // 1. Inisialisasi awal
        for (int i = 0; i < v; i++) {
            distances[i] = Integer.MAX_VALUE;
            visited[i] = false;
            previousNodes[i] = -1; // -1 berarti tidak ada simpul sebelumnya
        }
        distances[startNode] = 0; // Jarak ke diri sendiri adalah 0

        // 2. Loop sebanyak V - 1 kali (karena jalur maksimal melewati V-1 sisi)
        for (int count = 0; count < v - 1; count++) {
            
            // ISI PROSES O(n): Mencari simpul dengan jarak terkecil secara linear
            int currentNode = findMinimumDistance(distances, visited);
            
            // Jika tidak ada lagi simpul yang bisa dijangkau, hentikan loop
            if (currentNode == -1) {
                break;
            }

            // Kunci simpul tersebut
            visited[currentNode] = true;

            // ISI PROSES O(n): Evaluasi dan perbarui semua tetangga simpul saat ini
            for (int neighbor = 0; neighbor < v; neighbor++) {
                
                // graph[currentNode][neighbor] > 0 berarti ada jalan/sisi terhubung
                if (!visited[neighbor] && graph[currentNode][neighbor] != 0 && 
                    distances[currentNode] != Integer.MAX_VALUE) {
                    
                    int distance = distances[currentNode] + graph[currentNode][neighbor];
                    
                    // Proses Relaxation
                    if (distance < distances[neighbor]) {
                        distances[neighbor] = distance;
                        previousNodes[neighbor] = currentNode;
                    }
                }
            }
        }

        // Tampilkan Hasil Pemrosesan
        printResult(startNode, distances, previousNodes);
    }

    /**
     * Fungsi pembantu untuk mencari indeks simpul dengan jarak terkecil (Linear Scan)
     * Ini yang menyebabkan kompleksitas menjadi O(n) setiap kali dipanggil
     */
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

    /**
     * Fungsi pembantu untuk mencetak hasil dan merekonstruksi rute
     */
    private static void printResult(int startNode, int[] distances, int[] previousNodes) {
        System.out.println("=== HASIL PERHITUNGAN DIJKSTRA O(V^2) ===");
        System.out.println("Jarak terpendek dari simpul " + startNode + " ke semua simpul:");
        
        for (int i = 0; i < distances.length; i++) {
            String jarakStr = (distances[i] == Integer.MAX_VALUE) ? "Infinity" : String.valueOf(distances[i]);
            
            // Rekonstruksi rute
            List<Integer> path = new ArrayList<>();
            int current = i;
            while (current != -1) {
                path.add(current);
                current = previousNodes[current];
            }
            Collections.reverse(path);

            System.out.print("  Ke Simpul " + i + " : Jarak = " + jarakStr + " | Rute = ");
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

    public static void main(String[] args) {
        // Representasi Graf dengan Adjacency Matrix berukuran 6x6 (Simpul 0 sampai 5)
        // Angka 0 berarti tidak ada sisi langsung antar simpul tersebut
        int[][] graph = new int[][]{
            {0, 4, 2, 0, 0, 0}, // Simpul 0 terhubung ke 1 (bobot 4) dan 2 (bobot 2)
            {0, 0, 1, 5, 0, 0}, // Simpul 1 terhubung ke 2 (bobot 1) dan 3 (bobot 5)
            {0, 0, 0, 8, 10, 0},// Simpul 2 terhubung ke 3 (bobot 8) dan 4 (bobot 10)
            {0, 0, 0, 0, 2, 6}, // Simpul 3 terhubung ke 4 (bobot 2) dan 5 (bobot 6)
            {0, 0, 0, 0, 0, 3}, // Simpul 4 terhubung ke 5 (bobot 3)
            {0, 0, 0, 0, 0, 0}  // Simpul 5 tidak memiliki jalan keluar
        };

        // Jalankan Dijkstra dengan simpul asal = 0
        dijkstra(graph, 0);
    }
}
```