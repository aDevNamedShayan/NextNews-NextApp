import { notFound } from "next/navigation";

import ModalBackDrop from "@/components/NewsDetail/ModalBackDrop/ModalBackDrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {
  const newsSlug = params.slug
  const newsItem = await getNewsItem(newsSlug)

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