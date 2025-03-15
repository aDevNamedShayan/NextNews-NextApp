import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import ModalBackDrop from "@/components/NewsDetail/ModalBackDrop/ModalBackDrop";

export default function InterceptedImagePage({ params }) {
  const newsSlug = params.slug
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug) 

  if(!newsItem) notFound()
  
  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}