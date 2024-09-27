import { Radio } from "antd";
import { useEffect, useState } from "react";
import PrescriptionUpload from "../../components/PrescriptionUpload";
import PrescriptionForm from "../../components/PrescriptionForm";

export default function Customer() {
  const [imageUpload, setImageUpload] = useState(true);
  const [fileList, setFileList] = useState([]);
  return (
    <div className="flex flex-col mx-10 my-32 gap-6">
      <div className="flex flex-row">
        <div className="mx-auto basis-96">
          <Radio.Group
            onChange={() => setImageUpload(!imageUpload)}
            value={imageUpload}
            buttonStyle="solid"
            className="w-full"
          >
            <Radio.Button value={true} className="w-1/2 text-center">
              Upload Image
            </Radio.Button>
            <Radio.Button value={false} className="w-1/2 text-center">
              Fill Manually
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mx-auto">
          {imageUpload ? (
            <div className="flex flex-col items-center gap-2">
              {/* <h1 className="text-2xl font-light">Upload Prescription Image</h1> */}
              <div>
                <PrescriptionUpload
                  fileList={fileList}
                  setFileList={setFileList}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              {/* <h1 className="text-2xl font-light">Fill Form Manually</h1> */}
              <PrescriptionForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
