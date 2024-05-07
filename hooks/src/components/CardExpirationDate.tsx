import useCardExpirationDate from '../lib/useCardExpirationDate/useCardExpirationDate';

const CardExpirationDate = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardExpirationDate(['', '']);

  return (
    <>
      {[...Array(2)].map((_, index) => (
        <input
          value={value[index]}
          onChange={(e) => onChangeHandler(e, index)}
          onBlur={() => onBlurHandler(index)}
          onFocus={() => onFocusHandler(index)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              e.currentTarget.blur();
            }
          }}
        />
      ))}
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardExpirationDate;
