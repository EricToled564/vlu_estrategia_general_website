
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionHeader({ icon: Icon, title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-vlu-turquoise/10 rounded-full">
          <Icon className="w-8 h-8 text-vlu-primary" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-vlu-medium mb-4">
          {subtitle}
        </h2>
      )}
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
