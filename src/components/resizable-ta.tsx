import {useEffect, useRef, useState} from "react";

export default function useResizableTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState("auto");
  const [text, setText] = useState("");

  useEffect(() => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;
    setHeight("auto");
    setHeight(`${textarea.scrollHeight}px`);
  }, [text]);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.focus();
  }, [textareaRef.current]);

  const ResizableTextarea = <textarea
    value={text}
    onChange={e => setText(e.target.value)}
    className="w-full focus:outline-none"
    style={{height}}
    placeholder="start typing..."
    ref={textareaRef}
    rows={4}
  />;

  return {
    setText,
    textareaRef,
    ResizableTextarea
  };
}