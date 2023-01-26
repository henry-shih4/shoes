export default function ItemAddModal(props) {
  const { name, variation } = props;
  return (
    <>
      <div className="w-[max] h-[40px] px-2 bg-slate-100 text-green-600 rounded-md flex justify-center items-center">
        {name} {variation} added to cart.
      </div>
    </>
  );
}
