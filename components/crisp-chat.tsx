'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('d5f69959-de0c-4b86-9d1a-ba23643577e8')
  }, [])

  return null
}
