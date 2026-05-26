---
sidebar_position: 10
---

# Tugas 10: Mencoba Quick Sort dan Merge Sort

Berikut adalah tugas untuk memahami cara kerja algoritma sorting lanjutan,
yaitu **Quick Sort** dan **Merge Sort**, melalui percobaan menggunakan bahasa Java.

## 1. Deskripsi Tugas

Pada tugas ini, mahasiswa diminta mencoba menjalankan dua algoritma sorting lanjutan
dan memberikan refleksi singkat mengenai pemahaman masing-masing algoritma.

Fokus utama tugas:
- Memahami cara kerja Quick Sort melalui mekanisme pivot dan partisi.
- Memahami cara kerja Merge Sort melalui mekanisme pembagian dan penggabungan array.
- Membandingkan kemudahan pemahaman kedua algoritma secara subjektif.

## 2. Kode yang Dicoba

Salin dan jalankan kedua kode berikut di IDE kalian (IntelliJ, Eclipse, VS Code, dll.).

### Quick Sort

```java
import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 5, 6};

        System.out.println("Sebelum:");
        System.out.println(Arrays.toString(arr));

        quickSort(arr, 0, arr.length - 1);

        System.out.println("Sesudah:");
        System.out.println(Arrays.toString(arr));
    }

    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivot = partition(arr, low, high);

            quickSort(arr, low, pivot - 1);
            quickSort(arr, pivot + 1, high);
        }
    }

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                swap(arr, i, j);
                i++;
            }
        }

        swap(arr, i, high);

        return i;
    }

    static void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}
```

### Merge Sort

```java
import java.util.Arrays;

public class MergeSort {

    public static void main(String[] args) {

        int[] arr = {5, 2, 9, 1, 7, 6};

        System.out.println("Sebelum:");
        System.out.println(Arrays.toString(arr));

        mergeSort(arr, 0, arr.length - 1);

        System.out.println("Sesudah:");
        System.out.println(Arrays.toString(arr));

    }

    public static void mergeSort(int[] arr, int left, int right) {

        if (left >= right) return;

        int mid = (left + right) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }

    public static void merge(int[] arr, int left, int mid, int right) {

        int[] temp = new int[right - left + 1];

        int i = left;
        int j = mid + 1;
        int k = 0;

        while (i <= mid && j <= right) {

            if (arr[i] < arr[j])
                temp[k++] = arr[i++];
            else
                temp[k++] = arr[j++];
        }

        while (i <= mid)
            temp[k++] = arr[i++];

        while (j <= right)
            temp[k++] = arr[j++];

        for (int x = 0; x < temp.length; x++)
            arr[left + x] = temp[x];
    }
}
```

## 3. Instruksi Pengerjaan

Setelah berhasil menjalankan kedua program di atas, jawablah pertanyaan refleksi berikut secara tertulis:

> **Setelah mencoba Quick Sort dan Merge Sort, algoritma mana yang menurutmu lebih mudah dipahami? Jelaskan alasannya.**

Ketentuan jawaban:
- Ditulis minimal **3–5 kalimat**.
- Jawaban bersifat subjektif, tidak ada benar atau salah, yang dinilai adalah penjelasan dan alasannya.

## 4. Ketentuan Pengumpulan

- **File yang dikumpulkan:** satu file **PDF** saja.
- PDF berisi identitas dan jawaban refleksi yang telah ditulis.
- Tidak perlu mengumpulkan source code.

**Format nama file:**

```
KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA.pdf
```