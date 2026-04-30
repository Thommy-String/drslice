import React from 'react';
import { X, Check } from 'lucide-react';

export function ComparisonTable() {
  const comparativa = [
    { 
      old: 'Vecchie diete rigide', 
      new: 'Piani con sostituzioni libere' 
    },
    { 
      old: 'Devi pesare ossessivamente tutto il cibo al grammo', 
      new: 'Essere consapevoli è importante, ma non è lo scopo' 
    },
    { 
      old: 'Rinunciare a cene fuori', 
      new: 'Gestione libera dei pasti' 
    },
    { 
      old: 'Fame e privazione', 
      new: 'Sazietà ed equilibrio' 
    },
    { 
      old: 'Effetto yo-yo nel tempo', 
      new: 'Educazione definitiva' 
    }
  ];

  return (
    <div className="w-full mt-4 sm:mt-8 md:rounded-[2rem] overflow-hidden sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border-y sm:border border-slate-100 flex flex-col font-sans">
      
      {/* Header */}
      <div className="grid grid-cols-2 relative">
        <div className="bg-red-50/80 px-2 sm:px-8 py-5 sm:py-8 text-center flex flex-col items-center justify-center border-b border-white">
          <span className="text-[9px] sm:text-xs font-bold text-red-500 uppercase tracking-widest mb-1.5 sm:mb-2">Vecchia maniera</span>
          <h3 className="text-lg sm:text-3xl font-black text-red-950 leading-tight">La Dieta<br/>Comune</h3>
        </div>
        
        <div className="bg-emerald-100/90 px-2 sm:px-8 py-5 sm:py-8 text-center flex flex-col items-center justify-center border-b border-white">
          <span className="text-[9px] sm:text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1.5 sm:mb-2">La Soluzione</span>
          <h3 className="text-lg sm:text-3xl font-black text-emerald-950 leading-tight">Il Metodo<br/>SLICE</h3>
        </div>

        {/* VS Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center font-black text-slate-300 text-xs sm:text-sm shadow border border-slate-50 z-10 hidden sm:flex">
          VS
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col bg-white">
        {comparativa.map((item, idx) => (
          <div key={idx} className="grid grid-cols-2">
            
            {/* Old approach */}
            <div className="bg-red-50/40 px-3 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 border-b border-white text-center sm:text-left h-full">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-red-50">
                <X className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-red-400" strokeWidth={3} />
              </div>
              <p className="text-[13px] sm:text-base text-slate-500 font-medium leading-snug mt-1 sm:mt-1.5">
                {item.old}
              </p>
            </div>

            {/* New approach */}
            <div className="bg-emerald-50/70 px-3 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 border-b border-white text-center sm:text-left h-full border-l-[2px] sm:border-l-[4px] border-emerald-500">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
                <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-500" strokeWidth={3} />
              </div>
              <p className="text-[13px] sm:text-base text-emerald-950 font-bold leading-snug mt-1 sm:mt-1.5">
                {item.new}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
