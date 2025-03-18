"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X, CloudUpload } from "lucide-react"; // Cloud Upload icon
import { useDropzone } from "react-dropzone"; // Importing useDropzone for drag-and-drop
import axiosInstance from "@/lib/axiosInstance";

const BrainImgUp = () => {
  const [progress, setProgress] = React.useState<number>(0);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please upload a valid image file.");
      return;
    }

    setErrorMessage(null);
    setSelectedFile(file);
    setProgress(1); // Ensure the progress bar is visible
    setImageUrl(URL.createObjectURL(file)); // Generate preview URL
    simulateUpload();
  };

  const simulateUpload = () => {
    let value = 1; // Start from 1 to make sure it's visible
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 100) {
        clearInterval(interval);
        setProgress(100);
      }
    }, 300);
  };
  const handleUpload = async () => {

    if (!selectedFile) {
      setErrorMessage("No file selected!");
      return;
    }
    alert("Image is successfully uploaded");
    const formData = new FormData();
    formData.append("image", selectedFile);


    try {
      const response = await axiosInstance.post("/checklungcancer", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(`${response.data.message}`);
    } catch (error) {
      console.error("Upload Error:", error);
      console.log("❌ Error: Failed to upload image.");
    }
  };
  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    setProgress(0);
    setErrorMessage(null);
  };

  // Drag-and-drop handlers from useDropzone
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#0D0D1F] mb-20">
      <h2 className="text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#0D0D1F] to-white my-6">
        Upload MRI Scan for Brain Tumor Analysis
      </h2>

      <Card className="w-[750px] h-[550px] mt-2 border-4">
        <CardHeader className="flex flex-col items-center justify-center text-center mt-10">
          <CardTitle>Brain Cancer Prediction</CardTitle>
          <CardDescription>Drop an image or click to upload – let AI do the rest!</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col justify-center items-center flex-grow">
          {/* Image uploader box with drag-and-drop */}
          <Card
            {...getRootProps()}
            className="h-[300px] w-full max-w-md flex flex-col justify-center items-center border-dashed border-2 border-blue-00 mt-8 gap-2 p-4 overflow-hidden relative cursor-pointer"
          >
            {progress < 100 ? (
              <>
                {/* Upload Icon (Replaces "Image Uploader" text) */}
                <CloudUpload className="w-20 h-20 text-white-500" />
                <p className="text-gray-600 text-sm">
                  Drag & drop an image here
                </p>
                <p className="text-gray-600 text-md font-bold">
                  Or
                </p>
                {/* Upload button */}
                <Label htmlFor="picture" className="cursor-pointer flex flex-col items-center justify-center gap-2 p-3 transition-all duration-300 ease-in-out transform hover:scale-105">
                  <button className="px-2 py-2 text-s bg-white text-black rounded-xl hover:bg-gray-300 hover:text-white">
                    Click to upload an image
                  </button>
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...getInputProps()}
                  />
                </Label>

                {/* Error Message */}
                {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

                {/* Selected file name */}
                {selectedFile && <p className="text-sm text-gray-600">{selectedFile.name}</p>}

                {/* Progress Bar with Smooth Wavy Effect */}
                {progress > 0 && (
                  <div className="relative flex flex-col items-center mt-2">
                    <div className="relative w-16 h-16">
                      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                        {/* Background Circle */}
                        <path
                          stroke="#93C5FD"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="100"
                          strokeDashoffset="0"
                          d="M18 2a16 16 0 1 1 0 32A16 16 0 0 1 18 2"
                        />
                        {/* Progress Circle */}
                        <path
                          stroke="#2563EB"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="100"
                          strokeDashoffset={`${100 - progress}`}
                          strokeLinecap="round"
                          d="M18 2a16 16 0 1 1 0 32A16 16 0 0 1 18 2"
                        />
                      </svg>

                      {/* Smooth Wavy Effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <defs>
                            <mask id="wave-mask">
                              <rect width="36" height="36" fill="white" />
                              <path
                                fill="black"
                                d={`M 0 ${36 - (progress / 100) * 36} 
                                   Q 9 ${32 - (progress / 100) * 36}, 18 ${36 - (progress / 100) * 36}
                                   Q 27 ${40 - (progress / 100) * 36}, 36 ${36 - (progress / 100) * 36}
                                   L 36 36 L 0 36 Z`}
                              >
                                {/* Smooth Wave Animation */}
                                <animateTransform
                                  attributeType="XML"
                                  attributeName="transform"
                                  type="translate"
                                  values="0,2; 0,-2; 0,2"
                                  dur="1.5s"
                                  repeatCount="indefinite"
                                />
                              </path>
                            </mask>
                          </defs>
                          <circle cx="18" cy="18" r="16" fill="#3B82F6" mask="url(#wave-mask)">
                            <animateTransform
                              attributeType="XML"
                              attributeName="transform"
                              type="translate"
                              values="0,1; 0,-1; 0,1"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>

                      {/* Progress Percentage */}
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                        {progress}%
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              // Image Preview
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-600 transition"
                  onClick={handleRemoveImage}
                >
                  <X size={16} />
                </button>
                {/* Image */}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Uploaded Preview"
                    className="max-h-[260px] max-w-full object-contain"
                  />
                )}
              </div>
            )}
          </Card>
        </CardContent>
      </Card>
      <button onClick={handleUpload} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Upload Image
      </button>
    </div>
  );
};

export default BrainImgUp;
