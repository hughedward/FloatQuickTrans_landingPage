import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/repos/hughedward/FloatQuickTrans', {
      next: { revalidate: 3600 } // 每小时重新验证一次
    })
    const data = await response.json()
    return NextResponse.json({ stars: data.stargazers_count })
  } catch (error) {
    return NextResponse.json({ stars: 0 }, { status: 500 })
  }
}