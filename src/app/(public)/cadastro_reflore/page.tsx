'use client';

import React from 'react';
import RegisterRefloreForm from "../../../components/forms/register-reflore-form"; 

export default function CadastroReflorePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <RegisterRefloreForm />
      </div>
    </main>
  );
}
