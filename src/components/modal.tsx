import {CgClose} from "react-icons/cg";

interface KeyModalProps {
  onClose: () => void;
  savePaste: () => void;
  setKey: (k: string) => void;
  _key: string;
  _id: string | undefined;
}

export default function KeyModal({onClose, savePaste, _key, setKey, _id}: KeyModalProps) {
  const save = () => {savePaste(); onClose();}
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/[.5] flex justify-center items-center">
      <div className="container max-w-lg rounded-lg bg-white shadow-lg">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <p className="font-semibold text-black text-lg">Enter key</p>
          <button onClick={onClose}><CgClose/></button>
        </div>
        <div className="p-4 rounded-b-lg flex flex-col items-center gap-y-2">
          <p className="self-start">
            {_id==="new" ?
              'Secure with a key if you wish to edit the doc later on. Leave empty otherwise.' :
              'Enter key to edit the paste'
            }
          </p>
          <input
            className="p-2 focus:outline-none w-full border border-slate-400 rounded-lg"
            onChange={e => setKey(e.target.value)}
            value={_key}
            type="text"
          />
          <button
            onClick={save}
            className="px-6 py-2 rounded-lg bg-nord10 text-white self-start"
          >
            Save Paste
          </button>
        </div>
      </div>
    </div>
  );
}