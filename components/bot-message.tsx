'use client'
import { useEffect, useState } from "react"
import { BotAvatar } from "./bot-avatar"

interface BotMessageProps {
    message: string
}

export const BotMessage = ({ message }: BotMessageProps) => {
    const [completedTyping, setCompletedTyping] = useState(true)
    const [displayResponse, setDisplayResponse] = useState('')

    useEffect(() => {
        setCompletedTyping(false)
      
        let i = 0
      
        const intervalId = setInterval(() => {
            
            const formattedChars = message.slice(0, i)
            setDisplayResponse(formattedChars)
      
            i++

            if (i > message.length) {
                clearInterval(intervalId)
                setCompletedTyping(true)
            }
            }, Math.min(20, 10000/message.length));
        return () => clearInterval(intervalId)
      }, [])

    return (
        <div key={message} className={"p-8 w-full flex items-start gap-x-8 rounded-lg bg-muted"}>
            <BotAvatar/>
            <p className="text-sm">
                {displayResponse}
                {!completedTyping && (
                    <svg
                        viewBox="8 4 8 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-[1ch] mb-1 animate-flicker"
                    >
                        <rect x="10" y="6" width="4" height="12" fill="#000" />
                    </svg>
                )}
            </p>
        </div>
    )
}