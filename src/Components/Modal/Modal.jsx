import axios from "axios";
import React, { createRef } from "react";
import { FaUpload } from "react-icons/fa";

const Modal = ({ singleCard }) => {
  const fileInputRef = createRef();

  const handleIconClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = async (event) => {
    const selectedFile = event?.target?.files[0];
    const file = selectedFile.name;
    try {
      await axios.patch(`http://localhost:3000/single_attachment/${singleCard.id}?fileText=${file}`);
    } catch (error) {
      console.error("Error sending file name to the backend:", error);
    }
  };

  return (
    <dialog id={"my_modal_4"} className="modal">
      <div className="modal-box w-11/12 max-w-5xl scrollbar scrollbar-thumb-sky-600">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg py-2 block">{singleCard?.name}</h3>
          <form>
            <label
              htmlFor="fileInput"
              className="h-12 w-12 bg-gray-200 cursor-pointer rounded-full flex items-center justify-center"
            >
              <FaUpload className="w-[50%] h-[50%]" onClick={handleIconClick} />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </form>
        </div>
        <div>
          <ul>
            {singleCard?.attatchfiles.map((single_attatch_file) => {
              const [baseName, extension] = single_attatch_file.split(".");
              return (
                <li key={single_attatch_file} className="py-3 text-base text-gray-800 font-medium">
                  {`${baseName}.${extension}`}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
