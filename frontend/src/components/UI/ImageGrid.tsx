import { useState, useEffect } from "react";

interface ImageGridProps {
    count: number;
    width: number;
    height: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ count, width, height }) => {
    const [imageList, setImageList] = useState<string[]>([]);
    const images = import.meta.glob("/src/assets/header_imgs/*.jpg");

    useEffect(() => {
        Promise.all(
            Object.values(images).map((importImage: any) =>
                importImage().then((mod: any) => mod.default)
            )
        ).then(setImageList);
    }, []);

    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {imageList.slice(0, count).map((imagePath, i) => {
                return (
                    <div
                        key={i}
                        className={`rounded-md w-${width} h-${height} bg-cover bg-center`}
                        style={{ backgroundImage: `url(${imagePath})` }}
                    ></div>
                );
            })}
        </div>
    );
};

export default ImageGrid;
