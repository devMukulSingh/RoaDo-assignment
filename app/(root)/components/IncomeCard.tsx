const IncomeCard = () => {
  return (
    <div
      className="
        border
        flex
        rounded-sm
        flex-col
        p-3
    "
    >
      <h1 className="text-xs text-neutral-500">Income</h1>
      <h1 className="text-green-500 font-semibold">100000 CAD</h1>
      <h1 className="text-xs">2 payments received</h1>
    </div>
  );
};

export default IncomeCard;
