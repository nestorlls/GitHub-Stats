import React from 'react';

const Language = ({ language }) => {
  const colors = {
    javascript: 'text-yellow-500',
    typescript: 'text-blue-500',
    python: 'text-yellow-500',
    java: 'text-green-500',
    html: 'text-orange-500',
    css: 'text-blue-500',
    php: 'text-cyan-500',
    ruby: 'text-red-500',
    rust: 'text-red-300',
    go: 'text-blue-400',
    scss: 'text-blue-700',
    lua: 'text-green-300',
    none: 'text-gray-500',
    shell: 'text-lime-500',
    groovy: 'text-sky-500',
    c: 'text-sky-300',
  };

  const lang = language ? colors[language.toLowerCase()] : 'text-gray-400';

  return (
    <div className="flex items-center gap-1">
      <span className={lang}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <p className="text-white">{language ?? 'none'}</p>
    </div>
  );
};

export default Language;
