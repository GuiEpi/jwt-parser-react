import React, { useRef, useState } from "react";
import JwtRender from "./JwtRender/JwtRender.jsx";
import JwtEdit from "./JwtEdit/JwtEdit.jsx";

const Encoded = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const ref = useRef(null);
  return (
    <div className={"flex flex-col gap-2 md:w-1/2"}>
      <h2>
        Encoded -{" "}
        <label className={"text-gray-500"} htmlFor="token">
          token
        </label>
      </h2>
      <div className="border border-gray-200 rounded  flex flex-col w-full gap-2 min-h-[40dvh] max-h-[75dvh] ">
        <JwtEdit
          ref={ref}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
        <JwtRender
          refBrother={ref}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
      </div>
    </div>
  );
};

export default Encoded;
