/* eslint-disable @typescript-eslint/no-explicit-any */
import { CldUploadWidget } from "next-cloudinary";
import React from "react";
type TProps = {
  setImageUrl: (url: string) => void;
};

export default function CloudinaryWidget({ setImageUrl }: TProps) {
  const handleSuccess = (results: any) => {
    const uploadedImageUrl = results.info?.url;
    if (uploadedImageUrl) {
      setImageUrl(uploadedImageUrl);
    }
  };
  return (
    <div>
      <CldUploadWidget uploadPreset="kiq7tq73" onSuccess={handleSuccess}>
        {({ open }) => {
          return (
            <button
              type="button"
              className="bg-[#4d79ff] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#3a5ec2] transition-colors"
              onClick={() => open()}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
