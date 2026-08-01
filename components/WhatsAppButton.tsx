'use client';
import { Chat } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/000000000" target="_blank" rel="noreferrer" className="fixed right-6 bottom-6 z-50">
      <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
        <Chat className="text-white" />
      </div>
    </a>
  );
}
