# Tugas 9: Implementasi dan Analisis Algoritma Sorting Dasar

**Topik:** Bubble Sort, Selection Sort, dan Insertion Sort  
**Tujuan Pembelajaran:**
1. Mampu memodifikasi algoritma sorting dasar untuk mengurutkan *Array of Objects*.
2. Menganalisis *best case* dan *worst case* secara langsung melalui waktu eksekusi program.

---

## 📌 Studi Kasus: Sistem Manajemen Event

Anda sedang mengembangkan sebuah fitur untuk dasbor manajemen *event*. Panitia perlu mengurutkan data peserta berdasarkan **Poin Prioritas** untuk menentukan siapa yang berhak mendapatkan akses masuk lebih awal (*Early Access*).

### Struktur Data
Buatlah sebuah *class* `PesertaEvent` di Java dengan atribut berikut:
* `idPendaftaran` (int) - Menandakan urutan mendaftar.
* `nama` (String)
* `poinPrioritas` (int)

---

## 📝 Instruksi Tugas

### Bagian 1: Implementasi
1. Gunakan *wireframe* kode yang telah disediakan di bawah. Array berisi 6 data awal peserta sudah terdefinisi.
2. Modifikasi kode **Bubble Sort**, **Selection Sort**, dan **Insertion Sort** pada bagian `// TODO` agar dapat mengurutkan *array of objects* `PesertaEvent`.
3. Pengurutan harus dilakukan berdasarkan atribut `poinPrioritas` secara **Descending** (dari poin terbesar ke terkecil).

### Bagian 2: Analisis Performa Waktu
Gunakan fungsi `System.nanoTime()` di Java untuk menghitung durasi eksekusi dari algoritma **Bubble Sort** dan **Insertion Sort**.
1. Ukur waktu eksekusi saat mengurutkan data array awal yang masih acak.
2. Ukur kembali waktu eksekusinya jika array yang dimasukkan **sudah dalam keadaan terurut Descending sejak awal** (*Best Case Scenario*).

**Soal Analisis:**
Apakah terbukti bahwa waktu eksekusi *best case* jauh lebih cepat dibandingkan *average/worst case* pada kedua algoritma tersebut? Pastikan Anda sudah menggunakan optimasi `isSwapped` pada Bubble Sort.

---

## 💻 Wireframe Kode Awal

Gunakan kerangka kode berikut sebagai titik awal pengerjaan tugas Anda:

```java
import java.util.Arrays;

// 1. Class Data
class PesertaEvent {
    int idPendaftaran;
    String nama;
    int poinPrioritas;

    public PesertaEvent(int idPendaftaran, String nama, int poinPrioritas) {
        this.idPendaftaran = idPendaftaran;
        this.nama = nama;
        this.poinPrioritas = poinPrioritas;
    }

    // Method untuk memudahkan pencetakan data ke layar
    @Override
    public String toString() {
        return String.format("[ID: %d | Nama: %-5s | Poin: %d]", idPendaftaran, nama, poinPrioritas);
    }
}

// 2. Class Utama
public class ModulTugas1 {

    // --- BAGIAN 1: IMPLEMENTASI SORTING ---
    
    public static void bubbleSort(PesertaEvent[] arr) {
        int n = arr.length;
        // TODO: Implementasikan Bubble Sort di sini!
        // Hint: Urutkan berdasarkan arr[j].poinPrioritas secara DESCENDING (>)
        // Hint: Jangan lupa tambahkan optimasi isSwapped
        
    }

    public static void selectionSort(PesertaEvent[] arr) {
        int n = arr.length;
        // TODO: Implementasikan Selection Sort di sini!
        // Hint: Cari nilai MAKSIMUM untuk diurutkan secara DESCENDING
        
    }

    public static void insertionSort(PesertaEvent[] arr) {
        int n = arr.length;
        // TODO: Implementasikan Insertion Sort di sini!
        // Hint: Geser elemen jika elemen yang dicek lebih kecil dari 'key'
        
    }

    // Method bantuan untuk mencetak isi array
    public static void printArray(PesertaEvent[] arr, String namaAlgoritma) {
        System.out.println("Hasil " + namaAlgoritma + ":");
        for (PesertaEvent p : arr) {
            System.out.println(p.toString());
        }
        System.out.println();
    }

    // --- MAIN METHOD ---
    public static void main(String[] args) {
        // Inisialisasi Data Awal (Sesuai instruksi soal)
        PesertaEvent[] dataAwal = {
            new PesertaEvent(1, "Andi", 85),
            new PesertaEvent(2, "Budi", 90),
            new PesertaEvent(3, "Caca", 75),
            new PesertaEvent(4, "Deni", 90),
            new PesertaEvent(5, "Euis", 85),
            new PesertaEvent(6, "Fajar", 60)
        };

        System.out.println("=== DATA AWAL SEBELUM DIURUTKAN ===");
        printArray(dataAwal, "Data Mentah");

        // Membuat salinan array agar setiap algoritma memproses data awal yang sama
        PesertaEvent[] arrBubble = Arrays.copyOf(dataAwal, dataAwal.length);
        PesertaEvent[] arrSelection = Arrays.copyOf(dataAwal, dataAwal.length);
        PesertaEvent[] arrInsertion = Arrays.copyOf(dataAwal, dataAwal.length);

        System.out.println("=== PENGUJIAN IMPLEMENTASI ===");
        
        // Menjalankan Bubble Sort
        bubbleSort(arrBubble);
        printArray(arrBubble, "Bubble Sort");

        // Menjalankan Selection Sort
        selectionSort(arrSelection);
        printArray(arrSelection, "Selection Sort");

        // Menjalankan Insertion Sort
        insertionSort(arrInsertion);
        printArray(arrInsertion, "Insertion Sort");


        System.out.println("=== BAGIAN 2: ANALISIS PERFORMA WAKTU ===");
        
        // TODO: Lakukan pengukuran waktu di sini menggunakan System.nanoTime()
        // Contoh cara mengukur waktu:
        // long startTime = System.nanoTime();
        // bubbleSort(arrBubbleBestCase); 
        // long endTime = System.nanoTime();
        // long duration = endTime - startTime;
        // System.out.println("Waktu Eksekusi: " + duration + " nanosecond");

    }
}