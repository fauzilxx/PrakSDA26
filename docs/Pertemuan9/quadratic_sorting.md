---
sidebar_position: 2
---

# Quadratic Sorting Algorithms
## Bubble Sort
Bubble Sort adalah algoritma pengurutan paling sederhana yang bekerja dengan cara berulang kali membandingkan elemen yang bersebelahan dan menukarnya jika posisinya salah. Elemen dengan nilai terbesar akan "mengapung" (bubble up) ke posisi akhir pada setiap iterasi.

![Visualisasi Bubble Sort](/img/bubble_sort.png)

### Mekanisme
1. Mulai dari elemen pertama, bandingkan elemen tersebut dengan elemen di sebelahnya.
2. Jika elemen pertama lebih besar dari elemen kedua, tukar posisinya.
3. Lanjutkan ke pasangan elemen berikutnya hingga mencapai akhir array. Pada titik ini, elemen terbesar sudah berada di posisi paling kanan.
4. Ulangi proses di atas untuk elemen-elemen yang tersisa, abaikan elemen yang sudah berada di posisi akhir yang benar.
5. Proses berhenti jika dalam satu iterasi penuh tidak ada pertukaran elemen yang terjadi (menandakan array sudah terurut).

### Implementasi
```java
import java.util.Arrays;

public class BubbleSort {

    // Method untuk Bubble Sort
    public static void sort(int[] arr) {
        int n = arr.length;
        boolean isSwapped;
        
        for (int i = 0; i < n - 1; i++) {
            isSwapped = false;
            
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    
                    isSwapped = true;
                }
            }
            
            if (!isSwapped) {
                break;
            }
        }
    }

    // Pengujian Bubble Sort
    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Array Asli         : " + Arrays.toString(data));
        
        sort(data);
        System.out.println("Hasil Bubble Sort  : " + Arrays.toString(data));
    }
}
```

### Kompleksitas
- **Waktu Terburuk (Worst Case)**: O(n²) (ketika array terurut terbalik).
- **Waktu Rata-rata (Average Case)**: O(n²)
- **Waktu Terbaik (Best Case)**: O(n) (ketika array sudah terurut sejak awal, menggunakan optimasi flag/penanda).
- **Ruang (Space Complexity)**: O(1) (In-place sorting).

## Selection Sort
Selection Sort bekerja dengan cara membagi array menjadi dua bagian: sub-array yang sudah terurut (di sebelah kiri) dan sub-array yang belum terurut (di sebelah kanan). Algoritma ini secara konsisten mencari elemen terkecil dari sub-array yang belum terurut dan memindahkannya ke akhir sub-array yang terurut.

![Visualisasi Selection Sort](/img/selection_sort.png)

### Mekanisme
1. Mulai dengan menganggap keseluruhan array sebagai sub-array yang belum terurut.
2. Cari nilai minimum (terkecil) dari seluruh elemen array.
3. Tukar elemen minimum tersebut dengan elemen di posisi pertama. Sekarang, elemen pertama adalah bagian dari sub-array yang terurut.
4. Lanjutkan pencarian elemen minimum dari sisa array yang belum terurut, lalu tukar dengan elemen di posisi kedua.
5. Ulangi langkah ini hingga tersisa satu elemen yang belum terurut (yang otomatis sudah berada di posisi yang benar).

### Implementasi
```java
import java.util.Arrays;

public class SelectionSort {

    // Method untuk Selection Sort
    public static void sort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            if (minIndex != i) {
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }

    // Pengujian Selection Sort
    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Array Asli         : " + Arrays.toString(data));
        
        sort(data);
        System.out.println("Hasil Selection Sort: " + Arrays.toString(data));
    }
}
```

### Kompleksitas
- **Waktu Terburuk (Worst Case)**:  O(n²)
- **Waktu Rata-rata (Average Case)**:  O(n²)
- **Waktu Terbaik (Best Case)**:  O(n²) (Algoritma ini selalu memindai seluruh sisa array meskipun data sudah terurut).
- **Ruang (Space Complexity)**: O(1) (In-place sorting).

## Insertion Sort
Insertion Sort membangun array yang terurut satu per satu, dengan mengambil elemen dari bagian yang belum terurut dan menyisipkannya (insert) ke posisi yang tepat di dalam bagian yang sudah terurut. Algoritma ini bekerja layaknya orang yang sedang mengurutkan kartu remi di tangannya.

![Visualisasi Insertion Sort](/img/insertion_sort.png)

### Mekanisme
1. Anggap elemen pertama array sebagai bagian yang sudah terurut.
2. Ambil elemen kedua dan simpan nilainya sebagai "kunci" (key).
3. Bandingkan "kunci" dengan elemen di kirinya. Jika elemen di kirinya lebih besar, geser elemen tersebut ke kanan.
4. Terus geser elemen-elemen yang lebih besar ke kanan hingga menemukan elemen yang lebih kecil dari "kunci" (atau mencapai ujung kiri array).
5. Sisipkan "kunci" ke posisi yang kosong tersebut.
Ulangi untuk elemen ketiga, keempat, hingga akhir array.

### Implementasi
```java
import java.util.Arrays;

public class InsertionSort {

    // Method untuk Insertion Sort
    public static void sort(int[] arr) {
        int n = arr.length;
        
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            
            arr[j + 1] = key;
        }
    }

    // Pengujian Insertion Sort
    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Array Asli         : " + Arrays.toString(data));
        
        sort(data);
        System.out.println("Hasil Insertion Sort: " + Arrays.toString(data));
    }
}
```
### Kompleksitas
- **Waktu Terburuk (Worst Case)**: O(n²) (ketika array terurut terbalik).
- **Waktu Rata-rata (Average Case)**: O(n²)
- **Waktu Terbaik (Best Case)**: O(n) (ketika array sudah terurut, karena loop perbandingan langsung berhenti).
- **Ruang (Space Complexity)**: O(1) (In-place sorting).

## Perbandingan Kompleksitas
| Algoritma | Best Case | Average Case | Worst Case|
|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) |
| Selection Sort | O(n²) | O(n²) | O(n²) |
| Insertion Sort | O(n) | O(n²) | O(n²) |