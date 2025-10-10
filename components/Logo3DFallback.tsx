"use client";

interface Logo3DFallbackProps {
  className?: string;
}

export default function Logo3DFallback({ className = "w-full h-full" }: Logo3DFallbackProps) {
  return (
    <div className={`${className} flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl`}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">N</span>
        </div>
        <p className="text-gray-600 text-sm">3D Logo Loading...</p>
      </div>
    </div>
  );
}



