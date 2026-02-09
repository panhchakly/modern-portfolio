import { User, Code2, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { icon: User, label: 'About', id: 'about' },
  { icon: Code2, label: 'Skills', id: 'skills' },
  { icon: Briefcase, label: 'Experience', id: 'experience' },
  { icon: FolderOpen, label: 'Projects', id: 'projects' },
  { icon: Mail, label: 'Contact', id: 'contact' },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        return { id: item.id, label: item.label, top: element?.offsetTop || 0 };
      });

      const scrollPosition = window.scrollY + 100;
      const current = sections.reduce((acc, section) => {
        return scrollPosition >= section.top ? section : acc;
      });

      if (current) {
        setActiveItem(current.label);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string, label: string) => {
    setActiveItem(label);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="text-xl font-semibold text-white">Chheng Panhchakly</span>
            </div>

            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleClick(item.id, item.label)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50 safe-area-inset-bottom">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleClick(item.id, item.label)}
                className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                <Icon
                  size={24}
                  className={`transition-transform duration-200 ${
                    isActive ? 'scale-110' : ''
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={`text-xs font-medium ${
                    isActive ? 'font-semibold' : ''
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
