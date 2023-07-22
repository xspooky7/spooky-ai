'use client'
import { useEffect, useState } from "react"
import { BotAvatar } from "./bot-avatar"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

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
        <div key={message} className={"lg:p-8 p-5 w-full flex lg:flex-row flex-col items-start gap-8 rounded-lg bg-muted"}>
            <BotAvatar/>
                <ReactMarkdown
                components={{
                    pre: ({node, ...props}) => (
                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                            <pre {...props}/>
                        </div>
                    ),
                    code: ({ node, ...props }) => (
                        <code className="bg-black/10 rounded-lg p-1" {...props}/>
                    )

                    
                }} className="text-sm overflow-hidden leading-7">
                {displayResponse}
                    </ReactMarkdown>
                    
                

        </div>
    )
}