const NotFound = ({ errorMsg, onRetryBtn }) => {
  return (
    <div className="flex h-60 flex-col items-center justify-center">
      <p>{errorMsg}</p>
      <button
        className="rounded bg-sky-600 px-8 py-3 text-white transition duration-200 hover:cursor-pointer hover:bg-sky-500"
        onClick={onRetryBtn}
      >
        Retry
      </button>
    </div>
  );
};
export default NotFound;
