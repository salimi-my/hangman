import Letter from './Letter';

const Word = ({ guessedLetters, wordToGuess, reveal = false }) => {
  return (
    <div className='flex justify-center uppercase space-x-4 mt-5'>
      {wordToGuess.split('').map((letter, id) => (
        <div
          className='flex justify-center items-center border-b-2 border-white w-12 h-12'
          key={id}
        >
          <Letter
            guessedLetters={guessedLetters}
            letter={letter}
            reveal={reveal}
          >
            {letter}
          </Letter>
        </div>
      ))}
    </div>
  );
};

export default Word;
