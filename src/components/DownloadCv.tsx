import { Download } from "lucide-react";
import React from "react";

export default function DownloadCv({ resumeUrl }: { resumeUrl: string }) {
  return (
    <a href={resumeUrl} target="_blank" className="bg-[#4d79ff] px-8 py-3 rounded-full hover:bg-[#3a5ec2] transition-colors mb-8">
      DownloadCV <Download className="ml-4" />
    </a>
  );
}
