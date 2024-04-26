export default function Button({
  label = '',
  color = '',
  bgColor = '',
  borderColor = '',
  textSize = '',
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
