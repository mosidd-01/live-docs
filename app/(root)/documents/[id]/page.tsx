import Header from "@/components/Header";
import { Editor } from "@/components/editor/Editor";
import { PhoneCall } from "lucide-react";
import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Test Title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
