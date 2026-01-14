const Tag = ({ tag, bgColorClass, textColorClass }) => {
  return (
    <span
      className={`inline-block rounded-md ${bgColorClass} ${textColorClass} px-2 py-1`}
    >
      {tag}
    </span>
  );
};

export default Tag;
