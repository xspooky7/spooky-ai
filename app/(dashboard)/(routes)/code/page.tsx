'use client'

import * as z from 'zod'
import Heading from '@/components/heading'
import { CodeIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useState } from 'react'
import { ChatCompletionRequestMessage } from 'openai'
import { Empty } from '@/components/empty'
import { Loader } from '@/components/loader'
import { UserAvatar } from '@/components/user-avatar'
import { BotMessage } from '@/components/bot-message'
import { useProModal } from '@/hooks/use-pro-modal'
import { toast } from 'react-hot-toast'

const CodePage = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]
      const response = await axios.post('/api/code', {
        messages: newMessages,
      })
      setMessages(current => [...current, userMessage, response.data])
      form.reset()
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen()
      } else {
        toast.error('Something went wrong')
      }
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate code using descriptive prompts"
        icon={CodeIcon}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6
                        focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="placeholder"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="w-full col-span-12 lg:col-span-2"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div
              className="p-8 rounded-lg w-full flex items-center
                        justify-center bg-muted"
            >
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started yet." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map(message => {
              if (message.role === 'user') {
                return (
                  <div
                    key={message.content}
                    className="lg:p-8 p-5 w-full flex lg:flex-row flex-col items-start gap-8
                                    rounded-lg bg-white border border-black/10"
                  >
                    <UserAvatar />
                    <p className="text-sm">{message.content}</p>
                  </div>
                )
              } else {
                return (
                  <BotMessage
                    key={message.content!}
                    message={message.content!}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodePage
