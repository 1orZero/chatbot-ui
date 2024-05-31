"use client"

import Link from "next/link"
import { FC } from "react"

export const Brand: FC = () => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-4xl font-bold tracking-wide">Veraze Chatbot</div>
    </Link>
  )
}
