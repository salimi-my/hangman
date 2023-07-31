import Hangman1 from '../assets/hangman-1.png';
import Hangman2 from '../assets/hangman-2.png';
import Hangman3 from '../assets/hangman-3.png';
import Hangman4 from '../assets/hangman-4.png';
import Hangman5 from '../assets/hangman-5.png';
import Hangman6 from '../assets/hangman-6.png';
import Hangman7 from '../assets/hangman-7.png';

const HangmanParts = [
  Hangman1,
  Hangman2,
  Hangman3,
  Hangman4,
  Hangman5,
  Hangman6,
  Hangman7
];

const Hangman = ({ numberOfGuesses }) => {
  return (
    <div className='flex justify-center mt-10'>
      <img src={HangmanParts[numberOfGuesses]} className='max-h-[300px]' />
    </div>
  );
};

export default Hangman;
