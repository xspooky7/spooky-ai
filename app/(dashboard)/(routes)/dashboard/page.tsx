'use client'

import { Card } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import axios from 'axios'
import {
  ArrowRightIcon,
  CodeIcon,
  DatabaseIcon,
  ImageIcon,
  MessageSquareIcon,
  MusicIcon,
  VideoIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

const DashboardPage = () => {
  const router = useRouter()

  const tools = [
    {
      label: 'Conversation',
      icon: MessageSquareIcon,
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      href: '/conversation',
    },
    {
      label: 'Music Generation',
      icon: MusicIcon,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      href: '/music',
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: 'text-pink-700',
      bgColor: 'bg-pink-700/10',
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: 'text-orange-700',
      bgColor: 'bg-orange-700/10',
      href: '/video',
    },
    {
      label: 'Code Generation',
      icon: CodeIcon,
      color: 'text-green-700',
      bgColor: 'bg-green-700/10',
      href: '/code',
    },
  ]

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl text-center md:text-4xl font-bold">
          AI Toolbox
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Most useful AI models bundled in one toolbox
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map(tool => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRightIcon className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
