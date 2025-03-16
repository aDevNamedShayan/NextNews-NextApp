'use client'

import { useRouter } from "next/navigation"

export default function ModalBackDrop() {
  const router = useRouter()

  function HandleBackDropClick() {
    router.back()
  }
  return <div className="modal-backdrop" onClick={HandleBackDropClick}/>
}