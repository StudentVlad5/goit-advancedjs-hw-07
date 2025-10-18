// Імпортуємо клас, який хочемо використати
import { Wizard } from "./3";

// Ваш код для запуску
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp();

// Виведемо фінальний рівень, щоб щось побачити
console.log(`Final level: ${wizard.level}`);
