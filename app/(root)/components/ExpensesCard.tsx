
const ExpensesCard = () => {
  return (
    <div className='
        border
        flex
        rounded-sm
        flex-col
        p-3
    '>
        <h1 
            className='text-xs text-neutral-500'>
            Expenses
        </h1>
        <h1 className='text-red-500 font-semibold'>
            5000 CAD
        </h1>
        <h1 className='text-xs'>
            5 payments paid
        </h1>
    </div>
  )
}

export default ExpensesCard