import { PORTFOLIO } from "@/data/portfolio";
import GalleryItem from "./GalleryItem";

export default function GalleryList() {
    return (
        <div className="flex-between-wrap pc:justify-start pc:gap-7.5">
            {PORTFOLIO.map(p=> 
                <GalleryItem data={p} key={p.id}/>
            )}
        </div>
    )
}