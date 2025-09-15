'use client'
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else if (data.user && data.user.identities && data.user.identities.length === 0) {
      // This is the case for an existing, confirmed user
      setMessage("This email is already registered. Please use the 'Sign in' button.");
    } else {
      // This is the case for a new user
      setMessage("Confirmation link sent! Please check your email.");
    }
  }

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>SignSetu Project</CardTitle>
          <CardDescription>Sign in or create an account to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {message && <p className="text-sm font-medium text-destructive">{message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleSignUp}>Sign up</Button>
          <Button onClick={handleSignIn}>Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  )
}