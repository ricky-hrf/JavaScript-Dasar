
    // Fungsi untuk menampilkan output di halaman
    function displayOutput(message) {
      const outputDiv = document.getElementById('output');
      const p = document.createElement('p');
      p.textContent = message;
      outputDiv.appendChild(p);
    }

    // Parent Class Kendaraan
    class Vehicle {
      constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        this.isEngineOn = false;
      }

      startEngine() {
        this.isEngineOn = true;
        displayOutput(`${this.brand} mesin menyala!`);
      }

      stopEngine() {
        this.isEngineOn = false;
        displayOutput(`${this.brand} mesin mati!`);
      }
    }

    // Child Class Mobil
    class Car extends Vehicle {
      constructor(brand, year, doors) {
        super(brand, year);
        this.doors = doors;
      }

      honk() {
        displayOutput(`${this.brand} klakson berbunyi: Bip bip!`);
      }
    }

    // Child Class Motor
    class Motorcycle extends Vehicle {
      constructor(brand, year, type) {
        super(brand, year);
        this.type = type;
      }

      wheelie() {
        displayOutput(`${this.brand} melakukan wheelie!`);
      }
    }

    // Contoh Penggunaan
    const car1 = new Car('Toyota Avanza', 2020, 4);
    const motor1 = new Motorcycle('Honda CBR', 2022, 'Sport');

    // Operasi mobil
    car1.startEngine();
    car1.honk();
    car1.stopEngine();

    // Operasi motor
    motor1.startEngine();
    motor1.wheelie();
    motor1.stopEngine();

    // Contoh Inheritance Lanjutan
    class ElectricCar extends Car {
      constructor(brand, year, doors, battery) {
        super(brand, year, doors);
        this.battery = battery;
      }

      charge() {
        displayOutput(`${this.brand} charging... ${this.battery} kWh`);
      }
    }

    const tesla = new ElectricCar('Tesla Model S', 2023, 4, 100);
    tesla.startEngine();
    tesla.charge();
