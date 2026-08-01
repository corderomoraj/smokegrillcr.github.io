'use client';
import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import orderStore from '../../lib/orderStore';

export default function SuccessPage() {
  const [pending, setPending] = useState<any>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const p = sessionStorage.getItem('smokegrill_pending_order');
    if (p) setPending(JSON.parse(p));
  }, []);

  function validateDateTime() {
    setError('');
    if (!date || !time) {
      setError('Selecciona fecha y hora.');
      return false;
    }
    const selected = new Date(`${date}T${time}`);
    const now = new Date();
    const min = new Date(now.getTime() + 60 * 60 * 1000); // +1 hora
    // If same day, enforce min time
    const today = now.toISOString().slice(0, 10);
    if (date === today && selected < min) {
      setError('La hora debe ser al menos 1 hora desde ahora.');
      return false;
    }
    return true;
  }

  function handleConfirm() {
    if (!validateDateTime()) return;
    // create confirmed order
    const final = {
      ...pending,
      date,
      time,
      status: 'Pendiente de preparación'
    };
    orderStore.saveOrder(final);
    sessionStorage.removeItem('smokegrill_pending_order');
    setConfirmed(true);
  }

  if (!pending) {
    return (
      <div className="container mx-auto px-4 py-12 text-smokeWhite">
        <h1 className="text-2xl">No hay pedido pendiente</h1>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="container mx-auto px-4 py-12 text-smokeWhite">
        <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
        <p className="mb-6">Tu pedido ha sido confirmado y está pendiente de preparación.</p>
        <div className="bg-zinc-900 p-4 rounded">
          <h2 className="font-semibold">Resumen</h2>
          <p>Producto: {pending.product.name}</p>
          <p>Cantidad: {pending.quantity}</p>
          <p>Cliente: {pending.name} — {pending.phone}</p>
          <p>Fecha: {date}</p>
          <p>Hora: {time}</p>
          <p>Estado: Pendiente de preparación</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 text-smokeWhite">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
      <p className="mb-6">Primero necesitamos confirmar fecha y hora de retiro/entrega.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 p-4 rounded">
          <h2 className="font-semibold mb-2">Resumen del pedido</h2>
          <p>Producto: {pending.product.name}</p>
          <p>Cantidad: {pending.quantity}</p>
          <p>Precio unitario: ₡{pending.product.price}</p>
          <p>Total: ₡{pending.product.price * pending.quantity}</p>
        </div>

        <div className="bg-zinc-900 p-4 rounded">
          <label className="block mb-2">Fecha</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full p-2 bg-zinc-800 rounded" />
          <label className="block mt-4 mb-2">Hora</label>
          <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="w-full p-2 bg-zinc-800 rounded" />
          {error && <p className="text-red-400 mt-2">{error}</p>}
          <button onClick={handleConfirm} className="mt-4 px-4 py-2 bg-brandRed rounded">Confirmar pedido</button>
        </div>
      </div>
    </div>
  );
}
