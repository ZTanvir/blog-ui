const Tag = ({ tag, bgColorClass, textColorClass }) => {
  return (
    <span
      className={`inline-block rounded-md hover:cursor-pointer ${bgColorClass} ${textColorClass} px-2 py-1 transition duration-200 hover:bg-sky-600`}
    >
      {tag}
    </span>
  );
};

export default Tag;
