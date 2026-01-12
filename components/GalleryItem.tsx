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
        <section>
            <div>
                <Image src={thumbnail} alt={data.name} width={300} height={200} />
            </div>
            <h3><Link href={`/gallery/${data.id}`}>{data.name}</Link></h3>
        </section>
    );
}
