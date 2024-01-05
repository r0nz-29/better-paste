import {useQuery} from "../../store/api.tsx";
import {useEffect, useState} from "react";
import {endpoints} from "../../api";
import {useNavigate, useParams} from "react-router-dom";
import {Paste} from "../../types.ts";
import {Loading} from "../../components/loading-modal.tsx";
import Markdown from "react-markdown";

export default function ViewPaste() {
  const {_get} = useQuery();
  const {_id} = useParams();
  const [currPaste, setCurrPaste] = useState<null | Paste>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!_id) return;
    _get<Paste>(endpoints.GET_PASTE_BY_ID(_id))
      .then(p => setCurrPaste(p ?? null));
  }, [_id]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.key === "e" || event.key === "E") && (event.ctrlKey)) {
        event.preventDefault();
        navigate(`/edit/${_id}`);
        return;
      }
    };
    window.addEventListener("keydown", listener);
    return () => removeEventListener("keydown", listener);
  }, []);

  if (!currPaste) return <Loading />

  return (
    <div className="container max-w-3xl bg-white shadow p-8">
      <Markdown className="prose">{currPaste.text}</Markdown>
    </div>
  );
}