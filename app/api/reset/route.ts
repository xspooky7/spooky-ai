//TODO: Remove this
import { resetFreeTokens } from '@/lib/api-limit'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await resetFreeTokens()
    return new NextResponse('Alles gut', { status: 200 })
  } catch (error) {
    console.log('[RESET_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
