import { Metadata } from 'next';
import { CartCounter } from '../../../shopping-cart/components/CartCounter';

export const metadata: Metadata = {
 title: 'Shopping Cart',
 description: 'Counter Title',
};

export default function CounterPage() {

    return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Producto en el carrito</span>
      <CartCounter/>
    </div>
  );
}