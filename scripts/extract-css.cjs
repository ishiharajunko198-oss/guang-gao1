const fs = require('fs');

const css = fs.readFileSync('dist/assets/index-a_CD7WFD.css', 'utf8');

const classes = [
  'animate-marquee',
  'aspect-video',
  'bg-white',
  'bg-white/90',
  'bg-black/20',
  'bg-gradient-to-l',
  'bg-gradient-to-r',
  'border',
  'border-2',
  'border-gray-100',
  'border-white',
  'bottom-3',
  'cursor-pointer',
  'duration-300',
  'duration-700',
  'flex',
  'flex-shrink-0',
  'from-white',
  'gap-1',
  'gap-2',
  'gap-3',
  'group',
  'group-hover:bg-black/40',
  'group-hover:scale-110',
  'h-1',
  'h-12',
  'h-14',
  'h-full',
  'hover:shadow-2xl',
  'hover:underline',
  'inline-block',
  'inset-0',
  'inset-y-0',
  'items-center',
  'justify-between',
  'justify-center',
  'justify-end',
  'leading-relaxed',
  'leading-tight',
  'left-0',
  'left-3',
  'line-clamp-2',
  'lucide',
  'max-w-[120px]',
  'mb-12',
  'mb-16',
  'mb-3',
  'mb-4',
  'min-h-[60px]',
  'ml-1',
  'mt-16',
  'mt-2',
  'mt-4',
  'mt-6',
  'mx-auto',
  'object-cover',
  'opacity-30',
  'overflow-hidden',
  'p-6',
  'p-8',
  'pt-2',
  'px-2',
  'px-4',
  'py-0.5',
  'py-1',
  'py-20',
  'py-24',
  'relative',
  'right-0',
  'ring-1',
  'ring-gray-100',
  'rounded',
  'rounded-2xl',
  'rounded-full',
  'rounded-lg',
  'shadow-2xl',
  'shadow-lg',
  'shadow-sm',
  'text-3xl',
  'text-4xl',
  'text-[#ff9900]',
  'text-[10px]',
  'text-[11px]',
  'text-amber-500',
  'text-center',
  'text-gray-400',
  'text-gray-500',
  'text-gray-700',
  'text-gray-800',
  'text-jp-navy',
  'text-right',
  'text-sm',
  'text-white',
  'text-xs',
  'to-transparent',
  'tracking-[0.2em]',
  'tracking-widest',
  'transform',
  'transition-all',
  'transition-colors',
  'transition-transform',
  'truncate',
  'uppercase',
  'w-12',
  'w-14',
  'w-16',
  'w-20',
  'w-[320px]',
  'w-full',
  'whitespace-nowrap',
  'z-10',
  'text-2xl',
  'font-black',
  'font-bold',
  'font-medium',
  'font-serif'
];

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let output = '';
const foundClasses = new Set();

for (const cls of classes) {
  const patterns = [
    new RegExp(`(\\.${escapeRegex(cls)}[^{]*\\{[^}]*\\})`, 'g'),
  ];
  
  for (const pattern of patterns) {
    const matches = css.matchAll(pattern);
    for (const match of matches) {
      if (!foundClasses.has(match[1])) {
        foundClasses.add(match[1]);
        output += match[1] + '\n\n';
      }
    }
  }
}

fs.writeFileSync('dist/influencer-showcase.css', output);
console.log('Found:', foundClasses.size, 'CSS rules');
console.log('Output saved to dist/influencer-showcase.css');