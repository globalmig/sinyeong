import { PORTFOLIO } from "@/data/portfolio";
import GalleryItem from "./GalleryItem";

export default function GalleryList() {
    return (
        <div className="display-flex-flow">
            {PORTFOLIO.map(p=> 
                <GalleryItem data={p} key={p.id}/>
            )}
        </div>
    )
}