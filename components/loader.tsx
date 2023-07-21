import Image from "next/image"

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">

            <Image 
            className="relative animate-wander"
            width={32}
            height={32}
            alt="S"
            src="/logo.png"
            />

            <p className="text-sm text-muted-foreground">
                Spooky-Bot is thinking...
            </p>
        </div>
    )
}