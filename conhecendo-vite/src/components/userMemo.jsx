const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const FibCalculator = ({ num }) => {
  const fibResult = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <p>
        Fibonacci de {num} é {fibResult}
      </p>
    </div>
  );
};
