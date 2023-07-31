const Letter = ({ guessedLetters, letter, reveal }) => {
  return (
    <>
      {(guessedLetters.includes(letter) || reveal) && (
        <div className='font-bold text-white text-2xl'>{letter}</div>
      )}
    </>
  );
};

export default Letter;
