export default function LoadingModal() {
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/[.5] flex justify-center items-center">
      <div className="container max-w-lg rounded-lg bg-white shadow-lg">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <p className="font-semibold text-black text-lg">Processing...</p>
        </div>
        <div className="p-4 rounded-b-lg flex items-center justify-center">
          <Loading />
        </div>
      </div>
    </div>
  );
}

export const Loading = () => (
  <svg className="animate-spin h-20 w-20 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
)