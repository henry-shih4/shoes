export default function Cart(props) {
  const { showCart } = props;
  return (
    <>
      <div
        className={
          showCart
            ? "absolute top-[120%] -inset-x-3/4 h-max w-[300px] shadow-xl bg-white translate-y-0 transition-all duration-500 z-10"
            : "absolute top-[120%] -inset-x-3/4 h-max w-[300px] shadow-xl bg-white invisible translate-y-[-15%] transition-all duration-500"
        }
      >
        <div>
          <div className="p-4">Cart</div>
          <div className="w-full border border-slate-200"></div>
          <div>item info</div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
