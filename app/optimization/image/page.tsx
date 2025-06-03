import Image from "next/image";
import nature from "@/public/images/nature.jpg";

const ImageOptimizationPage = () => {
  return (
    <div className="relative h-screen">
      <h2>Image Optimization</h2>
      <Image
        src="https://bit.ly/react-cover"
        alt="react-cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100}
        priority
      />

      {/*
      <Image
        src="https://bit.ly/react-cover"
        alt="react-cover"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <Image
        src="https://bit.ly/react-cover"
        alt="react-cover"
        fill
        style={{ objectFit: "cover" }}
      />
     
      <Image src="https://bit.ly/react-cover" alt="react-cover" fill={true} />
      <Image
        src="https://bit.ly/react-cover"
        alt="react-cover"
        width={300}
        height={170}
      />
      <Image src={nature} alt="Nature" /> */}
    </div>
  );
};

export default ImageOptimizationPage;
