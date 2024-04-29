export default function Button({
  label = '',
  color = 'text-white',
  bgColor = 'bg-primary',
  borderColor = 'border-primary',
  textSize = '18',
  icon = '',
  className = '',
}) {
  return (
    <button
      className={`px-8 py-2 font-bold ${
        bgColor
          ? `${bgColor} ${color} ${borderColor && `${borderColor} border-2`}`
          : 'bg-primary text-white'
      }  rounded-md ${textSize} ${className}`}
    >
      {label}
    </button>
  );
}
