import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { supabase } from '../../lib/supabaseClient';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Correo o contraseña incorrectos.');
      setLoading(false);
    }
    // Si es exitoso, AuthContext cambiará y nos redirigirá
  };

  return (
    <div className="min-h-screen bg-uv-bg flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm flex flex-col items-center">

        {/* Logo + Brand */}
        <div className="w-16 h-16 bg-uv-blue rounded-2xl flex items-center justify-center mb-4 shadow-md">
          <span className="text-white font-extrabold text-2xl tracking-tighter">UV</span>
        </div>
        <h1 className="text-2xl font-extrabold text-uv-text-main mb-1">UV Move</h1>
        <p className="text-uv-text-sub text-base mb-8">Movilidad universitaria</p>

        {/* Login Card */}
        <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-uv-border">
          <h2 className="text-xl font-bold text-uv-text-main mb-1">Iniciar sesión</h2>
          <p className="text-sm text-uv-text-sub mb-6">Usa tu correo electrónico</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">
                {error}
              </div>
            )}
            
            {/* Correo */}
            <div>
              <label className="block text-[11px] font-bold text-uv-text-sub tracking-wider uppercase mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                required
                className="w-full bg-uv-bg text-uv-text-main text-sm rounded-xl px-4 py-3.5 placeholder:text-uv-border focus:outline-none focus:ring-2 focus:ring-uv-blue border-none"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-[11px] font-bold text-uv-text-sub tracking-wider uppercase mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-uv-bg text-uv-text-main text-sm rounded-xl px-4 py-3.5 pr-12 placeholder:text-uv-text-sub focus:outline-none focus:ring-2 focus:ring-uv-blue border-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-uv-text-sub hover:text-uv-text-main transition-colors"
                >
                  {showPassword ? <HiEyeOff className="text-xl" /> : <HiEye className="text-xl" />}
                </button>
              </div>
            </div>

            {/* Entrar Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-uv-blue text-white font-semibold py-3.5 rounded-xl hover:bg-blue-800 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Cargando...' : 'Entrar'}
            </button>
          </form>

          {/* Forgot password */}
          <div className="text-center mt-5">
            <button className="text-sm text-uv-blue font-medium hover:underline transition-all">
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-uv-text-sub text-center mt-6 leading-relaxed">
          Al iniciar sesión aceptas los términos de uso de{' '}
          <span className="text-uv-blue font-semibold">UV Move</span>.
        </p>
      </div>
    </div>
  );
};
