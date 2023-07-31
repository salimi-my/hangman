const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const Keyboard = ({
  correctLetters,
  incorrectLetters,
  addGuessedLetter,
  disabled = false
}) => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='grid grid-cols-6 md:grid-cols-10 gap-4'>
        {keys.map((key) => {
          const active = correctLetters.includes(key);
          const inActive = incorrectLetters.includes(key);

          return (
            <button
              className={`uppercase border w-12 h-12 hover:scale-110 rounded-md ${
                active ? 'bg-blue-300 text-white' : 'text-white'
              } ${inActive ? 'opacity-30' : 'opacity-100'}`}
              key={key}
              disabled={active || inActive || disabled}
              onClick={() => addGuessedLetter(key)}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
