import Image from "next/image";
import Link from "next/link";
interface GalleryItemProps {
    data: {
        id: number;
        name: string;
        img: string[];
    };
}

export default function GalleryItem({ data }: GalleryItemProps) {

    const thumbnail = data.img[0];

    return (
        <section className="w-[48%] my-7.5 md:w-69">
            <Link href={`/gallery/${data.id}`}>
                <div>
                    <Image className="w-full h-auto" src={thumbnail} alt={data.name} width={1000} height={600} />
                </div>
                <h4 className="relative mt-3 md:mt-5 md:after:-bottom-3.75 md:text-[1.2rem]
            after:absolute after:content-[''] after:w-6.25 after:h-0.75
            after:bg-blue-dark after:left-1/2 after:-bottom-2.5 after:-translate-x-1/2">
                    {data.name}
                </h4>
            </Link>
        </section>
    );
}
