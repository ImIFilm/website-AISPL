"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const videoId = "yOrLpUOrVG0"

export function VideoAnnouncementPopup({ locale }: { locale: "pl" | "en" }) {
  const title =
    locale === "pl"
      ? "Obejrzyj pierwszy film o AI Safety po polsku!"
      : "New video: introduction to AI Safety"

  return (
    <Dialog defaultOpen>
      <DialogContent className="gap-5 border-navy/10 bg-background p-4 sm:max-w-2xl sm:p-6">
        <DialogHeader className="pr-8 text-left">
          <DialogTitle className="text-xl leading-tight text-navy sm:text-2xl">
            {title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {locale === "pl"
              ? "Film wprowadzający do bezpieczeństwa sztucznej inteligencji."
              : "An introductory video about AI Safety."}
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video overflow-hidden rounded-md bg-navy">
          <iframe
            className="size-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
