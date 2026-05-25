---
sidebar_position: 2
---

# Quick Sort

Quick Sort adalah algoritma sorting berbasis Divide and Conquer yang bekerja dengan memilih satu elemen sebagai pivot, lalu membagi data menjadi dua bagian: data yang lebih kecil dan lebih besar dari pivot. Setelah itu, setiap bagian diurutkan kembali secara rekursif hingga seluruh data tersusun.

![Quick Sort](/img/quick_sort.png)

## Mekanisme Quick Sort:

- Memilih sebuah elemen sebagai pivot
- Melakukan partition

    - data lebih kecil dari pivot dipindahkan ke kiri
    - data lebih besar dari pivot dipindahkan ke kanan

- Pivot ditempatkan pada posisi yang benar
- Mengulangi proses pada bagian kiri dan kanan pivot secara rekursif

Contoh:

`[9, 4, 7, 3, 10, 5]`

Pivot = 5

Hasil partition:
`[4, 3] 5 [9, 7, 10]`

Kemudian bagian kiri dan kanan diproses kembali hingga seluruh data terurut.

## Implementasi Quick Sort di Java

```java
public static void quickSort(ArrayList<Integer> list, int low, int high) {

    if (low < high) {

        // mencari posisi pivot
        int pivotIndex = partition(list, low, high);

        // sorting bagian kiri pivot
        quickSort(list, low, pivotIndex - 1);

        // sorting bagian kanan pivot
        quickSort(list, pivotIndex + 1, high);
    }
}

private static int partition(ArrayList<Integer> list, int low, int high) {

    // memilih elemen terakhir sebagai pivot
    int pivot = list.get(high);

    int i = low - 1;

    for (int j = low; j < high; j++) {

        // jika elemen lebih kecil dari pivot
        if (list.get(j) <= pivot) {

            i++;

            // tukar posisi elemen
            Collections.swap(list, i, j);
        }
    }

    // menempatkan pivot pada posisi yang benar
    Collections.swap(list, i + 1, high);

    return i + 1;
}
```

## Kompleksitas 

| Kasus                  | Kompleksitas |
| ---------------------- | ------------ |
| 🔥 Best Case           | O(n\log n)   |
| 💡 Average Case        | O(n\log n)   |
| ⚠️ Worst Case          | O(n^2)       |
| 🧠 Kompleksitas Memori | O(\log n)    |
