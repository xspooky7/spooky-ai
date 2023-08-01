'use client'

import { useState, useEffect } from 'react'
import ProModal from './pro-modal'

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <ProModal />
}
