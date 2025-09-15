'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@/utils/supabase/client'

export default function AuthForm() {
  const supabase = createClient()

  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={[]}
            redirectTo="http://localhost:3000/auth/callback"
        />
    </div>
  )
}