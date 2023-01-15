export default function Cart(props) {
  const { showCart } = props;
  return (
    <>
      <div className={""}>
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
