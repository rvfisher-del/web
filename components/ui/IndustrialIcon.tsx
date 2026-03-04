import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IndustrialIconProps {
  icon: LucideIcon;
  size?: number;
}

export default function IndustrialIcon({ icon: Icon, size = 20 }: IndustrialIconProps) {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-[#8F8B84]/5 border border-[#8F8B84]/20 rounded-md">
      <Icon className="text-[#DC964E]" size={size} strokeWidth={1.5} />
    </div>
  );
}
