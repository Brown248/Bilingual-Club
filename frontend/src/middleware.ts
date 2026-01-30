import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: '/admin/:path*',
}

export function middleware(request: NextRequest) {
  // 1. ลองขอกุญแจจาก Cookie
  const token = request.cookies.get('access_token')?.value

  // 2. ถ้าไม่มีกุญแจ และพยายามเข้าหน้า Admin
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    // 3. ดีดกลับไปหน้า Login ทันที
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 4. ถ้ามีกุญแจ เชิญผ่านได้
  return NextResponse.next()
}