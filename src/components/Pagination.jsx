import { Link } from "react-router";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Pagination({ handleOnClick, type, pageLink, text }) {
  return (
    <Link
      onClick={handleOnClick}
      className="m-2 flex items-center gap-1 self-end rounded-lg border p-2 transition hover:bg-sky-400 hover:text-white"
      to={pageLink}
    >
      {type === "prev" ? (
        <>
          <GrFormPrevious />
          {text}
        </>
      ) : (
        <>
          {text}
          <GrFormNext />
        </>
      )}
    </Link>
  );
}
