import {useEffect, useState} from "react";
import {useQuery} from "../../store/api.tsx";
import {endpoints} from "../../api";
import {useNavigate, useParams} from "react-router-dom";
import {Paste} from "../../types.ts";
import KeyModal from "../../components/modal.tsx";
import useResizableTextarea from "../../components/resizable-ta.tsx";

export default function EditPaste() {
  const {setText, textareaRef, ResizableTextarea} = useResizableTextarea();
  const [key, setKey] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const {_post, _get, _put} = useQuery();
  const {_id} = useParams();

  async function savePaste() {
    if (!textareaRef.current) return;
    if (_id !== "new") return updatePaste();
    let payload: { text: string, key?: string } = {text: textareaRef.current.value};
    if (_id === "new" && key !== "") payload = {...payload, key};
    _post<Paste>(endpoints.CREATE_PASTE, payload)
      .then(p => {
        if (!p || !p._id) return;
        navigate(`/view/${p._id}`);
      });
  }

  async function updatePaste() {
    if (!textareaRef.current || !_id) return;
    const payload = {text: textareaRef.current.value, key};
    _put<Paste>(endpoints.UPDATE_PASTE_BY_ID(_id), payload)
      .then(p => {
        if (!p || !p._id) return;
        navigate(`/view/${p._id}`);
      });
  }

  useEffect(() => {
    if (!_id || _id === "new") return;
    _get<Paste>(endpoints.GET_PASTE_BY_ID(_id))
      .then(p => {
        if (!p) return;
        setText(p.text);
      });
  }, [_id]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.key === "s" || event.key === "S") && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        if (!showModal) setShowModal(true);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className="container max-w-3xl bg-white shadow p-8">
      {ResizableTextarea}
      {showModal &&
          <KeyModal
              _key={key}
              _id={_id}
              savePaste={savePaste}
              setKey={setKey}
              onClose={() => setShowModal(false)}
          />}
    </div>
  );
}