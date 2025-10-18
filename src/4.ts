// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// --- Ключ (Key) ---
// Створює унікальний ключ.
export class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  // Метод для "зчитування" візерунка ключа
  public getSignature(): number {
    // Помилка була тут: Key.signature (статичний) -> this.signature (екземпляр)
    return this.signature;
  }
}

// --- Людина (Person) ---
// Містить ключ для доступу до будинку.
export class Person {
  // Приватний ключ, який є у людини
  private key: Key;

  // конструктор має ОТРИМУВАТИ ключ, а не створювати новий
  constructor(key: Key) {
    this.key = key;
  }

  // Метод, щоб отримати ключ
  public getKey(): Key {
    return this.key;
  }
}

// --- Дім (House) ---
// Абстрактний клас, що описує базову логіку будинку.
abstract class House {
  protected door: boolean = false; // Двері за замовчуванням закриті
  protected key: Key; // Ключ, який підходить до дверей
  protected tenants: Person[] = []; // Масив для мешканців

  constructor(key: Key) {
    this.key = key;
  }

  // Метод, щоб увійти в будинок
  public comeIn(person: Person): void {
    if (this.door) {
      console.log("Двері відчинені. Ласкаво просимо!");
      this.tenants.push(person);
    } else {
      console.log("Двері зачинені. Ви не можете увійти.");
    }
  }

  // Абстрактний метод - кожна реалізація будинку має сама вирішити,
  // як саме відчиняти двері.
  public abstract openDoor(key: Key): void;
}

// --- Мій будинок (MyHouse) ---
// Конкретна реалізація будинку.
export class MyHouse extends House {
  // Реалізуємо абстрактний метод
  public openDoor(key: Key): void {
    // Ми перевіряємо не самі об'єкти ключів, а їхні "візерунки" (сигнатури)
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Ключ підійшов. Двері відчинено.");
    } else {
      console.log("Ключ не підійшов.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
