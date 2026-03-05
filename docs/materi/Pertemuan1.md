---
sidebar_position: 2
---

# Introduction Java

### 1. TIPE DATA DI JAVA
Tipe data yang ada dijavava memiliki beberapa jenis, diantaranya:
- **Primitive Types**: Tipe data dasar seperti `int`, `double`, `boolean`, dll.
- **Non Primitive Types**: Tipe data yang merujuk ke objek, seperti `String`, `Array`, dll.

Contoh penggunaan tipe data primitif dalam Java:
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        int myNum = 5;               // Integer (whole number)
        float myFloatNum = 5.99f;    // Floating point number
        char myLetter = 'D';         // Character
        boolean myBool = true;       // Boolean
        String myText = "Hello";     // String
    }
}
```

Ciri-ciri tipe data non primitif:
- Merujuk ke objek.
- Dapat memiliki method dan atribut.
- Contoh: `String`, `Array`, `Class`, dll.
- Ditulis dengan huruf awal kapital.

Contoh penggunaan tipe data non primitif dalam Java:

```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        String nama = "Fauzil";
        
        System.out.println(nama.length());  // Menggunakan method dari class String
        System.out.println(nama.toUpperCase());
    }
}
```

```java title="Main.java"
class Mahasiswa {
    String nama;
    int umur;

    void perkenalan() {
        System.out.println("Halo, saya " + nama + ", umur saya " + umur);
    }
}
public class Main {
    public static void main(String[] args) {
      Mahasiswa mhs1 = new Mahasiswa();
      mhs1.nama = "Fauzil";
      mhs1.umur = 20;

      mhs1.perkenalan();
    }
}
```

### 2. JAVA OPERATORS

**a. Arithmetic Operators**
| Operator | Name | Description | Example |
|---|---|---|---|
| + | Addition | Adds together two values | x + y |
| - | Subtraction | Subtracts one value from another | x - y |
| * | Multiplication | Multiplies two values | x * y |
| / | Division | Divides one value by another | x / y |
| % | Modulus | Returns the division remainder | x % y |
| ++ | Increment | Increases the value of a variable by 1 | ++x |
| -- | Decrement | Decreases the value of a variable by 1 | --x |

**b. Assignment Operators**
| Operator | Example | Same As |
|---|---|---|
| = | x = 5 | x = 5 |
| += | x += 3 | x = x + 3 |
| -= | x -= 3 | x = x - 3 |
| *= | x *= 3 | x = x * 3 |
| /= | x /= 3 | x = x / 3 |
| %= | x %= 3 | x = x % 3 |
| &= | x &= 3 | x = x & 3 |
| \|= | x \|= 3 | x = x \| 3 |
| ^= | x ^= 3 | x = x ^ 3 |
| >>= | x >>= 3 | x = x >> 3 |
| &lt;&lt;= | x &lt;&lt;= 3 | x = x &lt;&lt; 3 |

**c. Comparison Operators**
| Operator | Name | Example |
|---|---|---|
| == | Equal to | x == y |
| != | Not equal | x != y |
| > | Greater than | x > y |
| &lt; | Less than | x &lt; y |
| >= | Greater than or equal to | x >= y |
| &lt;= | Less than or equal to | x &lt;= y |

**d. Logical Operators**
| Operator | Name | Description | Example |
|---|---|---|---|
| && | Logical and | Returns true if both statements are true | x &lt; 5 && x &lt; 10 |
| \|\| | Logical or | Returns true if one of the statements is true | x &lt; 5 \|\| x &lt; 4 |
| ! | Logical not | Reverse the result, returns false if the result is true | !(x &lt; 5 && x &lt; 10) |

### 3. JAVA CONTROL FLOW
**a. If-Else Statement**
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        int time = 20;
        if (time < 18) {
            System.out.println("Good day.");
        } else {
            System.out.println("Good evening.");
        }
    }
}
```

**b. Switch Statement**
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        int day = 4;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
        }
    }
}
```

**c. For Loop**
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
}
```

**d. While Loop**
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            System.out.println(i);
            i++;
        }
    }
}
```
**e. Do-While Loop**
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            System.out.println(i);
            i++;
        } while (i < 5);
    }
}
```
**f. Break and Continue**
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break; // Keluar dari loop ketika i sama dengan 5
            }
            if (i % 2 == 0) {
                continue; // Lewatkan iterasi ketika i adalah angka genap
            }
            System.out.println(i); // Hanya mencetak angka ganjil dari 0 hingga 9
        }
    }
}
```

### 4. JAVA ARRAYS
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        // Deklarasi dan inisialisasi array
        int[] myNumbers = {10, 20, 30, 40, 50}; 
        // Mengakses elemen array
        System.out.println(myNumbers[0]); // Output: 10
        // Mengubah elemen array
        myNumbers[1] = 25;
        System.out.println(myNumbers[1]); // Output: 25
        // Panjang array
        System.out.println(myNumbers.length); // Output: 5
    }
}
```