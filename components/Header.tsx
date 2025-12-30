
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホームページ', href: 'https://www.sellersprite.com/jp' },
    { name: '５つの强み', href: '#features' },
    { name: '拡張機能', href: '#extension-view' },
    { name: '機能一覧', href: '#feature-table' },
    { name: 'お客様の声', href: '#testimonials' },
    { name: '料金プラン', href: 'https://www.sellersprite.com/jp/price' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen 
          ? 'bg-white shadow-md border-gray-200 py-3' 
          : 'bg-white/95 backdrop-blur-sm border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* SellerSprite Official Logo - Updated to open in new tab */}
        <a 
          href="https://www.sellersprite.com/jp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <img 
            src="https://www.sellersprite.jp/assets/images/SellerSprite_logo_EN.svg" 
            alt="SellerSprite(セラースプライト) - Amazon売上最大化ツール" 
            className="h-8 md:h-9 w-auto"
            width="180"
            height="40"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-gray-600 hover:text-[#ff9900] font-medium transition-colors text-sm whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Login */}
        <div className="hidden md:flex items-center gap-4">
           <a 
            href="https://www.sellersprite.com/jp/w/user/login" 
            className="flex items-center gap-1 text-gray-600 font-bold hover:text-[#ff9900] transition-colors whitespace-nowrap"
          >
            <LogIn size={18} />
            ログイン
          </a>
          <a 
            href="https://www.sellersprite.com/jp/w/user/signup" 
            className="bg-[#ff9900] hover:bg-[#e68a00] text-white px-6 py-2.5 rounded-full font-bold shadow-lg transition-transform transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            無料で始める
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white absolute top-full left-0 right-0 border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-gray-700 font-medium py-2 border-b border-gray-50"
              onClick={() => {
                if (!link.href.startsWith('http')) {
                  setMobileMenuOpen(false);
                }
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <a 
              href="https://www.sellersprite.com/jp/w/user/login" 
              className="text-center py-2 text-gray-700 font-bold border border-gray-300 rounded"
            >
              ログイン
            </a>
             <a 
              href="https://www.sellersprite.com/jp/w/user/signup" 
              className="text-center py-3 bg-[#ff9900] text-white font-bold rounded shadow"
            >
              今すぐ無料で試す
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
