const Button = ({ variant = 'solid', children, ...props }) => {
  const baseClasses = "px-4 py-2 font-bold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  let variantClasses = "";

  switch (variant) {
    case 'solid':
      variantClasses = "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed";
      break;
    case 'outline':
      variantClasses = "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed";
      break;
    case 'ghost':
      variantClasses = "bg-transparent text-blue-500 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed";
      break;
    case 'danger':
      variantClasses = "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700";
      break;
  }

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );


};

export default Button;  