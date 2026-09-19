import { FaCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-uv-bg border-b border-uv-border sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-uv-blue rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm tracking-tighter">UV</span>
        </div>
        <h1 className="text-lg font-bold text-uv-text-main">UV Move</h1>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-uv-border shadow-sm">
        <FaCircle className="text-[8px] text-uv-green" />
        <span className="text-sm font-medium text-uv-blue">Activo</span>
      </div>
    </header>
  );
};
